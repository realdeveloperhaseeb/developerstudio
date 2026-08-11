/*
  UAE landing-page registry — powers the header "UAE ▾" dropdown and the
  UAE sitemap entries. Start with Dubai; add other emirates as we ship
  their dedicated pages.
*/
export type UaeLocation = {
  slug: string;      // URL slug (goes to /<slug>)
  city: string;      // display name
  headline: string;  // short label for the dropdown
  eyebrow?: string;  // optional secondary label under the city name
};

export const uaeLocations: UaeLocation[] = [
  {
    slug: "digital-marketing-agency-dubai",
    city: "Dubai",
    headline: "Digital Marketing Agency Dubai",
    eyebrow: "SEO · Google Ads · Meta Ads",
  },
];

export const getUaeLocation = (slug: string) =>
  uaeLocations.find((l) => l.slug === slug);
