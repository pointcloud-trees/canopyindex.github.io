import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - CanopyIndex" },
      {
        name: "description",
        content:
          "CanopyIndex is a community-run portal that maps the open-source landscape of LiDAR methods for measuring tree structural properties.",
      },
      { property: "og:title", content: "About CanopyIndex" },
      {
        property: "og:description",
        content: "How CanopyIndex catalogues open LiDAR methods for tree structural properties.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="container-page py-14 max-w-3xl">
      <h1 className="font-display text-4xl font-semibold">About CanopyIndex</h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        Open-source LiDAR tools for measuring trees are scattered across GitHub, personal pages,
        university repositories, and supplementary material. CanopyIndex pulls them into one place
        so researchers, foresters, and engineers can find, compare, and cite them.
      </p>

      <h2 className="font-display text-2xl font-semibold mt-10">Scope</h2>
      <ul className="mt-3 space-y-2 text-foreground/85">
        <li>· Individual tree & stem detection from point clouds</li>
        <li>· Stem diameter (DBH), taper, and dendrometry</li>
        <li>· Tree height, crown dimensions, and canopy metrics</li>
        <li>· Quantitative structure models (QSM), branch architecture, volume, biomass</li>
        <li>· Leaf-wood classification of point clouds</li>
      </ul>

      <h2 className="font-display text-2xl font-semibold mt-10">How entries are chosen</h2>
      <p className="mt-3 leading-relaxed text-foreground/85">
        A method is eligible if its source code is publicly hosted (GitHub, GitLab, Zenodo,
        Bitbucket…) under an OSI-approved or clearly permissive licence, and if it operates on
        LiDAR-derived point clouds. Curation favours actively maintained projects and those tied to
        a peer-reviewed paper, but preprints and student projects are welcome - submit them via the{" "}
        <Link to="/submit" className="text-canopy underline underline-offset-4">
          Submit
        </Link>{" "}
        page.
      </p>

      <h2 className="font-display text-2xl font-semibold mt-10">Complementary tools</h2>
      <p className="mt-3 leading-relaxed text-foreground/85">
        Use the{" "}
        <Link to="/search" className="text-canopy underline underline-offset-4">
          Live GitHub search
        </Link>{" "}
        to spot repositories that haven't been curated yet, and{" "}
        <Link to="/compare" className="text-canopy underline underline-offset-4">
          Compare
        </Link>{" "}
        to line up several methods before choosing.
      </p>

      <p className="mt-10 text-sm text-muted-foreground">
        CanopyIndex is a community project. No affiliation with any listed tool's authors is
        implied. Please cite the original papers when using a method.
      </p>

      <h2 className="font-display text-2xl font-semibold mt-10">Author &amp; Contact</h2>
      <p className="mt-3 leading-relaxed text-foreground/85">
        Built by <strong className="text-foreground">Sharad Gupta</strong>.
        <br />
        GitHub:{" "}
        <a
          href="https://github.com/sharadgupta27"
          target="_blank"
          rel="noopener"
          className="text-canopy underline underline-offset-4"
        >
          @sharadgupta27
        </a>
        <br />
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/sharadgupta27/"
          target="_blank"
          rel="noopener"
          className="text-canopy underline underline-offset-4"
        >
          in/sharadgupta27
        </a>
        <br />
        Email:{" "}
        <a
          href="mailto:sharadgupta27@gmail.com"
          className="text-canopy underline underline-offset-4"
        >
          sharadgupta27@gmail.com
        </a>
      </p>
    </div>
  );
}
