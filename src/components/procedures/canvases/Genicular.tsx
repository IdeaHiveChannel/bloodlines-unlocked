import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, useSpan, useHoldFrom, useFadeOut, useBeatWindow, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** Genicular artery embolization — knee joint with an inflamed, over-vascular synovium.
 *  abnormal blush → microcatheter into the genicular branch → particles → blush settles. */
export function Genicular({ progress, beats = 5 }: P) {
  const n = beats;
  const b = (k: number) => Math.min(k, n - 1);
  const select = useSpan(progress, b(1), b(1), n);
  const catheterOpacity = useBeatWindow(progress, b(1), b(3), n);
  const particles = useSpan(progress, b(2), b(2), n);
  const settle = useSpan(progress, b(3), n - 1, n);
  const inflamed = useFadeOut(progress, b(2), n);
  const startCaption = useBeatWindow(progress, 0, 0, n);
  const endCaption = useHoldFrom(progress, b(3), n);

  const catheterLen = useRange(select, 0, 1);
  const blush = useRange(settle, 0.7, 0.1);

  const branch = "M92,542 C150,470 190,404 226,332 C252,282 286,246 330,226";

  return (
    <Frame>
      {/* femur, tibia, joint line */}
      <path d="M262,60 L262,214 C240,240 240,268 264,290 L266,300" fill="none" stroke={soft} strokeWidth="12" opacity="0.18" />
      <path d="M262,60 L262,216 C238,244 240,272 266,296" fill="none" stroke={soft} strokeWidth="1.3" />
      <path d="M300,544 L302,362 C304,332 322,312 348,304" fill="none" stroke={soft} strokeWidth="12" opacity="0.18" />
      <path d="M300,544 L302,360 C306,330 324,310 350,302" fill="none" stroke={soft} strokeWidth="1.3" />
      <path d="M212,300 C268,282 344,282 400,300" fill="none" stroke={soft} strokeWidth="1" opacity="0.5" strokeDasharray="5 7" />

      {/* inflamed synovial blush around the joint line */}
      <motion.g style={{ opacity: blush }}>
        <ellipse cx="316" cy="300" rx="96" ry="52" fill={blood} opacity="0.55" />
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${248 + i * 17},262 C${252 + i * 17},288 ${244 + i * 17},318 ${254 + i * 17},344`}
            fill="none" stroke={blood} strokeWidth="1.4" opacity="0.8" />
        ))}
      </motion.g>

      <g fill="none" stroke={soft} strokeWidth="1.2" opacity="0.65">
        <path d={branch} />
        <path d="M226,332 C268,336 300,330 336,318" />
      </g>
      <motion.g style={{ opacity: inflamed }}>
        <Flow d={branch} width={2.2} dur={2.6} dash="8 22" color="rgba(226,236,248,0.4)" />
      </motion.g>

      <motion.path d={branch} fill="none" stroke={contrast} strokeWidth="2.6" strokeLinecap="round"
        style={{ pathLength: catheterLen, opacity: catheterOpacity }} />

      <motion.g style={{ opacity: particles }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <circle key={i} cx={268 + (i % 8) * 16} cy={276 + Math.floor(i / 8) * 34} r="3.2" fill={stroke} opacity="0.8" />
        ))}
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={330} y={432}>Abnormal joint blush</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}><Caption x={330} y={432}>Blush reduced</Caption></motion.g>
    </Frame>
  );
}
