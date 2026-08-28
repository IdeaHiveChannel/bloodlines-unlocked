import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { useLocale } from "../../../lib/i18n/react";
import { useTx } from "../../../lib/i18n/tx";

/** Every scene receives the scroll progress and how many beats the text track has,
 *  so the visual stages land on the sentence that describes them. */
export type P = { progress: MotionValue<number>; beats?: number };

export const stroke = "var(--accent)";
export const soft = "var(--accent-soft)";
export const contrast = "rgba(226,236,248,0.82)";
export const blood = "color-mix(in oklab, var(--blood) 72%, black)";
export const tissue = "rgba(255,255,255,0.028)";
export const edge = "rgba(255,255,255,0.13)";

/** Square scene frame. Scenes are drawn on a 600×600 grid. */
export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full">
      {children}
    </svg>
  );
}

/** Devices decelerate as they arrive instead of stopping dead. */
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/** Linear 0→1 ramp between two scroll positions. */
export function useRamp(progress: MotionValue<number>, a: number, b: number) {
  return useTransform(progress, [a, b], [0, 1], { clamp: true, ease });
}

/** Ramp up, hold, ramp down — for devices that enter and leave. */
export function usePresence(
  progress: MotionValue<number>,
  a: number,
  b: number,
  c: number,
  d: number,
) {
  return useTransform(progress, [a, b, c, d], [0, 1, 1, 0], { clamp: true });
}

/* ---------- beat-aligned stage helpers ----------
 * The text track divides the scroll evenly by beat count, so a stage expressed
 * in beat indices always plays under the sentence that describes it. */

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function bounds(i: number, j: number, n: number) {
  const total = Math.max(1, n);
  const a = clamp01(i / total + 0.06 / total);
  const b = clamp01((j + 1) / total - 0.14 / total);
  return [a, Math.max(a + 0.0001, b)] as const;
}

/** 0→1 across beats i…j inclusive — the stage runs with its own sentence. */
export function useSpan(progress: MotionValue<number>, i: number, j: number, n: number) {
  const [a, b] = bounds(i, j, n);
  return useTransform(progress, [a, b], [0, 1], { clamp: true, ease });
}

/** Appears during beat i and then stays — the treated state holds to the end. */
export function useHoldFrom(progress: MotionValue<number>, i: number, n: number) {
  const total = Math.max(1, n);
  const a = clamp01(i / total);
  const b = clamp01(i / total + 0.55 / total);
  return useTransform(progress, [a, Math.max(a + 0.0001, b)], [0, 1], { clamp: true, ease });
}

/** Full until beat i, then fades away — the untreated state giving way. */
export function useFadeOut(progress: MotionValue<number>, i: number, n: number) {
  const total = Math.max(1, n);
  const a = clamp01(i / total);
  const b = clamp01((i + 1) / total);
  return useTransform(progress, [a, Math.max(a + 0.0001, b)], [1, 0], { clamp: true, ease });
}

/** Visible from the start of beat i until the end of beat j. */
export function useBeatWindow(progress: MotionValue<number>, i: number, j: number, n: number) {
  const total = Math.max(1, n);
  const a = clamp01(i / total);
  const b = clamp01(i / total + 0.4 / total);
  const c = clamp01((j + 1) / total - 0.1 / total);
  const d = clamp01((j + 1) / total + 0.4 / total);
  const s = [a, Math.max(a + 1e-4, b)];
  const e = [Math.max(s[1] + 1e-4, c), Math.max(s[1] + 2e-4, d)];
  return useTransform(progress, [s[0], s[1], e[0], e[1]], [0, 1, 1, 0], { clamp: true });
}

/** Dashed, slowly travelling flow line — angiographic contrast running in a vessel.
 *  Slower and quieter when the vessel is still occluded; still when motion is reduced. */
export function Flow({
  d,
  width = 2.4,
  dur = 2.2,
  color = stroke,
  dash = "10 26",
}: {
  d: string;
  width?: number;
  dur?: number;
  color?: string;
  dash?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={dash}
      style={reduced ? undefined : { animation: `flow ${dur}s linear infinite` }}
    />
  );
}

/** One quiet caption per stage — localized, and legible in the compact mobile frame. */
export function Caption({
  x,
  y,
  children,
  anchor = "middle",
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  anchor?: "start" | "middle" | "end";
}) {
  const locale = useLocale();
  const tx = useTx();
  const ml = locale === "ml";
  const text = typeof children === "string" ? tx(children) : children;
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill="rgba(226,236,248,0.62)"
      fontSize={ml ? 17 : 15}
      letterSpacing={ml ? "0" : "0.12em"}
      style={{
        textTransform: ml ? "none" : "uppercase",
        fontFamily: ml ? "var(--font-ml, inherit)" : "inherit",
      }}
    >
      {text}
    </text>
  );
}

/** Greyscale ultrasound sector — speckle and beam lines, no neon. */
export function UltrasoundSector({ opacity = 1 }: { opacity?: number }) {
  const speckle = Array.from({ length: 120 }).map((_, i) => {
    const a = (-Math.PI / 2) + ((i * 2.399) % 1) * 1.1 - 0.55;
    const r = 120 + ((i * 97) % 320);
    return { x: 300 + Math.sin(a) * r, y: 70 + Math.cos(a) * r, o: 0.05 + ((i * 37) % 10) / 60 };
  });
  return (
    <g opacity={opacity}>
      <path d="M300,60 L70,540 L530,540 Z" fill="rgba(255,255,255,0.03)" />
      <clipPath id="us-sector">
        <path d="M300,60 L70,540 L530,540 Z" />
      </clipPath>
      <g clipPath="url(#us-sector)">
        {speckle.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={1.6} fill="white" opacity={s.o} />
        ))}
        {[0.25, 0.5, 0.75].map((t) => (
          <path
            key={t}
            d={`M300,60 L${300 - 230 * t},${60 + 480 * t} `}
            stroke="white"
            strokeWidth="0.4"
            opacity="0.06"
          />
        ))}
      </g>
      <path d="M300,60 L70,540 L530,540 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
    </g>
  );
}

export { motion, useTransform };

/** Map a 0→1 ramp onto a numeric range. */
export function useRange(mv: MotionValue<number>, a: number, b: number) {
  return useTransform(mv, [0, 1], [a, b]);
}
