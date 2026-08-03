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
    <section className="relative bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">Chapter 06 · Recovery</p>
        <h2 className="text-h1 mt-6 max-w-3xl">
          Treatment is only one part of recovery.
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--ink-dim)]">
          Minimally invasive intervention is designed to reduce trauma, shorten hospital stays and help
          patients return to daily life sooner, while maintaining long-term follow-up where required.
        </p>
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
              <p className="mt-4 text-label">{s.t}</p>
              <h3 className="text-card-title mt-2">{s.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[var(--ink-dim)]">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
