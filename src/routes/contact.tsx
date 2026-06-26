import { createFileRoute } from "@tanstack/react-router";
import { Consultation } from "../components/sections/Consultation";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Consultation — Dr. Mandeep Sagar" },
      { name: "description", content: "Reach the practice by appointment, WhatsApp, phone, or clinic visit." },
      { property: "og:title", content: "Book a Consultation" },
      { property: "og:description", content: "When you're ready, the door is one tap away." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24"><Consultation /></div>
      <div className="bg-[#050B16] py-20 border-t border-white/[0.05]">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 text-center">
          <p className="text-label">Clinic details</p>
          <p className="mt-6 text-display text-3xl">Clinic address, phone, and hours will appear here once provided.</p>
          <p className="mt-6 text-[13px] text-[var(--ink-dim)] italic">No phone number or address has been published on this page until verified.</p>
        </div>
      </div>
      <Footer />
    </>
  ),
});
