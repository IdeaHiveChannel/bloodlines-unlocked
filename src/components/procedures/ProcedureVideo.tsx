import { useEffect, useRef, useState } from "react";
import type { ProcedureVideoMeta } from "../../lib/media";

export function ProcedureVideo({ video }: { video: ProcedureVideoMeta }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <figure className="mt-10 w-full min-w-0 max-w-full">
      <MediaFrame className="sm:rounded-3xl">
        <video
          ref={ref}
          src={video.url}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reduced}
          className={mediaFillClass}
        />
      </MediaFrame>
      <figcaption className="mt-4 text-caption text-[var(--ink-dim)]">{video.caption}</figcaption>
    </figure>
  );
}

