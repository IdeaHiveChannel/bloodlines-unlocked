import { useLocation, useNavigate } from "@tanstack/react-router";
import { useLocale } from "../lib/i18n/react";
import { localePath, stripLocale } from "../lib/i18n";

/** EN | മലയാളം switch. Keeps the visitor on the same page in the other language. */
export function LanguageToggle() {
  const locale = useLocale();
  const navigate = useNavigate();
  const pathname = useLocation({ select: (l) => l.pathname });

  const go = (next: "en" | "ml") => {
    if (next === locale) return;
    const base = stripLocale(pathname);
    navigate({ to: localePath(base, next) as never });
  };

  return (
    <div
      className="flex items-center rounded-full border border-white/[0.1] p-0.5 text-[0.6875rem] font-medium"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => go("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          locale === "en" ? "bg-white text-black" : "text-[var(--ink-dim)] hover:text-white"
        }`}
        data-cursor="link"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => go("ml")}
        aria-pressed={locale === "ml"}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          locale === "ml" ? "bg-white text-black" : "text-[var(--ink-dim)] hover:text-white"
        }`}
        data-cursor="link"
      >
        മലയാളം
      </button>
    </div>
  );
}
