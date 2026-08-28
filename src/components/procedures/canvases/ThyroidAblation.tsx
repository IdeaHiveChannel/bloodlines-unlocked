import { motion } from "framer-motion";
import {
  Frame, Caption, UltrasoundSector, useSpan, useHoldFrom, useBeatWindow, useRange,
  type P, contrast,
} from "./shared";

/** Thyroid nodule ablation — ultrasound view of the gland.
 *  nodule sized → needle placed under ultrasound → energy applied in sweeps → nodule shrinks over months. */
export function ThyroidAblation({ progress, beats = 5 }: P) {
  const n = beats;
  const b = (k: number) => Math.min(k, n - 1);
  const needle = useSpan(progress, b(1), b(1), n);
  const energy = useSpan(progress, b(2), b(2), n);
  const shrink = useSpan(progress, b(3), n - 1, n);
  const needleOut = useBeatWindow(progress, b(1), b(2), n);
  const startCaption = useBeatWindow(progress, 0, 0, n);
  const endCaption = useHoldFrom(progress, b(3), n);

  const needleLen = useRange(needle, 0, 1);
  const nodule = useRange(shrink, 1, 0.42);
  const sweepY = useRange(energy, 356, 292);

  return (
    <Frame>
      <UltrasoundSector opacity={0.85} />

      {/* trachea and thyroid lobes */}
      <circle cx="300" cy="352" r="42" fill="rgba(255,255,255,0.02)" stroke="rgba(226,236,248,0.25)" strokeWidth="1" />
      <path d="M258,318 C214,300 176,318 172,362 C168,410 208,442 250,428 C276,418 282,376 258,318 Z"
        fill="rgba(255,255,255,0.04)" stroke="rgba(226,236,248,0.3)" strokeWidth="1.1" />
      <path d="M342,318 C386,300 424,318 428,362 C432,410 392,442 350,428 C324,418 318,376 342,318 Z"
        fill="rgba(255,255,255,0.04)" stroke="rgba(226,236,248,0.3)" strokeWidth="1.1" />

      {/* benign nodule in the right lobe */}
      <motion.g style={{ scale: nodule, transformOrigin: "384px 372px" }}>
        <circle cx="384" cy="372" r="36" fill="rgba(226,236,248,0.42)" />
        <circle cx="384" cy="372" r="36" fill="none" stroke="rgba(226,236,248,0.55)" strokeWidth="1.2" />
      </motion.g>

      {/* treated tissue */}
      <motion.circle cx="384" cy="372" r="30" fill="color-mix(in oklab, var(--accent) 16%, transparent)"
        stroke="color-mix(in oklab, var(--accent) 55%, transparent)" strokeWidth="1.2" style={{ opacity: energy }} />

      {/* needle placed along the long axis, moved in sweeps */}
      <motion.g style={{ opacity: needleOut }}>
        <motion.path d="M120,470 L384,372" fill="none" stroke={contrast} strokeWidth="2.2" style={{ pathLength: needleLen }} />
        <motion.circle cx="384" r="3.2" fill={contrast} cy={sweepY} style={{ opacity: energy }} />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={384} y={286}>Benign nodule</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}>
        <Caption x={330} y={252}>Nodule shrinks,</Caption>
        <Caption x={330} y={272}>gland preserved</Caption>
      </motion.g>
    </Frame>
  );
}
