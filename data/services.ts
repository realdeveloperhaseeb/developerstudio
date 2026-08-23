export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  outcome: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, modern websites that convert visitors into clients.",
    description:
      "We design and build conversion-focused websites on a modern stack. Blazing fast, fully responsive, and engineered to rank. Every site is built to turn traffic into booked calls and signed clients.",
    icon: "code",
    features: [
      "Custom Next.js / headless builds",
      "Core Web Vitals optimised",
      "Mobile-first responsive design",
      "Conversion-focused UX & CRO",
      "Booking forms & live chat",
      "Ongoing care & hosting",
    ],
    deliverables: ["Design system", "Responsive build", "CMS handover", "Speed & SEO setup"],
    outcome: "Sites that load in under 1s and convert 2–3× better",
    image: "/images/projects/village-dog-brand-website-design.png",
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "iOS, Android & web apps that scale with your business.",
    description:
      "From client portals to full products, we ship reliable cross-platform apps. Clean architecture, smooth UX, and the analytics you need to make decisions.",
    icon: "app",
    features: [
      "iOS & Android (React Native)",
      "Progressive web apps",
      "Client & booking portals",
      "API & backend integration",
      "Payments & subscriptions",
      "App Store launch support",
    ],
    deliverables: ["Product spec", "UI/UX design", "Build & QA", "Store deployment"],
    outcome: "Apps your clients actually love to use",
    image: "/images/projects/london-motor-sports-ecommerce-website.png",
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Rank #1 for the searches that bring real customers.",
    description:
      "Local and national SEO that puts you in front of high-intent buyers. Technical fixes, content that answers, and authority-building links. Measured by leads, not vanity metrics.",
    icon: "search",
    features: [
      "Technical SEO audits",
      "Local & Google Business Profile",
      "Keyword & content strategy",
      "On-page optimisation",
      "Authority link building",
      "Transparent rank reporting",
    ],
    deliverables: ["SEO audit", "Keyword map", "Monthly content", "Rank & lead reports"],
    outcome: "Page-one rankings for the searches that pay",
    image: "/images/uk-law-firm-strategy-meeting.webp",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Content that builds trust and fills your pipeline.",
    description:
      "Strategy, content, and community management that makes your brand impossible to ignore. And drives DMs, enquiries, and bookings on autopilot.",
    icon: "share",
    features: [
      "Content strategy & calendar",
      "Reels, posts & creative",
      "Community management",
      "Meta & TikTok organic growth",
      "Influencer partnerships",
      "Monthly performance reviews",
    ],
    deliverables: ["Brand kit", "Content calendar", "Monthly creatives", "Growth report"],
    outcome: "Content that turns followers into booked clients",
    image: "/images/developer-studio-team-at-work.webp",
  },
  {
    slug: "google-ads",
    title: "Google Ads & PPC",
    short: "Profitable paid campaigns from day one.",
    description:
      "Search, Display, and Performance Max campaigns engineered for cost-per-lead, not clicks. We test relentlessly so every pound spent pulls its weight.",
    icon: "target",
    features: [
      "Google Search & PMax",
      "Landing page optimisation",
      "Conversion tracking setup",
      "A/B testing & scaling",
      "Negative keyword hygiene",
      "Live ROI dashboards",
    ],
    deliverables: ["Account setup", "Campaign build", "Tracking & dashboard", "Weekly optimisation"],
    outcome: "Profitable, predictable leads from day one",
    image: "/images/law-firm-client-consultation.webp",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "A full growth engine. Strategy to execution.",
    description:
      "The complete package. We grow your business from zero and manage everything. Brand, web, content, ads, and analytics. As one accountable team focused on revenue.",
    icon: "rocket",
    features: [
      "Full-funnel growth strategy",
      "Brand & positioning",
      "Email & CRM automation",
      "Analytics & attribution",
      "Conversion rate optimisation",
      "Dedicated growth manager",
    ],
    deliverables: ["Growth roadmap", "Channel setup", "Monthly execution", "KPI dashboard"],
    outcome: "A predictable pipeline of new clients, every month",
    image: "/images/uk-law-firm-client-meeting.webp",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
