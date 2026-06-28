export type Project = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  image: string;
  summary: string;
  services: string[];
  results: { label: string; value: string }[];
  url?: string;
  owner?: string; // team member slug, e.g. "abida" or "haseeb"
};

export const projects: Project[] = [
  {
    slug: "petroff-law",
    title: "Petroff Law",
    category: "Law Firm Website + SEO",
    industry: "Law Firms",
    image: "/images/projects/petroff-law-firm-website-design.png",
    summary:
      "A polished, trust-first website for a growing law practice — built to rank locally and turn visitors into consultations.",
    services: ["Web Development", "SEO", "Google Ads"],
    results: [
      { label: "Organic traffic", value: "+180%" },
      { label: "Consultation requests", value: "3.4×" },
      { label: "Page load", value: "0.9s" },
    ],
    owner: "haseeb",
  },
  {
    slug: "london-motor-sports",
    title: "London Motor Sports",
    category: "E-commerce Website",
    industry: "Automotive",
    image: "/images/projects/london-motor-sports-ecommerce-website.png",
    summary:
      "A fast, image-rich storefront engineered for conversions and effortless browsing on every device.",
    services: ["Web Development", "Social Media Marketing"],
    results: [
      { label: "Conversion rate", value: "+62%" },
      { label: "Mobile speed", value: "98/100" },
      { label: "Bounce rate", value: "-31%" },
    ],
    owner: "haseeb",
  },
  {
    slug: "french-chateau-for-sale",
    title: "French Chateau For Sale",
    category: "Real Estate Website",
    industry: "Real Estate",
    image: "/images/projects/french-chateau-real-estate-website.png",
    summary:
      "A luxury property marketplace with rich listings, lead capture, and search built for high-value enquiries.",
    services: ["Web Development", "SEO"],
    results: [
      { label: "Qualified leads", value: "+140%" },
      { label: "Avg. session", value: "4m 12s" },
      { label: "Keywords top 10", value: "120+" },
    ],
    owner: "haseeb",
  },
  {
    slug: "village-dog",
    title: "Village Dog",
    category: "Brand Website",
    industry: "Retail",
    image: "/images/projects/village-dog-brand-website-design.png",
    summary:
      "A playful, brand-led website that captures personality while staying fast and conversion-focused.",
    services: ["Web Development", "Design", "Social Media Marketing"],
    results: [
      { label: "Engagement", value: "+74%" },
      { label: "Newsletter signups", value: "2.1×" },
      { label: "Lighthouse", value: "99/100" },
    ],
    owner: "haseeb",
  },
  {
    slug: "posting-workers-france",
    title: "Posting Workers France",
    category: "Service Website + SEO",
    industry: "Professional Services",
    image: "/images/projects/posting-workers-france-website-seo.webp",
    summary:
      "A compliance-focused service site with multilingual SEO that captures intent across borders.",
    services: ["Web Development", "SEO", "Digital Marketing"],
    results: [
      { label: "Organic leads", value: "+210%" },
      { label: "Top 3 rankings", value: "45+" },
      { label: "Cost per lead", value: "-38%" },
    ],
    owner: "haseeb",
  },
  {
    slug: "auto-repair",
    title: "Auto Repair Studio",
    category: "Local Business Website",
    industry: "Trades & Services",
    image: "/images/projects/auto-repair-shop-website-design.png",
    summary:
      "A local-first website with booking and strong Google Business Profile SEO to keep the bays full.",
    services: ["Web Development", "SEO", "Google Ads"],
    results: [
      { label: "Bookings", value: "+95%" },
      { label: "Local pack", value: "#1" },
      { label: "Calls / month", value: "120+" },
    ],
    owner: "haseeb",
  },
  /* ----- Google / Meta Ads campaigns (Abida) ----- */
  {
    slug: "google-ads-multi-region",
    title: "Google Ads — UK/US Lead Engine",
    category: "Google Ads · PPC",
    industry: "Paid Advertising",
    image: "/images/projects/google-ads-results-1.jpeg",
    summary:
      "Multi-region Google Ads campaign delivering 49 conversions from a $1.21k test budget — clean targeting across UK and US markets with full conversion tracking via GTM.",
    services: ["Google Ads", "Conversion Tracking", "GTM"],
    results: [
      { label: "Conversions", value: "49" },
      { label: "Impressions", value: "4,040" },
      { label: "Clicks", value: "210" },
    ],
    owner: "abida",
  },
  {
    slug: "meta-leads-service-business",
    title: "Meta Lead Ads — Service Business",
    category: "Meta Ads · Lead Generation",
    industry: "Local Services",
    image: "/images/projects/google-ads-results-2.jpeg",
    summary:
      "Meta lead-generation funnel for a UK service business — qualified leads at £5.69 each from a £51 test budget, proving the channel before scaling spend.",
    services: ["Meta Ads", "Conversions API", "Meta Pixel"],
    results: [
      { label: "Form leads", value: "9" },
      { label: "Cost / lead", value: "£5.69" },
      { label: "Spend", value: "£51" },
    ],
    owner: "abida",
  },
  {
    slug: "meta-ecommerce-roas",
    title: "Meta Ads — E-commerce 13.5× ROAS",
    category: "Meta Ads · E-commerce",
    industry: "E-commerce",
    image: "/images/projects/google-ads-results-3.jpeg",
    summary:
      "E-commerce Meta Ads campaign delivering 121 website purchases at £1.47 cost-per-purchase — 13.5× return on ad spend over an 18-day window.",
    services: ["Meta Ads", "Conversions API", "Audience Targeting"],
    results: [
      { label: "Purchases", value: "121" },
      { label: "Cost / purchase", value: "£1.47" },
      { label: "ROAS", value: "13.5×" },
    ],
    owner: "abida",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getProjectsByOwner = (owner: string) =>
  projects.filter((p) => p.owner === owner);
