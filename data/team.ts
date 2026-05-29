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
    image: "/images/team/haseeb.svg",
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
    image: "/images/team/abida.svg",
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
    slug: "hamza",
    name: "Hamza",
    role: "SEO & PPC Specialist",
    bio: "Hamza blends technical SEO with Google Ads to capture high-intent searches and squeeze maximum ROI from every channel.",
    image: "/images/team/hamza.svg",
    socials: { linkedin: "#" },
  },
  {
    slug: "ayesha",
    name: "Ayesha",
    role: "Social Media Manager",
    bio: "Ayesha builds communities that trust and buy — planning content, managing channels, and turning followers into clients.",
    image: "/images/team/ayesha.svg",
    socials: { instagram: "#" },
  },
];
