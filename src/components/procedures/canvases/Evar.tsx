import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, usePresence, useRamp, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** EVAR — aorta with aneurysm sac and iliac bifurcation.
 *  sac fills → delivery system ascends → graft unsheathes → sac excluded. */
export function Evar({ progress }: P) {
  const deliver = useRamp(progress, 0.16, 0.42);
  const deviceOpacity = usePresence(progress, 0.14, 0.22, 0.74, 0.86);
  const deploy = useRamp(progress, 0.46, 0.68);
  const exclude = useRamp(progress, 0.62, 0.86);
  const sacFlow = usePresence(progress, 0, 0.02, 0.6, 0.8);
  const graftFlow = useRamp(progress, 0.7, 0.9);
  const startCaption = usePresence(progress, 0, 0.03, 0.26, 0.36);
  const endCaption = useRamp(progress, 0.86, 0.97);

  const deviceY = useRange(deliver, 300, 0);
  const graftWidth = useRange(deploy, 0.22, 1);
  const sacOpacity = useRange(exclude, 0.75, 0.14);

  return (
    <Frame>
      {/* aorta walls and iliac limbs, deliberately asymmetric */}
      <path d="M270,44 L268,196 C214,224 208,326 262,364 L226,556" fill="none" stroke={soft} strokeWidth="1.5" opacity="0.85" />
      <path d="M340,44 L342,196 C398,226 402,326 348,364 L400,556" fill="none" stroke={soft} strokeWidth="1.5" opacity="0.85" />

      {/* aneurysm sac */}
      <motion.path d="M262,214 C196,244 194,330 262,362 C314,384 380,376 400,330 C420,282 396,232 340,212 Z"
        fill={blood} style={{ opacity: sacOpacity }} />
      <motion.g style={{ opacity: sacFlow }}>
        <Flow d="M300,206 C246,244 250,318 302,352" width={2} dur={2.6} dash="8 22" color="rgba(226,236,248,0.4)" />
      </motion.g>

      {/* delivery system tracking up from the groin */}
      <motion.g style={{ y: deviceY, opacity: deviceOpacity }}>
        <line x1="304" y1="120" x2="286" y2="560" stroke={contrast} strokeWidth="3" opacity="0.5" />
        <rect x="292" y="112" width="22" height="86" rx="11" fill={contrast} opacity="0.7" />
      </motion.g>

      {/* stent graft — unsheathes from the top down */}
      <motion.g style={{ scaleX: graftWidth, transformOrigin: "306px 200px", opacity: deploy }}
        stroke={stroke} strokeWidth="1.5" fill="color-mix(in oklab, var(--accent) 10%, transparent)">
        <path d="M276,178 L336,178 L344,306 L392,522 L360,522 L318,338 L296,338 L252,522 L222,522 L268,306 Z" />
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1="272" y1={198 + i * 22} x2="340" y2={198 + i * 22} strokeWidth="0.7" opacity="0.45" />
        ))}
      </motion.g>

      <motion.g style={{ opacity: graftFlow }}>
        <Flow d="M306,70 L306,196 L322,330 L376,540" width={5} dur={2} dash="14 24" color="color-mix(in oklab, var(--accent) 62%, transparent)" />
        <Flow d="M306,196 L290,330 L240,540" width={4.4} dur={2.3} dash="14 24" color="color-mix(in oklab, var(--accent) 55%, transparent)" />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={300} y={136}>Aneurysm sac</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}>
        <Caption x={300} y={120}>Sac excluded from</Caption>
        <Caption x={300} y={140}>direct blood flow</Caption>
      </motion.g>
    </Frame>
  );
}
