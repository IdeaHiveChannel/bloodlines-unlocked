import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n/meta";
import { sectionSchema } from "@/lib/seo/schema";
import { PatientInfoPage } from "../components/sections/PatientInfoPage";

export const Route = createFileRoute("/{-$locale}/patient-information/after-treatment")({
  head: ({ params }) =>
    localeHead(params, "/patient-information/after-treatment", {
      title: "After treatment — Dr. Mandeep Sagar",
      description:
        "What the first hours involve, care of the access site, medicines afterwards, follow-up, and the symptoms that need urgent medical attention.",
      ogTitle: "After treatment",
      ogDescription: "Recovery, follow-up and the symptoms that need urgent care.",
      scripts: sectionSchema({ path: "/patient-information/after-treatment", name: "After treatment", description: "The first hours, care of the access site, medicines, follow-up and symptoms that need urgent attention.", parent: { name: "For patients", path: "/resources" } }),
    }),
  component: () => <PatientInfoPage slug="after-treatment" />,
});
