import { useTx } from "@/lib/i18n/tx";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { n: "01", title: "Consultation", body: "Symptoms heard. History reviewed. The first decision is whether intervention is needed at all." },
  { n: "02", title: "Imaging", body: "Doppler. CT angiography. MR angiography. The disease is seen before it is touched." },
  { n: "03", title: "Diagnosis", body: "The plan is shared in plain language. Options weighed. Questions answered." },
  { n: "04", title: "Treatment planning", body: "Every option is put on the table — including doing nothing. Risk, benefit and timing are discussed until the choice is yours." },
  { n: "05", title: "Procedure", body: "Performed in a hybrid cath lab. Real-time imaging guides every millimetre." },
  { n: "06", title: "Recovery", body: "Short stay. Same-day or next-day discharge for most procedures." },
  { n: "07", title: "Follow-up", body: "Imaging review and long-term care to keep what was restored." },
];

export function Journey() {
  const tx = useTx();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5vw", `-${(steps.length - 1) * 80}vw`]);
  return (
    <section ref={ref} className="relative bg-[#050B16]" style={{ height: `${steps.length * 90}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="shell mb-12">
          <p className="text-label">{tx("Patient journey")}</p>
          <h2 className="text-h1 mt-4">{tx("From diagnosis to recovery.")}</h2>
          <p className="mt-5 max-w-2xl text-small leading-relaxed text-[var(--ink-dim)]">{tx("Every decision begins with understanding the disease. Imaging guides the diagnosis, treatment is planned around the individual patient, and follow-up continues long after the procedure is complete.")}</p>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-[5vw] will-change-transform">
          {steps.map((s) => (
            <article key={s.n} className="shrink-0 w-[78vw] sm:w-[60vw] lg:w-[48vw] max-w-[720px] rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-10 lg:p-14">
              <p className="text-label">{tx("Stage")} {s.n}</p>
              <h3 className="text-display-xl mt-6">{tx(s.title)}</h3>
              <p className="mt-8 max-w-md text-small leading-relaxed text-[var(--ink-dim)]">{tx(s.body)}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

