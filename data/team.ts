export type TeamMember = {
  slug: string;
  name: string;             // short / first name used in cards
  fullName?: string;        // full name used on profile page
  role: string;             // short role for cards
  bio: string;              // short bio for cards
  longBio?: string;         // long-form bio for the dedicated profile page
  image: string;
  founder?: boolean;
  cofounder?: boolean;
  expertise?: string[];     // skill tags shown on profile page
  website?: string;         // external personal site (used for CTA)
  location?: string;        // e.g. "UK · UAE · USA markets"
  email?: string;
  socials?: { linkedin?: string; x?: string; instagram?: string };
};

export const team: TeamMember[] = [
  {
    slug: "haseeb",
    name: "Haseeb",
    fullName: "Haseeb Ahmad",
    role: "Founder · Web Developer",
    bio: "Haseeb founded Developer Studio to help ambitious firms grow from zero. He leads engineering and strategy, having shipped dozens of high-performance websites and growth systems for UK businesses.",
    longBio:
      "I am a Web Developer and the founder of Developer Studio, with 8+ years of experience building high-performance, conversion-focused websites and growth systems for law firms, roofing companies, and ambitious UK businesses. I help brands launch fast, modern, SEO-first websites that turn visitors into clients. Backed by clean engineering, analytics, and ongoing optimisation.\n\nMy expertise includes full-stack web development with Next.js, React, and TypeScript, headless CMS architectures, Core Web Vitals and performance optimisation, on-page SEO foundations, conversion-focused UX, custom application development, API integrations, and end-to-end deployment on Vercel and modern Node.js platforms. I focus on building websites and digital products that load instantly, rank well, and turn traffic into revenue.",
    image: "/images/team/haseeb.png",
    founder: true,
    website: "https://developerhaseeb.com",
    location: "UK · global remote",
    expertise: [
      "Next.js, React & TypeScript",
      "Headless CMS architectures",
      "Core Web Vitals & performance",
      "SEO-first web development",
      "Conversion-focused UX",
      "Custom application development",
      "API integrations",
      "Vercel & Node.js deployment",
      "Technical strategy",
      "Web analytics & GTM setup",
    ],
    socials: { linkedin: "#", x: "#" },
  },
  {
    slug: "abida",
    name: "Abida",
    fullName: "Abida Siddiqui",
    role: "Co-Founder · Paid Ads Specialist",
    bio: "Abida co-leads Developer Studio and runs profitable Meta & Google Ads campaigns across UK, US and UAE markets. Obsessing over cost-per-lead and creative that stops the scroll.",
    longBio:
      "I am a Digital Marketer and Paid Ads Specialist with 2+ year of experience managing Meta Ads, Google Ads, and Google Business Profile optimization for businesses in the USA, UK and, UAE markets. I help brands increase online visibility, generate qualified leads, and improve conversions through data-driven marketing strategies.\n\nMy expertise includes Meta Ads campaign management, Google Ads PPC campaigns, Meta Pixels, Conversions API, GTM, Conversion tracking, local SEO through Google Business Profile, audience targeting, campaign optimization, and competitor analysis. I focus on creating high-performing ad strategies that maximize ROI and help businesses grow in competitive markets.",
    image: "/images/team/abida.webp",
    cofounder: true,
    location: "UK · US · UAE markets",
    expertise: [
      "Meta Ads campaign management",
      "Google Ads PPC campaigns",
      "Meta Pixel & Conversions API",
      "Google Tag Manager (GTM)",
      "Conversion tracking setup",
      "Local SEO via Google Business Profile",
      "Audience targeting & segmentation",
      "Campaign optimisation & A/B testing",
      "Competitor & market analysis",
      "ROI-focused ad strategy",
    ],
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    slug: "abdullah",
    name: "Abdullah",
    role: "Lead Designer",
    bio: "Abdullah crafts the brand and interface design behind every project. Clean, modern, and built to convert across every screen.",
    image: "/images/team/abdullah.svg",
    socials: { instagram: "#" },
  },
];

export const getTeamMember = (slug: string) => team.find((m) => m.slug === slug);
