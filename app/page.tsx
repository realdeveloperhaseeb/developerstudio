import Hero from "@/components/home/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ClientsStrip from "@/components/sections/ClientsStrip";
import LocationsStrip from "@/components/sections/LocationsStrip";
import ServicesTabs from "@/components/sections/ServicesTabs";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LiveDemosSection from "@/components/sections/LiveDemosSection";
import ClientLogoWall from "@/components/sections/ClientLogoWall";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <LocationsStrip />
      {/* Services as a tabbed detail panel. 6 services, one per tab */}
      <ServicesTabs />
      <IndustriesSection />
      {/* Big trust-signal wall — brand marks + credibility strip */}
      <ClientLogoWall />
      <AuthoritySection />
      <StatsSection />
      <ProcessSection />
      <ClientsStrip />
      <ProjectsSection limit={6} />
      {/* Full-width live-project carousel with real desktop screenshots */}
      <LiveDemosSection />
      <TeamSection />
      {/* Testimonials as a carousel. One full-width pull-quote at a time */}
      <TestimonialsCarousel />
      <FaqSection />
      <CtaSection />
    </>
  );
}
