import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, useSpan, useHoldFrom, useFadeOut, useBeatWindow, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** Mechanical thrombectomy — cerebral vessel tree.
 *  occlusion → catheter reaches → retriever expands in clot → clot withdrawn → reperfusion. */
export function Thrombectomy({ progress, beats = 5 }: P) {
  const n = beats;
  const b = (k: number) => Math.min(k, n - 1);
  const reach = useSpan(progress, b(1), b(1), n);
  const catheterOpacity = useBeatWindow(progress, b(1), b(3), n);
  const expand = useSpan(progress, b(2), b(2), n);
  const retrieverOpacity = useBeatWindow(progress, b(2), b(3), n);
  const withdraw = useSpan(progress, b(3), b(3), n);
  const reperfusion = useHoldFrom(progress, n - 1, n);
  const occluded = useFadeOut(progress, b(3), n);
  const startCaption = useBeatWindow(progress, 0, 0, n);
  const endCaption = useHoldFrom(progress, n - 1, n);

  const catheterX = useRange(reach, -300, 0);
  const clotX = useRange(withdraw, 0, -420);
  const clotFade = useRange(withdraw, 1, 0);
  const retrieverScale = useRange(expand, 0.15, 1);

  const trunk = "M24,352 C150,346 236,320 316,268 C382,224 452,206 578,196";
  const branchA = "M316,268 C356,318 384,384 402,494";
  const branchB = "M368,236 C420,272 462,318 504,378";

  return (
    <Frame>
      <g fill="none" stroke={soft} strokeWidth="1.4" opacity="0.75">
        <path d={trunk} />
        <path d={branchA} />
        <path d={branchB} />
        <path d="M240,330 C258,378 262,432 250,510" strokeWidth="1" opacity="0.5" />
      </g>

      {/* clot occluding the trunk just beyond the bifurcation */}
      <motion.g style={{ x: clotX, opacity: clotFade }}>
        <path d="M368,238 C398,220 434,214 458,222 C452,244 420,258 386,256 Z" fill={blood} />
      </motion.g>

      {/* territory beyond the occlusion is quiet until reperfusion */}
      <motion.g style={{ opacity: occluded }}>
        <Flow d="M24,352 C150,346 236,320 316,268 C356,246 386,234 406,230"
          width={2.6} dur={2.4} dash="10 24" color="rgba(226,236,248,0.45)" />
      </motion.g>

      <motion.g style={{ x: catheterX, opacity: catheterOpacity }}>
        <path d="M-320,372 C-140,362 60,340 200,318 C260,308 306,290 344,262"
          fill="none" stroke={contrast} strokeWidth="3.2" opacity="0.55" />
        <path d="M344,262 L372,242" stroke={contrast} strokeWidth="1.4" />
      </motion.g>

      <motion.g style={{ x: clotX, opacity: retrieverOpacity }}>
        <motion.g style={{ scale: retrieverScale, transformOrigin: "418px 236px" }}
          stroke={stroke} strokeWidth="1.3" fill="none">
          <ellipse cx="418" cy="236" rx="56" ry="24" transform="rotate(-18 418 236)" />
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={i} d={`M${372 + i * 22},252 L${386 + i * 22},218`} transform="rotate(-18 418 236)" opacity="0.8" />
          ))}
        </motion.g>
      </motion.g>

      <motion.g style={{ opacity: reperfusion }}>
        <Flow d={trunk} width={5.5} dur={1.8} dash="14 24" color="color-mix(in oklab, var(--accent) 65%, transparent)" />
        <Flow d={branchA} width={3.4} dur={2.4} dash="10 22" color="color-mix(in oklab, var(--accent) 55%, transparent)" />
        <Flow d={branchB} width={3} dur={2.8} dash="10 22" color="color-mix(in oklab, var(--accent) 50%, transparent)" />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={430} y={168}>Occluded vessel</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}><Caption x={430} y={168}>Flow restored</Caption></motion.g>
    </Frame>
  );
}
