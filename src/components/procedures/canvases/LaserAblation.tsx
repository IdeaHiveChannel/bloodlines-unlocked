import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, UltrasoundSector, useSpan, useHoldFrom, useFadeOut, useBeatWindow, useRange,
  type P, stroke, contrast,
} from "./shared";

/** Endovenous laser ablation — ultrasound-style greyscale view of the leg vein.
 *  refluxing vein → fibre in vein → energy along the segment → vein shrinks → flow reroutes. */
export function LaserAblation({ progress, beats = 5 }: P) {
  const n = beats;
  const b = (k: number) => Math.min(k, n - 1);
  const fibre = useSpan(progress, b(1), b(1), n);
  const fibreOpacity = useBeatWindow(progress, b(1), b(2), n);
  const energy = useSpan(progress, b(2), b(2), n);
  const close = useSpan(progress, b(2), b(3), n);
  const reroute = useHoldFrom(progress, b(3), n);
  const reflux = useFadeOut(progress, b(2), n);
  const startCaption = useBeatWindow(progress, 0, 0, n);
  const endCaption = useHoldFrom(progress, b(3), n);

  const fibreY = useRange(fibre, 130, 486);
  const veinWidth = useRange(close, 1, 0.16);
  const treated = useRange(energy, 0, 1);

  return (
    <Frame>
      <UltrasoundSector />

      {/* superficial refluxing vein */}
      <motion.g style={{ scaleX: veinWidth, transformOrigin: "236px 320px" }}>
        <path d="M214,110 C196,220 202,360 216,520" fill="none" stroke="rgba(226,236,248,0.5)" strokeWidth="1.4" />
        <path d="M262,110 C282,220 276,360 260,520" fill="none" stroke="rgba(226,236,248,0.5)" strokeWidth="1.4" />
        {[190, 280, 372, 462].map((y) => (
          <path key={y} d={`M212,${y - 16} L238,${y} L264,${y - 16}`} fill="none" stroke="rgba(226,236,248,0.35)" strokeWidth="1" />
        ))}
      </motion.g>

      {/* reflux running the wrong way */}
      <motion.g style={{ opacity: reflux }}>
        <Flow d="M236,120 L236,520" width={2.4} dur={2.8} dash="8 24" color="rgba(226,236,248,0.4)" />
      </motion.g>

      {/* treated segment darkens progressively behind the fibre tip */}
      <motion.path d="M236,140 L236,500" fill="none" stroke="rgba(226,236,248,0.75)" strokeWidth="6"
        strokeLinecap="round" style={{ pathLength: treated, opacity: 0.35 }} />

      {/* laser fibre withdrawn along the vein */}
      <motion.g style={{ opacity: fibreOpacity }}>
        <motion.line x1="236" y1="110" x2="236" y2={fibreY} stroke={contrast} strokeWidth="1.6" />
        <motion.circle cx="236" r="4" fill={contrast} cy={fibreY} />
        <motion.circle cx="236" r="14" fill="color-mix(in oklab, var(--accent) 26%, transparent)"
          cy={fibreY} style={{ opacity: energy }} />
      </motion.g>

      {/* deep vein carries the return */}
      <path d="M402,110 C420,240 414,390 398,520" fill="none" stroke="rgba(226,236,248,0.4)" strokeWidth="1.4" />
      <motion.g style={{ opacity: reroute }}>
        <Flow d="M400,520 C416,390 420,240 402,110" width={4.6} dur={2.2} dash="14 24" color="color-mix(in oklab, var(--accent) 60%, transparent)" />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={236} y={96}>Refluxing vein</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}>
        <Caption x={300} y={96}>Treated vein closed</Caption>
      </motion.g>
      <motion.g style={{ opacity: reroute }}><Caption x={404} y={556}>Deep return</Caption></motion.g>
    </Frame>
  );
}
