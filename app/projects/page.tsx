import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Projects. Websites & Campaigns We've Delivered",
  description:
    "A selection of websites, apps, and marketing campaigns Developer Studio has built for law firms, roofing companies, and growing UK businesses.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title={
          <>
            Projects that <span className="text-gradient">drive revenue</span>
          </>
        }
        description="Every build is designed to look brilliant and perform even better. Here's a snapshot of recent work and the results it produced."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <ProjectsSection heading={false} />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection title="Want results like these?" subtitle="Let's build your next project. And the growth engine to back it up." />
    </>
  );
}
