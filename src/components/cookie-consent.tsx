import { useEffect, useState } from "react";

import { getConsent, setConsent } from "../lib/analytics";
import { useTx } from "../lib/i18n/tx";
import { LocaleLink } from "./locale-link";

/**
 * Cookie consent banner. Analytics stay dormant until the visitor accepts.
 * Renders only after hydration, once, and never again after a decision.
 */
export function CookieConsent() {
  const tx = useTx();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={tx("Cookie consent")}
      className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#0A1220]/95 p-4 shadow-2xl backdrop-blur-md sm:inset-x-6 sm:p-5"
    >
      <p className="text-sm leading-relaxed text-[var(--ink-dim)]">
        {tx(
          "We use analytics cookies to understand how visitors use this site. No cookies are set until you agree.",
        )}{" "}
        <LocaleLink to="/privacy" className="underline underline-offset-4 hover:text-[var(--ink)]">
          {tx("Privacy policy")}
        </LocaleLink>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => decide("granted")}
          className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm text-black transition-opacity hover:opacity-90"
        >
          {tx("Accept")}
        </button>
        <button
          type="button"
          onClick={() => decide("denied")}
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition-colors hover:bg-white/5"
        >
          {tx("Decline")}
        </button>
      </div>
    </div>
  );
}
