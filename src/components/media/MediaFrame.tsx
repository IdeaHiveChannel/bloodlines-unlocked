import type { ReactNode } from "react";

/**
 * Shared responsive 16:9 media frame.
 * Never wider than its parent, never taller than the visible viewport —
 * the height cap tightens on short/landscape screens.
 */
export function MediaFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto aspect-video w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/[0.06] bg-black max-h-[70svh] max-w-[min(100%,calc(70svh*16/9))] landscape:max-h-[55svh] landscape:max-w-[min(100%,calc(55svh*16/9))] ${className}`}
    >

      {children}
    </div>
  );
}

export const mediaFillClass =
  "absolute inset-0 block h-full w-full max-w-full object-cover object-center";
