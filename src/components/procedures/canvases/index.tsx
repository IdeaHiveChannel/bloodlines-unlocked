import type { ReactElement } from "react";
import { type MotionValue } from "framer-motion";
import type { Storyboard } from "../../../lib/content";
import { Angioplasty } from "./Angioplasty";
import { Thrombectomy } from "./Thrombectomy";
import { Evar } from "./Evar";
import { LaserAblation } from "./LaserAblation";
import { Tace } from "./Tace";
import { MicrowaveAblation } from "./MicrowaveAblation";
import { Coiling } from "./Coiling";
import { ThyroidAblation } from "./ThyroidAblation";
import { Genicular } from "./Genicular";
import { Fistuloplasty } from "./Fistuloplasty";
import { Tips } from "./Tips";
import { ProstateEmbolization } from "./ProstateEmbolization";
import { FibroidEmbolization } from "./FibroidEmbolization";

/** Each procedure gets its own anatomy, device and sequence — never a shared template. */
const scenes: Record<Storyboard, (p: { progress: MotionValue<number>; beats?: number }) => ReactElement> = {
  angioplasty: Angioplasty,
  thrombectomy: Thrombectomy,
  evar: Evar,
  laser: LaserAblation,
  tace: Tace,
  "microwave-ablation": MicrowaveAblation,
  coiling: Coiling,
  "thyroid-ablation": ThyroidAblation,
  genicular: Genicular,
  fistuloplasty: Fistuloplasty,
  tips: Tips,
  prostate: ProstateEmbolization,
  fibroid: FibroidEmbolization,
};

export function StoryboardCanvas({
  storyboard,
  progress,
  beats,
}: {
  storyboard?: Storyboard;
  progress: MotionValue<number>;
  beats?: number;
}) {
  const Scene = storyboard ? scenes[storyboard] : undefined;
  if (!Scene) return null;
  return (
    <div className="absolute inset-0">
      <Scene progress={progress} beats={beats} />
    </div>
  );
}

