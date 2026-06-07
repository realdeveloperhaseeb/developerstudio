import type { IconName } from "@/components/icons";

export type LandingPage = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  icon: IconName;
  accent: "brand" | "ink";
};

export const landingPages: LandingPage[] = [
  {
    slug: "website-development-services-for-roofing-companies",
    title: "Website Development for Roofing Companies",
    audience: "Roofers",
    summary:
      "Mobile-first, lead-generating websites engineered to fill a roofer's diary with profitable jobs.",
    icon: "home",
    accent: "brand",
  },
];

export const getLandingPage = (slug: string) =>
  landingPages.find((p) => p.slug === slug);
