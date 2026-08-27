import { motion } from "framer-motion";
import {
  Frame, Flow, Caption, usePresence, useRamp, useRange,
  type P, stroke, soft, blood, contrast,
} from "./shared";

/** TIPS — portal hypertension in a cirrhotic liver.
 *  high portal pressure and varices → needle from hepatic to portal vein → shunt → pressure falls. */
export function Tips({ progress }: P) {
  const puncture = useRamp(progress, 0.2, 0.44);
  const shunt = useRamp(progress, 0.48, 0.72);
  const decompress = useRamp(progress, 0.66, 0.94);
  const needleOut = usePresence(progress, 0.18, 0.28, 0.72, 0.84);
  const congested = usePresence(progress, 0, 0.02, 0.6, 0.82);
  const startCaption = usePresence(progress, 0, 0.03, 0.26, 0.36);
  const endCaption = useRamp(progress, 0.86, 0.97);

  const needleLen = useRange(puncture, 0, 1);
  const varices = useRange(decompress, 1, 0.42);
  const varicesOpacity = useRange(decompress, 0.85, 0.25);

  const hepatic = "M300,58 C300,150 288,206 258,246";
  const portal = "M188,542 C230,462 262,368 268,300";
  const track = "M258,246 C262,268 264,284 268,300";

  return (
    <Frame>
      {/* cirrhotic liver — nodular contour */}
      <path d="M112,206 C186,150 316,138 430,170 C506,192 534,258 508,326 C480,402 386,448 288,452 C196,456 130,414 110,348 C94,296 98,240 112,206 Z"
        fill="rgba(255,255,255,0.03)" stroke={soft} strokeWidth="1.2" />
      <g stroke={soft} strokeWidth="0.7" opacity="0.35" fill="none">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx={160 + i * 52} cy={240 + (i % 3) * 58} r={22 + (i % 4) * 6} />
        ))}
      </g>

      <path d={hepatic} fill="none" stroke={soft} strokeWidth="12" opacity="0.16" />
      <path d={hepatic} fill="none" stroke={soft} strokeWidth="1.2" />
      <path d={portal} fill="none" stroke={soft} strokeWidth="16" opacity="0.16" />
      <path d={portal} fill="none" stroke={soft} strokeWidth="1.2" />
      <Caption x={330} y={92} anchor="start">Hepatic vein</Caption>
      <Caption x={150} y={528} anchor="start">Portal vein</Caption>

      {/* congested varices backing up */}
      <motion.g style={{ scale: varices, opacity: varicesOpacity, transformOrigin: "452px 470px" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <path key={i} d={`M${404 + i * 24},546 C${396 + i * 24},500 ${420 + i * 24},474 ${408 + i * 24},430`}
            fill="none" stroke={blood} strokeWidth="7" strokeLinecap="round" />
        ))}
      </motion.g>
      <motion.g style={{ opacity: congested }}>
        <Flow d={portal} width={2.4} dur={3} dash="8 26" color="rgba(226,236,248,0.4)" />
      </motion.g>

      {/* transjugular needle crossing liver parenchyma */}
      <motion.path d={track} fill="none" stroke={contrast} strokeWidth="2.2" strokeDasharray="4 5"
        style={{ pathLength: needleLen, opacity: needleOut }} />

      {/* covered stent shunt */}
      <motion.g style={{ opacity: shunt }} stroke={stroke} strokeWidth="1.4" fill="color-mix(in oklab, var(--accent) 10%, transparent)">
        <path d="M248,240 L268,232 L282,300 L258,308 Z" />
        {Array.from({ length: 4 }).map((_, i) => (
          <line key={i} x1={250 + i * 2} y1={252 + i * 16} x2={272 + i * 2} y2={246 + i * 16} strokeWidth="0.7" opacity="0.5" />
        ))}
      </motion.g>

      <motion.g style={{ opacity: decompress }}>
        <Flow d="M188,542 C230,462 262,368 268,300 L258,246 C280,190 296,140 300,58"
          width={5} dur={1.9} dash="14 24" color="color-mix(in oklab, var(--accent) 62%, transparent)" />
      </motion.g>

      <motion.g style={{ opacity: startCaption }}><Caption x={452} y={392}>High portal pressure</Caption></motion.g>
      <motion.g style={{ opacity: endCaption }}><Caption x={452} y={392}>Pressure decompressed</Caption></motion.g>
    </Frame>
  );
}
