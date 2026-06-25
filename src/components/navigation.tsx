import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/conditions", label: "Conditions" },
  { to: "/procedures", label: "Procedures" },
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
      <header className="fixed left-0 right-0 top-0 z-50 px-6 pt-5 sm:px-10 sm:pt-7">
        <nav className={`mx-auto flex max-w-[1480px] items-center justify-between rounded-full border border-white/[0.06] px-5 py-3 transition-all duration-500 ${scrolled ? "bg-[#050B16]/70 backdrop-blur-md" : "bg-transparent"}`}>
          <Link to="/" className="group flex items-center gap-3" data-cursor="link">
            <span className="inline-block size-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span className="leading-none">
              <span className="block text-[13px] font-medium tracking-[0.04em]">Dr Mandeep Sagar</span>
              <span className="block text-[9px] tracking-[0.28em] uppercase text-[var(--ink-dim)] mt-0.5">Vascular · Neuro Interventional</span>
            </span>
          </Link>
          <ul className="hidden lg:flex items-center gap-7">
            {items.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="group relative text-[12.5px] tracking-wide text-[var(--ink-dim)] hover:text-white transition-colors" data-cursor="link">
                  {i.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex rounded-full bg-white text-black px-4 py-2 text-[12px] tracking-wide hover:bg-[var(--accent)] hover:text-black transition-colors" data-cursor="cta">
              Book Consultation
            </Link>
            <button className="lg:hidden text-white" onClick={() => setOpen(true)} aria-label="Menu" data-cursor="link">
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#050B16]/95 backdrop-blur-xl flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setOpen(false)} aria-label="Close" data-cursor="link"><X size={22} /></button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-6">
            {items.map((i) => (
              <li key={i.to}>
                <Link to={i.to} onClick={() => setOpen(false)} className="text-display text-4xl" data-cursor="link">{i.label}</Link>
              </li>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-6 rounded-full bg-white text-black px-6 py-3" data-cursor="cta">Book Consultation</Link>
          </ul>
        </div>
      )}
    </>
  );
}
