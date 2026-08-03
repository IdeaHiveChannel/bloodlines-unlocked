import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// Menu entries come from content data as plain strings, so relax Link's typed `to`.
const AnyLink = Link as unknown as (props: {
  to: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}) => ReactElement;

export type MenuLink = { to: string; label: string };

/**
 * Hover-and-click dropdown used in the desktop header rail.
 * Hover opens it for pointer users; click/Enter works for keyboard and hybrid devices.
 */
export function NavMenu({
  label,
  links,
  columns = 1,
  footer,
}: {
  label: string;
  links: MenuLink[];
  columns?: 1 | 2;
  footer?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrap = useRef<HTMLLIElement>(null);

  const cancel = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };
  const openNow = () => {
    cancel();
    setOpen(true);
  };
  const closeSoon = () => {
    cancel();
    timer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  useEffect(() => cancel, []);

  return (
    <li
      ref={wrap}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onFocus={openNow}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) closeSoon();
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-nav text-[var(--ink-dim)] transition-colors hover:text-white"
        data-cursor="link"
      >
        {label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-300 ${open ? "rotate-180 text-[var(--accent)]" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4"
          onMouseEnter={openNow}
          onMouseLeave={closeSoon}
        >
          <div
            className={`max-h-[70svh] overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#050B16]/95 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl ${
              columns === 2 ? "w-[30rem]" : "w-64"
            }`}
          >
            <ul className={columns === 2 ? "grid grid-cols-2 gap-x-1" : ""}>
              {links.map((l) => (
                <li key={l.to + l.label}>
                  <AnyLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-small text-[var(--ink-dim)] transition-colors hover:bg-white/[0.06] hover:text-white"
                    data-cursor="link"
                  >
                    {l.label}
                  </AnyLink>
                </li>
              ))}
            </ul>
            {footer && <div className="mt-1 border-t border-white/[0.06] pt-1">{footer}</div>}
          </div>
        </div>
      )}
    </li>
  );
}
