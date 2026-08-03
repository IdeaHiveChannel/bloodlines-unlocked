import { motion } from "framer-motion";

export function Transition() {
  return (
    <section className="relative bg-[#050B16] py-32 sm:py-44 border-t border-white/[0.05]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 60% at 50% 50%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-[clamp(2.2rem,5.5vw,4.5rem)]"
        >
          Every organ depends on blood.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-2xl text-body-lg text-[var(--ink-dim)]"
        >
          When disease begins inside a vessel, treatment changes.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-[14.5px] leading-relaxed text-[var(--ink-dim)]"
        >
          Image-guided intervention reaches the disease from within, preserving healthy tissue and
          reducing recovery wherever appropriate.
        </motion.p>
      </div>
    </section>
  );
}
