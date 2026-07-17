#!/usr/bin/env node
// Weekly scan for GitHub repos matching LiDAR tree-structure keywords that aren't
// yet in src/lib/methods.ts. Writes a report for human review — see the note in
// NEW_METHOD_CANDIDATES.md. Never writes into methods.ts directly: GitHub search
// results routinely include forks, unrelated repos, and metadata (license, author)
// that doesn't hold up without checking the actual repo/paper.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const METHODS_FILE = fileURLToPath(new URL("../src/lib/methods.ts", import.meta.url));
const OUTPUT_FILE = fileURLToPath(new URL("../NEW_METHOD_CANDIDATES.md", import.meta.url));

const QUERIES = [
  "lidar tree structure",
  "TLS QSM",
  "point cloud tree segmentation",
  "leaf wood classification point cloud",
  "DBH point cloud estimation",
  "individual tree detection lidar",
  "quantitative structure model tree",
  "terrestrial laser scanning tree",
  "forest point cloud segmentation",
  "tree crown segmentation lidar",
  "tree skeleton point cloud",
  "canopy height model individual tree",
];

const MAX_PER_QUERY = 8;
const MAX_TOTAL = 40;
const DELAY_MS = Number(process.env.SCAN_DELAY_MS ?? 1200);

function loadExistingRepoSlugs() {
  const content = readFileSync(METHODS_FILE, "utf8");
  const slugs = new Set();
  const re = /repo:\s*"https:\/\/github\.com\/([^"/]+\/[^"/]+)"/g;
  let m;
  while ((m = re.exec(content))) {
    slugs.add(m[1].toLowerCase().replace(/\/+$/, ""));
  }
  return slugs;
}

async function searchGitHub(query, token) {
  const q = `${query} fork:false archived:false`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=${MAX_PER_QUERY}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) {
    console.error(`Search failed for "${query}": HTTP ${res.status}`);
    return [];
  }
  const data = await res.json();
  return data.items ?? [];
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function renderReport(candidates) {
  const date = new Date().toISOString().slice(0, 10);
  const lines = [
    `# New method candidates (scan: ${date})`,
    "",
    "Automated weekly scan of GitHub for repos matching LiDAR tree-structure keywords",
    "that aren't currently in `src/lib/methods.ts`.",
    "",
    "**This list is unverified.** Do not copy a license, author name, or paper DOI from",
    "here straight into the catalog. Before adding any entry to `methods.ts`:",
    "- Confirm the repo is real, maintained, and matches the stated description.",
    "- Check the license in the repo itself (search-result metadata can be wrong or missing).",
    "- Find the correct paper via Crossref/the repo's README — never guess a DOI.",
    "- Verify author names against the paper or package metadata — never invent one.",
    "",
    candidates.length === 0
      ? "No new candidates found this run."
      : `${candidates.length} candidate${candidates.length === 1 ? "" : "s"} found.`,
    "",
  ];

  for (const c of candidates) {
    lines.push(`## [${c.name}](${c.url})`);
    lines.push("");
    lines.push(
      `- **Stars:** ${c.stars} · **Language:** ${c.language} · **License:** ${c.license} · **Updated:** ${c.updated}`,
    );
    lines.push(`- **Matched query:** \`${c.query}\``);
    if (c.description) lines.push(`- **Description:** ${c.description}`);
    lines.push("");
  }

  return lines.join("\n");
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  const existing = loadExistingRepoSlugs();
  const seen = new Set();
  const candidates = [];

  for (const query of QUERIES) {
    const items = await searchGitHub(query, token);
    for (const item of items) {
      const slug = item.full_name.toLowerCase();
      if (existing.has(slug) || seen.has(slug)) continue;
      seen.add(slug);
      candidates.push({
        query,
        name: item.full_name,
        url: item.html_url,
        description: item.description ?? "",
        stars: item.stargazers_count,
        language: item.language ?? "unknown",
        license: item.license?.spdx_id ?? "none",
        updated: item.updated_at?.slice(0, 10) ?? "unknown",
      });
    }
    await sleep(DELAY_MS);
  }

  candidates.sort((a, b) => b.stars - a.stars);
  const capped = candidates.slice(0, MAX_TOTAL);

  writeFileSync(OUTPUT_FILE, renderReport(capped));
  console.log(`Wrote ${capped.length} candidate(s) to NEW_METHOD_CANDIDATES.md`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
