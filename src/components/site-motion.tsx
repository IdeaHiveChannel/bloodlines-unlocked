import { animate, inView, stagger, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const SECTION_SELECTOR = "main section, main > header, main > div > header";
const ITEM_SELECTOR = "h1, h2, h3, p, figure, article, ol > li, ul > li, .grid > div, [data-motion-item]";

/** Progressive enhancement for shared editorial reveals. HTML stays visible to SSR and search. */
export function SiteMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const reduced = useReducedMotion();

  useEffect(() => {
    let cleanups: Array<() => void> = [];
    // Never hide content before its section enters view. Short sections and
    // scroll-restored pages can miss the observer threshold altogether.
    if (reduced) {
      document.querySelectorAll<HTMLElement>("[data-motion-seen]").forEach((item) => {
        item.style.removeProperty("opacity");
        item.style.removeProperty("transform");
        item.style.removeProperty("filter");
      });
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
      cleanups = sections.map((section) => {
        if (section.closest("[data-motion-skip]")) return () => undefined;
        const candidates = Array.from(section.querySelectorAll<HTMLElement>(ITEM_SELECTOR))
          .filter((item) => !item.closest("[data-motion-skip]") && item.dataset.motionSeen !== "true")
          .slice(0, 18);
        if (!candidates.length) return () => undefined;

        return inView(
          section,
          () => {
            candidates.forEach((item) => { item.dataset.motionSeen = "true"; });
            animate(
              candidates,
              { opacity: [0.75, 1], transform: ["translateY(12px)", "none"] },
              { duration: 0.45, delay: stagger(0.06), ease: [0.16, 1, 0.3, 1] },
            );
          },
          { amount: 0.12, margin: "0px 0px -8% 0px" },
        );
      });
    });
    return () => {
      window.cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname, reduced]);

  return null;
}