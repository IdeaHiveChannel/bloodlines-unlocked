import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";
import { MediaTimeline } from "../components/sections/MediaTimeline";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media, publications and awards — Dr. Mandeep Sagar" },
      {
        name: "description",
        content:
          "Peer-reviewed publications, conference talks, awards and press coverage in vascular and neuro interventional radiology by Dr. Mandeep Sagar.",
      },
      { property: "og:title", content: "Media, publications and awards" },
      {
        property: "og:description",
        content: "A verified record of research, talks, recognitions and press coverage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <>
      <main className="bg-[#050B16] pt-28 sm:pt-32">
        <MediaTimeline />
      </main>
      <Footer />
    </>
  );
}
