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
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LenisProvider } from "../components/lenis-provider";
import { Cursor } from "../components/cursor";
import { Loader } from "../components/loader";
import { Navigation } from "../components/navigation";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-mono-label">404 — off the map</p>
        <h1 className="text-display mt-6 text-6xl">This page does not exist.</h1>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm tracking-wide hover:bg-white/5 transition-colors"
          >
            Return home
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
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-mono-label">interruption</p>
        <h1 className="text-display mt-6 text-5xl">Something stopped the flow.</h1>
        <p className="mt-4 text-sm text-[var(--ink-dim)]">Try once more, or return home.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm text-black hover:opacity-90 transition-opacity"
          >Try again</button>
          <a href="/" className="rounded-full border border-white/15 px-6 py-3 text-sm hover:bg-white/5 transition-colors">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist" },
      { name: "description", content: "Advanced image-guided vascular and neurointerventional procedures. Minimally invasive treatment, greater precision, faster recovery." },
      { name: "author", content: "Dr. Mandeep Sagar" },
      { name: "theme-color", content: "#050B16" },
      { property: "og:title", content: "Dr. Mandeep Sagar — Interventional Radiology" },
      { property: "og:description", content: "Restoring blood flow with image-guided precision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,200..600&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <Loader />
        <Cursor />
        <Navigation />
        <Outlet />
      </LenisProvider>
    </QueryClientProvider>
  );
}
