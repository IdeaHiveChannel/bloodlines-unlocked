import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, useSpan, useHoldFrom, useFadeOut, useBeatWindow, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** Angioplasty & stenting — peripheral artery, angiographic look.
 *  wire travels → balloon crosses → inflation compresses plaque → stent → flow. */
export function Angioplasty({ progress, beats = 6 }: P) {
  const n = beats;
  const b = (k: number) => Math.min(k, n - 1);
  const wire = useSpan(progress, b(1), b(1), n);
  const wireOpacity = useBeatWindow(progress, b(1), b(3), n);
  const balloon = useSpan(progress, b(2), b(2), n);
  const balloonPresence = useBeatWindow(progress, b(2), b(3), n);
  const inflate = useSpan(progress, b(2), b(3), n);
  const stentOpacity = useHoldFrom(progress, b(4), n);
  const stentOpen = useSpan(progress, b(4), b(4), n);
  const flowOpacity = useHoldFrom(progress, n - 1, n);
  const earlyFlow = useFadeOut(progress, b(3), n);
  const startCaption = useBeatWindow(progress, 0, 0, n);
  const endCaption = useHoldFrom(progress, n - 1, n);

  const wireX = useRange(wire, -300, 130);
  const balloonX = useRange(balloon, -260, 0);
  const balloonRy = useRange(inflate, 12, 46);
  const plaqueSquash = useRange(inflate, 1, 0.34);
  const stentScale = useRange(stentOpen, 0.45, 1);

  return (
    <Frame>
      <path d="M28,254 C150,250 214,246 258,252 C318,260 356,258 420,250 C470,244 520,246 574,244"
        fill="none" stroke={soft} strokeWidth="1.5" opacity="0.85" />
      <path d="M28,384 C150,388 210,392 256,386 C318,378 358,380 420,388 C472,394 522,392 574,392"
        fill="none" stroke={soft} strokeWidth="1.5" opacity="0.85" />

      {/* eccentric plaque — compressed, not deleted */}
      <motion.g style={{ scaleY: plaqueSquash, transformOrigin: "330px 252px" }}>
        <path d="M262,252 C296,306 348,312 402,250 C360,262 300,266 262,252 Z" fill={blood} opacity="0.9" />
      </motion.g>
      <motion.g style={{ scaleY: plaqueSquash, transformOrigin: "330px 386px" }}>
        <path d="M258,386 C294,340 350,332 400,388 C356,372 300,374 258,386 Z" fill={blood} opacity="0.72" />
      </motion.g>

      <motion.g style={{ opacity: earlyFlow }}>
        <Flow d="M28,320 C170,320 250,316 330,318 C420,320 500,320 574,318"
          width={1.6} dur={3.4} dash="6 30" color="rgba(226,236,248,0.45)" />
      </motion.g>

      <motion.g style={{ x: wireX, opacity: wireOpacity }}>
        <path d="M-320,322 C-120,322 60,320 300,318" fill="none" stroke={contrast} strokeWidth="1.4" />
        <circle cx="300" cy="318" r="3" fill={contrast} />
      </motion.g>

      <motion.g style={{ x: balloonX, opacity: balloonPresence }}>
        <line x1="-40" y1="319" x2="266" y2="319" stroke={contrast} strokeWidth="3" opacity="0.5" />
        <motion.ellipse cx="330" cy="319" rx="78" style={{ ry: balloonRy }}
          fill="color-mix(in oklab, var(--accent) 16%, transparent)" stroke={stroke} strokeWidth="1.4" />
      </motion.g>

      <motion.g style={{ opacity: stentOpacity }} stroke={stroke} strokeWidth="1.1" fill="none">
        <motion.g style={{ scaleY: stentScale, transformOrigin: "330px 319px" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d={`M${256 + i * 24},256 L${280 + i * 24},382 M${280 + i * 24},256 L${256 + i * 24},382`} opacity="0.8" />
          ))}
          <line x1="256" y1="256" x2="448" y2="252" />
          <line x1="256" y1="382" x2="448" y2="386" />
        </motion.g>
      </motion.g>

      <motion.g style={{ opacity: flowOpacity }}>
        <Flow d="M28,320 C170,318 250,314 330,318 C420,322 500,320 574,318"
          width={7} dur={1.9} dash="16 26" color="color-mix(in oklab, var(--accent) 65%, transparent)" />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={330} y={198}>Narrowed segment</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}><Caption x={330} y={198}>Flow restored</Caption></motion.g>
    </Frame>
  );
}
