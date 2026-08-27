import { motion, useTransform, type MotionValue } from "framer-motion";

export type P = { progress: MotionValue<number> };

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

/** Linear 0→1 ramp between two scroll positions. */
export function useRamp(progress: MotionValue<number>, a: number, b: number) {
  return useTransform(progress, [a, b], [0, 1], { clamp: true });
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

/** Dashed, slowly travelling flow line — angiographic contrast running in a vessel. */
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
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeDasharray={dash}
      style={{ animation: `flow ${dur}s linear infinite` }}
    />
  );
}

/** One quiet caption per stage — never more than a couple on screen. */
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
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill="rgba(226,236,248,0.55)"
      fontSize="13"
      letterSpacing="0.14em"
      style={{ textTransform: "uppercase" }}
    >
      {children}
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
