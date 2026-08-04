import { useTx } from "@/lib/i18n/tx";
import { LocaleLink } from "../../components/locale-link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import { featuredProcedures, type Storyboard } from "../../lib/content";
import { StoryboardCanvas } from "./canvases";

export function Procedures() {
  const tx = useTx();
  return (
    <section className="relative bg-[#050B16]">
      <div className="shell pt-20 pb-8 sm:pt-28 sm:pb-12">
        <p className="text-label">{tx("Chapter 04 · Procedures")}</p>
        <h2 className="mt-4 max-w-3xl text-h1 sm:mt-6">
          {tx("Every procedure has its own story.")}
        </h2>
        <p className="mt-4 max-w-xl text-body text-[var(--ink-dim)] sm:mt-6">
          {tx("No two interventions are alike. Each follows a different path, guided in real time with advanced imaging and performed through a tiny access point rather than a large incision.")}
        </p>
      </div>
      {featuredProcedures.map((p, idx) => (
        <ProcedureStory
          key={p.slug}
          index={idx}
          slug={p.slug}
          name={p.name}
          oneLiner={p.oneLiner}
          beats={p.beats}
          storyboard={p.storyboard}
        />
      ))}
      <div className="shell pb-20 sm:pb-28">
        <LocaleLink to="/procedures" data-cursor="link" className="text-label underline">
          {tx("See every procedure →")}
        </LocaleLink>
      </div>
    </section>
  );
}

function ProcedureStory({
  index,
  slug,
  name,
  oneLiner,
  beats,
  storyboard,
}: {
  index: number;
  slug: string;
  name: string;
  oneLiner: string;
  beats: string[];
  storyboard: Storyboard;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="relative" style={{ height: `${beats.length * 70}svh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center">
        <div className="shell pt-24 sm:pt-28">
          <p className="text-label">Procedure {String(index + 1).padStart(2, "0")}</p>
          <LocaleLink to="/procedures/$slug" params={{ slug }} data-cursor="link">
            <h3 className="mt-2 text-h2">{name}</h3>
          </LocaleLink>
          <p className="mt-2 max-w-md text-small text-[var(--ink-dim)]">{oneLiner}</p>
        </div>
        <div className="shell grid flex-1 items-center gap-5 pb-10 sm:gap-8 lg:grid-cols-2 lg:pb-16">
          <div className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[560px] rounded-3xl border border-white/[0.06] overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
            <StoryboardCanvas storyboard={storyboard} progress={scrollYProgress} />
            <div className="absolute bottom-4 left-4 right-4 flex gap-1">
              {beats.map((_, i) => (
                <div key={i} className="h-px flex-1 bg-white/10 overflow-hidden">
                  <ScrollBar progress={scrollYProgress} index={i} total={beats.length} />
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[28svh] sm:h-[34svh] lg:h-[46vh]">
            {beats.map((b, i) => (
              <Beat key={i} text={b} index={i} total={beats.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Beat({
  text,
  index,
  total,
  progress,
}: {
  text: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const center = (index + 0.5) / total;
  const span = 1 / total;
  const clamp = (n: number) => Math.max(0, Math.min(1, n));
  const a = clamp(center - span);
  const b = clamp(center - span * 0.4);
  const c = clamp(center + span * 0.4);
  const d = clamp(center + span);
  const eps = 0.0001;
  const xa = a;
  const xb = Math.max(xa + eps, b);
  const xc = Math.max(xb + eps, c);
  const xd = Math.max(xc + eps, d);
  const opacity = useTransform(progress, [xa, xb, xc, xd], [0, 1, 1, 0]);
  const y = useTransform(progress, [xa, (xb + xc) / 2, xd], [40, 0, -40]);
  const filter = useTransform(progress, [xa, xb, xc, xd], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  return (
    <motion.div style={{ opacity, y, filter }} className="absolute inset-0 flex flex-col justify-center">
      <p className="text-label">Beat · 0{index + 1}</p>
      <p className="mt-3 max-w-md text-h3">{text}</p>
    </motion.div>
  );
}

function ScrollBar({ progress, index, total }: { progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const w = useTransform(progress, [start, end], ["0%", "100%"]);
  return <motion.div className="h-full bg-[var(--accent)]" style={{ width: w }} />;
}
