import Hero from "@/components/home/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ClientsStrip from "@/components/sections/ClientsStrip";
import LocationsStrip from "@/components/sections/LocationsStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <LocationsStrip />
      <ServicesSection />
      <IndustriesSection />
      <AuthoritySection />
      <StatsSection />
      <ProcessSection />
      <ClientsStrip />
      <ProjectsSection limit={6} />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
