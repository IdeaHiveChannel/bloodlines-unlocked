import { useEffect, useState, useRef } from "react";

type Variant = "default" | "link" | "cta" | "scan";

export function Cursor() {
  const [variant, setVariant] = useState<Variant>("default");
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my, dx = mx, dy = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("[data-cursor]");
      const v = interactive?.getAttribute("data-cursor") as Variant | null;
      if (v) setVariant(v);
      else if (t.closest("a, button")) setVariant("link");
      else setVariant("default");
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dx += (mx - dx) * 0.45;
      dy += (my - dy) * 0.45;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  if (!enabled) return null;
  const ringSize = variant === "scan" ? 220 : variant === "link" ? 48 : variant === "cta" ? 16 : 28;
  const ringBg = variant === "scan"
    ? "radial-gradient(circle, color-mix(in oklab, var(--accent) 25%, transparent), transparent 70%)"
    : "transparent";
  const ringBorder = variant === "scan" ? "1px solid color-mix(in oklab, var(--accent) 50%, transparent)" : "1px solid color-mix(in oklab, var(--accent) 70%, transparent)";

  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full"
        style={{ width: ringSize, height: ringSize, background: ringBg, border: ringBorder, transition: "width 240ms cubic-bezier(0.16,1,0.3,1), height 240ms cubic-bezier(0.16,1,0.3,1), background 240ms" }} />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full"
        style={{ width: 4, height: 4, background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
    </>
  );
}
