import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    let lenis: Lenis | undefined;
    let raf = 0;
    let cancelled = false;
    const initialise = () => {
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      const frame = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };
    const idle = window.requestIdleCallback?.(initialise, { timeout: 1200 });
    const timer = idle == null ? window.setTimeout(initialise, 500) : undefined;
    return () => {
      cancelled = true;
      if (idle != null) window.cancelIdleCallback?.(idle);
      if (timer != null) window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return children;
}
