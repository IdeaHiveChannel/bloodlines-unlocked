/**
 * Google Analytics 4 (gtag.js) — browser only.
 * Everything is a no-op when the measurement ID is not configured, so the
 * site behaves identically in preview and in local development.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const measurementId = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] as
  | string
  | undefined;

let started = false;

function push(args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Loads gtag.js once, after hydration. */
export function initAnalytics() {
  if (typeof window === "undefined" || started || !measurementId) return;
  started = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  push(["js", new Date()]);
  // Route changes are reported manually below.
  push(["config", measurementId, { send_page_view: false }]);
}

/** Reports a client-side route change. */
export function trackPageView(path: string, locale: string) {
  if (!measurementId) return;
  push(["event", "page_view", { page_path: path, page_location: window.location.href, locale }]);
}

/** Reports a custom funnel event. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!measurementId) return;
  push(["event", name, params]);
}

export const analyticsEnabled = Boolean(measurementId);
