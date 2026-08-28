import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n/meta";
import { sectionSchema } from "@/lib/seo/schema";
import { PatientInfoPage } from "../components/sections/PatientInfoPage";

export const Route = createFileRoute("/{-$locale}/patient-information/preparing-for-treatment")({
  head: ({ params }) =>
    localeHead(params, "/patient-information/preparing-for-treatment", {
      title: "Preparing for a procedure — Dr. Mandeep Sagar",
      description:
        "Tests, medicines, fasting and what to tell the team before an image-guided procedure, and what to arrange for the day itself.",
      ogTitle: "Preparing for a procedure",
      ogDescription: "Tests, medicines, fasting and what the team needs to know.",
      scripts: sectionSchema({ path: "/patient-information/preparing-for-treatment", name: "Preparing for a procedure", description: "Tests, medicines, fasting and what to tell the team before an image-guided procedure.", parent: { name: "For patients", path: "/resources" } }),
    }),
  component: () => <PatientInfoPage slug="preparing-for-treatment" />,
});
