import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cities, getCity } from "@/data/cities";
import { services } from "@/data/services";
import { industries } from "@/data/content";
import { Icon, type IconName } from "@/components/icons";
import { site } from "@/data/site";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";

type Params = { city: string };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const title = `Digital Marketing in ${c.name} — Web, SEO & Ads`;
  return {
    title,
    description: `Web development, app development, SEO, social media, and Google Ads for law firms and roofing companies in ${c.name}, ${c.region}. ${c.blurb}`,
    alternates: { canonical: `/locations/${c.slug}` },
    openGraph: { title: `${title} | ${site.name}`, url: `${site.url}/locations/${c.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<Params> }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const others = cities.filter((x) => x.slug !== c.slug).slice(0, 8);

  const localBenefits = [
    {
      icon: "search" as IconName,
      title: `Top of ${c.name} search`,
      text: `We get you ranking in ${c.name} local search and Google Maps for the services your clients are looking for.`,
    },
    {
      icon: "mapPin" as IconName,
      title: `Know the ${c.region} market`,
      text: `We understand how ${c.name} customers search and what makes them pick up the phone and call you.`,
    },
    {
      icon: "code" as IconName,
      title: "Websites that convert",
      text: `Fast, mobile-first websites built to turn ${c.name} visitors into real enquiries and bookings.`,
    },
    {
      icon: "target" as IconName,
      title: "Local ads that pay",
      text: `Google & Meta ads targeted to ${c.name} that bring quote requests — not just clicks.`,
    },
  ];

  const localFaqs = [
    {
      q: `Do you work with businesses in ${c.name}?`,
      a: `Yes — we work with law firms, roofing companies, and ambitious businesses right across ${c.name} and ${c.region}.`,
    },
    {
      q: `How soon will I see results in ${c.name}?`,
      a: `Google Ads can bring ${c.name} leads within days of launch. Local SEO typically builds strong momentum within 3–6 months and keeps compounding.`,
    },
    {
      q: `Do you understand the ${c.name} market?`,
      a: `We research your ${c.name} competitors and exactly how local customers search before we build your strategy — no guesswork.`,
    },
    {
      q: `Can you manage everything for my ${c.name} business?`,
      a: `Absolutely. Website, SEO, content, ads and reporting — all handled by one accountable team so you can focus on clients.`,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`${c.region} · ${c.highlight}`}
        title={
          <>
            Digital Marketing in <span className="text-gradient">{c.name}</span>
          </>
        }
        description={c.blurb}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: c.name },
        ]}
      />

      {/* Trust strip */}
      <section className="border-b border-line bg-zinc-50/70 py-5">
        <Container>
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              { value: "120+", label: "Projects delivered" },
              { value: "3.4×", label: "Avg. lead growth" },
              { value: "#1", label: "Local rankings" },
              { value: c.region, label: "Local expertise" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-extrabold text-brand-darker sm:text-2xl">
                  {s.value}
                </div>
                <div className="text-xs text-ink-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Intro + image */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal direction="right">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-darker">
                <Icon name="mapPin" className="h-4 w-4" /> Serving {c.name}
              </span>
              <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
                Win more clients in {c.name}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Your customers in {c.name} are searching right now — for a solicitor, for a
                  roofer, for the service you provide. The only question is whether they find
                  you, or your competitor.
                </p>
                <p>
                  Developer Studio builds fast, conversion-focused websites and runs local SEO
                  and ad campaigns engineered to put your business at the top of {c.name} search
                  results. We grow businesses from zero and manage the whole engine — so you can
                  focus on serving clients.
                </p>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  `Rank #1 in ${c.name} local search`,
                  "Websites that turn clicks into clients",
                  "Profitable Google & Meta ads",
                  "Transparent monthly reporting",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" icon="arrowRight">
                  Get a free {c.name} growth plan
                </Button>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/10 to-brand-light/15 blur-2xl" />
                <div className="overflow-hidden rounded-3xl border border-line shadow-card">
                  <Image
                    src="/images/law-firm-client-consultation.webp"
                    alt={`Developer Studio helping a ${c.name} business grow`}
                    width={1389}
                    height={1080}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="absolute -bottom-5 -left-4 rounded-2xl border border-line bg-white px-4 py-3 shadow-card">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="mapPin" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-ink">{c.name}</div>
                      <div className="text-xs text-ink-muted">{c.region}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services in city */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow={`What we do in ${c.name}`}
            title={
              <>
                Digital marketing services in{" "}
                <span className="text-gradient">{c.name}</span>
              </>
            }
            description={`Everything your ${c.name} business needs to get found, get clicks, and get clients.`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/locations/${c.slug}/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={s.icon as IconName} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">
                    {s.title} in {c.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker">
                    Learn more
                    <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why city businesses choose us */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Why us"
            title={
              <>
                Why {c.name} businesses{" "}
                <span className="text-gradient">choose Developer Studio</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {localBenefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon name={b.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries in city */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Industries we grow"
            title={
              <>
                Specialists for {c.name}{" "}
                <span className="text-gradient">law firms &amp; roofers</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-line bg-white p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)]">
                    <Icon name={ind.icon as IconName} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-ink">
                    {ind.name} in {c.name}
                  </h3>
                  <p className="mt-1 font-semibold text-brand-darker">{ind.tagline}</p>
                  <ul className="mt-5 space-y-3">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <StatsSection />
      <ProcessSection />

      {/* Local FAQ */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title={`Growing your business in ${c.name}`}
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {localFaqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <h3 className="flex items-start gap-2.5 font-bold text-ink">
                    <Icon name="sparkles" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {f.q}
                  </h3>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialsSection />

      {/* Other locations */}
      <section className="py-12">
        <Container>
          <Reveal>
            <h2 className="text-center text-xl font-bold text-ink">
              We also serve these UK cities
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/locations/${o.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="mapPin" className="h-4 w-4 text-brand" />
                  {o.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title={`Ready to grow your ${c.name} business?`}
        subtitle="Book a free local growth call. We'll show you exactly how we'd win more clients for you in your area."
      />
    </>
  );
}
