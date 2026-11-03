import { LocaleLink } from "../../components/locale-link";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring } from "framer-motion";

import { journey } from "../../lib/credentials";
import { useTx } from "../../lib/i18n/tx";
import { EvidenceGallery } from "../credentials/EvidenceViewer";

export function ExpertiseTimeline() {
  const tx = useTx();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const [open, setOpen] = useState<string | null>(null);
  const years = [...new Set(journey.map((j) => j.year))];

  return (
    <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
      <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-white/[0.08]" />
      <motion.div
        style={reduced ? { scaleY: 1, originY: 0 } : { scaleY, originY: 0 }}
        className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-[var(--accent)]"
      />
      {years.map((year) => (
        <div key={year} className="mb-8">
          <p className="text-h2 text-[var(--accent)] mb-2">{year}</p>
          <ol className="space-y-px">
            {journey.filter((j) => j.year === year).map((m) => {
              const isOpen = open === m.id;
              return (
                <li key={m.id} id={m.id} className="relative scroll-mt-32">
                  <span
                    className={`absolute -left-8 sm:-left-12 top-7 size-[9px] rounded-full transition-all duration-300 ${isOpen ? "bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" : "bg-white/25"}`}
                    style={{ marginLeft: 3 }}
                  />
                  <button
                    type="button"
                    data-cursor="link"
                    aria-expanded={isOpen}
                    aria-controls={`${m.id}-panel`}
                    onClick={() => setOpen(isOpen ? null : m.id)}
                    className="w-full text-left py-5 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors px-2"
                  >
                    <span className="text-label">{tx(m.category)}</span>
                    <span className="mt-1 block text-h3">{tx(m.title)}</span>
                    <span className="mt-1 block text-caption text-[var(--ink-dim)]">{tx(m.meta)}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${m.id}-panel`}
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden px-2"
                      >
                        <p className="mt-4 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">{tx(m.summary)}</p>
                        {m.evidence && <EvidenceGallery items={m.evidence} />}
                        <div className="mt-4 mb-6 flex flex-wrap gap-4">
                          {m.link && (
                            <a href={m.link.href} target="_blank" rel="noopener noreferrer" className="text-label underline">{tx(m.link.label)} ↗</a>
                          )}
                          {m.internal && (m.internal.to === "/about"
                            ? <LocaleLink to="/about" className="text-label underline">{tx(m.internal.label)} →</LocaleLink>
                            : <LocaleLink to="/procedures/$slug" params={{ slug: m.internal.slug! }} className="text-label underline">{tx(m.internal.label)} →</LocaleLink>)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
