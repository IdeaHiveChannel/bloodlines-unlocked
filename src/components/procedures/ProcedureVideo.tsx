import type { ProcedureVideoMeta } from "../../lib/media";
import { ResponsiveVideo } from "../media/ResponsiveVideo";

export function ProcedureVideo({ video }: { video: ProcedureVideoMeta }) {
  return (
    <figure className="mt-10 w-full min-w-0 max-w-full">
      <ResponsiveVideo
        src={video.url}
        poster={video.poster}
        ratio={video.ratio}
        fit="contain"
        frameClassName="sm:rounded-3xl"
        label={`Open fullscreen: ${video.caption}`}
      />
      <figcaption className="mt-4 text-caption text-[var(--ink-dim)]">{video.caption}</figcaption>
    </figure>
  );
}
