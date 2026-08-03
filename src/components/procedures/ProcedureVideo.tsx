import type { ProcedureVideoMeta } from "../../lib/media";
import { ResponsiveVideo } from "../media/ResponsiveVideo";

export function ProcedureVideo({ video }: { video: ProcedureVideoMeta }) {
  return (
    <figure className="mt-10 w-full min-w-0 max-w-full">
      <ResponsiveVideo src={video.url} frameClassName="sm:rounded-3xl" />
      <figcaption className="mt-4 text-caption text-[var(--ink-dim)]">{video.caption}</figcaption>
    </figure>
  );
}
