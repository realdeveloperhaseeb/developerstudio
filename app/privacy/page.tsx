import type { Metadata } from "next";
import { site } from "@/data/site";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your personal data.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Your privacy matters. This page explains what we collect and how we use it."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
      />
      <Container className="max-w-3xl py-16">
        <div className="space-y-6 text-base leading-relaxed text-ink-soft">
          <p>
            This is a placeholder privacy policy for {site.name}. Replace it with your full
            policy before launch. The summary below outlines our standard approach.
          </p>
          <div>
            <h2 className="text-xl font-bold text-ink">Information we collect</h2>
            <p className="mt-2">
              When you contact us via our forms, WhatsApp, or email, we collect the details you
              provide. Such as your name, email, phone number, and message. Solely to respond to
              your enquiry.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink">How we use it</h2>
            <p className="mt-2">
              We use your information to reply to enquiries, provide our services, and (with your
              consent) share relevant updates. We never sell your data.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink">Your rights</h2>
            <p className="mt-2">
              You can request access to, correction of, or deletion of your personal data at any
              time by emailing{" "}
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
