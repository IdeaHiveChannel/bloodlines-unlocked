import { createFileRoute } from "@tanstack/react-router";
import { localeHead } from "@/lib/i18n/meta";
import { sectionSchema } from "@/lib/seo/schema";
import { PatientInfoPage } from "../components/sections/PatientInfoPage";

export const Route = createFileRoute("/{-$locale}/patient-information/before-consultation")({
  head: ({ params }) =>
    localeHead(params, "/patient-information/before-consultation", {
      title: "Before your consultation — Dr. Mandeep Sagar",
      description:
        "Which reports and images to bring, what to note down beforehand, and the questions worth asking at a vascular or neurointerventional consultation.",
      ogTitle: "Before your consultation",
      ogDescription: "What to bring, what to write down, and what to ask.",
      scripts: sectionSchema({ path: "/patient-information/before-consultation", name: "Before your consultation", description: "Which reports and images to bring, what to note down beforehand, and the questions worth asking.", parent: { name: "For patients", path: "/resources" } }),
    }),
  component: () => <PatientInfoPage slug="before-consultation" />,
});
