import type { Metadata } from "next";
import NotFoundExperience from "@/components/NotFoundExperience";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for has moved. Explore Developer Studio's web, SEO, and digital marketing services for UK law firms and roofing companies.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <NotFoundExperience />
      <CtaSection
        title="Let's build something that works"
        subtitle="Tell us about your law firm or roofing business and we'll map out exactly how we'd grow it — free."
      />
    </>
  );
}
