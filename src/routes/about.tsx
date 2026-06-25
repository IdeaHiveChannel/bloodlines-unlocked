import { createFileRoute } from "@tanstack/react-router";
import { Doctor } from "../components/sections/Doctor";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr. Mandeep Sagar" },
      { name: "description", content: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist." },
      { property: "og:title", content: "About — Dr. Mandeep Sagar" },
      { property: "og:description", content: "Image-guided vascular and neurointerventional practice." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24"><Doctor /></div>
      <Footer />
    </>
  ),
});
