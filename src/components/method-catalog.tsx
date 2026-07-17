import { useMemo, useState } from "react";
import type { Method, PropertyTag, DataInput } from "@/lib/methods";
import { PROPERTY_LABELS } from "@/lib/methods";

interface Props {
  methods: Method[];
  compareIds: string[];
  onToggleCompare: (id: string) => void;
}

const INPUTS: DataInput[] = ["TLS", "MLS", "ULS", "ALS", "Photogrammetry"];
const PROPS: PropertyTag[] = [
  "tree-stem-detection",
  "stem-diameter",
  "height-crown",
  "qsm-branches-biomass",
  "leaf-wood",
];

export function MethodCatalog({ methods, compareIds, onToggleCompare }: Props) {
  const [query, setQuery] = useState("");
  const [propFilter, setPropFilter] = useState<PropertyTag | "all">("all");
  const [inputFilter, setInputFilter] = useState<DataInput | "all">("all");
  const [langFilter, setLangFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "year" | "name">("year");

  const languages = useMemo(
    () => Array.from(new Set(methods.map((m) => m.language))).sort(),
    [methods],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = methods.filter((m) => {
      if (propFilter !== "all" && !m.properties.includes(propFilter)) return false;
      if (inputFilter !== "all" && !m.inputs.includes(inputFilter)) return false;
      if (langFilter !== "all" && m.language !== langFilter) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.authors.toLowerCase().includes(q) ||
        m.summary.toLowerCase().includes(q)
      );
    });
    const sorted = [...list];
    if (sortBy === "year") sorted.sort((a, b) => b.year - a.year);
    else if (sortBy === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || b.year - a.year);
    return sorted;
  }, [methods, query, propFilter, inputFilter, langFilter, sortBy]);

  return (
    <section>
      <div className="surface-card p-4 md:p-5 mb-6 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search TreeQSM, DBH, leaf-wood, authors…"
              className="w-full h-11 pl-10 pr-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring/60"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="h-11 rounded-md bg-background border border-input px-3 text-sm"
          >
            <option value="featured">Sort: Featured</option>
            <option value="year">Sort: Newest</option>
            <option value="name">Sort: A–Z</option>
          </select>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <FilterGroup label="Structural property">
            <FilterPill active={propFilter === "all"} onClick={() => setPropFilter("all")}>
              All
            </FilterPill>
            {PROPS.map((p) => (
              <FilterPill key={p} active={propFilter === p} onClick={() => setPropFilter(p)}>
                {PROPERTY_LABELS[p]}
              </FilterPill>
            ))}
          </FilterGroup>
          <FilterGroup label="LiDAR platform">
            <FilterPill active={inputFilter === "all"} onClick={() => setInputFilter("all")}>
              All
            </FilterPill>
            {INPUTS.map((i) => (
              <FilterPill key={i} active={inputFilter === i} onClick={() => setInputFilter(i)}>
                {i}
              </FilterPill>
            ))}
          </FilterGroup>
          <FilterGroup label="Language">
            <FilterPill active={langFilter === "all"} onClick={() => setLangFilter("all")}>
              All
            </FilterPill>
            {languages.map((l) => (
              <FilterPill key={l} active={langFilter === l} onClick={() => setLangFilter(l)}>
                {l}
              </FilterPill>
            ))}
          </FilterGroup>
        </div>
      </div>

      <div className="flex items-baseline justify-between mb-3">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filtered.length}</span> of{" "}
          {methods.length} methods
        </p>
        <p className="text-xs text-muted-foreground">{compareIds.length} selected to compare</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((m) => (
          <MethodCard
            key={m.id}
            method={m}
            selected={compareIds.includes(m.id)}
            onToggleCompare={() => onToggleCompare(m.id)}
          />
        ))}
        {filtered.length === 0 && (
          <div className="surface-card p-8 text-center text-muted-foreground md:col-span-2 xl:col-span-3">
            No methods match those filters yet.
          </div>
        )}
      </div>
    </section>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </div>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1 rounded-full text-xs border transition ${
        active
          ? "bg-canopy text-parchment border-canopy"
          : "bg-background border-border hover:border-moss/60 hover:text-canopy"
      }`}
    >
      {children}
    </button>
  );
}

function MethodCard({
  method: m,
  selected,
  onToggleCompare,
}: {
  method: Method;
  selected: boolean;
  onToggleCompare: () => void;
}) {
  return (
    <article className="surface-card p-5 flex flex-col gap-3 hover:border-moss/50 transition">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold leading-tight">
            <a
              href={m.repo}
              target="_blank"
              rel="noreferrer"
              className="hover:text-canopy underline-offset-4 hover:underline"
            >
              {m.name}
            </a>
            {m.featured && <span className="ml-2 chip">featured</span>}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {m.authors} · {m.year}
          </p>
        </div>
        <button
          onClick={onToggleCompare}
          aria-pressed={selected}
          title={selected ? "Remove from comparison" : "Add to comparison"}
          className={`shrink-0 h-8 w-8 grid place-items-center rounded-md border transition ${
            selected
              ? "bg-accent text-accent-foreground border-accent"
              : "border-border hover:border-moss/60"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {selected ? <path d="M20 6 9 17l-5-5" /> : <path d="M12 5v14M5 12h14" />}
          </svg>
        </button>
      </div>

      <p className="text-sm text-foreground/80 leading-relaxed">{m.summary}</p>

      <div className="flex flex-wrap gap-1.5">
        {m.properties.map((p) => (
          <span key={p} className="chip">
            {PROPERTY_LABELS[p]}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground pt-1 border-t border-border/60">
        <span>
          <b className="text-foreground/80">Inputs:</b> {m.inputs.join(", ")}
        </span>
        <span>
          <b className="text-foreground/80">Lang:</b> {m.language}
        </span>
        <span>
          <b className="text-foreground/80">License:</b> {m.license}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        <a
          href={m.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-canopy text-parchment hover:opacity-90"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
            <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.42c.57.1.78-.25.78-.55v-2c-3.19.7-3.86-1.36-3.86-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.17a11 11 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
          </svg>
          GitHub
        </a>
        {m.paper && (
          <a
            href={m.paper}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium px-3 py-1.5 rounded-md border border-border hover:border-moss/60"
          >
            Paper
          </a>
        )}
        {m.homepage && (
          <a
            href={m.homepage}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium px-3 py-1.5 rounded-md border border-border hover:border-moss/60"
          >
            Docs
          </a>
        )}
      </div>
    </article>
  );
}
