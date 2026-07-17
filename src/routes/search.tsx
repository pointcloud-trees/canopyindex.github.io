import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Live GitHub search - CanopyIndex" },
      {
        name: "description",
        content:
          "Search GitHub in real time for LiDAR tree-structure repositories. Results ranked by stars, filtered by keywords.",
      },
      { property: "og:title", content: "Live GitHub search - CanopyIndex" },
      {
        property: "og:description",
        content: "Real-time GitHub search for open-source LiDAR tree-structure methods.",
      },
    ],
  }),
  component: SearchPage,
});

interface GhRepo {
  id: number;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  license: { spdx_id: string | null } | null;
  topics?: string[];
  owner: { avatar_url: string; login: string };
}

const PRESETS = [
  "lidar tree structure",
  "TLS QSM",
  "point cloud tree segmentation",
  "leaf wood separation lidar",
  "DBH point cloud",
  "individual tree detection lidar",
];

function SearchPage() {
  const [q, setQ] = useState("lidar tree structure");
  const [submitted, setSubmitted] = useState(q);

  const { data, isFetching, error } = useQuery({
    queryKey: ["gh-search", submitted],
    queryFn: async () => {
      const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
        submitted,
      )}&sort=stars&order=desc&per_page=30`;
      const r = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
      if (!r.ok) throw new Error(`GitHub API error ${r.status}`);
      return (await r.json()) as { total_count: number; items: GhRepo[] };
    },
    staleTime: 5 * 60 * 1000,
  });

  return (
    <div className="container-page py-10">
      <header className="mb-8 max-w-2xl">
        <p className="chip mb-3">Live · GitHub REST API</p>
        <h1 className="font-display text-4xl font-semibold">Search GitHub in real time</h1>
        <p className="mt-2 text-muted-foreground">
          Query GitHub directly for repositories matching LiDAR tree-structure keywords.
          Unauthenticated searches are rate-limited (~10/min).
        </p>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(q);
        }}
        className="surface-card p-3 flex gap-2 mb-4"
      >
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder='e.g. "TLS QSM" or "lidar tree segmentation"'
          className="flex-1 h-11 px-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring/60"
        />
        <button className="h-11 px-5 rounded-md bg-canopy text-parchment font-medium">
          Search
        </button>
      </form>

      <div className="flex flex-wrap gap-2 mb-8">
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => {
              setQ(p);
              setSubmitted(p);
            }}
            className="chip hover:!bg-canopy hover:!text-parchment"
          >
            {p}
          </button>
        ))}
      </div>

      {isFetching && <p className="text-sm text-muted-foreground">Searching GitHub…</p>}
      {error && (
        <p className="text-sm text-destructive">Search failed: {(error as Error).message}</p>
      )}

      {data && (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            Approximately {data.total_count.toLocaleString()} results · showing top{" "}
            {data.items.length}
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            {data.items.map((r) => (
              <li key={r.id} className="surface-card p-4 flex gap-3">
                <img
                  src={r.owner.avatar_url}
                  alt=""
                  className="h-10 w-10 rounded-md"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:text-canopy hover:underline underline-offset-4 break-words"
                  >
                    {r.full_name}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
                    {r.description || "No description."}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                    <span>★ {r.stargazers_count.toLocaleString()}</span>
                    <span>⑂ {r.forks_count}</span>
                    {r.language && <span>· {r.language}</span>}
                    {r.license?.spdx_id && r.license.spdx_id !== "NOASSERTION" && (
                      <span>· {r.license.spdx_id}</span>
                    )}
                    <span>· updated {new Date(r.updated_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
