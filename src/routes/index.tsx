import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/hero/Hero";
import { Transition } from "../components/sections/Transition";
import { Anatomy } from "../components/anatomy/Anatomy";
import { ConditionsGateway } from "../components/sections/ConditionsGateway";
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
      { title: "Dr. Mandeep Sagar — Vascular & neuro interventional radiology" },
      {
        name: "description",
        content:
          "Image-guided treatment through a pinhole opening, avoiding major surgery wherever appropriate. Conditions of the brain, chest, abdomen, pelvis and limbs treated by Dr. Mandeep Sagar.",
      },
      {
        property: "og:title",
        content: "Dr. Mandeep Sagar — Vascular & neuro interventional radiologist",
      },
      {
        property: "og:description",
        content: "Image-guided treatment through a pinhole opening, avoiding major surgery wherever appropriate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Transition />
      <Anatomy />
      <ConditionsGateway />
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

