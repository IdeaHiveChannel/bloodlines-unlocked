import aneurysmCoiling from "../assets/video-aneurysm-coiling.mp4.asset.json";
import aneurysmRepair from "../assets/video-aneurysm-repair.mp4.asset.json";
import thrombectomy from "../assets/video-thrombectomy.mp4.asset.json";
import varicose from "../assets/video-varicose-vein-ablation.mp4.asset.json";

export type ProcedureVideoMeta = { url: string; caption: string };

/** Procedure slug → animation film shown at the top of its page. */
export const procedureVideos: Record<string, ProcedureVideoMeta> = {
  "aneurysm-coiling": {
    url: aneurysmCoiling.url,
    caption: "Cerebral aneurysm coiling — the sac is packed from within the vessel.",
  },
  thrombectomy: {
    url: thrombectomy.url,
    caption: "Mechanical thrombectomy — the clot is captured and withdrawn.",
  },
  "aneurysm-repair": {
    url: aneurysmRepair.url,
    caption: "Endovascular aneurysm repair — a stent graft is deployed inside the aorta.",
  },
  "varicose-vein-ablation": {
    url: varicose.url,
    caption: "Endovenous ablation — the failing vein is sealed along its length.",
  },
};
