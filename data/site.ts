export const site = {
  name: "Developer Studio",
  shortName: "DevStudio",
  url: "https://developerstudio.org",
  tagline: "UK's #1 Digital Growth Partner for Law Firms & Roofing Companies",
  description:
    "Developer Studio builds and grows businesses from zero. Web development, app development, SEO, social media, and Google Ads for law firms and roofing companies across the UK.",
  email: "ceo@developerstudio.org",

  // Contact numbers. Replace freely.
  phones: {
    uk: { label: "UK", display: "+44 7988 563005", e164: "447988563005" },
    pk: { label: "PK", display: "+92 346 4147423", e164: "923464147423" },
  },

  whatsapp: {
    uk: "https://wa.me/447988563005",
    pk: "https://wa.me/923464147423",
    // Pre-filled message link
    message:
      "https://wa.me/447988563005?text=Hi%20Developer%20Studio%2C%20I%27d%20like%20to%20grow%20my%20business.",
  },

  // Social links — replace with real profiles.
  social: [
    { name: "Facebook", href: "https://facebook.com/developerstudio.org", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com/developerstudio.org", icon: "instagram" },
    { name: "LinkedIn", href: "https://linkedin.com/company/developerstudio", icon: "linkedin" },
    { name: "X", href: "https://x.com/developerstudio", icon: "x" },
    { name: "YouTube", href: "https://youtube.com/@developerstudio", icon: "youtube" },
    { name: "WhatsApp", href: "https://wa.me/447988563005", icon: "whatsapp" },
  ],
} as const;

export type Site = typeof site;
