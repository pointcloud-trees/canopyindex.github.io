import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page hasn't been catalogued yet.</p>
        <div className="mt-6">
          <Link to="/" className="chip !bg-canopy !text-parchment !border-transparent px-4 py-2">
            Back to the portal
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Try refreshing or head back to the catalog.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-input px-4 py-2 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_TITLE = "CanopyIndex - LiDAR tree structure methods on GitHub";
const SITE_DESC =
  "A curated, searchable portal for open-source LiDAR-based methods that measure tree structural properties: DBH, height, QSMs, leaf-wood, tree detection.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Sharad Gupta" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-border/60 backdrop-blur-sm bg-background/70 sticky top-0 z-40">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-canopy text-parchment">
            {/* branch mark */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M12 22V6" />
              <path d="M12 14l-5-3" />
              <path d="M12 11l5-4" />
              <path d="M12 18l-4-2" />
              <path d="M12 8L9 5" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">CanopyIndex</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            className="px-3 py-1.5 rounded-md hover:bg-muted"
            activeOptions={{ exact: true }}
            activeProps={{ className: "px-3 py-1.5 rounded-md bg-muted font-medium" }}
          >
            Catalog
          </Link>
          <Link
            to="/search"
            className="px-3 py-1.5 rounded-md hover:bg-muted"
            activeProps={{ className: "px-3 py-1.5 rounded-md bg-muted font-medium" }}
          >
            GitHub search
          </Link>
          <Link
            to="/compare"
            className="px-3 py-1.5 rounded-md hover:bg-muted"
            activeProps={{ className: "px-3 py-1.5 rounded-md bg-muted font-medium" }}
          >
            Compare
          </Link>
          <Link
            to="/submit"
            className="px-3 py-1.5 rounded-md hover:bg-muted"
            activeProps={{ className: "px-3 py-1.5 rounded-md bg-muted font-medium" }}
          >
            Submit
          </Link>
          <Link
            to="/about"
            className="px-3 py-1.5 rounded-md hover:bg-muted"
            activeProps={{ className: "px-3 py-1.5 rounded-md bg-muted font-medium" }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

function copyEmail() {
  const email = "sharadgupta27@gmail.com";
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).catch(() => {});
  }
  return true;
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-16">
      <div className="container-page py-8 text-sm text-muted-foreground flex flex-wrap gap-4 justify-between">
        <p>CanopyIndex - a community index for open-source LiDAR tree-structure tools.</p>
        <p>
          Missing a tool?{" "}
          <Link to="/submit" className="underline underline-offset-4 hover:text-foreground">
            Submit it
          </Link>
          .
        </p>
      </div>
      <div className="container-page pb-8 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
        <p>© 2026 Sharad Gupta</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/sharadgupta27"
            target="_blank"
            rel="noopener"
            title="GitHub - sharadgupta27"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sharadgupta27/"
            target="_blank"
            rel="noopener"
            title="LinkedIn - sharadgupta27"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:sharadgupta27@gmail.com"
            onClick={copyEmail}
            title="Click to copy - sharadgupta27@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
