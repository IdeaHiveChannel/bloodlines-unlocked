import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { milestones } from "../../lib/content";

export function ExpertiseTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const [open, setOpen] = useState<string | null>(milestones[0]?.id ?? null);

  return (
    <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
      {/* rail */}
      <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-white/[0.08]" />
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-[var(--accent)]"
      />

      <ol className="space-y-px">
        {milestones.map((m, i) => {
          const isOpen = open === m.id;
          return (
            <li key={m.id} className="relative">
              <span
                className={`absolute -left-8 sm:-left-12 top-7 size-[9px] rounded-full transition-all duration-300 ${
                  isOpen
                    ? "bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
                    : "bg-white/25"
                }`}
                style={{ marginLeft: 3 }}
              />
              <button
                type="button"
                data-cursor="link"
                onMouseEnter={() => setOpen(m.id)}
                onFocus={() => setOpen(m.id)}
                onClick={() => setOpen(isOpen ? null : m.id)}
                className="w-full text-left py-5 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors px-2"
              >
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="text-label text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-display text-2xl sm:text-3xl">{m.title}</span>
                  <span className="text-label">{m.meta}</span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-[var(--ink-dim)]">
                        {m.summary}
                      </p>
                      {m.to && (
                        <Link
                          to={m.to}
                          data-cursor="cta"
                          className="mt-5 inline-flex text-label underline"
                        >
                          Read patient stories →
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
