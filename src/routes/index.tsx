import { createFileRoute, Link } from "@tanstack/react-router";
import { METHODS } from "@/lib/methods";
import { MethodCatalog } from "@/components/method-catalog";
import { useCompare } from "@/hooks/use-compare";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CanopyIndex - LiDAR tree-structure methods catalog" },
      {
        name: "description",
        content:
          "Browse open-source LiDAR methods for tree structural properties: DBH, height, QSMs, leaf-wood separation and tree detection. Filter by platform, language, license.",
      },
      { property: "og:title", content: "CanopyIndex - LiDAR tree-structure methods" },
      {
        property: "og:description",
        content:
          "A curated catalog of open-source LiDAR-based methods for measuring tree structural properties.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const compare = useCompare();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container-page py-16 md:py-24 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="chip mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" />
              Open catalog · TLS · MLS · ULS · ALS
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Every open LiDAR method for{" "}
              <span className="text-canopy underline decoration-accent decoration-[3px] underline-offset-[6px]">
                tree structure
              </span>
              , in one place.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              A unified portal for finding LiDAR-based tree structural-property methods that are
              publicly available on GitHub and other code-sharing sites. Curated, searchable,
              comparable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-canopy text-parchment font-medium hover:opacity-90"
              >
                Browse the catalog
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <Link
                to="/search"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-background hover:border-moss/60 font-medium"
              >
                Live GitHub search
              </Link>
              <Link
                to="/submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-transparent hover:border-border font-medium text-muted-foreground hover:text-foreground"
              >
                Suggest a method →
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <Stat n={METHODS.length} label="Curated methods" />
              <Stat
                n={new Set(METHODS.flatMap((m) => m.properties)).size}
                label="Property categories"
              />
              <Stat n={new Set(METHODS.map((m) => m.language)).size} label="Languages" />
            </dl>
          </div>

          <div className="relative">
            <div className="surface-card p-6 relative overflow-hidden">
              <TreeGraphic />
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                {[
                  ["QSM", "cylinder branch models"],
                  ["DBH", "stem diameter fits"],
                  ["Crown", "height & canopy"],
                  ["Leaf/Wood", "point classification"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-md bg-muted/60 px-3 py-2">
                    <div className="font-mono text-canopy">{k}</div>
                    <div className="text-muted-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="container-page py-12">
        <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h2 className="font-display text-3xl font-semibold">The catalog</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Filter by structural property, sensor platform, and implementation language.
            </p>
          </div>
          <Link
            to="/compare"
            className="text-sm font-medium text-canopy hover:underline underline-offset-4"
          >
            Compare selected ({compare.ids.length}) →
          </Link>
        </div>
        <MethodCatalog
          methods={METHODS}
          compareIds={compare.ids}
          onToggleCompare={compare.toggle}
        />
      </section>
    </>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-canopy">{n}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

function TreeGraphic() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-56">
      <defs>
        <radialGradient id="canopyGrad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="oklch(0.78 0.10 118)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="oklch(0.30 0.05 155)" stopOpacity="0.15" />
        </radialGradient>
      </defs>
      {/* Scanned points scatter */}
      {Array.from({ length: 180 }).map((_, i) => {
        const a = (i / 180) * Math.PI * 2;
        const r = 60 + Math.sin(i * 3.1) * 25 + (i % 7) * 2;
        const x = 160 + Math.cos(a) * r + ((i % 5) - 2) * 3;
        const y = 90 + Math.sin(a) * r * 0.55 + ((i % 3) - 1) * 2;
        return <circle key={i} cx={x} cy={y} r={0.9} fill="oklch(0.52 0.09 148)" opacity={0.55} />;
      })}
      <ellipse cx="160" cy="88" rx="95" ry="55" fill="url(#canopyGrad)" />
      {/* Trunk skeleton */}
      <path
        d="M160 200 L160 130 L142 108 M160 145 L182 118 M160 165 L138 148 M160 122 L170 96"
        stroke="oklch(0.35 0.06 60)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Ground */}
      <line x1="20" y1="200" x2="300" y2="200" stroke="oklch(0.70 0.03 90)" strokeDasharray="2 4" />
      {/* Measurement callouts */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="oklch(0.30 0.05 155)">
        <line x1="200" y1="150" x2="230" y2="150" stroke="currentColor" strokeWidth="0.8" />
        <text x="234" y="153">
          DBH 34cm
        </text>
        <line x1="120" y1="60" x2="90" y2="45" stroke="currentColor" strokeWidth="0.8" />
        <text x="30" y="42">
          H 22.4m
        </text>
      </g>
    </svg>
  );
}
