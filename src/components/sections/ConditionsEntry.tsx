import { useT } from "@/lib/i18n/react";
import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../locale-link";
import { trackEvent } from "../../lib/analytics";

import { ArrowRight } from "lucide-react";

/**
 * Compact home-page entry point into the conditions catalogue.
 * The full catalogue lives at /conditions.
 */
export function ConditionsEntry() {
  const t = useT();
  const tx = useTx();

  return (
    <section className="relative border-t border-white/[0.05] bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">{tx(t.whatITreat.eyebrow)}</p>
        <div className="mt-4 grid gap-6 lg:mt-6 lg:grid-cols-12 lg:gap-10">
          <h2 className="text-display-xl lg:col-span-5">{tx(t.whatITreat.eyebrow)}</h2>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
              {tx(t.whatITreat.intro)}
            </p>
            <LocaleLink
              to="/conditions"
              data-cursor="link"
              onClick={() => trackEvent("select_conditions_gateway", { surface: "conditions_entry" })}
              className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-button text-[var(--ink)] transition-colors hover:bg-white/10"
            >

              {tx(t.whatITreat.cta)}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
}
