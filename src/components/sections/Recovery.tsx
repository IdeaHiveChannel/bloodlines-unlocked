import { motion } from "framer-motion";

const stages = [
  { t: "Day 0", title: "Procedure", body: "A single small puncture. Local anaesthesia. Often the same day, you walk to your room." },
  { t: "Day 1", title: "Discharge", body: "Most patients return home within 24 hours. No long incisions to heal." },
  { t: "Week 1", title: "Light activity", body: "Walking is encouraged. The puncture site closes. Routine returns gradually." },
  { t: "Month 1", title: "Follow-up imaging", body: "Imaging confirms the vessel remains open and flow is normalising." },
  { t: "Month 3+", title: "Normal life", body: "Most patients are back to full activity with sustained results." },
];

export function Recovery() {
  return (
    <section className="relative bg-[#050B16] py-32">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
        <p className="text-mono-label">Chapter 05 · Recovery</p>
        <h2 className="mt-6 text-display text-[clamp(2rem,4.5vw,4rem)] max-w-3xl">
          Minimally invasive means measurably faster.
        </h2>
        <ol className="mt-16 relative grid gap-6 md:grid-cols-5">
          <div className="hidden md:block absolute top-[34px] left-6 right-6 h-px bg-white/10">
            <div className="h-full w-full bg-[var(--accent)] origin-left animate-pulse opacity-40" />
          </div>
          {stages.map((s, i) => (
            <motion.li key={s.t}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
              <div className="size-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
              <p className="mt-4 text-mono-label">{s.t}</p>
              <h3 className="mt-2 text-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink-dim)]">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
