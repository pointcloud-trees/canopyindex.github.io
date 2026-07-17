import { createFileRoute, Link } from "@tanstack/react-router";
import { METHODS, PROPERTY_LABELS } from "@/lib/methods";
import { useCompare } from "@/hooks/use-compare";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare LiDAR tree-structure methods - CanopyIndex" },
      {
        name: "description",
        content:
          "Side-by-side comparison of LiDAR tree-structure methods: inputs, outputs, language, license and structural properties.",
      },
      { property: "og:title", content: "Compare LiDAR tree-structure methods" },
      {
        property: "og:description",
        content: "Side-by-side comparison of open-source LiDAR-based tree structural methods.",
      },
    ],
  }),
  component: ComparePage,
});

function ComparePage() {
  const { ids, remove, clear } = useCompare();
  const selected = METHODS.filter((m) => ids.includes(m.id));

  return (
    <div className="container-page py-10">
      <header className="mb-8 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold">Compare methods</h1>
        <p className="mt-2 text-muted-foreground">
          Add methods from the catalog to see them side-by-side. Selections persist locally.
        </p>
      </header>

      {selected.length === 0 ? (
        <div className="surface-card p-10 text-center">
          <p className="text-muted-foreground">No methods selected yet.</p>
          <Link
            to="/"
            className="inline-block mt-4 px-4 py-2 rounded-md bg-canopy text-parchment font-medium"
          >
            Browse the catalog
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-end mb-3">
            <button
              onClick={clear}
              className="text-xs text-muted-foreground hover:text-destructive"
            >
              Clear all
            </button>
          </div>
          <div className="overflow-x-auto surface-card">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="text-left text-xs uppercase tracking-wider text-muted-foreground bg-muted/40">
                <tr>
                  <th className="p-3 font-medium">Attribute</th>
                  {selected.map((m) => (
                    <th key={m.id} className="p-3 font-medium align-bottom">
                      <div className="flex items-start justify-between gap-2">
                        <a
                          href={m.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-foreground hover:text-canopy font-display text-base normal-case tracking-normal"
                        >
                          {m.name}
                        </a>
                        <button
                          onClick={() => remove(m.id)}
                          className="text-muted-foreground hover:text-destructive"
                          aria-label={`Remove ${m.name}`}
                        >
                          ×
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&_tr]:border-t [&_tr]:border-border/60 align-top">
                <Row label="Authors" cells={selected.map((m) => m.authors)} />
                <Row label="Year" cells={selected.map((m) => String(m.year))} />
                <Row label="Language" cells={selected.map((m) => m.language)} />
                <Row label="License" cells={selected.map((m) => m.license)} />
                <Row label="Input platforms" cells={selected.map((m) => m.inputs.join(", "))} />
                <Row
                  label="Properties"
                  cells={selected.map((m) => (
                    <div className="flex flex-wrap gap-1">
                      {m.properties.map((p) => (
                        <span key={p} className="chip">
                          {PROPERTY_LABELS[p]}
                        </span>
                      ))}
                    </div>
                  ))}
                />
                <Row label="Summary" cells={selected.map((m) => m.summary)} />
                <Row
                  label="Links"
                  cells={selected.map((m) => (
                    <div className="flex flex-col gap-1">
                      <a
                        className="text-canopy hover:underline"
                        href={m.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repository
                      </a>
                      {m.paper && (
                        <a
                          className="text-canopy hover:underline"
                          href={m.paper}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Paper
                        </a>
                      )}
                      {m.homepage && (
                        <a
                          className="text-canopy hover:underline"
                          href={m.homepage}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Docs
                        </a>
                      )}
                    </div>
                  ))}
                />
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function Row({ label, cells }: { label: string; cells: React.ReactNode[] }) {
  return (
    <tr>
      <th scope="row" className="p-3 text-left font-medium text-muted-foreground w-40 bg-muted/20">
        {label}
      </th>
      {cells.map((c, i) => (
        <td key={i} className="p-3">
          {c}
        </td>
      ))}
    </tr>
  );
}
