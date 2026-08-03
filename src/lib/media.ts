import aneurysmCoiling from "../assets/video-aneurysm-coiling.mp4.asset.json";
import aneurysmRepair from "../assets/video-aneurysm-repair.mp4.asset.json";
import thrombectomy from "../assets/video-thrombectomy.mp4.asset.json";
import varicose from "../assets/video-varicose-vein-ablation.mp4.asset.json";
import posterCoiling from "../assets/poster-aneurysm-coiling.jpg";
import posterRepair from "../assets/poster-aneurysm-repair.jpg";
import posterThrombectomy from "../assets/poster-thrombectomy.jpg";
import posterVaricose from "../assets/poster-varicose-vein-ablation.jpg";

export type ProcedureVideoMeta = {
  url: string;
  caption: string;
  /** Poster frame, shown instantly while the file streams. */
  poster?: string;
  /** Intrinsic width / height — reserves layout space before metadata loads. */
  ratio?: number;
};

const PORTRAIT = 9 / 16;

/** Procedure slug → animation film shown at the top of its page. */
export const procedureVideos: Record<string, ProcedureVideoMeta> = {
  "aneurysm-coiling": {
    url: aneurysmCoiling.url,
    poster: posterCoiling,
    ratio: PORTRAIT,
    caption: "Cerebral aneurysm coiling — the sac is packed from within the vessel.",
  },
  thrombectomy: {
    url: thrombectomy.url,
    poster: posterThrombectomy,
    ratio: PORTRAIT,
    caption: "Mechanical thrombectomy — the clot is captured and withdrawn.",
  },
  "aneurysm-repair": {
    url: aneurysmRepair.url,
    poster: posterRepair,
    ratio: PORTRAIT,
    caption: "Endovascular aneurysm repair — a stent graft is deployed inside the aorta.",
  },
  "varicose-vein-ablation": {
    url: varicose.url,
    poster: posterVaricose,
    ratio: PORTRAIT,
    caption: "Endovenous ablation — the failing vein is sealed along its length.",
  },
};
