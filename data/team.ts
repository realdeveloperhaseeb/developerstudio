export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  founder?: boolean;
  socials?: { linkedin?: string; x?: string; instagram?: string };
};

export const team: TeamMember[] = [
  {
    slug: "haseeb",
    name: "Haseeb",
    role: "Founder & Lead Developer",
    bio: "Haseeb founded Developer Studio to help ambitious firms grow from zero. He leads engineering and strategy, having shipped dozens of high-performance websites and growth systems for UK businesses.",
    image: "/images/team/haseeb.png",
    founder: true,
    socials: { linkedin: "#", x: "#" },
  },
  {
    slug: "nimra",
    name: "Nimra",
    role: "Content Strategist",
    bio: "Nimra turns complex services into clear, persuasive content that ranks and converts — owning everything from SEO copy to social storytelling.",
    image: "/images/team/nimra.svg",
    socials: { linkedin: "#" },
  },
  {
    slug: "abida",
    name: "Abida",
    role: "Meta Ads Specialist",
    bio: "Abida runs profitable paid social campaigns across Meta and TikTok, obsessing over cost-per-lead and creative that stops the scroll.",
    image: "/images/team/abida.webp",
    socials: { linkedin: "#" },
  },
  {
    slug: "abdullah",
    name: "Abdullah",
    role: "Lead Designer",
    bio: "Abdullah crafts the brand and interface design behind every project — clean, modern, and built to convert across every screen.",
    image: "/images/team/abdullah.svg",
    socials: { instagram: "#" },
  },
  {
    slug: "sohaib",
    name: "Sohaib",
    role: "SEO Expert",
    bio: "Sohaib gets businesses to the top of Google — technical SEO, local rankings, and content strategy that captures high-intent searches and turns them into clients.",
    image: "/images/team/sohaib.svg",
    socials: { linkedin: "#" },
  },
  {
    slug: "alisha",
    name: "Alisha",
    role: "Graphics Designer",
    bio: "Alisha designs the visuals that make the brand impossible to ignore — social creatives, ad graphics, and on-brand assets crafted to stop the scroll and drive clicks.",
    image: "/images/team/alisha-graphics-adjusted.webp",
    socials: { instagram: "#" },
  },
];
