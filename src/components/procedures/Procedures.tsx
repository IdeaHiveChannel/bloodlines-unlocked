import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { featuredProcedures, type Storyboard } from "../../lib/content";
import { StoryboardCanvas } from "./canvases";

export function Procedures() {
  return (
    <section className="relative bg-[#050B16]">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 pt-32 pb-12">
        <p className="text-label">Chapter 04 · Intervention</p>
        <h2 className="mt-6 text-display text-[clamp(2.4rem,5vw,4.5rem)] max-w-3xl">
          Every procedure, told as its own story.
        </h2>
        <p className="mt-6 max-w-xl text-[14px] text-[var(--ink-dim)]">
          Scroll through each intervention beat by beat. No two look alike, because no two are alike.
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
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 pb-32">
        <Link to="/procedures" data-cursor="link" className="text-label underline">
          See every procedure →
        </Link>
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
    <div ref={ref} className="relative" style={{ height: `${beats.length * 70}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-10 pt-32">
          <p className="text-label">Procedure {String(index + 1).padStart(2, "0")}</p>
          <Link to="/procedures/$slug" params={{ slug }} data-cursor="link">
            <h3 className="mt-3 text-display text-[clamp(2rem,5vw,4rem)]">{name}</h3>
          </Link>
          <p className="mt-3 text-[14px] text-[var(--ink-dim)] max-w-md">{oneLiner}</p>
        </div>
        <div className="flex-1 grid lg:grid-cols-2 items-center gap-10 mx-auto w-full max-w-[1480px] px-6 sm:px-10 pb-20">
          <div className="relative aspect-square w-full max-w-[560px] mx-auto rounded-3xl border border-white/[0.06] overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
            <StoryboardCanvas storyboard={storyboard} progress={scrollYProgress} />
            <div className="absolute bottom-4 left-4 right-4 flex gap-1">
              {beats.map((_, i) => (
                <div key={i} className="h-px flex-1 bg-white/10 overflow-hidden">
                  <ScrollBar progress={scrollYProgress} index={i} total={beats.length} />
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[60vh] sm:h-[50vh]">
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
      <p className="mt-4 text-display text-2xl sm:text-3xl leading-tight max-w-md">{text}</p>
    </motion.div>
  );
}

function ScrollBar({ progress, index, total }: { progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const w = useTransform(progress, [start, end], ["0%", "100%"]);
  return <motion.div className="h-full bg-[var(--accent)]" style={{ width: w }} />;
}
