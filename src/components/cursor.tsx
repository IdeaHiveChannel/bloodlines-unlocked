import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 600, damping: 38, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 600, damping: 38, mass: 0.35 });
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFinePointer(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduce || !finePointer) return;
    const onMove = (e: PointerEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const onOver = (e: PointerEvent) => setHover(Boolean((e.target as HTMLElement).closest("a, button, [data-cursor='link']")));
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); window.removeEventListener("pointerover", onOver); };
  }, [finePointer, reduce, x, y]);

  if (reduce || !finePointer) return null;
  return <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-3 w-3 rounded-full bg-[var(--accent)] mix-blend-screen md:block" style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", scale: hover ? 4 : 1, opacity: hover ? 0.45 : 0.9 }} transition={{ type: "spring", stiffness: 500, damping: 35 }} />;
}
