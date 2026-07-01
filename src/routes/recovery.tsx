import { createFileRoute } from "@tanstack/react-router";
import { Recovery } from "../components/sections/Recovery";
import { Footer } from "../components/sections/Footer";

export const Route = createFileRoute("/recovery")({
  head: () => ({
    meta: [
      { title: "Recovery — Dr. Mandeep Sagar" },
      { name: "description", content: "The days after an image-guided intervention — small incision, fast return to life." },
      { property: "og:title", content: "Recovery" },
      { property: "og:description", content: "What the post-procedure timeline actually looks like." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24"><Recovery /></div>
      <Footer />
    </>
  ),
});
