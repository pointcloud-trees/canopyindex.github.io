# CanopyIndex

A curated, searchable catalog of open-source LiDAR-based methods for measuring
tree structural properties - stem diameter (DBH), height & crown, quantitative
structure models (QSM) / branches / biomass, leaf-wood classification, and tree
& stem detection - across R, Python, C++, and MATLAB.

## What's in here

- **Catalog** (`/`) - filterable/sortable list of methods by structural
  property, LiDAR platform (TLS / MLS / ULS / ALS / Photogrammetry), and
  implementation language. Currently 34 methods: 15 Python, 9 R, 5 C++, 5
  MATLAB.
- **Live GitHub search** (`/search`) - queries the GitHub REST API in real
  time for repositories matching LiDAR tree-structure keywords. Separate from
  the curated catalog; nothing found here is auto-added.
- **Compare** (`/compare`) - side-by-side comparison table for methods
  selected from the catalog (selection persists locally in the browser).
- **Submit** (`/submit`) - builds a pre-filled GitHub issue for proposing a
  new method to add to the catalog.
- **About** (`/about`) - scope and curation criteria.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19) + [TanStack
  Router](https://tanstack.com/router) + [TanStack
  Query](https://tanstack.com/query)
- [Vite 8](https://vite.dev) with [Tailwind CSS
  v4](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com)
  components
- TypeScript throughout
- [Nitro](https://nitro.build) build targeting Cloudflare Workers
  (`cloudflare-module` preset)

## Getting started

Requires Node `^20.19.0 || >=22.12.0` (Vite 8's requirement).

```bash
npm install
npm run dev       # http://localhost:8080
```

### Scripts

| Command               | What it does                              |
| --------------------- | ----------------------------------------- |
| `npm run dev`       | Start the Vite dev server                 |
| `npm run build`     | Production build (outputs to`.output/`) |
| `npm run build:dev` | Build in development mode                 |
| `npm run preview`   | Preview a production build locally        |
| `npm run lint`      | ESLint                                    |
| `npm run format`    | Prettier, write mode                      |

## Project structure

```
src/
  lib/methods.ts        # the catalog data - a static, hand-curated array
  components/            # MethodCatalog, shadcn/ui primitives
  hooks/use-compare.ts   # localStorage-backed compare-selection state
  routes/                # file-based routes (see src/routes/README.md)
  server.ts              # SSR error-normalization wrapper
scripts/
  scan-new-methods.mjs   # weekly GitHub scan for un-cataloged repos
.github/workflows/
  ci.yml                 # lint + typecheck + build on push/PR
  scan-new-methods.yml   # runs the scan script, opens a review PR
```

### Automated candidate scanning

`.github/workflows/scan-new-methods.yml` runs weekly (`scripts/scan-new-methods.mjs`)
against a set of GitHub search queries, filters out anything already in
`methods.ts`, and opens a PR with a report (`NEW_METHOD_CANDIDATES.md`) for
human review. It **never** writes into `methods.ts` directly - GitHub search
results routinely include forks, unrelated repos, and unreliable metadata, so
every candidate needs the same manual verification described above before it
becomes a real catalog entry.

## CI

`.github/workflows/ci.yml` runs on every push/PR to `main`: lint, typecheck
(`tsc --noEmit`), and a production build. It does not deploy anything - a
green run only means the code builds cleanly.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to Cloudflare Workers on
every push to `main` (matches the app's `cloudflare-module` Nitro preset -
this is a real SSR app, not a static site, so GitHub Pages can't host it).
The Worker name is pinned to `canopyindex` in `vite.config.ts`.

This requires two repository secrets that aren't set up yet:

- `CLOUDFLARE_API_TOKEN` - create one at Cloudflare dashboard -> My Profile ->
  API Tokens, using the "Edit Cloudflare Workers" template
- `CLOUDFLARE_ACCOUNT_ID` - found in the Cloudflare dashboard sidebar on any
  Workers/domain overview page

Add both under repo Settings -> Secrets and variables -> Actions -> New
repository secret. Until they're set, the deploy step will fail.

## License

No license has been chosen for this repository yet.

## Author

Built by **Sharad Gupta**.

- GitHub: [@sharadgupta27](https://github.com/sharadgupta27)
- LinkedIn: [in/sharadgupta27](https://www.linkedin.com/in/sharadgupta27/)
- Email: [sharadgupta27@gmail.com](mailto:sharadgupta27@gmail.com)
