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
    <figure className="mt-10 w-full max-w-full">
      <div className="w-full max-w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black sm:rounded-3xl">
        <video
          ref={ref}
          src={video.url}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reduced}
          className="block aspect-video h-auto max-h-[70svh] w-full max-w-full object-contain"
        />
      </div>
      <figcaption className="mt-4 text-caption text-[var(--ink-dim)]">{video.caption}</figcaption>
    </figure>
  );
}
