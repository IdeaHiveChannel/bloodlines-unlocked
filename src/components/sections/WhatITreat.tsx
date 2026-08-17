import { useT } from "@/lib/i18n/react";
import { useTx } from "@/lib/i18n/tx";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LocaleLink } from "../locale-link";
import { useLocale } from "@/lib/i18n/react";

/**
 * Fourteen anatomical categories, each a doorway into the relevant guide.
 * Standardized to one merged title + one natural explanation.
 */
export function WhatITreat() {
  const t = useT();
  const tx = useTx();
  const locale = useLocale();
  const isMl = locale === "ml";

  return (
    <section className="relative border-t border-white/[0.05] bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">{tx(t.whatITreat.eyebrow)}</p>
        <div className="mt-4 grid gap-4 lg:mt-6 lg:grid-cols-12 lg:gap-10">
          <h2 className="text-display-xl lg:col-span-6">{tx(t.whatITreat.h2)}</h2>
          <p className="max-w-xl text-small leading-relaxed text-[var(--ink-dim)] lg:col-span-6 lg:pt-4">
            {tx(t.whatITreat.intro)}
          </p>
        </div>

        <ul className="mt-7 grid gap-3 sm:mt-9 sm:gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-px lg:overflow-hidden lg:rounded-2xl lg:border lg:border-white/[0.06] lg:bg-white/[0.06]">
          {t.whatITreat.items.map((c, i) => (
            <motion.li
              key={c.to + i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.04 }}
              className="bg-[#050B16]"
            >
              <LocaleLink
                to={c.to}
                data-cursor="link"
                className="group flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7 transition-colors hover:bg-white/[0.03] lg:flex-row lg:items-start lg:gap-4"
              >
                <div className="flex flex-col gap-2 sm:gap-3">
                  <span className="text-label opacity-40">{c.id}</span>
                  <h3 className={`
                    font-display font-semibold transition-colors group-hover:text-[var(--accent)]
                    text-[18px] sm:text-[20px] 
                    ${isMl ? 'leading-[1.4] sm:leading-[1.5]' : 'leading-[1.2] sm:leading-[1.3]'}
                  `}>
                    {tx(c.title)}
                  </h3>
                  <p className={`
                    text-[14px] sm:text-[15px] text-[var(--ink-dim)]
                    ${isMl ? 'leading-[1.65] sm:leading-[1.75]' : 'leading-[1.5] sm:leading-[1.6]'}
                  `}>
                    {tx(c.description)}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-end lg:mt-1">
                  <ArrowRight
                    size={18}
                    className="text-[var(--ink-dim)] transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                  />
                </div>
              </LocaleLink>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 sm:mt-12 lg:mt-16">
          <LocaleLink to="/diseases" data-cursor="link" className="group inline-flex items-center gap-2 text-label underline decoration-white/20 underline-offset-4 hover:decoration-[var(--accent)] transition-colors">
            {tx(t.whatITreat.cta)}
          </LocaleLink>
        </div>
      </div>
    </section>
  );
}