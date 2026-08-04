import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../../components/locale-link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "../../lib/pillars";

export function ConditionsGateway() {
  const tx = useTx();
  return (
    <section className="relative bg-[#050B16] section-y border-t border-white/[0.05]">
      <div className="shell">
        <p className="text-label">{tx("Chapter 03 · Conditions")}</p>
        <div className="mt-6 grid lg:grid-cols-12 gap-10">
          <h2 className="text-display-xl lg:col-span-6">
            {tx("Different diseases. One philosophy.")}
          </h2>
          <p className="lg:col-span-6 lg:pt-4 max-w-xl text-small leading-relaxed text-[var(--ink-dim)]">
            {tx("Every condition has its own cause, its own behaviour and its own treatment pathway.\n            Explore how image-guided intervention is used across the body — from emergency stroke\n            care to limb salvage, thyroid nodules and liver tumours.")}
          </p>
        </div>

        <ol className="mt-20 border-t border-white/[0.07]">
          {pillars.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04 }}
            >
              <LocaleLink
                to="/diseases/$slug"
                params={{ slug: p.slug }}
                data-cursor="link"
                className="group flex items-baseline gap-6 border-b border-white/[0.07] py-6 sm:py-7 transition-colors hover:bg-white/[0.02] px-2 -mx-2"
              >
                <span className="text-label shrink-0 w-10">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 min-w-0">
                  <span className="text-h1 block transition-colors group-hover:text-[color-mix(in_oklab,var(--accent)_75%,white)]">
                    {p.name}
                  </span>
                  <span className="mt-2 block text-caption leading-relaxed text-[var(--ink-dim)] max-w-2xl line-clamp-1 sm:line-clamp-none">
                    {p.summary}
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[var(--ink-dim)] transition-all group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </LocaleLink>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-6">
          <LocaleLink to="/diseases" data-cursor="link" className="text-label underline">
            {tx("All disease guides →")}
          </LocaleLink>
          <LocaleLink to="/conditions" data-cursor="link" className="text-label underline">
            {tx("Full conditions catalogue →")}
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}
