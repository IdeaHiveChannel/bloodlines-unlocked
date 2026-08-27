import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, usePresence, useRamp, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** Fistuloplasty — dialysis access in the forearm.
 *  stenosis at the outflow → wire and balloon → dilatation → thrill restored. */
export function Fistuloplasty({ progress }: P) {
  const wire = useRamp(progress, 0.14, 0.38);
  const wireOpacity = usePresence(progress, 0.12, 0.2, 0.88, 0.96);
  const balloon = useRamp(progress, 0.4, 0.56);
  const inflate = useRamp(progress, 0.56, 0.74);
  const balloonOut = usePresence(progress, 0.4, 0.5, 0.78, 0.88);
  const flow = useRamp(progress, 0.76, 0.94);
  const poor = usePresence(progress, 0, 0.02, 0.6, 0.78);
  const startCaption = usePresence(progress, 0, 0.03, 0.26, 0.36);
  const endCaption = useRamp(progress, 0.86, 0.97);

  const wireX = useRange(wire, -280, 120);
  const balloonX = useRange(balloon, -240, 0);
  const balloonRy = useRange(inflate, 10, 40);
  const open = useRange(inflate, 1, 0.25);

  const artery = "M40,470 C140,458 218,432 286,388";
  const vein = "M286,388 C336,354 380,332 566,318";

  return (
    <Frame>
      {/* arteriovenous fistula: artery joins the dilated vein */}
      <path d={artery} fill="none" stroke={soft} strokeWidth="16" opacity="0.16" />
      <path d={artery} fill="none" stroke={soft} strokeWidth="1.3" />
      <path d={vein} fill="none" stroke={soft} strokeWidth="26" opacity="0.14" />
      <path d={vein} fill="none" stroke={soft} strokeWidth="1.3" />
      <Caption x={140} y={520} anchor="start">Artery</Caption>
      <Caption x={520} y={272} anchor="end">Fistula vein</Caption>

      {/* outflow stenosis */}
      <motion.g style={{ scaleY: open, transformOrigin: "410px 326px" }}>
        <path d="M372,306 C396,332 428,332 452,304 C424,318 398,318 372,306 Z" fill={blood} />
        <path d="M372,344 C396,320 428,320 452,346 C424,334 398,334 372,344 Z" fill={blood} opacity="0.8" />
      </motion.g>

      <motion.g style={{ opacity: poor }}>
        <Flow d={`${artery} ${vein}`} width={2} dur={3.2} dash="6 28" color="rgba(226,236,248,0.4)" />
      </motion.g>

      <motion.g style={{ x: wireX, opacity: wireOpacity }}>
        <path d="M-300,332 C-100,330 120,326 300,324" fill="none" stroke={contrast} strokeWidth="1.4" />
        <circle cx="300" cy="324" r="3" fill={contrast} />
      </motion.g>

      <motion.g style={{ x: balloonX, opacity: balloonOut }}>
        <line x1="60" y1="326" x2="360" y2="326" stroke={contrast} strokeWidth="3" opacity="0.5" />
        <motion.ellipse cx="412" cy="326" rx="56" style={{ ry: balloonRy }}
          fill="color-mix(in oklab, var(--accent) 16%, transparent)" stroke={stroke} strokeWidth="1.4" />
      </motion.g>

      <motion.g style={{ opacity: flow }}>
        <Flow d={artery} width={5} dur={1.8} dash="14 22" color="color-mix(in oklab, var(--accent) 62%, transparent)" />
        <Flow d={vein} width={8} dur={1.7} dash="18 26" color="color-mix(in oklab, var(--accent) 62%, transparent)" />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={412} y={230}>Outflow narrowing</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}><Caption x={412} y={230}>Access working again</Caption></motion.g>
    </Frame>
  );
}
