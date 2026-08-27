import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, usePresence, useRamp, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** TACE — liver with a tumour fed by a branch of the hepatic artery.
 *  tumour blush → microcatheter selects the feeder → beads delivered → supply cut → blush fades. */
export function Tace({ progress }: P) {
  const select = useRamp(progress, 0.16, 0.44);
  const catheterOpacity = usePresence(progress, 0.14, 0.22, 0.94, 1);
  const beads = useRamp(progress, 0.46, 0.74);
  const devascularise = useRamp(progress, 0.62, 0.92);
  const feed = usePresence(progress, 0, 0.02, 0.5, 0.7);
  const startCaption = usePresence(progress, 0, 0.03, 0.26, 0.36);
  const endCaption = useRamp(progress, 0.86, 0.97);

  const catheterLen = useRange(select, 0, 1);
  const blush = useRange(devascularise, 0.85, 0.16);
  const tumourShrink = useRange(devascularise, 1, 0.82);

  const feeder = "M56,470 C150,452 214,404 274,340 C316,296 350,268 386,252";

  return (
    <Frame>
      {/* liver silhouette — irregular, lobed */}
      <path d="M96,214 C168,150 300,132 424,158 C512,176 546,236 528,314 C508,398 424,452 316,462 C210,472 128,432 100,362 C80,312 78,254 96,214 Z"
        fill="rgba(255,255,255,0.03)" stroke={soft} strokeWidth="1.2" />
      <path d="M300,140 C296,240 290,360 302,460" fill="none" stroke={soft} strokeWidth="0.8" opacity="0.4" />

      {/* arterial tree */}
      <g fill="none" stroke={soft} strokeWidth="1.2" opacity="0.7">
        <path d={feeder} />
        <path d="M274,340 C280,394 300,428 336,446" />
        <path d="M330,290 C378,300 424,316 470,344" />
      </g>

      {/* tumour with feeding blush */}
      <motion.g style={{ scale: tumourShrink, transformOrigin: "410px 244px" }}>
        <motion.circle cx="410" cy="244" r="54" fill={blood} style={{ opacity: blush }} />
        <circle cx="410" cy="244" r="54" fill="none" stroke={blood} strokeWidth="1.4" opacity="0.8" />
      </motion.g>

      <motion.g style={{ opacity: feed }}>
        <Flow d={feeder} width={2.4} dur={2.4} dash="8 22" color="rgba(226,236,248,0.42)" />
      </motion.g>

      {/* microcatheter advanced superselectively */}
      <motion.path d={feeder} fill="none" stroke={contrast} strokeWidth="2.6" strokeLinecap="round"
        style={{ pathLength: catheterLen, opacity: catheterOpacity }} />

      {/* embolic beads travelling into the tumour bed */}
      <motion.g style={{ opacity: beads }}>
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          return <circle key={i} cx={410 + Math.cos(a) * (16 + (i % 4) * 9)} cy={244 + Math.sin(a) * (14 + (i % 3) * 10)} r="4" fill={stroke} opacity="0.85" />;
        })}
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={410} y={162}>Tumour blush</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}>
        <Caption x={400} y={150}>Feeding artery</Caption>
        <Caption x={400} y={170}>blocked with beads</Caption>
      </motion.g>
    </Frame>
  );
}
