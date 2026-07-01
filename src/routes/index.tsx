import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/hero/Hero";
import { Anatomy } from "../components/anatomy/Anatomy";
import { Procedures } from "../components/procedures/Procedures";
import { BeforeAfter } from "../components/sections/BeforeAfter";
import { Recovery } from "../components/sections/Recovery";
import { Journey } from "../components/sections/Journey";
import { Doctor } from "../components/sections/Doctor";
import { Consultation } from "../components/sections/Consultation";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Mandeep Sagar — Restoring blood flow with image-guided precision" },
      { name: "description", content: "A documentary on advanced vascular and neurointerventional radiology — minimally invasive procedures performed through pinpoint access, under real-time imaging." },
      { property: "og:title", content: "Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist" },
      { property: "og:description", content: "Restoring blood flow with image-guided precision." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Anatomy />
      <Procedures />
      <BeforeAfter />
      <Recovery />
      <Journey />
      <Doctor />
      <Consultation />
      <Footer />
    </main>
  );
}
