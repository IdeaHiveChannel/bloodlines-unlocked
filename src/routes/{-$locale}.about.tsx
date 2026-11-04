import { localeHead, SITE } from "@/lib/i18n/meta";
import { useTx } from "@/lib/i18n/tx";
import { createFileRoute } from "@tanstack/react-router";
import { Doctor } from "../components/sections/Doctor";
import { Qualifications } from "../components/credentials/Qualifications";
import { CredentialsShowcase } from "../components/credentials/CredentialsShowcase";
import { showcaseImageObjects, KMC_REG_NO } from "../lib/credentials";
import portraitAsset from "../assets/dr-mandeep-sagar.webp.asset.json";
import { Footer } from "../components/sections/Footer";
import { contact, socialUrls } from "../lib/contact";

export const Route = createFileRoute("/{-$locale}/about")({
  head: ({ params }) => localeHead(params, "/about", {
    title: "About Dr. Mandeep Sagar — Qualifications, training & teaching",
    description:
      "Dr. Mandeep Sagar: MBBS, MD Radiodiagnosis, Fellowship in Vascular & Interventional Radiology (GMC Nagpur), KMC Reg. 114492. Presenter at KCR 2025 Seoul, ISVIR faculty, LINNC Paris and WLNC training.",
    ogTitle: "About Dr. Mandeep Sagar — Vascular & Neuro Interventional Radiologist",
    ogDescription:
      "Verified qualifications, registration, international presentations, teaching and neurointerventional workshops, with original photographs and certificates.",
    ogType: "profile",
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          sameAs: socialUrls,
          "@id": `${SITE}/#physician`,
          name: "Dr. Mandeep Sagar",
          medicalSpecialty: "Radiology",
          image: `${SITE}${portraitAsset.url}`,
          jobTitle: "Vascular and Neuro Interventional Radiologist",
          identifier: { "@type": "PropertyValue", propertyID: "Karnataka Medical Council registration", value: KMC_REG_NO },
          alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Vijayanagara Institute of Medical Sciences, Bellary" },
            { "@type": "CollegeOrUniversity", name: "Gauhati Medical College" },
            { "@type": "CollegeOrUniversity", name: "Government Medical College & Hospital, Nagpur" },
          ],
          hasCredential: [
            { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MBBS" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MD Radiodiagnosis" },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "certificate", name: "Fellowship in Vascular and Interventional Radiology", recognizedBy: { "@type": "Organization", name: "Maharashtra University of Health Sciences" } },
            { "@type": "EducationalOccupationalCredential", credentialCategory: "license", name: "Karnataka Medical Council registration 114492", recognizedBy: { "@type": "Organization", name: "Karnataka Medical Council" } },
          ],
          url: `${SITE}/about`,
          telephone: "+91 63663 30505",
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Dr. Mandeep Sagar — conferences, teaching and workshops",
          url: `${SITE}/about`,
          about: { "@id": `${SITE}/#physician` },
          image: showcaseImageObjects(SITE),
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  const tx = useTx();
  return (
    <>
      <main className="bg-[#050B16] pt-28 sm:pt-32">
        <div className="shell">
          <p className="text-label">{tx("The physician")}</p>
          <h1 className="text-display-xl mt-5 max-w-3xl">
            {tx("About Dr. Mandeep Sagar.")}
          </h1>
          <p className="mt-6 max-w-2xl text-body leading-relaxed text-[var(--ink-dim)]">
            {tx("A vascular and neuro interventional radiologist whose work is defined by one idea: reach the disease through the smallest possible opening, and leave the body otherwise untouched.")}
          </p>
        </div>
        <Doctor />
        <Qualifications />
        <CredentialsShowcase variant="about" />
      </main>
      <Footer />
    </>
  );
}
