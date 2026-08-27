import stroke from "@/assets/conditions/stroke.jpg";
import brainAneurysm from "@/assets/conditions/brain-aneurysm.jpg";
import brainAvmAvf from "@/assets/conditions/brain-avm-avf.jpg";
import pad from "@/assets/conditions/peripheral-arterial-disease.jpg";
import diabeticFoot from "@/assets/conditions/diabetic-foot.jpg";
import gangrene from "@/assets/conditions/gangrene.jpg";
import varicoseVeins from "@/assets/conditions/varicose-veins.jpg";
import dvt from "@/assets/conditions/deep-vein-thrombosis.jpg";
import thyroidNodules from "@/assets/conditions/thyroid-nodules.jpg";
import kneeOa from "@/assets/conditions/knee-osteoarthritis.jpg";
import enlargedProstate from "@/assets/conditions/enlarged-prostate.jpg";
import uterineFibroids from "@/assets/conditions/uterine-fibroids.jpg";
import liverTumours from "@/assets/conditions/liver-tumours.jpg";
import poorCirculation from "@/assets/conditions/poor-blood-circulation.jpg";

/** Condition guide slug → card image. */
export const conditionImages: Record<string, string> = {
  stroke,
  "brain-aneurysm": brainAneurysm,
  "brain-avm-avf": brainAvmAvf,
  "peripheral-arterial-disease": pad,
  "diabetic-foot": diabeticFoot,
  gangrene,
  "varicose-veins": varicoseVeins,
  "deep-vein-thrombosis": dvt,
  "thyroid-nodules": thyroidNodules,
  "knee-osteoarthritis": kneeOa,
  "enlarged-prostate": enlargedProstate,
  "uterine-fibroids": uterineFibroids,
  "liver-tumours": liverTumours,
  "poor-blood-circulation": poorCirculation,
};

/** Accepts a card `to` path such as "/conditions/stroke". */
export function conditionImageFor(to: string) {
  const slug = to.split("/").filter(Boolean).pop() ?? "";
  return conditionImages[slug];
}
