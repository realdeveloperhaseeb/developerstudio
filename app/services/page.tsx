import type { Metadata } from "next";
import { services } from "@/data/services";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ComparisonSection from "@/components/sections/ComparisonSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Services — Web, App, SEO, Social & Google Ads",
  description:
    "Web development, app development, SEO, social media marketing, and Google Ads for UK law firms and roofing companies. One team that grows your business from zero.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={
          <>
            A full growth engine, <span className="text-gradient">built and managed</span>
          </>
        }
        description="Pick one service or let us run the whole thing. Either way, every project is engineered to turn attention into booked clients."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Quick nav */}
      <section className="sticky top-18 z-30 border-y border-line bg-white/90 py-4 backdrop-blur lg:top-20">
        <Container>
          <div className="flex flex-wrap justify-center gap-2.5">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand hover:bg-brand-50 hover:text-brand-darker"
              >
                <Icon name={s.icon as IconName} className="h-4 w-4 text-brand" />
                {s.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Service detail rows */}
      <div className="divide-y divide-line">
        {services.map((s, i) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-36 py-12 sm:py-16">
            <Container>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <Reveal direction={i % 2 === 1 ? "left" : "right"}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)]">
                      <Icon name={s.icon as IconName} className="h-7 w-7" />
                    </span>
                    <span className="text-5xl font-extrabold text-brand/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-ink sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">{s.description}</p>

                  {/* Outcome highlight */}
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand-50 p-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="bolt" className="h-4 w-4" />
                    </span>
                    <p className="text-sm text-ink-soft">
                      <span className="font-bold text-brand-darker">The outcome:</span> {s.outcome}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button href="/contact" icon="arrowRight">
                      Get started
                    </Button>
                  </div>
                </Reveal>

                {/* What's included card */}
                <Reveal direction={i % 2 === 1 ? "right" : "left"}>
                  <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-8">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/5" />
                    <div className="relative flex items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
                        What&apos;s included
                      </p>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-darker">
                        {s.features.length} deliverables
                      </span>
                    </div>
                    <ul className="relative mt-5 grid gap-3.5 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-ink-soft">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                            <Icon name="check" className="h-3.5 w-3.5" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <ComparisonSection />
      <IndustriesSection />
      <StatsSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection
        title="Not sure which service you need?"
        subtitle="Tell us your goals and we'll recommend the fastest path to more clients — free of charge."
      />
    </>
  );
}
