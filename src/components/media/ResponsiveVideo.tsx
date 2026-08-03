import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

export type VideoFit = "auto" | "contain" | "cover";

type Props = {
  src: string;
  /** Poster shown instantly; prevents a blank frame while the file streams. */
  poster?: string;
  /** Known intrinsic ratio (width / height). Reserves space, so no layout shift. */
  ratio?: number;
  /**
   * auto  → portrait clips are contained (never cropped), landscape clips cover.
   * contain / cover force the behaviour at every breakpoint.
   */
  fit?: VideoFit;
  autoPlayInView?: boolean;
  /** Tap the video to open a fullscreen viewer at its true dimensions. */
  expandable?: boolean;
  label?: string;
  className?: string;
  frameClassName?: string;
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

export function ResponsiveVideo({
  src,
  poster,
  ratio: ratioProp,
  fit = "auto",
  autoPlayInView = true,
  expandable = true,
  label = "Play video fullscreen",
  className = "",
  frameClassName = "",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [ratio, setRatio] = useState(ratioProp ?? 16 / 9);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  const portrait = ratio < 1;
  const objectFit = fit === "auto" ? (portrait ? "contain" : "cover") : fit;

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

  const readRatio = useCallback(() => {
    const el = ref.current;
    if (el?.videoWidth && el.videoHeight) setRatio(el.videoWidth / el.videoHeight);
    setReady(true);
  }, []);

  return (
    <>
      <div
        style={{ aspectRatio: String(ratio), maxWidth: `min(100%, calc(70svh * ${ratio}))` }}
        className={`group relative mx-auto w-full min-w-0 max-h-[70svh] overflow-hidden rounded-xl border border-white/[0.06] bg-[#050B16] ${frameClassName}`}
      >
        {/* Skeleton — visible only until the first frame is decodable. */}
        {!ready && !poster && (
          <div
            aria-hidden
            className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.06]"
          />
        )}
        {/* Poster layer — paints instantly, fades out once the video can render. */}
        {poster && (
          <img
            src={poster}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-center transition-opacity duration-500 ${
              objectFit === "cover" ? "object-cover" : "object-contain"
            } ${ready ? "opacity-0" : "opacity-100"}`}
          />
        )}
        <video
          ref={ref}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reduced}
          onLoadedMetadata={readRatio}
          onLoadedData={() => setReady(true)}
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 block h-full w-full max-w-full object-center ${
            objectFit === "cover" ? "object-cover" : "object-contain"
          } ${className}`}

        />

        {expandable && !reduced && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={label}
            className="absolute inset-0 flex items-end justify-end p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--accent)]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-[var(--ink)] backdrop-blur transition group-hover:bg-black/70">
              <Maximize2 className="h-4 w-4" aria-hidden />
            </span>
          </button>
        )}
      </div>

      {open && <FullscreenVideo src={src} poster={poster} ratio={ratio} onClose={() => setOpen(false)} />}
    </>
  );
}

function FullscreenVideo({
  src,
  poster,
  ratio,
  onClose,
}: {
  src: string;
  poster?: string;
  ratio: number;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video viewer"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 backdrop-blur-sm sm:p-6"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-[var(--ink)] sm:right-5 sm:top-5"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: String(ratio) }}
        className="mx-auto block h-auto max-h-[92svh] w-auto max-w-full rounded-lg object-contain"
      />
    </div>
  );
}
