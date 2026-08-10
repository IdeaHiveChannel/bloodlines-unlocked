import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n/meta";
import { PatientInfoPage } from "../components/sections/PatientInfoPage";

export const Route = createFileRoute("/{-$locale}/patient-information/after-treatment")({
  head: ({ params }) =>
    localeHead(params, "/patient-information/after-treatment", {
      title: "After treatment — Dr. Mandeep Sagar",
      description:
        "What the first hours involve, care of the access site, medicines afterwards, follow-up, and the symptoms that need urgent medical attention.",
      ogTitle: "After treatment",
      ogDescription: "Recovery, follow-up and the symptoms that need urgent care.",
    }),
  component: () => <PatientInfoPage slug="after-treatment" />,
});
