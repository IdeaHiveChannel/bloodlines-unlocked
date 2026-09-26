import { useTx } from "@/lib/i18n/tx";
import { motion } from "framer-motion";

const stages = [
  { t: "Before discharge", title: "Individual review", body: "The treating team checks the access site, symptoms, medicines, and whether observation or a longer stay is needed." },
  { t: "Early recovery", title: "Activity guidance", body: "Walking, lifting, wound care, and return to work depend on the procedure and your health." },
  { t: "Follow-up", title: "Clinical review", body: "The timing and type of follow-up are chosen for the condition and treatment performed." },
  { t: "Ongoing care", title: "Medicines and risk factors", body: "Some patients need long-term medicines, wound care, rehabilitation, or specialist follow-up." },
  { t: "If symptoms change", title: "Seek advice", body: "Follow the discharge instructions and seek urgent help for the warning signs your treating team explains." },
];

export function Recovery() {
  const tx = useTx();
  return (
    <section className="relative bg-[#050B16] section-y">
      <div className="shell">
        <p className="text-label">{tx("Recovery")}</p>
        <h2 className="text-h1 mt-6 max-w-3xl">
          {tx("Treatment is only one part of recovery.")}
        </h2>
        <p className="mt-6 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">
          {tx("Recovery is different for every procedure and patient. These stages explain what is usually planned, not how quickly any individual will recover. Your treating team's instructions take priority.")}
        </p>
        <ol className="mt-16 relative grid gap-6 md:grid-cols-5">
          <div className="hidden md:block absolute top-[34px] left-6 right-6 h-px bg-white/10">
            <div className="h-full w-full bg-[var(--accent)] origin-left animate-pulse opacity-40" />
          </div>
          {stages.map((s, i) => (
            <motion.li key={tx(s.t)}
               initial={false}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
              <div className="size-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
              <p className="mt-4 text-label">{tx(s.t)}</p>
              <h3 className="text-card-title mt-2">{tx(s.title)}</h3>
              <p className="mt-3 text-caption leading-relaxed text-[var(--ink-dim)]">{tx(s.body)}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
