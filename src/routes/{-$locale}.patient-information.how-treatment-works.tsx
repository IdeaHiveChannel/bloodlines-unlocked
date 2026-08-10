import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n/meta";
import { PatientInfoPage } from "../components/sections/PatientInfoPage";

export const Route = createFileRoute("/{-$locale}/patient-information/how-treatment-works")({
  head: ({ params }) =>
    localeHead(params, "/patient-information/how-treatment-works", {
      title: "How image-guided treatment works — Dr. Mandeep Sagar",
      description:
        "How interventional radiology treats disease from inside the body: access, guidance, treatment at the target, anaesthesia and what happens afterwards.",
      ogTitle: "How image-guided treatment works",
      ogDescription:
        "Access, imaging guidance, treatment at the target, and what recovery generally involves.",
    }),
  component: () => <PatientInfoPage slug="how-treatment-works" />,
});
