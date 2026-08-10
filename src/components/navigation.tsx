import { LocaleLink } from "./locale-link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { useT } from "../lib/i18n/react";
import { useSiteNav } from "../lib/nav";
import { LanguageToggle } from "./language-toggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const t = useT();
  const nav = useSiteNav();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-8 sm:pt-6">
        <nav
          className={`mx-auto flex max-w-[1480px] items-center justify-between gap-3 rounded-full border border-white/[0.06] px-4 py-2.5 transition-all duration-500 sm:px-5 sm:py-3 ${
            scrolled ? "bg-[#050B16]/70 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          <LocaleLink to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" data-cursor="link">
            <span className="inline-block size-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span className="min-w-0 leading-none">
              <span className="block truncate text-nav">{t.brand.name}</span>
              <span className="mt-0.5 hidden text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[var(--ink-dim)] xs:block">
                {t.brand.tagline}
              </span>
            </span>
          </LocaleLink>

          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            <li>
              <LocaleLink
                to={nav.about.to}
                className="group relative text-nav text-[var(--ink-dim)] transition-colors hover:text-white"
                data-cursor="link"
              >
                {nav.about.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </LocaleLink>
            </li>
            {nav.groups.map((g) => (
              <NavMenu key={g.key} label={g.label} links={g.links} columns={g.columns} />
            ))}
            <li>
              <LocaleLink
                to={nav.secondOpinion.to}
                className="group relative text-nav text-[var(--ink-dim)] transition-colors hover:text-white"
                data-cursor="link"
              >
                {nav.secondOpinion.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </LocaleLink>
            </li>
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageToggle />
            <LocaleLink
              to={nav.book.to}
              className="hidden min-h-11 items-center rounded-full bg-white px-5 text-button text-black transition-colors hover:bg-[var(--accent)] hover:text-black xl:inline-flex"
              data-cursor="cta"
            >
              {nav.book.label}
            </LocaleLink>
            <button
              className="grid size-11 place-items-center text-white lg:hidden"
              onClick={() => setOpen(true)}
              aria-label={t.nav.openMenu}
              data-cursor="link"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] flex h-dvh flex-col bg-[#050B16]/97 backdrop-blur-xl">
          <div className="flex shrink-0 items-center justify-between p-4">
            <LanguageToggle />
            <button
              onClick={() => setOpen(false)}
              aria-label={t.nav.closeMenu}
              data-cursor="link"
              className="grid size-11 place-items-center"
            >
              <X size={22} />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <ul className="mx-auto flex w-full max-w-md flex-col gap-1">
              <li>
                <LocaleLink
                  to={nav.about.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-h3"
                  data-cursor="link"
                >
                  {nav.about.label}
                </LocaleLink>
              </li>
              {nav.groups.map((g) => {
                const isOpen = section === g.key;
                return (
                  <li key={g.key} className="border-t border-white/[0.06]">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setSection(isOpen ? null : g.key)}
                      className="flex w-full items-center justify-between gap-3 py-3 text-left text-h3"
                      data-cursor="link"
                    >
                      <span className="min-w-0">{g.label}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--accent)]" : "text-[var(--ink-dim)]"}`}
                      />
                    </button>
                    {isOpen && (
                      <ul className="pb-3">
                        {g.links.map((l) => (
                          <li key={l.to}>
                            <LocaleLink
                              to={l.to}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-small text-[var(--ink-dim)]"
                              data-cursor="link"
                            >
                              {l.label}
                            </LocaleLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              <li className="border-t border-white/[0.06]">
                <LocaleLink
                  to={nav.secondOpinion.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-h3"
                  data-cursor="link"
                >
                  {nav.secondOpinion.label}
                </LocaleLink>
              </li>
              <li className="pt-4">
                <LocaleLink
                  to={nav.book.to}
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-7 text-button text-black"
                  data-cursor="cta"
                >
                  {nav.book.label}
                </LocaleLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
