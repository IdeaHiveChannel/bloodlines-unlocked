import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavMenu, type MenuLink } from "./nav-menu";
import { pillars } from "../lib/pillars";
import { conditions, featuredProcedures } from "../lib/content";

const diseaseLinks: MenuLink[] = [
  ...pillars.map((p) => ({ to: `/diseases/${p.slug}`, label: p.name })),
  { to: "/diseases", label: "All diseases" },
];

const conditionLinks: MenuLink[] = [
  ...conditions.slice(0, 10).map((c) => ({ to: `/conditions/${c.slug}`, label: c.name })),
  { to: "/conditions", label: "All conditions" },
];

const procedureLinks: MenuLink[] = [
  ...featuredProcedures.map((p) => ({ to: `/procedures/${p.slug}`, label: p.name })),
  { to: "/procedures", label: "All procedures" },
];

const moreLinks: MenuLink[] = [
  { to: "/expertise", label: "Expertise" },
  { to: "/media", label: "Media & publications" },
  { to: "/testimonials", label: "Patient stories" },
  { to: "/resources", label: "Resources" },
  { to: "/second-opinion", label: "Second opinion" },
  { to: "/contact", label: "Contact" },
];

const groups: { label: string; links: MenuLink[]; columns?: 1 | 2 }[] = [
  { label: "Diseases", links: diseaseLinks, columns: 2 },
  { label: "Conditions", links: conditionLinks, columns: 2 },
  { label: "Procedures", links: procedureLinks },
  { label: "More", links: moreLinks },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);

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
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" data-cursor="link">
            <span className="inline-block size-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span className="min-w-0 leading-none">
              <span className="block truncate text-nav">Dr Mandeep Sagar</span>
              <span className="mt-0.5 hidden text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[var(--ink-dim)] xs:block">
                Vascular · neuro interventional
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            <li>
              <Link
                to="/about"
                className="group relative text-nav text-[var(--ink-dim)] transition-colors hover:text-white"
                data-cursor="link"
              >
                About
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            {groups.map((g) => (
              <NavMenu key={g.label} label={g.label} links={g.links} columns={g.columns} />
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              to="/contact"
              className="hidden min-h-11 items-center rounded-full bg-white px-5 text-button text-black transition-colors hover:bg-[var(--accent)] hover:text-black md:inline-flex"
              data-cursor="cta"
            >
              Book consultation
            </Link>
            <button
              className="grid size-11 place-items-center text-white lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              data-cursor="link"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] flex h-dvh flex-col bg-[#050B16]/97 backdrop-blur-xl">
          <div className="flex shrink-0 justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              data-cursor="link"
              className="grid size-11 place-items-center"
            >
              <X size={22} />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <ul className="mx-auto flex w-full max-w-md flex-col gap-1">
              <li>
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="block py-3 text-h3"
                  data-cursor="link"
                >
                  About
                </Link>
              </li>
              {groups.map((g) => {
                const isOpen = section === g.label;
                return (
                  <li key={g.label} className="border-t border-white/[0.06]">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setSection(isOpen ? null : g.label)}
                      className="flex w-full items-center justify-between py-3 text-h3"
                      data-cursor="link"
                    >
                      {g.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[var(--accent)]" : "text-[var(--ink-dim)]"}`}
                      />
                    </button>
                    {isOpen && (
                      <ul className="pb-3">
                        {g.links.map((l) => (
                          <li key={l.to}>
                            <a
                              href={l.to}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-small text-[var(--ink-dim)]"
                              data-cursor="link"
                            >
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              <li className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-7 text-button text-black"
                  data-cursor="cta"
                >
                  Book consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
