// Single source of truth for every contact path on the site.
// Replace the placeholder values below with the verified clinic details.

export const contact = {
  // Digits only, international format, no "+" — used to build wa.me links.
  whatsappNumber: "910000000000",
  phoneDisplay: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  coordinatorDisplay: "+91 00000 00000",
  coordinatorHref: "tel:+910000000000",
  email: "clinic@example.com",
  mapsUrl: "https://maps.google.com/",
  verified: false,
};

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
