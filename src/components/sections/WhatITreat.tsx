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
        <div className="mt-4 grid gap-5 lg:mt-6 lg:grid-cols-12 lg:gap-10">
          <h2 className="text-display-xl lg:col-span-6">{tx(t.whatITreat.h2)}</h2>
          <p className="max-w-xl text-small leading-relaxed text-[var(--ink-dim)] lg:col-span-6 lg:pt-4">
            {tx(t.whatITreat.intro)}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-px lg:overflow-hidden lg:rounded-2xl lg:border lg:border-white/[0.06] lg:bg-white/[0.06]">
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
                className="group flex flex-col h-full p-6 sm:p-7 lg:p-8 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex-1">
                  <span className="text-[12px] font-medium tracking-widest text-[var(--ink-dim)] opacity-40 uppercase">
                    {c.id}
                  </span>
                  <h3 className={`
                    mt-3 font-display font-semibold transition-colors group-hover:text-[var(--accent)]
                    text-[18px] sm:text-[20px] 
                    leading-[1.4] sm:leading-[1.5]
                  `}>
                    {tx(c.title)}
                  </h3>
                  <p className={`
                    mt-3 text-[14px] sm:text-[15px] text-[var(--ink-dim)]
                    leading-[1.6] sm:leading-[1.7]
                  `}>
                    {tx(c.description)}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-start lg:justify-end">
                  <div className="flex items-center gap-2 text-[var(--ink-dim)] group-hover:text-[var(--accent)] transition-colors">
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
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