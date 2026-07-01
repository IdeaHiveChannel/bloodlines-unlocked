import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Dr. Mandeep Sagar" },
      { name: "description", content: "Before-and-after angiographic imaging — occluded vessels restored to flow." },
      { property: "og:title", content: "Results — Before and after" },
      { property: "og:description", content: "Angiographic evidence of restored circulation." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24"><BeforeAfter /></div>
      <Footer />
    </>
  ),
});
