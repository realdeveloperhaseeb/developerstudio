import type { Metadata } from "next";
import Link from "next/link";
import { landingPages } from "@/data/landingPages";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Landing Pages — Pitch Decks for Your Industry",
  description:
    "Industry-specific landing pages from Developer Studio. Tailored pitches for law firms, roofing companies, and other UK businesses we grow.",
  alternates: { canonical: "/landing-pages" },
};

export default function LandingPagesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Landing pages"
        title={
          <>
            Industry pitches, built to <span className="text-gradient">convert</span>
          </>
        }
        description="Tailored landing pages we share with prospects — each one engineered for a specific industry and designed to turn a single click into a booked call."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Landing Pages" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {landingPages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/${p.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                >
                  <div
                    className={`relative flex h-40 items-center justify-center overflow-hidden ${
                      p.accent === "brand"
                        ? "bg-gradient-to-br from-brand-50 via-brand-100 to-brand-50"
                        : "bg-ink text-white"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-dots opacity-50" />
                    <span
                      className={`relative flex h-20 w-20 items-center justify-center rounded-2xl shadow-card ${
                        p.accent === "brand"
                          ? "bg-brand text-white"
                          : "bg-brand-light text-ink"
                      }`}
                    >
                      <Icon name={p.icon} className="h-10 w-10" />
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-darker backdrop-blur">
                      For {p.audience}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold leading-tight text-ink">{p.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {p.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker">
                      View landing page
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-zinc-50/60 p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-brand-darker">
                  <Icon name="sparkles" className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-bold text-ink">More coming soon</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Law firms, trades, financial services and more — new landing pages added as
                  we launch them.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Want a landing page for your business?"
        subtitle="Tell us your industry and we'll design a pitch page that turns visitors into clients."
      />
    </>
  );
}
