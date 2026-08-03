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
      className={`relative w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/[0.06] bg-black aspect-video max-h-[70svh] landscape:max-h-[55svh] [@media(max-height:520px)]:max-h-[70svh] mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

export const mediaFillClass =
  "absolute inset-0 block h-full w-full max-w-full object-cover object-center";
