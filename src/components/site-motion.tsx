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
    if (reduced) return;
    const frame = window.requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR));
      const cleanups = sections.map((section) => {
        if (section.closest("[data-motion-skip]")) return () => undefined;
        const candidates = Array.from(section.querySelectorAll<HTMLElement>(ITEM_SELECTOR))
          .filter((item) => !item.closest("[data-motion-skip]") && item.dataset.motionSeen !== "true")
          .slice(0, 18);
        if (!candidates.length) return () => undefined;

        candidates.forEach((item) => {
          item.style.opacity = "0";
          item.style.transform = item.matches("figure, img, video") ? "scale(.97)" : "translateY(24px)";
        });

        return inView(
          section,
          () => {
            candidates.forEach((item) => { item.dataset.motionSeen = "true"; });
            const controls = animate(
              candidates,
              { opacity: 1, transform: "none", filter: ["blur(5px)", "blur(0px)"] },
              { duration: 0.55, delay: stagger(0.07), ease: [0.16, 1, 0.3, 1] },
            );
            return () => controls.stop();
          },
          { amount: 0.12, margin: "0px 0px -8% 0px" },
        );
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, reduced]);

  return null;
}