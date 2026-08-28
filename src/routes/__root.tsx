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
import { CookieConsent } from "../components/cookie-consent";
import { useTx } from "../lib/i18n/tx";
import { initAnalytics, trackPageView } from "../lib/analytics";


function NotFoundComponent() {
  const tx = useTx();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-label">{tx("404 — off the map")}</p>
        <h1 className="text-display-xl mt-6">{tx("This page does not exist.")}</h1>
        <div className="mt-8">
          <Link
            to="/{-$locale}"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm tracking-wide hover:bg-white/5 transition-colors"
          >
            {tx("Return home")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const tx = useTx();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-label">{tx("interruption")}</p>
        <h1 className="text-h2 mt-6">{tx("Something stopped the flow.")}</h1>
        <p className="mt-4 text-sm text-[var(--ink-dim)]">{tx("Try once more, or return home.")}</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm text-black hover:opacity-90 transition-opacity"
          >{tx("Try again")}</button>
          <a href="/" className="rounded-full border border-white/15 px-6 py-3 text-sm hover:bg-white/5 transition-colors">{tx("Home")}</a>
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
      { title: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist in Mangalore & Kasaragod" },
      { name: "description", content: "Advanced image-guided treatment through minimally invasive procedures. Treating selected conditions affecting the blood vessels throughout the body, with Pin hole Surgery." },
      { name: "author", content: "Dr. Mandeep Sagar" },
      { name: "theme-color", content: "#050B16" },
      { property: "og:site_name", content: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist" },
      { property: "og:title", content: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist in Mangalore & Kasaragod" },
      { property: "og:description", content: "Advanced image-guided treatment through minimally invasive procedures. Treating selected conditions affecting the blood vessels throughout the body, with Pin hole Surgery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist in Mangalore & Kasaragod" },
      { name: "twitter:description", content: "Advanced image-guided treatment through minimally invasive procedures. Treating selected conditions affecting the blood vessels throughout the body, with Pin hole Surgery." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
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
          name: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist",
          url: "https://vascularcaredr.com",
          inLanguage: "en",
          description:
            "Advanced image-guided treatment through minimally invasive procedures. Treating selected conditions affecting the blood vessels throughout the body, with Pin hole Surgery.",
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
  // Ensure the base path starts with a slash
  const normalizedBase = base.startsWith("/") ? base : `/${base}`;
  const mlPath = normalizedBase === "/" ? "/ml" : `/ml${normalizedBase}`;

  return (
    <html lang={isMl ? "ml" : "en"}>
      <head>
        <HeadContent />
        <link rel="alternate" hrefLang="en" href={`${SITE}${normalizedBase}`} />
        <link rel="alternate" hrefLang="ml" href={`${SITE}${mlPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE}${normalizedBase}`} />
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname, pathname === "/ml" || pathname.startsWith("/ml/") ? "ml" : "en");
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <Loader />
        <Cursor />
        <Navigation />
        <Outlet />
        <ContactDock />
        <CookieConsent />
      </LenisProvider>
    </QueryClientProvider>
  );
}

