import type { Metadata } from "next";
import { site } from "@/data/site";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${site.name} website and services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="The terms that govern your use of our website and services."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />
      <Container className="max-w-3xl py-16">
        <div className="space-y-6 text-base leading-relaxed text-ink-soft">
          <p>
            This is a placeholder terms of service for {site.name}. Replace it with your full
            terms before launch. The summary below outlines the basics.
          </p>
          <div>
            <h2 className="text-xl font-bold text-ink">Use of our site</h2>
            <p className="mt-2">
              By using this website you agree to use it lawfully and not to misuse its content or
              functionality.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink">Services &amp; quotes</h2>
            <p className="mt-2">
              Any quotes or proposals we provide are subject to a separate agreement. Project scope,
              timelines, and pricing are confirmed in writing before work begins.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-darker">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
