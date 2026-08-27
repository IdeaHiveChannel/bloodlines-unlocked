import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, usePresence, useRamp, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** Aneurysm coiling — cerebral artery with a saccular aneurysm.
 *  sac fills → microcatheter into the neck → coils packed loop by loop → sac excluded. */
export function Coiling({ progress }: P) {
  const reach = useRamp(progress, 0.16, 0.42);
  const catheterOpacity = usePresence(progress, 0.14, 0.22, 0.9, 0.98);
  const pack = useRamp(progress, 0.44, 0.8);
  const exclude = useRamp(progress, 0.62, 0.92);
  const sacFill = usePresence(progress, 0, 0.02, 0.5, 0.72);
  const startCaption = usePresence(progress, 0, 0.03, 0.26, 0.36);
  const endCaption = useRamp(progress, 0.86, 0.97);

  const catheterLen = useRange(reach, 0, 1);
  const sacOpacity = useRange(exclude, 0.85, 0.12);

  const parent = "M40,470 C150,452 236,404 300,330 C348,274 420,236 566,220";
  const access = "M40,470 C150,452 236,404 300,330 C324,302 348,282 366,270";

  const coils = Array.from({ length: 7 }).map((_, i) => ({
    r: 12 + i * 5,
    rot: i * 26,
    at: 0.44 + i * 0.045,
  }));

  return (
    <Frame>
      <path d={parent} fill="none" stroke={soft} strokeWidth="9" opacity="0.28" />
      <path d={parent} fill="none" stroke={soft} strokeWidth="1.3" />
      <path d="M300,330 C300,392 316,452 356,514" fill="none" stroke={soft} strokeWidth="1.1" opacity="0.55" />

      {/* aneurysm sac on the outer curve */}
      <motion.circle cx="392" cy="200" r="58" fill={blood} style={{ opacity: sacOpacity }} />
      <circle cx="392" cy="200" r="58" fill="none" stroke={soft} strokeWidth="1.3" />
      <motion.g style={{ opacity: sacFill }}>
        <Flow d="M370,258 C382,236 396,222 410,214" width={2.2} dur={2.2} dash="6 18" color="rgba(226,236,248,0.45)" />
      </motion.g>

      <motion.g style={{ opacity: catheterOpacity }}>
        <motion.path d={access} fill="none" stroke={contrast} strokeWidth="2.8" strokeLinecap="round" style={{ pathLength: catheterLen }} />
        <motion.path d="M366,270 L382,244" fill="none" stroke={contrast} strokeWidth="1.5" style={{ opacity: reach }} />
      </motion.g>

      {/* coil mass built loop by loop */}
      <g fill="none" stroke={stroke} strokeWidth="1.5">
        {coils.map((c, i) => (
          <CoilLoop key={i} progress={progress} at={c.at} r={c.r} rot={c.rot} />
        ))}
      </g>
      <motion.circle cx="392" cy="200" r="52" fill="color-mix(in oklab, var(--accent) 8%, transparent)" style={{ opacity: pack }} />

      <motion.g style={{ opacity: startCaption }}><Caption x={392} y={112}>Aneurysm sac</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}>
        <Caption x={392} y={96}>Sac packed,</Caption>
        <Caption x={392} y={116}>parent artery preserved</Caption>
      </motion.g>
    </Frame>
  );
}

function CoilLoop({ progress, at, r, rot }: P & { at: number; r: number; rot: number }) {
  const on = useRamp(progress, at, at + 0.06);
  const scale = useRange(on, 0.3, 1);
  return (
    <motion.ellipse
      cx="392" cy="200" rx={r} ry={r * 0.68}
      transform={`rotate(${rot} 392 200)`}
      style={{ opacity: on, scale, transformOrigin: "392px 200px" }}
    />
  );
}
