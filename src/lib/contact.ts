// Single source of truth for every contact path on the site.

export const contact = {
  // Digits only, international format, no "+" — used to build wa.me links.
  whatsappNumber: "916366330505",
  phoneDisplay: "063663 30505",
  phoneHref: "tel:+916366330505",
  coordinatorDisplay: "063663 30505",
  coordinatorHref: "tel:+916366330505",
  email: "vascularcaredr@gmail.com",
  emailHref: "mailto:vascularcaredr@gmail.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mangalore%2C%20Karnataka",
  verified: true,
};

// Official public profiles. Used in the footer, contact page and JSON-LD sameAs.
export const socialLinks = [
  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61591086347527" },
  { label: "Instagram", url: "https://www.instagram.com/vascularcaredoctor" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/dr-mandeep-sagar-749b641b2/" },
  { label: "Google Business Profile", url: "https://share.google/guFKPiZuiF0l76gqf" },
];

export const socialUrls = socialLinks.map((s) => s.url);

export const locations = [
  { city: "Mangalore", state: "Karnataka, India" },
  { city: "Kasaragod", state: "Kerala, India" },
].map((l) => ({
  ...l,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${l.city}, ${l.state}`,
  )}`,
}));

export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message.slice(0, 900))}`;
}

export const whatsappMessages = {
  general: "Hello, I would like to enquire about a consultation with Dr. Mandeep Sagar.",
  booking: "Hello, I would like to book a consultation with Dr. Mandeep Sagar.",
  coordinator:
    "Hello, I am arranging treatment for a family member and would like to speak to the patient coordinator.",
  uploadReports:
    "Hello, I would like to share my medical reports (scans, angiography, blood work) for review by Dr. Mandeep Sagar. I am attaching them to this chat.",
};
