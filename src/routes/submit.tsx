import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PROPERTY_LABELS } from "@/lib/methods";
import type { PropertyTag, DataInput } from "@/lib/methods";

export const Route = createFileRoute("/submit")({
  head: () => ({
    meta: [
      { title: "Submit a method - CanopyIndex" },
      {
        name: "description",
        content:
          "Suggest a new LiDAR-based tree structural method to add to the CanopyIndex catalog. Submissions open a pre-filled GitHub issue.",
      },
      { property: "og:title", content: "Submit a LiDAR tree-structure method" },
      {
        property: "og:description",
        content: "Contribute a new open-source method to the CanopyIndex catalog.",
      },
    ],
  }),
  component: SubmitPage,
});

const INPUTS: DataInput[] = ["TLS", "MLS", "ULS", "ALS", "Photogrammetry"];
const PROPS = Object.entries(PROPERTY_LABELS) as [PropertyTag, string][];

function SubmitPage() {
  const [f, setF] = useState({
    name: "",
    repo: "",
    authors: "",
    year: "",
    language: "",
    license: "",
    paper: "",
    summary: "",
  });
  const [props, setProps] = useState<PropertyTag[]>([]);
  const [inputs, setInputs] = useState<DataInput[]>([]);

  const issueUrl = useMemo(() => {
    const body = [
      `**Name:** ${f.name}`,
      `**Repository:** ${f.repo}`,
      `**Authors:** ${f.authors}`,
      `**Year:** ${f.year}`,
      `**Language:** ${f.language}`,
      `**License:** ${f.license}`,
      `**Paper / DOI:** ${f.paper}`,
      `**LiDAR platforms:** ${inputs.join(", ")}`,
      `**Structural properties:** ${props.map((p) => PROPERTY_LABELS[p]).join(", ")}`,
      "",
      "**Summary:**",
      f.summary,
    ].join("\n");
    const title = f.name ? `Add method: ${f.name}` : "Add method: ";
    return `https://github.com/canopyindex/canopyindex/issues/new?title=${encodeURIComponent(
      title,
    )}&body=${encodeURIComponent(body)}&labels=submission`;
  }, [f, props, inputs]);

  const toggle = <T,>(arr: T[], v: T, set: (a: T[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <div className="container-page py-10 max-w-3xl">
      <header className="mb-8">
        <h1 className="font-display text-4xl font-semibold">Submit a method</h1>
        <p className="mt-2 text-muted-foreground">
          Know an open-source LiDAR tree-structure tool that isn't listed? Fill in the details below
          - submitting opens a pre-filled GitHub issue on the CanopyIndex repo for review.
        </p>
      </header>

      <form className="surface-card p-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Method name"
            value={f.name}
            onChange={(v) => setF({ ...f, name: v })}
            placeholder="e.g. TreeQSM"
          />
          <Field
            label="Repository URL"
            value={f.repo}
            onChange={(v) => setF({ ...f, repo: v })}
            placeholder="https://github.com/…"
          />
          <Field
            label="Authors"
            value={f.authors}
            onChange={(v) => setF({ ...f, authors: v })}
            placeholder="Last name et al."
          />
          <Field
            label="Year"
            value={f.year}
            onChange={(v) => setF({ ...f, year: v })}
            placeholder="2024"
          />
          <Field
            label="Language"
            value={f.language}
            onChange={(v) => setF({ ...f, language: v })}
            placeholder="Python / C++ / R / MATLAB"
          />
          <Field
            label="License"
            value={f.license}
            onChange={(v) => setF({ ...f, license: v })}
            placeholder="MIT / GPL-3.0 / …"
          />
          <Field
            label="Paper / DOI"
            value={f.paper}
            onChange={(v) => setF({ ...f, paper: v })}
            placeholder="https://doi.org/…"
          />
        </div>

        <div>
          <Label>LiDAR platforms</Label>
          <div className="flex flex-wrap gap-2">
            {INPUTS.map((i) => (
              <Toggle
                key={i}
                active={inputs.includes(i)}
                onClick={() => toggle(inputs, i, setInputs)}
              >
                {i}
              </Toggle>
            ))}
          </div>
        </div>

        <div>
          <Label>Structural properties</Label>
          <div className="flex flex-wrap gap-2">
            {PROPS.map(([k, label]) => (
              <Toggle key={k} active={props.includes(k)} onClick={() => toggle(props, k, setProps)}>
                {label}
              </Toggle>
            ))}
          </div>
        </div>

        <div>
          <Label>Summary</Label>
          <textarea
            rows={4}
            value={f.summary}
            onChange={(e) => setF({ ...f, summary: e.target.value })}
            placeholder="One or two sentences on what it does and what makes it distinctive."
            className="w-full rounded-md bg-background border border-input p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={issueUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-canopy text-parchment font-medium hover:opacity-90"
          >
            Open pre-filled GitHub issue
          </a>
          <p className="text-xs text-muted-foreground">
            Prefer email? Send the same details to <code>hello@canopyindex.dev</code>.
          </p>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5">
      <Label>{label}</Label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 px-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring/60"
      />
    </label>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 block">
      {children}
    </span>
  );
}
function Toggle({
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
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs border transition ${
        active
          ? "bg-canopy text-parchment border-canopy"
          : "bg-background border-border hover:border-moss/60"
      }`}
    >
      {children}
    </button>
  );
}
