import { createFileRoute } from "@tanstack/react-router";
import { Anatomy } from "../components/anatomy/Anatomy";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/anatomy")({
  head: () => ({
    meta: [
      { title: "Anatomy — Dr. Mandeep Sagar" },
      { name: "description", content: "An interactive vascular map. Hover a region to reveal the diseases treated there." },
      { property: "og:title", content: "Anatomy — Vascular map" },
      { property: "og:description", content: "Region by region, the vascular system as a clinical territory." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24"><Anatomy /></div>
      <Footer />
    </>
  ),
});
