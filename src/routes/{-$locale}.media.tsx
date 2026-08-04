import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";
import { MediaTimeline } from "../components/sections/MediaTimeline";

const SITE = "https://bloodlines-unlocked.lovable.app";

export const Route = createFileRoute("/{-$locale}/media")({
  head: () => ({
    meta: [
      { title: "Media, publications and awards — Dr. Sagar" },
      {
        name: "description",
        content:
          "Peer-reviewed publications, conference talks, awards and press coverage in vascular and neuro interventional radiology by Dr. Mandeep Sagar.",
      },
      { property: "og:title", content: "Media, publications and awards" },
      {
        property: "og:description",
        content:
          "A verified record of research, conference talks, recognitions and press coverage in interventional radiology.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/media` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/media` }],
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
