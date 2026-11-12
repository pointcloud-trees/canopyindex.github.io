#!/usr/bin/env node
// Weekly scan for new LiDAR tree-structure methods that aren't yet in src/lib/methods.ts.
//
// Sources:
//   - GitHub repository search, restricted to repos created/pushed since the last scan
//   - arXiv (recent preprints; GitHub links in abstract/comments become repo candidates)
//   - Crossref (recent journal articles; GitHub links in abstracts become repo candidates)
//
// Outputs (all go into a PR for human review — nothing is merged automatically):
//   - NEW_METHOD_CANDIDATES.md   full report, incl. papers that have no linked code
//   - src/lib/methods.ts         DRAFT entries for the most relevant repo candidates,
//                                inside a clearly marked block, with TODO comments on
//                                every field that was guessed rather than read from a
//                                verified source
//   - scripts/scan-state.json    last scan date + every repo/paper already reported,
//                                so each candidate is shown once
//
// Repos listed in scripts/ignored-repos.txt are never reported.
//
// Metadata rules: paper/authors/year are only filled from a DOI that resolves on Crossref
// or an arXiv id that resolves on arXiv. A DOI is never guessed. When no paper is found,
// authors fall back to the GitHub owner's profile name and are flagged TODO.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const path = (p) => fileURLToPath(new URL(p, import.meta.url));
const METHODS_FILE = path("../src/lib/methods.ts");
const OUTPUT_FILE = path("../NEW_METHOD_CANDIDATES.md");
const STATE_FILE = path("./scan-state.json");
const IGNORE_FILE = path("./ignored-repos.txt");

const GITHUB_QUERIES = [
  "lidar tree structure",
  "TLS QSM",
  "point cloud tree segmentation",
  "leaf wood classification point cloud",
  "leaf wood separation",
  "DBH point cloud",
  "individual tree detection lidar",
  "individual tree segmentation",
  "quantitative structure model tree",
  "terrestrial laser scanning tree",
  "forest point cloud",
  "tree crown segmentation lidar",
  "tree skeleton point cloud",
  "canopy height model individual tree",
  "stem detection point cloud",
  "forest inventory lidar",
];

const ARXIV_QUERY =
  '(abs:lidar OR abs:"laser scanning" OR abs:"point cloud" OR abs:"point clouds") AND ' +
  "(abs:tree OR abs:trees OR abs:forest OR abs:canopy)";

const CROSSREF_QUERIES = [
  "terrestrial laser scanning tree point cloud",
  "lidar individual tree segmentation point cloud",
  "quantitative structure model tree point cloud",
  "leaf wood separation point cloud",
  "stem diameter estimation lidar point cloud",
];

const DEFAULT_LOOKBACK_DAYS = 120; // first run (no state file yet)
const OVERLAP_DAYS = 7; // re-check a week before the last scan; "seen" dedups
const GITHUB_PER_PAGE = 30;
const MAX_DRAFTS = 20;
const MAX_LOW_RELEVANCE = 40;
const MAX_REPORTED_PAPERS = 30;
const SEARCH_DELAY_MS = Number(process.env.SCAN_DELAY_MS ?? 2500);
const USER_AGENT = "canopy-method-scan/2.0";

const DRAFT_MARKER = "  // ---- AUTO-DRAFTED";
const QUEUED = "queued from an earlier scan";

// ---------------------------------------------------------------------------
// Relevance
// ---------------------------------------------------------------------------

// Phrases where "tree"/"forest" don't mean actual trees.
const FALSE_FRIENDS =
  /\b(k-?d[- ]?trees?|octrees?|quadtrees?|r-?trees?|b-?trees?|decision[- ]trees?|random[- ]forests?|isolation[- ]forests?|tree[- ]based|ensemble[- ]trees?|gradient[- ]boost\w*|syntax[- ]trees?|merkle[- ]trees?|spanning[- ]trees?|tree[- ]search)\b/gi;
const DOMAIN =
  /\b(trees?|forest\w*|canopy|canopies|stems?|trunks?|dbh|crowns?|branch\w*|qsm|leaf|leaves|wood\w*|dendro\w*|vegetation|silvi\w*|orchard\w*)\b/i;
const SENSING =
  /\b(lidar|laser|point[- ]?clouds?|tls|mls|als|uls|uav[- ]?lidar|3d|scan\w*|slam|photogrammetr\w*)\b/i;

function relevanceText(...parts) {
  return parts.filter(Boolean).join(" ").replace(FALSE_FRIENDS, " ");
}

function isRelevant(text) {
  return DOMAIN.test(text) && SENSING.test(text);
}

const PROPERTY_RULES = [
  ["stem-diameter", /\b(dbh|diameter|stem\w*|trunk|circle[- ]fit\w*|dendrometr\w*)\b/i],
  ["height-crown", /\b(height|crowns?|canopy|chm)\b/i],
  [
    "qsm-branches-biomass",
    /\b(qsm|quantitative structure|skeleton\w*|branch\w*|biomass|volume|reconstruct\w*|cylinder)\b/i,
  ],
  [
    "leaf-wood",
    /\b(leaf[- ]wood|wood[- ]leaf|leaf|leaves|foliage|wood separation|wood classification)\b/i,
  ],
  [
    "tree-stem-detection",
    /\b(segment\w*|individual tree|tree detection|stem detection|instance|isolation|delineat\w*|inventory)\b/i,
  ],
];

const INPUT_RULES = [
  ["TLS", /\b(tls|terrestrial)\b/i],
  ["MLS", /\b(mls|mobile|backpack|handheld|slam)\b/i],
  ["ULS", /\b(uls|uav|drone|unmanned aerial)\b/i],
  ["ALS", /\b(als|airborne)\b/i],
  ["Photogrammetry", /\b(photogrammetr\w*|structure[- ]from[- ]motion|sfm)\b/i],
];

const infer = (rules, text) => rules.filter(([, re]) => re.test(text)).map(([tag]) => tag);

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function http(url, { headers = {}, json = true, retries = 2 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    let res;
    try {
      res = await fetch(url, { headers: { "User-Agent": USER_AGENT, ...headers } });
    } catch (err) {
      if (attempt === retries) {
        console.error(`Request failed: ${url}: ${err.message}`);
        return null;
      }
      await sleep(3000);
      continue;
    }
    if (res.ok) return json ? res.json() : res.text();
    if (res.status === 404) return null;
    const retryable = res.status === 403 || res.status === 429 || res.status >= 500;
    if (!retryable || attempt === retries) {
      console.error(`HTTP ${res.status} for ${url}`);
      return null;
    }
    const reset = Number(res.headers.get("x-ratelimit-reset"));
    const retryAfter = Number(res.headers.get("retry-after"));
    const waitMs = retryAfter
      ? retryAfter * 1000
      : reset
        ? Math.min(Math.max(reset * 1000 - Date.now(), 1000) + 1000, 65_000)
        : 5000;
    console.error(`HTTP ${res.status} for ${url}, retrying in ${Math.round(waitMs / 1000)}s`);
    await sleep(waitMs);
  }
  return null;
}

function githubHeaders(token, accept = "application/vnd.github+json") {
  return { Accept: accept, ...(token ? { Authorization: `Bearer ${token}` } : {}) };
}

// ---------------------------------------------------------------------------
// State / existing catalog
// ---------------------------------------------------------------------------

function loadState() {
  if (!existsSync(STATE_FILE))
    return { lastScan: null, seenRepos: [], seenPapers: [], backlog: [] };
  const s = JSON.parse(readFileSync(STATE_FILE, "utf8"));
  return {
    lastScan: s.lastScan ?? null,
    seenRepos: s.seenRepos ?? [],
    seenPapers: s.seenPapers ?? [],
    backlog: s.backlog ?? [],
  };
}

function loadIgnored() {
  if (!existsSync(IGNORE_FILE)) return new Set();
  return new Set(
    readFileSync(IGNORE_FILE, "utf8")
      .split(/\r?\n/)
      .map((l) => l.replace(/#.*/, "").trim().toLowerCase())
      .filter(Boolean),
  );
}

function loadCatalog() {
  const content = readFileSync(METHODS_FILE, "utf8");
  const repos = new Set();
  const ids = new Set();
  const papers = new Set();
  for (const m of content.matchAll(/repo:\s*"https:\/\/github\.com\/([^"/]+\/[^"/]+?)\/?"/g)) {
    repos.add(m[1].toLowerCase());
  }
  for (const m of content.matchAll(/\bid:\s*"([^"]+)"/g)) ids.add(m[1]);
  for (const m of content.matchAll(/paper:\s*"([^"]+)"/g)) papers.add(normalizePaperKey(m[1]));
  return { content, repos, ids, papers };
}

function normalizePaperKey(urlOrId) {
  const s = urlOrId.trim().toLowerCase();
  const doi = s.match(/10\.\d{4,9}\/\S+/);
  if (doi) {
    const arx = doi[0].match(/^10\.48550\/arxiv\.(.+)$/);
    return arx ? `arxiv:${arx[1].replace(/v\d+$/, "")}` : `doi:${doi[0]}`;
  }
  const arxiv = s.match(/arxiv\.org\/(?:abs|pdf)\/([^\s?#]+?)(?:v\d+)?(?:\.pdf)?$/);
  if (arxiv) return `arxiv:${arxiv[1]}`;
  return s;
}

// ---------------------------------------------------------------------------
// GitHub
// ---------------------------------------------------------------------------

async function searchGitHub(query, qualifier, token) {
  const q = `${query} fork:false archived:false ${qualifier}`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=updated&order=desc&per_page=${GITHUB_PER_PAGE}`;
  const data = await http(url, { headers: githubHeaders(token) });
  return data?.items ?? [];
}

const getRepo = (slug, token) =>
  http(`https://api.github.com/repos/${slug}`, { headers: githubHeaders(token) });

const getReadme = (slug, token) =>
  http(`https://api.github.com/repos/${slug}/readme`, {
    headers: githubHeaders(token, "application/vnd.github.raw"),
    json: false,
    retries: 0,
  });

const getUser = (login, token) =>
  http(`https://api.github.com/users/${login}`, { headers: githubHeaders(token) });

function repoToCandidate(item, source) {
  return {
    slug: item.full_name.toLowerCase(),
    fullName: item.full_name,
    url: item.html_url,
    repoName: item.name,
    owner: item.owner?.login ?? "",
    ownerType: item.owner?.type ?? "User",
    description: (item.description ?? "").trim(),
    topics: item.topics ?? [],
    stars: item.stargazers_count ?? 0,
    language: item.language ?? "unknown",
    license: item.license?.spdx_id ?? "none",
    homepage: item.homepage || "",
    created: item.created_at?.slice(0, 10) ?? "unknown",
    pushed: item.pushed_at?.slice(0, 10) ?? "unknown",
    fork: item.fork,
    archived: item.archived,
    sources: new Set([source]),
    paper: null, // { url, title, authors: string[], year, venue }
  };
}

const GITHUB_URL_RE = /github\.com\/([A-Za-z0-9-]+)\/([A-Za-z0-9_.-]+)/g;

function extractGithubSlugs(text) {
  const out = new Set();
  for (const m of (text ?? "").matchAll(GITHUB_URL_RE)) {
    const repo = m[2].replace(/\.git$/, "").replace(/[.,;:)]+$/, "");
    if (!repo || ["orgs", "topics", "features", "sponsors"].includes(m[1].toLowerCase())) continue;
    out.add(`${m[1]}/${repo}`.toLowerCase());
  }
  return [...out];
}

// ---------------------------------------------------------------------------
// Papers: arXiv + Crossref
// ---------------------------------------------------------------------------

function decodeXml(s) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function parseArxivFeed(xml) {
  const entries = [];
  for (const [, body] of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const tag = (name) => {
      const m = body.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
      return m ? decodeXml(m[1]) : "";
    };
    const idUrl = tag("id");
    const id = idUrl.replace(/^https?:\/\/arxiv\.org\/abs\//, "").replace(/v\d+$/, "");
    entries.push({
      key: `arxiv:${id}`,
      url: `https://arxiv.org/abs/${id}`,
      title: tag("title"),
      abstract: tag("summary"),
      comment: tag("arxiv:comment"),
      published: tag("published").slice(0, 10),
      year: Number(tag("published").slice(0, 4)) || null,
      authors: [...body.matchAll(/<author>\s*<name>([\s\S]*?)<\/name>/g)].map((m) =>
        decodeXml(m[1]),
      ),
      venue: "arXiv",
    });
  }
  return entries;
}

async function searchArxiv(since) {
  const url =
    "https://export.arxiv.org/api/query?search_query=" +
    encodeURIComponent(ARXIV_QUERY) +
    "&sortBy=submittedDate&sortOrder=descending&max_results=100";
  const xml = await http(url, { json: false });
  if (!xml) return [];
  return parseArxivFeed(xml).filter((e) => e.published >= since);
}

async function arxivById(id) {
  const xml = await http(`https://export.arxiv.org/api/query?id_list=${encodeURIComponent(id)}`, {
    json: false,
  });
  if (!xml) return null;
  const [entry] = parseArxivFeed(xml);
  return entry && entry.title && !/^error$/i.test(entry.title) ? entry : null;
}

function crossrefToPaper(w) {
  const title = (w.title?.[0] ?? "").replace(/<[^>]+>/g, "").trim();
  const dateParts = (w.published ?? w["published-print"] ?? w["published-online"] ?? w.created)?.[
    "date-parts"
  ]?.[0];
  const authors = (w.author ?? []).map((a) => a.family || a.name || "").filter(Boolean);
  return {
    key: `doi:${w.DOI.toLowerCase()}`,
    url: `https://doi.org/${w.DOI}`,
    title,
    abstract: (w.abstract ?? "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
    comment: "",
    published: dateParts ? dateParts.map((n) => String(n).padStart(2, "0")).join("-") : "",
    year: dateParts?.[0] ?? null,
    authors,
    venue: w["container-title"]?.[0] ?? "",
  };
}

async function searchCrossref(query, since) {
  const url =
    "https://api.crossref.org/works?query.bibliographic=" +
    encodeURIComponent(query) +
    `&filter=from-pub-date:${since},type:journal-article&rows=40` +
    "&select=DOI,title,author,published,published-print,published-online,created,container-title,abstract";
  const data = await http(url);
  return (data?.message?.items ?? []).filter((w) => w.DOI).map(crossrefToPaper);
}

async function crossrefByDoi(doi) {
  const data = await http(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
    retries: 1,
  });
  return data?.message?.DOI ? crossrefToPaper(data.message) : null;
}

const DOI_RE = /(?:doi\.org\/|doi:\s*)(10\.\d{4,9}\/[^\s"'<>\])}]+)/gi;
const ARXIV_RE = /arxiv\.org\/(?:abs|pdf)\/(\d{4}\.\d{4,5})/gi;

// Words too generic to identify a method by name.
const GENERIC_NAME_WORDS = new Set(
  `plugin python code main master tool tools toolbox tree trees forest forests lidar point points
  cloud clouds pointcloud segmentation segment model models data dataset package library analysis
  pipeline official implementation canopy canopies crown crowns stem stems trunk leaf leaves wood
  instance semantic showcase demo filter synth synthetic detection detector classification
  estimation inventory individual deep learning network networks benchmark project scan scanning
  laser terrestrial airborne mobile metrics height volume biomass structure skeleton graph
  processing urban based method methods paper repo extraction reconstruction 2d3d`.split(/\s+/),
);

// True when the paper title names the repo, e.g. repo "WDTS" / title "WDTS: Water droplet...".
// wholeNameOnly: require the full repo name, not just one distinctive word of it.
function titleNamesRepo(title, repoName, { wholeNameOnly = false } = {}) {
  const words = title
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
  const whole = repoName.toLowerCase().replace(/[^a-z0-9]+/g, "");
  // Whole name must line up with word boundaries: "WDTS" or "Select Any Tree" match
  // repo WDTS / SelectAnyTree, but "ArborSplat" doesn't match repo arbor.
  if (whole.length >= 4 && !GENERIC_NAME_WORDS.has(whole)) {
    for (let i = 0; i < words.length; i++) {
      for (let k = 1; k <= 4 && i + k <= words.length; k++) {
        if (words.slice(i, i + k).join("") === whole) return true;
      }
    }
  }
  if (wholeNameOnly) return false;
  return repoName
    .split(/[^A-Za-z0-9]+/)
    .map((w) => w.toLowerCase())
    .some((w) => w.length >= 4 && !GENERIC_NAME_WORDS.has(w) && words.includes(w));
}

// Find the paper a repo's README cites, verified against Crossref / arXiv.
// Prefers a verified, on-topic citation whose title names the repo (matched: true).
// Otherwise returns the first verified on-topic citation with matched: false, which is
// flagged TODO, because READMEs also cite dependencies and related work.
async function findVerifiedPaper(readme, repoName) {
  if (!readme) return null;
  const dois = [...new Set([...readme.matchAll(DOI_RE)].map((m) => m[1].replace(/[.,;:]+$/, "")))];
  const arxivIds = [...new Set([...readme.matchAll(ARXIV_RE)].map((m) => m[1]))];
  const found = [];
  const named = () => found.find((p) => titleNamesRepo(p.title, repoName));
  for (const doi of dois.slice(0, 6)) {
    const arx = doi.match(/^10\.48550\/arxiv\.(.+)$/i);
    const paper = arx ? await arxivById(arx[1]) : await crossrefByDoi(doi);
    if (arx) await sleep(3000); // arXiv asks for >= 3s between calls
    if (paper && isRelevant(relevanceText(paper.title, paper.abstract))) found.push(paper);
    if (named()) break;
  }
  if (!named()) {
    for (const id of arxivIds.slice(0, 3)) {
      if (found.some((p) => p.key === `arxiv:${id}`)) continue;
      const paper = await arxivById(id);
      await sleep(3000);
      if (paper && isRelevant(relevanceText(paper.title, paper.abstract))) found.push(paper);
      if (named()) break;
    }
  }
  const hit = named();
  if (hit) return { ...hit, matched: true, how: "cited in README, title names the repo" };
  return found[0]
    ? { ...found[0], matched: false, how: "first on-topic paper cited in README" }
    : null;
}

// ---------------------------------------------------------------------------
// Drafting methods.ts entries
// ---------------------------------------------------------------------------

function formatAuthors(surnames) {
  if (surnames.length === 0) return "";
  return surnames.length === 1 ? surnames[0] : `${surnames[0]} et al.`;
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function uniqueId(base, taken) {
  let id = base || "method";
  for (let i = 2; taken.has(id); i++) id = `${base}-${i}`;
  taken.add(id);
  return id;
}

function truncate(s, n) {
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "") + "…";
}

const q = (s) => JSON.stringify(s);

function renderDraft(c, id) {
  const text = relevanceText(
    c.repoName,
    c.description,
    c.topics.join(" "),
    c.paper?.title,
    c.paper?.abstract,
  );
  const properties = infer(PROPERTY_RULES, text);
  const inputs = infer(INPUT_RULES, text);
  const license =
    c.license && c.license !== "NOASSERTION" && c.license !== "none" ? c.license : "Unknown";

  let authors;
  let authorsNote;
  if (c.paper?.authors?.length) {
    authors = formatAuthors(c.paper.authors.map((a) => a.split(/\s+/).pop()));
    authorsNote = c.paper.matched
      ? "from paper metadata"
      : "TODO verify: from a paper that may not be this method's";
  } else {
    authors = c.ownerName || c.owner;
    authorsNote = `TODO verify: GitHub ${c.ownerType === "Organization" ? "organization" : "owner"} name, no paper found`;
  }

  const summarySource = c.description || c.paper?.title || "";
  const lines = [
    "  {",
    `    id: ${q(id)},`,
    `    name: ${q(c.repoName)},`,
    `    authors: ${q(authors)}, // ${authorsNote}`,
    `    summary: ${q(truncate(summarySource, 220))}, // TODO rewrite: copied from ${c.description ? "repo description" : "paper title"}`,
    `    repo: ${q(c.url)},`,
  ];
  if (
    c.homepage &&
    /^https?:\/\//.test(c.homepage) &&
    !c.homepage.includes("github.com/" + c.fullName)
  ) {
    lines.push(`    homepage: ${q(c.homepage)},`);
  }
  if (c.paper) {
    const note = c.paper.matched ? "resolves" : "TODO verify, may be the wrong paper";
    lines.push(
      `    paper: ${q(c.paper.url)}, // ${note} (${c.paper.how}): ${q(truncate(c.paper.title, 80))}`,
    );
  }
  lines.push(
    `    language: ${q(c.language === "unknown" ? "Unknown" : c.language)},`,
    `    license: ${q(license)},${license === "Unknown" ? " // TODO verify: check LICENSE file in repo" : ""}`,
    `    properties: ${q(properties)}, // TODO verify: inferred from keywords`,
    `    inputs: ${q(inputs)}, // TODO verify: inferred from keywords`,
    `    year: ${c.paper?.year ?? Number(c.created.slice(0, 4))}, // ${c.paper?.year ? (c.paper.matched ? "paper year" : "TODO verify: paper year") : "TODO verify: repo creation year"}`,
    "  },",
  );
  return lines.join("\n");
}

function writeDrafts(catalogContent, drafts, date) {
  // Appends a new block; never removes anything already in the file. Drafted repos are
  // recorded in scan-state.json, so an unmerged PR's drafts are regenerated from main,
  // and merged ones are skipped as already in the catalog.
  if (drafts.length === 0) return;
  const base = catalogContent;
  const end = base.lastIndexOf("\n];");
  if (end === -1) throw new Error("Could not find end of METHODS array in methods.ts");
  const block = [
    `${DRAFT_MARKER} by scripts/scan-new-methods.mjs (scan: ${date}) ----`,
    "  // Unverified. For each entry: check every field against the repo and paper, fix or",
    "  // remove the TODO comments, and delete entries that don't belong (add their repo to",
    "  // scripts/ignored-repos.txt so they're never suggested again). Delete these marker",
    "  // comments before merging.",
    ...drafts,
    "  // ---- END AUTO-DRAFTED ----",
  ].join("\n");
  writeFileSync(METHODS_FILE, `${base.slice(0, end)}\n${block}${base.slice(end)}`);
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

function renderReport({ date, since, drafted, backlog, lowRelevance, papersNoCode }) {
  const lines = [
    `# New method candidates (scan: ${date})`,
    "",
    `Scan window: repos created or pushed, and papers published, since **${since}**.`,
    "Sources: GitHub search, arXiv, Crossref. Each candidate is reported once",
    "(tracked in `scripts/scan-state.json`); repos in `scripts/ignored-repos.txt` are skipped.",
    "",
    "**Everything here is unverified.** The draft entries in `src/lib/methods.ts` are a",
    "starting point, not catalog data. Before merging:",
    "- Confirm the repo is real, maintained, and matches the stated description.",
    "- Check the license in the repo itself (search-result metadata can be wrong or missing).",
    "- Paper links were only filled from DOIs/arXiv ids that resolved and look on-topic. Ones",
    "  marked unsure / TODO may be a related paper rather than this method's. Never guess a DOI.",
    "- Verify author names against the paper or package metadata — never invent one.",
    "- Delete drafts that don't belong and add their repo to `scripts/ignored-repos.txt`.",
    "",
  ];

  const repoBlock = (c) => {
    lines.push(`### [${c.fullName}](${c.url})`, "");
    lines.push(
      `- **Stars:** ${c.stars} · **Language:** ${c.language} · **License:** ${c.license} · **Created:** ${c.created} · **Last push:** ${c.pushed}`,
    );
    lines.push(`- **Found via:** ${[...c.sources].join("; ")}`);
    if (c.paper) {
      lines.push(
        `- **Paper${c.paper.matched ? "" : " (unsure)"}:** [${c.paper.title}](${c.paper.url}) (${c.paper.venue || "?"}, ${c.paper.year ?? "?"}; ${c.paper.how})`,
      );
    }
    if (c.description) lines.push(`- **Description:** ${truncate(c.description, 400)}`);
    lines.push("");
  };

  lines.push(`## Drafted into methods.ts (${drafted.length})`, "");
  if (drafted.length === 0) lines.push("_None this run._", "");
  drafted.forEach(repoBlock);

  lines.push(`## Queued for a later scan (${backlog.length})`, "");
  lines.push(
    `Relevant, but over this scan's limit of ${MAX_DRAFTS} drafts. They're kept in`,
    "`scripts/scan-state.json` and drafted first next time; add one to",
    "`scripts/ignored-repos.txt` to drop it.",
    "",
  );
  if (backlog.length === 0) lines.push("_None._", "");
  backlog.forEach(repoBlock);

  lines.push(`## Low relevance, not drafted (${lowRelevance.length})`, "");
  lines.push(
    "Matched a search but not the tree + LiDAR/point-cloud keyword check. Reported once.",
    "",
  );
  if (lowRelevance.length === 0) lines.push("_None this run._", "");
  lowRelevance.forEach(repoBlock);

  lines.push(`## Recent papers without linked code (${papersNoCode.length})`, "");
  lines.push(
    "The catalog needs a code repository, so these aren't drafted. Worth checking whether code",
    "was released elsewhere (paper's data-availability section, author pages, Zenodo).",
    "",
  );
  if (papersNoCode.length === 0) lines.push("_None this run._", "");
  for (const p of papersNoCode) {
    lines.push(
      `- [${p.title}](${p.url}) — ${formatAuthors(p.authors.map((a) => a.split(/\s+/).pop())) || "?"}, ${p.venue || "?"} (${p.published || p.year || "?"})`,
    );
  }
  lines.push("");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function isoDaysAgo(fromIso, days) {
  const d = fromIso ? new Date(fromIso) : new Date();
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  const today = new Date().toISOString().slice(0, 10);
  const state = loadState();
  const ignored = loadIgnored();
  const catalog = loadCatalog();
  const seenRepos = new Set(state.seenRepos);
  const seenPapers = new Set(state.seenPapers);

  const since = state.lastScan
    ? isoDaysAgo(state.lastScan, OVERLAP_DAYS)
    : isoDaysAgo(null, DEFAULT_LOOKBACK_DAYS);
  console.log(`Scanning since ${since}`);

  const skipRepo = (slug) => catalog.repos.has(slug) || ignored.has(slug) || seenRepos.has(slug);
  const skipPaper = (key) => catalog.papers.has(key) || seenPapers.has(key);

  const candidates = new Map(); // slug -> candidate
  const addCandidate = (item, source) => {
    const slug = item.full_name.toLowerCase();
    if (skipRepo(slug) || item.fork || item.archived) return null;
    const existing = candidates.get(slug);
    if (existing) {
      existing.sources.add(source);
      return existing;
    }
    const c = repoToCandidate(item, source);
    candidates.set(slug, c);
    return c;
  };

  // 0. Backlog: relevant repos that didn't fit under MAX_DRAFTS last time.
  for (const slug of state.backlog) {
    if (skipRepo(slug)) continue;
    const item = await getRepo(slug, token);
    if (item) addCandidate(item, QUEUED);
  }

  // 1. GitHub: new repos and recently active repos, newest first.
  for (const query of GITHUB_QUERIES) {
    for (const [label, qualifier] of [
      ["created", `created:>=${since}`],
      ["pushed", `pushed:>=${since}`],
    ]) {
      const items = await searchGitHub(query, qualifier, token);
      for (const item of items) addCandidate(item, `GitHub "${query}" (${label})`);
      await sleep(SEARCH_DELAY_MS);
    }
  }
  console.log(`GitHub search: ${candidates.size} unseen repos`);

  // 2. Papers: arXiv + Crossref. Papers linking a GitHub repo become repo candidates.
  const papers = new Map();
  for (const p of await searchArxiv(since)) papers.set(p.key, p);
  await sleep(3000);
  for (const query of CROSSREF_QUERIES) {
    for (const p of await searchCrossref(query, since))
      if (!papers.has(p.key)) papers.set(p.key, p);
    await sleep(1000);
  }
  const relevantPapers = [...papers.values()].filter(
    (p) => !skipPaper(p.key) && isRelevant(relevanceText(p.title)),
  );
  console.log(`Papers: ${relevantPapers.length} relevant, unseen`);

  const papersNoCode = [];
  for (const p of relevantPapers) {
    const slugs = extractGithubSlugs(`${p.abstract} ${p.comment}`);
    let linked = false;
    for (const slug of slugs) {
      if (skipRepo(slug)) {
        linked = true;
        continue;
      }
      const item = candidates.get(slug) ? null : await getRepo(slug, token);
      const c = candidates.get(slug) ?? (item ? addCandidate(item, `${p.venue} paper`) : null);
      if (c) {
        c.sources.add(`${p.venue || "paper"}: ${truncate(p.title, 80)}`);
        c.paper ??= { ...p, matched: true, how: "paper abstract links to this repo" };
        linked = true;
      }
    }
    if (!linked) papersNoCode.push(p);
  }

  // 3. Rank: relevance first, then queued from last scan, then a paper attached, then stars.
  const all = [...candidates.values()].map((c) => ({
    c,
    relevant: isRelevant(
      relevanceText(c.repoName, c.description, c.topics.join(" "), c.paper?.title),
    ),
    queued: c.sources.has(QUEUED),
  }));
  all.sort(
    (a, b) =>
      Number(b.relevant) - Number(a.relevant) ||
      Number(b.queued) - Number(a.queued) ||
      Number(Boolean(b.c.paper)) - Number(Boolean(a.c.paper)) ||
      b.c.stars - a.c.stars,
  );

  const draftable = all.filter((x) => x.relevant && (x.c.description || x.c.paper)).map((x) => x.c);
  const drafted = draftable.slice(0, MAX_DRAFTS);
  const backlog = draftable.slice(MAX_DRAFTS);
  const draftableSet = new Set(draftable);
  const lowRelevance = all
    .filter((x) => !draftableSet.has(x.c))
    .map((x) => x.c)
    .slice(0, MAX_LOW_RELEVANCE);

  // 4. A recent paper with no linked code whose title names a candidate repo
  //    (e.g. "WDTS: ..." for repo WDTS) is attached to it, flagged unsure.
  for (const c of [...drafted, ...backlog]) {
    if (c.paper) continue;
    const i = papersNoCode.findIndex((p) =>
      titleNamesRepo(p.title, c.repoName, { wholeNameOnly: true }),
    );
    if (i !== -1) {
      c.paper = {
        ...papersNoCode[i],
        matched: false,
        how: "recent paper whose title names the repo",
      };
      papersNoCode.splice(i, 1);
    }
  }

  // 5. Enrich drafts: look for a verified paper in the README; owner name as author fallback.
  for (const c of drafted) {
    if (!c.paper?.matched) {
      const fromReadme = await findVerifiedPaper(await getReadme(c.fullName, token), c.repoName);
      if (fromReadme && (fromReadme.matched || !c.paper)) c.paper = fromReadme;
    }
    if (!c.paper?.authors?.length) {
      const user = await getUser(c.owner, token);
      c.ownerName = user?.name?.trim() || "";
    }
  }

  const takenIds = new Set(catalog.ids);
  const draftBlocks = drafted.map((c) => renderDraft(c, uniqueId(slugify(c.repoName), takenIds)));

  writeDrafts(catalog.content, draftBlocks, today);
  const papersReported = papersNoCode.slice(0, MAX_REPORTED_PAPERS);
  writeFileSync(
    OUTPUT_FILE,
    renderReport({
      date: today,
      since,
      drafted,
      backlog,
      lowRelevance,
      papersNoCode: papersReported,
    }),
  );

  // Drafted and low-relevance repos are reported once; backlog repos stay unseen and queued.
  for (const c of [...drafted, ...lowRelevance]) seenRepos.add(c.slug);
  for (const c of [...drafted, ...lowRelevance]) if (c.paper) seenPapers.add(c.paper.key);
  for (const p of papersReported) seenPapers.add(p.key);
  writeFileSync(
    STATE_FILE,
    JSON.stringify(
      {
        lastScan: today,
        seenRepos: [...seenRepos].sort(),
        seenPapers: [...seenPapers].sort(),
        backlog: backlog.map((c) => c.slug),
      },
      null,
      2,
    ) + "\n",
  );

  console.log(
    `Drafted ${drafted.length} entr${drafted.length === 1 ? "y" : "ies"} into methods.ts; ` +
      `${backlog.length} queued, ${lowRelevance.length} low-relevance repo(s) and ` +
      `${papersReported.length} paper(s) listed in NEW_METHOD_CANDIDATES.md`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
