import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, useSpan, useHoldFrom, useFadeOut, useBeatWindow, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** Uterine fibroid embolization — uterus with fibroids fed by both uterine arteries.
 *  fibroid blush → catheter into the uterine artery → particles both sides → fibroids shrink. */
export function FibroidEmbolization({ progress, beats = 5 }: P) {
  const n = beats;
  const b = (k: number) => Math.min(k, n - 1);
  const select = useSpan(progress, b(1), b(1), n);
  const secondSide = useSpan(progress, b(2), b(2), n);
  const catheterOpacity = useBeatWindow(progress, b(1), b(3), n);
  const particles = useSpan(progress, b(3), b(3), n);
  const shrink = useSpan(progress, b(3), n - 1, n);
  const supplied = useFadeOut(progress, b(3), n);
  const startCaption = useBeatWindow(progress, 0, 0, n);
  const endCaption = useHoldFrom(progress, b(3), n);

  const leftLen = useRange(select, 0, 1);
  const rightLen = useRange(secondSide, 0, 1);
  const blush = useRange(shrink, 0.75, 0.12);
  const size = useRange(shrink, 1, 0.55);

  const leftFeeder = "M60,530 C136,494 186,442 218,388 C236,356 250,336 262,324";
  const rightFeeder = "M540,530 C466,494 416,442 384,388 C366,356 352,336 340,324";

  return (
    <Frame>
      {/* uterus */}
      <path d="M204,214 C246,178 356,178 398,214 C438,250 428,352 372,410 C336,448 268,448 232,410 C176,352 166,250 204,214 Z"
        fill="rgba(255,255,255,0.035)" stroke={soft} strokeWidth="1.2" />
      <path d="M204,214 C176,190 156,182 140,186" fill="none" stroke={soft} strokeWidth="1.1" />
      <path d="M398,214 C426,190 446,182 462,186" fill="none" stroke={soft} strokeWidth="1.1" />
      <path d="M280,444 C284,486 288,514 292,548" fill="none" stroke={soft} strokeWidth="1.1" opacity="0.6" />

      {/* fibroids of differing size */}
      <motion.g style={{ scale: size, transformOrigin: "300px 306px" }}>
        <motion.circle cx="262" cy="278" r="46" fill={blood} style={{ opacity: blush }} />
        <circle cx="262" cy="278" r="46" fill="none" stroke={soft} strokeWidth="1" />
        <motion.circle cx="348" cy="342" r="32" fill={blood} style={{ opacity: blush }} />
        <circle cx="348" cy="342" r="32" fill="none" stroke={soft} strokeWidth="1" />
        <motion.circle cx="336" cy="242" r="20" fill={blood} style={{ opacity: blush }} />
      </motion.g>

      <g fill="none" stroke={soft} strokeWidth="1.2" opacity="0.6">
        <path d={leftFeeder} />
        <path d={rightFeeder} />
      </g>
      <motion.g style={{ opacity: supplied }}>
        <Flow d={leftFeeder} width={2} dur={2.6} dash="8 22" color="rgba(226,236,248,0.4)" />
        <Flow d={rightFeeder} width={2} dur={2.9} dash="8 22" color="rgba(226,236,248,0.4)" />
      </motion.g>

      <motion.path d={leftFeeder} fill="none" stroke={contrast} strokeWidth="2.4" strokeLinecap="round"
        style={{ pathLength: leftLen, opacity: catheterOpacity }} />
      <motion.path d={rightFeeder} fill="none" stroke={contrast} strokeWidth="2.4" strokeLinecap="round"
        style={{ pathLength: rightLen, opacity: catheterOpacity }} />

      <motion.g style={{ opacity: particles }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx={238 + (i % 7) * 20} cy={268 + Math.floor(i / 7) * 62} r="3.2" fill={stroke} opacity="0.8" />
        ))}
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={300} y={150}>Fibroid blood supply</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}><Caption x={300} y={150}>Fibroids shrink over months</Caption></motion.g>
    </Frame>
  );
}
