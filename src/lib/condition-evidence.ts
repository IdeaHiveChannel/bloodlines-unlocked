import strokeBefore from "@/assets/case-stroke-before.jpg";
import strokeAfter from "@/assets/case-stroke-after.jpg";
import liverBefore from "@/assets/case-liver-before.jpg";
import liverAfter from "@/assets/case-liver-after.jpg";
import fibroidBefore from "@/assets/case-fibroid-before.jpg";
import fibroidAfter from "@/assets/case-fibroid-after.jpg";
import veinsBefore from "@/assets/case-veins-before.jpg";
import veinsAfter from "@/assets/case-veins-after.jpg";
import angioBefore from "@/assets/angio-before.jpg";
import angioAfter from "@/assets/angio-after.jpg";
import dvtBefore from "@/assets/case-dvt-before.jpg.asset.json";
import dvtAfter from "@/assets/case-dvt-after.jpg.asset.json";

export type EvidenceCase = {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  note: string;
};

/**
 * Condition guide slug → paired imaging figures.
 * These are imaging illustrations of the appearance before and after an
 * image-guided treatment. They are not patient case reports and carry no
 * outcome claim; wording is kept descriptive on purpose.
 */
export const conditionEvidence: Record<string, EvidenceCase> = {
  stroke: {
    before: strokeBefore,
    after: strokeAfter,
    beforeLabel: "Vessel occluded",
    afterLabel: "Vessel opened",
    note: "Angiographic appearance of a blocked brain artery, and the same artery after the clot is retrieved.",
  },
  "peripheral-arterial-disease": {
    before: angioBefore,
    after: angioAfter,
    beforeLabel: "Narrowed segment",
    afterLabel: "Flow restored",
    note: "A narrowed leg artery before treatment, and the same segment after angioplasty and stenting.",
  },
  "poor-blood-circulation": {
    before: angioBefore,
    after: angioAfter,
    beforeLabel: "Narrowed segment",
    afterLabel: "Flow restored",
    note: "A narrowed leg artery before treatment, and the same segment after angioplasty.",
  },
  "diabetic-foot": {
    before: angioBefore,
    after: angioAfter,
    beforeLabel: "Below-knee vessel blocked",
    afterLabel: "Below-knee flow re-established",
    note: "Below-knee vessels before and after revascularisation, which is done to support wound healing.",
  },
  gangrene: {
    before: angioBefore,
    after: angioAfter,
    beforeLabel: "Blocked inflow",
    afterLabel: "Inflow restored",
    note: "Arterial inflow to the foot before and after image-guided revascularisation.",
  },
  "liver-tumours": {
    before: liverBefore,
    after: liverAfter,
    beforeLabel: "Tumour vascularity",
    afterLabel: "Post-treatment appearance",
    note: "Imaging appearance of a liver lesion before treatment and after image-guided therapy.",
  },
  "uterine-fibroids": {
    before: fibroidBefore,
    after: fibroidAfter,
    beforeLabel: "Fibroid blood supply",
    afterLabel: "Devascularised fibroid",
    note: "Fibroid arterial supply before embolisation, and the imaging appearance afterwards.",
  },
  "varicose-veins": {
    before: veinsBefore,
    after: veinsAfter,
    beforeLabel: "Refluxing vein",
    afterLabel: "Closed vein",
    note: "A refluxing surface vein before ablation, and the same leg after the vein is closed.",
  },
  "deep-vein-thrombosis": {
    before: dvtBefore.url,
    after: dvtAfter.url,
    beforeLabel: "Thrombosed vein",
    afterLabel: "Vein recanalised",
    note: "A deep vein filled with clot, and the same vein after catheter-directed treatment.",
  },
};

export function evidenceFor(slug: string): EvidenceCase | undefined {
  return conditionEvidence[slug];
}
