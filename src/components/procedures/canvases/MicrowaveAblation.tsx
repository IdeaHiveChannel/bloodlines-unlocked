import { motion } from "framer-motion";
import {
  Frame, Caption, UltrasoundSector, usePresence, useRamp, useRange,
  type P, contrast,
} from "./shared";

/** Microwave ablation — CT/ultrasound-style targeting of a liver lesion.
 *  lesion located → antenna passed through skin → heat zone grows past the margin → lesion destroyed. */
export function MicrowaveAblation({ progress }: P) {
  const needle = useRamp(progress, 0.18, 0.46);
  const heat = useRamp(progress, 0.5, 0.78);
  const destroy = useRamp(progress, 0.66, 0.92);
  const needleOut = usePresence(progress, 0.18, 0.3, 0.86, 0.96);
  const startCaption = usePresence(progress, 0, 0.03, 0.28, 0.38);
  const endCaption = useRamp(progress, 0.86, 0.97);

  const needleLen = useRange(needle, 0, 1);
  const zone = useRange(heat, 8, 96);
  const lesionOpacity = useRange(destroy, 0.9, 0.18);
  const scar = useRange(destroy, 0, 0.5);

  return (
    <Frame>
      <UltrasoundSector opacity={0.9} />

      {/* organ plane */}
      <path d="M120,250 C210,196 340,190 452,232 C512,254 528,320 486,376 C420,462 236,470 160,404 C114,364 104,292 120,250 Z"
        fill="rgba(255,255,255,0.035)" stroke="rgba(226,236,248,0.28)" strokeWidth="1.1" />

      {/* target lesion */}
      <motion.circle cx="336" cy="322" r="40" fill="rgba(226,236,248,0.55)" style={{ opacity: lesionOpacity }} />
      <circle cx="336" cy="322" r="40" fill="none" stroke="rgba(226,236,248,0.5)" strokeWidth="1.2" strokeDasharray="4 6" />

      {/* ablation zone — grows beyond the lesion margin */}
      <motion.circle cx="336" cy="322" fill="color-mix(in oklab, var(--accent) 14%, transparent)"
        stroke="color-mix(in oklab, var(--accent) 60%, transparent)" strokeWidth="1.3" r={zone} style={{ opacity: heat }} />

      {/* coagulated tissue left behind */}
      <motion.circle cx="336" cy="322" r="44" fill="rgba(226,236,248,0.16)" style={{ opacity: scar }} />

      {/* antenna passed percutaneously */}
      <motion.g style={{ opacity: needleOut }}>
        <motion.path d="M92,110 L336,322" fill="none" stroke={contrast} strokeWidth="2.4" style={{ pathLength: needleLen }} />
        <motion.circle cx="336" cy="322" r="3.4" fill={contrast} style={{ opacity: needle }} />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={336} y={240}>Target lesion</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}>
        <Caption x={336} y={200}>Ablation zone covers</Caption>
        <Caption x={336} y={220}>the whole lesion</Caption>
      </motion.g>
    </Frame>
  );
}
