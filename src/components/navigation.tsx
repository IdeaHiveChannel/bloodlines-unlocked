import { LocaleLink } from "./locale-link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavMenu } from "./nav-menu";
import { useT } from "../lib/i18n/react";
import { useTx } from "../lib/i18n/tx";
import { useSiteNav } from "../lib/nav";
import { LanguageToggle } from "./language-toggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useT();
  const tx = useTx();
  const { groups, about, secondOpinion, book } = useSiteNav();

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
            {groups.map((group) => (
              <NavMenu 
                key={group.key}
                label={group.label}
                links={group.links}
                columns={group.columns as 1 | 2}
              />
            ))}
            <li>
              <LocaleLink
                to={about.to}
                className="text-nav text-[var(--ink-dim)] transition-colors hover:text-white"
                data-cursor="link"
              >
                {about.label}
              </LocaleLink>
            </li>
            <li>
              <LocaleLink
                to={secondOpinion.to}
                className="text-nav text-[var(--ink-dim)] transition-colors hover:text-white"
                data-cursor="link"
              >
                {secondOpinion.label}
              </LocaleLink>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageToggle />
            <LocaleLink
              to={book.to}
              className="hidden rounded-full bg-[var(--accent)] px-5 py-2 text-label text-white transition-all hover:bg-[var(--accent)]/90 sm:block"
            >
              {book.label}
            </LocaleLink>
            <button
              onClick={() => setOpen(!open)}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--ink)] lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#050B16] pt-24 transition-transform duration-500 lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto px-6 pb-12">
          {groups.map((group) => (
            <div key={group.key} className="mb-8">
              <h3 className="mb-4 text-caption uppercase tracking-widest text-[var(--ink-dim)]">
                {group.label}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.to + link.label}>
                    <LocaleLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="block text-h2 transition-colors hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mb-8">
            <LocaleLink
              to={about.to}
              onClick={() => setOpen(false)}
              className="block text-h2 transition-colors hover:text-[var(--accent)]"
            >
              {about.label}
            </LocaleLink>
          </div>
          <div className="mb-8">
            <LocaleLink
              to={secondOpinion.to}
              onClick={() => setOpen(false)}
              className="block text-h2 transition-colors hover:text-[var(--accent)]"
            >
              {secondOpinion.label}
            </LocaleLink>
          </div>
          <div className="mt-4">
            <LocaleLink
              to={book.to}
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-[var(--accent)] py-4 text-center text-label text-white"
            >
              {book.label}
            </LocaleLink>
          </div>
        </div>
      </div>
    </>
  );
}
