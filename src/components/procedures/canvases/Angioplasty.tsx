import { motion } from "framer-motion";
import { Frame, Flow, Caption, usePresence, useRamp, type P, stroke, soft, blood, contrast } from "./shared";

/** Angioplasty & stenting — peripheral artery, angiographic look.
 *  wire travels → balloon crosses → inflation compresses plaque → stent → flow. */
export function Angioplasty({ progress }: P) {
  // one continuous timeline; nothing snaps between stages
  const wireX = useRamp(progress, 0.08, 0.34);
  const wireOpacity = usePresence(progress, 0.06, 0.14, 0.86, 0.96);
  const balloonX = useRamp(progress, 0.3, 0.46);
  const balloonPresence = usePresence(progress, 0.3, 0.4, 0.78, 0.9);
  const inflate = useRamp(progress, 0.46, 0.62);
  const plaqueSquash = useTransformInverse(inflate);
  const stentOpacity = useRamp(progress, 0.66, 0.8);
  const stentOpen = useRamp(progress, 0.66, 0.84);
  const flowOpacity = useRamp(progress, 0.78, 0.95);
  const earlyFlow = usePresence(progress, 0, 0.02, 0.6, 0.78);

  const wireTx = useTransformRange(wireX, -300, 130);
  const balloonTx = useTransformRange(balloonX, -260, 0);
  const balloonRy = useTransformRange(inflate, 12, 46);
  const lumen = useTransformRange(inflate, 1, 0.18);

  return (
    <Frame>
      {/* artery — asymmetric, tapering */}
      <path
        d="M28,254 C150,250 214,246 258,252 C318,260 356,258 420,250 C470,244 520,246 574,244"
        fill="none"
        stroke={soft}
        strokeWidth="1.5"
        opacity="0.85"
      />
      <path
        d="M28,384 C150,388 210,392 256,386 C318,378 358,380 420,388 C472,394 522,392 574,392"
        fill="none"
        stroke={soft}
        strokeWidth="1.5"
        opacity="0.85"
      />

      {/* plaque — eccentric, compressed rather than deleted */}
      <motion.g style={{ scaleY: plaqueSquash, transformOrigin: "330px 252px" }}>
        <path d="M262,252 C296,306 348,312 402,250 C360,262 300,266 262,252 Z" fill={blood} opacity="0.9" />
      </motion.g>
      <motion.g style={{ scaleY: plaqueSquash, transformOrigin: "330px 386px" }}>
        <path d="M258,386 C294,340 350,332 400,388 C356,372 300,374 258,386 Z" fill={blood} opacity="0.72" />
      </motion.g>

      {/* pre-treatment trickle through the narrowing */}
      <motion.g style={{ opacity: earlyFlow }}>
        <Flow d="M28,320 C170,320 250,316 330,318 C420,320 500,320 574,318" width={1.6} dur={3.4} dash="6 30" color="rgba(226,236,248,0.5)" />
      </motion.g>

      {/* guidewire physically crossing */}
      <motion.g style={{ x: wireTx, opacity: wireOpacity }}>
        <path d="M-320,322 C-120,322 60,320 300,318" fill="none" stroke={contrast} strokeWidth="1.4" />
        <circle cx="300" cy="318" r="3" fill={contrast} />
      </motion.g>

      {/* balloon catheter riding the wire */}
      <motion.g style={{ x: balloonTx, opacity: balloonPresence }}>
        <line x1="-40" y1="319" x2="266" y2="319" stroke={contrast} strokeWidth="3" opacity="0.55" />
        <motion.ellipse
          cx="330"
          cy="319"
          rx="78"
          style={{ ry: balloonRy }}
          fill="color-mix(in oklab, var(--accent) 16%, transparent)"
          stroke={stroke}
          strokeWidth="1.4"
        />
      </motion.g>

      {/* stent scaffold, left behind against the wall */}
      <motion.g style={{ opacity: stentOpacity }} stroke={stroke} strokeWidth="1.1" fill="none">
        <motion.g style={{ scaleY: useTransformRange(stentOpen, 0.45, 1), transformOrigin: "330px 319px" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d={`M${256 + i * 24},256 L${280 + i * 24},382 M${280 + i * 24},256 L${256 + i * 24},382`} opacity="0.85" />
          ))}
          <line x1="256" y1="256" x2="448" y2="252" />
          <line x1="256" y1="382" x2="448" y2="386" />
        </motion.g>
      </motion.g>

      {/* restored flow */}
      <motion.g style={{ opacity: flowOpacity, scaleY: useTransformRange(lumen, 1, 1) }}>
        <Flow d="M28,320 C170,318 250,314 330,318 C420,322 500,320 574,318" width={7} dur={1.9} dash="16 26" color="color-mix(in oklab, var(--accent) 70%, transparent)" />
      </motion.g>

      <motion.g style={{ opacity: usePresence(progress, 0, 0.03, 0.28, 0.4) }}>
        <Caption x={330} y={198}>Narrowed segment</Caption>
      </motion.g>
      <motion.g style={{ opacity: useRamp(progress, 0.84, 0.95) }}>
        <Caption x={330} y={198}>Flow restored</Caption>
      </motion.g>
    </Frame>
  );
}

// small local helpers keep the timeline readable
import { useTransform, type MotionValue } from "framer-motion";
function useTransformRange(mv: MotionValue<number>, a: number, b: number) {
  return useTransform(mv, [0, 1], [a, b]);
}
function useTransformInverse(mv: MotionValue<number>) {
  return useTransform(mv, [0, 1], [1, 0.32]);
}
