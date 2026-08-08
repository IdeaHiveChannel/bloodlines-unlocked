import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
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
import { ContactDock } from "../components/contact-dock";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-label">404 — off the map</p>
        <h1 className="text-display-xl mt-6">This page does not exist.</h1>
        <div className="mt-8">
          <Link
            to="/{-$locale}"
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
        <p className="text-label">interruption</p>
        <h1 className="text-h2 mt-6">Something stopped the flow.</h1>
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
      { title: "Vital Flow — Vascular & neuro interventional radiology" },
      { name: "description", content: "Advanced image-guided vascular and neurointerventional procedures. Minimally invasive treatment, greater precision, faster recovery." },
      { name: "author", content: "Dr. Mandeep Sagar" },
      { name: "theme-color", content: "#050B16" },
      { property: "og:site_name", content: "Vital Flow — Dr. Mandeep Sagar" },
      { property: "og:title", content: "Vital Flow — Vascular & neuro interventional radiology" },
      { property: "og:description", content: "Advanced image-guided vascular and neurointerventional procedures. Minimally invasive treatment, greater precision, faster recovery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vital Flow — Vascular & neuro interventional radiology" },
      { name: "twitter:description", content: "Advanced image-guided vascular and neurointerventional procedures. Minimally invasive treatment, greater precision, faster recovery." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46458d0b-9109-451f-bd14-79bec0b777cd/id-preview-273914a3--d66b6e61-ef97-4c68-838a-5c10eb7f4318.lovable.app-1782422434769.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/46458d0b-9109-451f-bd14-79bec0b777cd/id-preview-273914a3--d66b6e61-ef97-4c68-838a-5c10eb7f4318.lovable.app-1782422434769.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Vital Flow — Dr. Mandeep Sagar",
          url: "https://bloodlines-unlocked.lovable.app",
          inLanguage: "en",
          description:
            "Image-guided vascular and neurointerventional treatment by Dr. Mandeep Sagar.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const SITE = "https://vascularcaredr.com";

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isMl = pathname === "/ml" || pathname.startsWith("/ml/");
  const base = isMl ? (pathname === "/ml" ? "/" : pathname.slice(3)) : pathname;
  const mlPath = base === "/" ? "/ml" : `/ml${base}`;
  return (
    <html lang={isMl ? "ml" : "en"}>
      <head>
        <HeadContent />
        <link rel="alternate" hrefLang="en" href={`${SITE}${base}`} />
        <link rel="alternate" hrefLang="ml" href={`${SITE}${mlPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE}${base}`} />
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
        <ContactDock />
      </LenisProvider>
    </QueryClientProvider>
  );
}
