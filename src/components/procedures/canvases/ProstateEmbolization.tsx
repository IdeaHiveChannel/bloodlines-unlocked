import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, usePresence, useRamp, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** Prostate artery embolization — enlarged gland compressing the urethra.
 *  obstruction → prostatic artery selected → particles → gland softens and shrinks → stream improves. */
export function ProstateEmbolization({ progress }: P) {
  const select = useRamp(progress, 0.18, 0.46);
  const catheterOpacity = usePresence(progress, 0.16, 0.24, 0.94, 1);
  const particles = useRamp(progress, 0.48, 0.72);
  const shrink = useRamp(progress, 0.62, 0.94);
  const supplied = usePresence(progress, 0, 0.02, 0.56, 0.76);
  const startCaption = usePresence(progress, 0, 0.03, 0.26, 0.36);
  const endCaption = useRamp(progress, 0.86, 0.97);

  const catheterLen = useRange(select, 0, 1);
  const gland = useRange(shrink, 1, 0.74);
  const blush = useRange(shrink, 0.7, 0.14);
  const channel = useRange(shrink, 3, 15);

  const feeder = "M64,516 C150,494 218,462 268,418 C300,390 320,372 336,362";

  return (
    <Frame>
      {/* bladder */}
      <path d="M226,150 C300,116 388,128 420,180 C444,220 424,262 372,276 C316,290 254,282 228,248 C208,222 210,178 226,150 Z"
        fill="rgba(255,255,255,0.03)" stroke={soft} strokeWidth="1.2" />
      <Caption x={324} y={124}>Bladder</Caption>

      {/* enlarged prostate around the urethra */}
      <motion.g style={{ scale: gland, transformOrigin: "324px 372px" }}>
        <path d="M244,338 C266,290 382,290 404,338 C424,384 396,436 324,442 C252,436 224,384 244,338 Z"
          fill="rgba(255,255,255,0.05)" stroke={soft} strokeWidth="1.2" />
        <motion.path d="M244,338 C266,290 382,290 404,338 C424,384 396,436 324,442 C252,436 224,384 244,338 Z"
          fill={blood} style={{ opacity: blush }} />
      </motion.g>

      {/* urethra — a compressed channel that opens */}
      <motion.path d="M324,276 L324,556" fill="none" stroke="rgba(226,236,248,0.75)" strokeLinecap="round"
        style={{ strokeWidth: channel, opacity: 0.5 }} />

      <g fill="none" stroke={soft} strokeWidth="1.2" opacity="0.65">
        <path d={feeder} />
        <path d="M268,418 C296,436 312,444 330,448" />
      </g>
      <motion.g style={{ opacity: supplied }}>
        <Flow d={feeder} width={2.2} dur={2.6} dash="8 22" color="rgba(226,236,248,0.4)" />
      </motion.g>

      <motion.path d={feeder} fill="none" stroke={contrast} strokeWidth="2.6" strokeLinecap="round"
        style={{ pathLength: catheterLen, opacity: catheterOpacity }} />

      <motion.g style={{ opacity: particles }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={i} cx={272 + (i % 6) * 20} cy={344 + Math.floor(i / 6) * 44} r="3.2" fill={stroke} opacity="0.8" />
        ))}
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={324} y={504}>Compressed channel</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}><Caption x={324} y={504}>Gland softens, channel opens</Caption></motion.g>
    </Frame>
  );
}
