import { localeHead, SITE } from "@/lib/i18n/meta";
import { CredentialsShowcase } from "../components/credentials/CredentialsShowcase";
import { showcaseImageObjects } from "../lib/credentials";
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/sections/Footer";
import { MediaTimeline } from "../components/sections/MediaTimeline";

export const Route = createFileRoute("/{-$locale}/media")({
  head: ({ params }) => localeHead(params, "/media", {
    title: "Media & conference gallery — Dr. Mandeep Sagar",
    description:
      "Photographs and certificates of Dr. Mandeep Sagar at KCR 2025 Seoul, LINNC Paris 2026 with Prof. Jacques Moret, SLICE neurointerventional workshops, ISVIR faculty and WLNC conferences.",
    ogTitle: "Media & conference gallery — Dr. Mandeep Sagar",
    ogDescription:
      "Original photographs and certificates from scientific presentations, international neurointerventional courses, workshops and teaching.",
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Dr. Mandeep Sagar — conference and training gallery",
          url: `${SITE}/media`,
          about: { "@id": `${SITE}/#physician` },
          image: showcaseImageObjects(SITE),
        }),
      },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <>
      <main className="bg-[#050B16] pt-28 sm:pt-32">
        <MediaTimeline />
        <CredentialsShowcase variant="media" />
      </main>
      <Footer />
    </>
  );
}
