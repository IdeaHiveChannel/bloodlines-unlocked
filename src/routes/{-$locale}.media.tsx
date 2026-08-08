import { localeHead } from "@/lib/i18n/meta";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";
import { MediaTimeline } from "../components/sections/MediaTimeline";

export const Route = createFileRoute("/{-$locale}/media")({
  head: ({ params }) => localeHead(params, "/media", {
    title: "Media, publications and awards — Dr. Sagar",
    description:
      "Peer-reviewed publications, conference talks, awards and press coverage in vascular and neuro interventional radiology by Dr. Mandeep Sagar.",
    ogTitle: "Media, publications and awards",
    ogDescription:
      "A verified record of research, conference talks, recognitions and press coverage in interventional radiology.",
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
