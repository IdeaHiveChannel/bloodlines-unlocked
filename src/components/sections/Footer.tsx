export function Footer() {
  return (
    <footer className="relative bg-[#050B16] pt-24 pb-10 border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
        <h2 className="text-display text-[clamp(3rem,12vw,12rem)] leading-[0.85]">
          Advanced
          <br />
          Image-Guided
          <br />
          <span className="italic font-extralight text-[color-mix(in_oklab,var(--accent)_70%,white)]">Vascular Care.</span>
        </h2>
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-[13px] text-[var(--ink-dim)]">
          <div>
            <p className="text-mono-label">Practice</p>
            <p className="mt-3 text-[var(--ink)]">Dr. Mandeep Sagar</p>
            <p className="mt-1">Vascular & Neuro Interventional Radiology</p>
          </div>
          <div>
            <p className="text-mono-label">Explore</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/conditions" data-cursor="link">Conditions</a></li>
              <li><a href="/procedures" data-cursor="link">Procedures</a></li>
              <li><a href="/about" data-cursor="link">About</a></li>
              <li><a href="/resources" data-cursor="link">Resources</a></li>
            </ul>
          </div>
          <div>
            <p className="text-mono-label">Contact</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/contact" data-cursor="link">Book Consultation</a></li>
              <li><a href="#" data-cursor="link">WhatsApp</a></li>
              <li><a href="#" data-cursor="link">Directions</a></li>
            </ul>
          </div>
          <div>
            <p className="text-mono-label">Notice</p>
            <p className="mt-3">The information presented is educational. It does not constitute medical advice. Consult a qualified physician for diagnosis and treatment.</p>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-white/[0.05] flex flex-wrap justify-between gap-4 text-[11px] text-[var(--ink-dim)]">
          <p>© {new Date().getFullYear()} Dr. Mandeep Sagar. All rights reserved.</p>
          <p className="text-mono-label">Built with precision</p>
        </div>
      </div>
    </footer>
  );
}
