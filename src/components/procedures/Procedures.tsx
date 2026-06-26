import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { procedures } from "../../lib/content";

export function Procedures() {
  return (
    <section className="relative bg-[#050B16]">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 pt-32 pb-12">
        <p className="text-label">Chapter 04 · Intervention</p>
        <h2 className="mt-6 text-display text-[clamp(2.4rem,5vw,4.5rem)] max-w-3xl">
          Every procedure, told as a story.
        </h2>
        <p className="mt-6 max-w-xl text-[14px] text-[var(--ink-dim)]">
          Scroll through each intervention beat by beat. Nothing autoplays — the rhythm is yours.
        </p>
      </div>
      {procedures.map((p, idx) => <ProcedureStory key={p.slug} index={idx} name={p.name} oneLiner={p.oneLiner} beats={p.beats} />)}
    </section>
  );
}

function ProcedureStory({ index, name, oneLiner, beats }: { index: number; name: string; oneLiner: string; beats: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="relative" style={{ height: `${beats.length * 70}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col">
        <div className="mx-auto w-full max-w-[1480px] px-6 sm:px-10 pt-32">
          <p className="text-label">Procedure {String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 text-display text-[clamp(2rem,5vw,4rem)]">{name}</h3>
          <p className="mt-3 text-[14px] text-[var(--ink-dim)] max-w-md">{oneLiner}</p>
        </div>
        <div className="flex-1 grid lg:grid-cols-2 items-center gap-10 mx-auto w-full max-w-[1480px] px-6 sm:px-10 pb-20">
          <ProcedureCanvas slug={`p${index}`} progress={scrollYProgress} beats={beats.length} />
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

function Beat({ text, index, total, progress }: { text: string; index: number; total: number; progress: MotionValue<number> }) {
  const center = (index + 0.5) / total;
  const span = 1 / total;
  const clamp = (n: number) => Math.max(0, Math.min(1, n));
  const a = clamp(center - span);
  const b = clamp(center - span * 0.4);
  const c = clamp(center + span * 0.4);
  const d = clamp(center + span);
  // ensure strictly increasing
  const eps = 0.0001;
  const xa = a, xb = Math.max(xa + eps, b), xc = Math.max(xb + eps, c), xd = Math.max(xc + eps, d);
  const opacity = useTransform(progress, [xa, xb, xc, xd], [0, 1, 1, 0]);
  const y = useTransform(progress, [xa, (xb + xc) / 2, xd], [40, 0, -40]);
  const filter = useTransform(progress, [xa, xb, xc, xd], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);
  return (
    <motion.div style={{ opacity, y, filter }}
      className="absolute inset-0 flex flex-col justify-center">
      <p className="text-label">Beat · 0{index + 1}</p>
      <p className="mt-4 text-display text-2xl sm:text-3xl leading-tight max-w-md">{text}</p>
    </motion.div>
  );
}


function ProcedureCanvas({ progress, beats }: { slug: string; progress: MotionValue<number>; beats: number }) {
  // animated artery + catheter + balloon driven by scroll
  const catheterX = useTransform(progress, [0, 1], [-180, 100]);
  const balloonScale = useTransform(progress, [0.5, 0.7], [0.6, 1.4]);
  const balloonOpacity = useTransform(progress, [0.45, 0.55, 0.85, 1], [0, 1, 1, 0]);
  const plaqueOpacity = useTransform(progress, [0.6, 0.8], [1, 0.15]);
  const flowOpacity = useTransform(progress, [0, 0.85, 1], [0.2, 0.3, 1]);
  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto rounded-3xl border border-white/[0.06] overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
      <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full vessel-glow">
        {/* Vessel walls */}
        <path d="M50,300 C150,260 250,260 600,260" fill="none" stroke="var(--accent-soft)" strokeWidth="1" opacity="0.7" />
        <path d="M50,340 C150,380 250,380 600,380" fill="none" stroke="var(--accent-soft)" strokeWidth="1" opacity="0.7" />
        {/* Plaque (narrows artery) */}
        <motion.g style={{ opacity: plaqueOpacity }}>
          <ellipse cx="320" cy="280" rx="60" ry="14" fill="color-mix(in oklab, var(--blood) 60%, black)" opacity="0.7" />
          <ellipse cx="320" cy="360" rx="60" ry="14" fill="color-mix(in oklab, var(--blood) 60%, black)" opacity="0.7" />
        </motion.g>
        {/* Catheter */}
        <motion.g style={{ x: catheterX }}>
          <line x1="0" y1="320" x2="320" y2="320" stroke="white" strokeWidth="2" opacity="0.6" />
          <circle cx="320" cy="320" r="6" fill="white" />
        </motion.g>
        {/* Balloon */}
        <motion.ellipse cx="320" cy="320" rx="55" ry="40" style={{ scale: balloonScale, opacity: balloonOpacity, transformOrigin: "320px 320px" }}
          fill="color-mix(in oklab, var(--accent) 25%, transparent)" stroke="var(--accent)" strokeWidth="1.5" />
        {/* Flow */}
        <motion.g style={{ opacity: flowOpacity }} stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M50,320 L600,320" strokeDasharray="14 30" style={{ animation: "flow 2s linear infinite", filter: "drop-shadow(0 0 6px var(--accent))" }} />
        </motion.g>
      </svg>
      <div className="absolute bottom-4 left-4 right-4 flex gap-1">
        {Array.from({ length: beats }).map((_, i) => (
          <div key={i} className="h-px flex-1 bg-white/10 overflow-hidden">
            <ScrollBar progress={progress} index={i} total={beats} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollBar({ progress, index, total }: { progress: MotionValue<number>; index: number; total: number }) {
  const start = index / total;
  const end = (index + 1) / total;
  const w = useTransform(progress, [start, end], ["0%", "100%"]);
  return <motion.div className="h-full bg-[var(--accent)]" style={{ width: w }} />;
}
