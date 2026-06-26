import { useRef, useState } from "react";
import before from "../../assets/angio-before.jpg";
import after from "../../assets/angio-after.jpg";

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const drag = (e: React.PointerEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };
  return (
    <section className="relative bg-[#050B16] py-32">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
        <p className="text-label">Evidence</p>
        <h2 className="mt-6 text-display text-[clamp(2rem,4.5vw,4rem)] max-w-2xl">Before. After. The same vessel.</h2>
        <p className="mt-4 text-[14px] text-[var(--ink-dim)] max-w-md">Drag the line. The image speaks more than any paragraph.</p>
        <div ref={ref}
          onPointerMove={(e) => { if (e.buttons === 1) drag(e); }}
          onPointerDown={drag}
          data-cursor="link"
          className="relative mt-12 aspect-video w-full overflow-hidden rounded-3xl border border-white/[0.06] select-none">
          <img src={after} alt="Restored vessel" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={before} alt="Blocked vessel" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="absolute top-0 bottom-0 w-px bg-[var(--accent)] vessel-glow" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 rounded-full bg-[var(--accent)] grid place-items-center text-black text-xs font-bold">⇔</div>
          </div>
          <div className="absolute top-4 left-4 text-label bg-black/40 px-3 py-1 rounded-full">Before</div>
          <div className="absolute top-4 right-4 text-label bg-black/40 px-3 py-1 rounded-full">After</div>
        </div>
      </div>
    </section>
  );
}
