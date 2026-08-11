import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Locations. Digital Marketing Across the UK",
  description:
    "Developer Studio delivers web development, SEO, and digital marketing for law firms and roofing companies across UK cities including London, Manchester, Birmingham, Leeds and more.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Locations"
        title={
          <>
            Growing businesses <span className="text-gradient">across the UK</span>
          </>
        }
        description="We help law firms and roofing companies dominate their local market. Wherever they are. Choose your city to see how we'd grow your business."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/locations/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon name="mapPin" className="h-6 w-6" />
                    </span>
                    <Icon
                      name="arrowUpRight"
                      className="h-5 w-5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-darker"
                    />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-ink">
                    Digital Marketing in {c.name}
                  </h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-darker">
                    {c.region} · {c.highlight}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {c.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker">
                    Explore {c.name}
                    <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Don't see your city?"
        subtitle="We work with ambitious businesses right across the UK. Get in touch and we'll build a local growth plan for you."
      />
    </>
  );
}
