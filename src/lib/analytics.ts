/**
 * Google Analytics 4 (gtag.js) — browser only, consent gated.
 * Nothing loads or fires until the visitor grants cookie consent, and
 * everything is a no-op when the measurement ID is not configured.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const measurementId = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] as
  | string
  | undefined;

export const CONSENT_KEY = "vf-cookie-consent";
export type ConsentValue = "granted" | "denied";

let started = false;
let consent: ConsentValue | null = null;
const listeners = new Set<(v: ConsentValue | null) => void>();

/** Reads the stored decision. Returns null when the visitor has not chosen yet. */
export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  if (consent) return consent;
  const stored = window.localStorage.getItem(CONSENT_KEY);
  consent = stored === "granted" || stored === "denied" ? stored : null;
  return consent;
}

export function onConsentChange(fn: (v: ConsentValue | null) => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function setConsent(value: ConsentValue) {
  consent = value;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_KEY, value);
  }
  if (value === "granted") initAnalytics();
  listeners.forEach((fn) => fn(value));
}

function push(args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/** Loads gtag.js once, after hydration — only with consent. */
export function initAnalytics() {
  if (typeof window === "undefined" || started || !measurementId) return;
  if (getConsent() !== "granted") return;
  started = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  push(["js", new Date()]);
  push(["consent", "default", { analytics_storage: "granted" }]);
  // Route changes are reported manually below.
  push(["config", measurementId, { send_page_view: false }]);
}

function allowed() {
  return Boolean(measurementId) && getConsent() === "granted";
}

/** Reports a client-side route change. */
export function trackPageView(path: string, locale: string) {
  if (!allowed()) return;
  push(["event", "page_view", { page_path: path, page_location: window.location.href, locale }]);
}

/** Reports a custom funnel event. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!allowed()) return;
  push(["event", name, params]);
}

export const analyticsEnabled = Boolean(measurementId);
