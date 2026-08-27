import { useTx } from "@/lib/i18n/tx";
import { useT } from "@/lib/i18n/react";
import { LocaleLink } from "../../components/locale-link";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import { featuredProcedures, type Storyboard } from "../../lib/content";
import { StoryboardCanvas } from "./canvases";

export function Procedures() {
  const t = useT();
  const tx = useTx();
  return (
    <section className="relative bg-[#050B16]">
      <div className="shell pt-20 pb-8 sm:pt-28 sm:pb-12">
        <p className="text-label">{t.proceduresPage.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-h1 sm:mt-6">
          {t.proceduresPage.h2}
        </h2>
        <p className="mt-4 max-w-xl text-body text-[var(--ink-dim)] sm:mt-6">
          {t.proceduresPage.description}
        </p>
      </div>
      {t.proceduresPage.list.map((p: any, idx: number) => (
        <ProcedureStory
          key={p.slug}
          index={idx}
          slug={p.slug}
          name={p.name}
          oneLiner={p.oneLiner}
          beats={p.beats}
          storyboard={featuredProcedures.find((fp) => fp.slug === p.slug)?.storyboard || "angioplasty"}
        />
      ))}
      <div className="shell pb-20 sm:pb-28">
        <LocaleLink to="/procedures" data-cursor="link" className="text-label underline">
          {t.proceduresPage.seeEvery}
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
  const t = useT();
  const tx = useTx();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="relative" style={{ height: `${beats.length * 62}svh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center">
        {/* left column on desktop: identity + beat; right column: the scene */}
        <div className="shell grid flex-1 content-center items-center gap-5 pt-20 pb-10 sm:gap-8 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:pb-14">
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:h-full">
            <p className="text-label">{t.proceduresPage.procedure} {String(index + 1).padStart(2, "0")}</p>
            <LocaleLink to="/procedures/$slug" params={{ slug }} data-cursor="link" className="group">
              <h3 className="mt-2 text-h2 transition-colors group-hover:text-[var(--accent)]">{name}</h3>
            </LocaleLink>
            <p className="mt-2 max-w-md text-small text-[var(--ink-dim)]">{oneLiner}</p>
            <div className="relative mt-5 h-[16svh] sm:h-[18svh] lg:mt-8 lg:h-[22svh]">
              {beats.map((b, i) => (
                <Beat key={i} text={b} index={i} total={beats.length} progress={scrollYProgress} />
              ))}
            </div>
          </div>
          {/* the scene never exceeds the space left by the header and the copy */}
          <div
            className="order-1 relative mx-auto aspect-square lg:order-2 w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent"
            style={{ maxWidth: "min(100%, 52svh)", maxHeight: "52svh" }}
          >
            <StoryboardCanvas storyboard={storyboard} progress={scrollYProgress} />
            <div className="absolute bottom-4 left-4 right-4 flex gap-1">
              {beats.map((_, i) => (
                <div key={i} className="h-px flex-1 bg-white/10 overflow-hidden">
                  <ScrollBar progress={scrollYProgress} index={i} total={beats.length} />
                </div>
              ))}
            </div>
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
  const t = useT();
  const tx = useTx();
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
      <p className="text-label">{t.proceduresPage.beat} · 0{index + 1}</p>
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
