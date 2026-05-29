import type { Metadata } from "next";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Contact — Get a Free Growth Plan",
  description:
    "Get in touch with Developer Studio. WhatsApp, email, or send an enquiry for web development, SEO, and digital marketing for your UK law firm or roofing company.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: "whatsapp" as const,
      label: "WhatsApp (UK)",
      value: site.phones.uk.display,
      href: site.whatsapp.uk,
    },
    {
      icon: "whatsapp" as const,
      label: "WhatsApp (PK)",
      value: site.phones.pk.display,
      href: site.whatsapp.pk,
    },
    {
      icon: "mail" as const,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s grow your <span className="text-gradient">business</span>
          </>
        }
        description="Tell us about your firm and goals. We'll come back with a free, no-pressure growth plan and a clear quote."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* Contact details */}
            <Reveal direction="left">
              <div className="space-y-4">
                {contactCards.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.icon === "whatsapp" ? "_blank" : undefined}
                    rel={c.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all hover:border-brand/40 hover:shadow-card"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon name={c.icon} className="h-6 w-6" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        {c.label}
                      </span>
                      <span className="block text-base font-bold text-ink">{c.value}</span>
                    </span>
                    <Icon name="arrowUpRight" className="h-5 w-5 text-ink-muted group-hover:text-brand-darker" />
                  </a>
                ))}

                {/* Socials */}
                <div className="rounded-2xl border border-line bg-white p-5">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Follow us
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {site.social.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-darker transition-colors hover:bg-brand hover:text-white"
                      >
                        <Icon name={s.icon as never} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Coverage / map */}
                <div className="overflow-hidden rounded-2xl border border-line bg-white">
                  <div className="flex items-center gap-2 px-5 py-4">
                    <Icon name="mapPin" className="h-5 w-5 text-brand" />
                    <span className="text-sm font-semibold text-ink">
                      Serving clients across the UK
                    </span>
                  </div>
                  <iframe
                    title="UK coverage map"
                    src="https://www.google.com/maps?q=United+Kingdom&z=5&output=embed"
                    className="h-56 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FaqSection />
    </>
  );
}
