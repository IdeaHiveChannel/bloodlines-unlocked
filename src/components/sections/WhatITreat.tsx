import { useT } from "@/lib/i18n/react";
import { useTx } from "@/lib/i18n/tx";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { LocaleLink } from "../locale-link";
import { useLocale } from "@/lib/i18n/react";
import { useState } from "react";

/**
 * Fourteen anatomical categories, each a doorway into the relevant guide.
 * Refactored for a compact, high-hierarchy presentation on mobile.
 */
export function WhatITreat() {
  const t = useT();
  const tx = useTx();
  const locale = useLocale();
  const isMl = locale === "ml";
  const [isExpanded, setIsExpanded] = useState(false);

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

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-px lg:overflow-hidden lg:rounded-2xl lg:border lg:border-white/[0.06] lg:bg-white/[0.06]">
          {t.whatITreat.items.map((c: any, i: number) => {
            const titleText = tx(c.title);
            const patientText = c.patientLanguage ? tx(c.patientLanguage) : "";
            const descText = tx(c.description);
            
            // Malayalam mobile design rule: 
            // If Malayalam and combined text might be too long, 
            // merge patient language into description or title if preferred.
            // But here we'll follow the specific hierarchy: Category, Condition, Patient Term, Description.
            
            return (
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
                  className="group flex flex-col h-full p-6 sm:p-7 lg:p-8 transition-colors hover:bg-white/[0.03] border border-white/[0.05] rounded-xl lg:border-none lg:rounded-none"
                >
                  <div className="flex-1">
                    <span className="text-[10px] font-medium tracking-widest text-[var(--ink-dim)] opacity-40 uppercase lg:text-[12px]">
                      {tx(c.category)}
                    </span>
                    
                    <h3 className={`
                      mt-2 font-display font-semibold transition-colors group-hover:text-[var(--accent)]
                      text-[18px] sm:text-[20px] 
                      ${isMl ? 'leading-[1.4]' : 'leading-[1.3]'}
                    `}>
                      {titleText}
                    </h3>

                    {patientText && (
                      <p className={`
                        mt-1 font-medium text-[var(--accent)] opacity-80
                        text-[13px] sm:text-[14px] leading-tight
                      `}>
                        {patientText}
                      </p>
                    )}

                    <p className={`
                      mt-3 text-[var(--ink-dim)]
                      text-[14px] sm:text-[15px]
                      ${isMl ? 'leading-[1.6]' : 'leading-[1.5]'}
                      line-clamp-3 lg:line-clamp-none
                    `}>
                      {descText}
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
            );
          })}
        </ul>

        {/* More Conditions - Mobile Expandable / Desktop Grid */}
        <div className="mt-10 sm:mt-12 lg:mt-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden w-full flex items-center justify-between p-6 border border-white/10 rounded-xl bg-white/[0.02] text-label"
          >
            <span>{tx(t.whatITreat.moreConditionsLabel)}</span>
            {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
          </button>

          <AnimatePresence>
            {(isExpanded || true) && (
              <motion.div
                initial={false}
                animate={{ 
                  height: isExpanded ? "auto" : 0, 
                  opacity: isExpanded ? 1 : 0,
                  marginTop: isExpanded ? 16 : 0
                }}
                className={`overflow-hidden lg:h-auto lg:opacity-100 lg:mt-16 lg:block ${!isExpanded ? 'hidden lg:block' : ''}`}
              >
                <div className="lg:border-t lg:border-white/10 lg:pt-10">
                  <h4 className="hidden lg:block text-label mb-8">{tx(t.whatITreat.moreConditionsLabel)}</h4>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-4">
                    {t.whatITreat.moreConditions.map((condition: string, i: number) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 py-2 border-b border-white/[0.05] lg:border-none"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-40 shrink-0" />
                        <span className="text-[14px] text-[var(--ink-dim)] lg:text-[15px]">
                          {tx(condition)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 sm:mt-12 lg:mt-20">
            <LocaleLink to="/diseases" data-cursor="link" className="group inline-flex items-center gap-2 text-label underline decoration-white/20 underline-offset-4 hover:decoration-[var(--accent)] transition-colors">
              {tx(t.whatITreat.cta)}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
}