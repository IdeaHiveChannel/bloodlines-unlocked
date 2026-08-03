import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  autoPlayInView?: boolean;
  className?: string;
  frameClassName?: string;
};

/**
 * Video in a frame that adopts the file's own aspect ratio.
 * Landscape films fill a 16:9 box; portrait (9:16) films stay portrait,
 * with their width derived from a viewport-relative height cap so they
 * always fit the screen — including short/landscape viewports.
 */
export function ResponsiveVideo({
  src,
  autoPlayInView = true,
  className = "",
  frameClassName = "",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);
  const [ratio, setRatio] = useState(16 / 9);
  const portrait = ratio < 1;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !autoPlayInView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, autoPlayInView]);

  const readRatio = () => {
    const el = ref.current;
    if (el?.videoWidth && el.videoHeight) setRatio(el.videoWidth / el.videoHeight);
  };

  return (
    <div
      style={{
        aspectRatio: String(ratio),
        maxWidth: `min(100%, calc(70svh * ${ratio}))`,
      }}
      className={`relative mx-auto w-full min-w-0 max-h-[70svh] overflow-hidden rounded-xl border border-white/[0.06] bg-black ${frameClassName}`}
    >

      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        controls={reduced}
        onLoadedMetadata={readRatio}
        className={`absolute inset-0 block h-full w-full max-w-full object-center ${
          portrait ? "object-contain" : "object-cover"
        } ${className}`}
      />
    </div>
  );
}
