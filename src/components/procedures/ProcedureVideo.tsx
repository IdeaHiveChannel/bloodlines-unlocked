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
    <figure className="mt-14">
      <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-black">
        <video
          ref={ref}
          src={video.url}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reduced}
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-4 text-[13px] text-[var(--ink-dim)]">{video.caption}</figcaption>
    </figure>
  );
}
