import { createFileRoute } from "@tanstack/react-router";
import { Journey } from "../components/sections/Journey";
import { Consultation } from "../components/sections/Consultation";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Patient journey — Dr. Mandeep Sagar" },
      { name: "description", content: "From first call to follow-up — the steps of image-guided vascular care." },
      { property: "og:title", content: "Patient journey" },
      { property: "og:description", content: "Seven steps, one continuous line of care." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24"><Journey /></div>
      <Consultation />
      <Footer />
    </>
  ),
});
