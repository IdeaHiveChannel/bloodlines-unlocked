export function Footer() {
  return (
    <footer className="relative bg-[#050B16] pt-24 pb-10 border-t border-white/[0.05]">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10">
        <h2 className="text-display-xxl">
          Advanced,
          <br />
          image-guided
          <br />
          <span className="text-[color-mix(in_oklab,var(--accent)_70%,white)]">vascular care.</span>
        </h2>
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-small text-[var(--ink-dim)]">
          <div>
            <p className="text-label">Practice</p>
            <p className="mt-3 text-[var(--ink)]">Dr. Mandeep Sagar</p>
            <p className="mt-1">Vascular &amp; neuro interventional radiology</p>
          </div>
          <div>
            <p className="text-label">Explore</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/conditions" data-cursor="link">Conditions</a></li>
              <li><a href="/procedures" data-cursor="link">Procedures</a></li>
              <li><a href="/about" data-cursor="link">About</a></li>
              <li><a href="/resources" data-cursor="link">Resources</a></li>
            </ul>
          </div>
          <div>
            <p className="text-label">Contact</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/contact" data-cursor="link">Book consultation</a></li>
              <li><a href="#" data-cursor="link">WhatsApp</a></li>
              <li><a href="#" data-cursor="link">Directions</a></li>
            </ul>
          </div>
          <div>
            <p className="text-label">Notice</p>
            <p className="mt-3">The information presented is educational. It does not constitute medical advice. Consult a qualified physician for diagnosis and treatment.</p>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-white/[0.05] flex flex-wrap justify-between gap-4 text-caption text-[var(--ink-dim)]">
          <p>© {new Date().getFullYear()} Dr. Mandeep Sagar. All rights reserved.</p>
          <p className="text-label">Created by Muad Ahamed · 2026</p>

        </div>
      </div>
    </footer>
  );
}
