import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/diseases", label: "Diseases" },
  { to: "/conditions", label: "Conditions" },
  { to: "/procedures", label: "Procedures" },
  { to: "/second-opinion", label: "Second opinion" },
  { to: "/media", label: "Media" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-8 sm:pt-6">
        <nav className={`mx-auto flex max-w-[1480px] items-center justify-between gap-3 rounded-full border border-white/[0.06] px-4 py-2.5 transition-all duration-500 sm:px-5 sm:py-3 ${scrolled ? "bg-[#050B16]/70 backdrop-blur-md" : "bg-transparent"}`}>
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" data-cursor="link">
            <span className="inline-block size-2 shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span className="min-w-0 leading-none">
              <span className="block truncate text-nav">Dr Mandeep Sagar</span>
              <span className="mt-0.5 hidden text-[0.6875rem] font-medium uppercase tracking-[0.24em] text-[var(--ink-dim)] xs:block">Vascular · neuro interventional</span>
            </span>
          </Link>
          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            {items.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="group relative text-nav text-[var(--ink-dim)] hover:text-white transition-colors" data-cursor="link">
                  {i.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-2">
            <Link to="/contact" className="hidden min-h-11 items-center rounded-full bg-white px-5 text-button text-black transition-colors hover:bg-[var(--accent)] hover:text-black md:inline-flex" data-cursor="cta">
              Book consultation
            </Link>
            <button className="grid size-11 place-items-center text-white lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu" data-cursor="link">
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[#050B16]/95 backdrop-blur-xl">
          <div className="flex justify-end p-4">
            <button onClick={() => setOpen(false)} aria-label="Close menu" data-cursor="link" className="grid size-11 place-items-center"><X size={22} /></button>
          </div>
          <ul className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-8 sm:gap-6">
            {items.map((i) => (
              <li key={i.to}>
                <Link to={i.to} onClick={() => setOpen(false)} className="block py-1 text-h3" data-cursor="link">{i.label}</Link>
              </li>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex min-h-11 items-center rounded-full bg-white px-7 text-button text-black" data-cursor="cta">Book consultation</Link>
          </ul>
        </div>
      )}

    </>
  );
}
