import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cities, getCity } from "@/data/cities";
import { services, getService } from "@/data/services";
import { Icon, type IconName } from "@/components/icons";
import { site } from "@/data/site";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CtaSection from "@/components/sections/CtaSection";

type Params = { city: string; service: string };

export function generateStaticParams() {
  return cities.flatMap((c) =>
    services.map((s) => ({ city: c.slug, service: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city, service } = await params;
  const c = getCity(city);
  const s = getService(service);
  if (!c || !s) return {};
  const title = `${s.title} in ${c.name} — ${site.name}`;
  return {
    title,
    description: `${s.title} for law firms and roofing companies in ${c.name}, ${c.region}. ${s.short} Get a free ${c.name} quote.`,
    alternates: { canonical: `/locations/${c.slug}/${s.slug}` },
    openGraph: { title, url: `${site.url}/locations/${c.slug}/${s.slug}` },
  };
}

export default async function CityServicePage({ params }: { params: Promise<Params> }) {
  const { city, service } = await params;
  const c = getCity(city);
  const s = getService(service);
  if (!c || !s) notFound();

  const otherServices = services.filter((x) => x.slug !== s.slug);
  const otherCities = cities.filter((x) => x.slug !== c.slug).slice(0, 8);

  const benefits = [
    {
      icon: "mapPin" as IconName,
      title: `Built for ${c.name}`,
      text: `We tailor your ${s.title.toLowerCase()} to exactly how ${c.name} customers search and choose who to call.`,
    },
    {
      icon: "bolt" as IconName,
      title: "Fast, measurable results",
      text: s.outcome,
    },
    {
      icon: "sparkles" as IconName,
      title: "Senior specialists",
      text: `Direct access to the people doing your ${s.title.toLowerCase()} — no juniors, no hand-offs.`,
    },
    {
      icon: "check" as IconName,
      title: "Transparent reporting",
      text: "Clear monthly reporting on the metrics that actually matter: leads, cases and revenue.",
    },
  ];

  const faqs = [
    {
      q: `How much does ${s.title.toLowerCase()} cost in ${c.name}?`,
      a: `Every ${c.name} project is priced to your goals. After a free consultation we give you a clear, fixed quote — no surprises and no long lock-in contracts.`,
    },
    {
      q: `How quickly will ${s.title.toLowerCase()} work for my ${c.name} business?`,
      a: `We move fast — you'll have a clear plan within days. ${s.title} then compounds as we optimise relentlessly for ${c.name} results.`,
    },
    {
      q: `Do you do ${s.title.toLowerCase()} for ${c.name} law firms and roofers?`,
      a: `Yes — ${c.name} law firms and roofing companies are our specialism. We know how local customers search and what makes them pick up the phone.`,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`${c.name} · ${c.region}`}
        title={
          <>
            {s.title} in <span className="text-gradient">{c.name}</span>
          </>
        }
        description={`${s.short} For ${c.name} law firms, roofing companies, and ambitious local businesses.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: c.name, href: `/locations/${c.slug}` },
          { label: s.title },
        ]}
      />

      {/* Trust strip */}
      <section className="border-b border-line bg-zinc-50/70 py-5">
        <Container>
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              { value: "120+", label: "Projects delivered" },
              { value: "5.0", label: "Average client rating" },
              { value: "#1", label: "Local rankings" },
              { value: c.name, label: "Local focus" },
            ].map((x) => (
              <div key={x.label}>
                <div className="text-xl font-extrabold text-brand-darker sm:text-2xl">{x.value}</div>
                <div className="text-xs text-ink-muted">{x.label}</div>
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
                <Icon name={s.icon as IconName} className="h-4 w-4" />
                {s.title} · {c.name}
              </span>
              <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
                {s.title} that wins clients in {c.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{s.description}</p>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand-50 p-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="bolt" className="h-4 w-4" />
                </span>
                <p className="text-sm text-ink-soft">
                  <span className="font-bold text-brand-darker">The outcome:</span> {s.outcome} —
                  right here in {c.name}.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" icon="arrowRight">
                  Get a free {c.name} quote
                </Button>
                <a
                  href={site.whatsapp.uk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/10 to-brand-light/15 blur-2xl" />
                <div className="overflow-hidden rounded-3xl border border-line shadow-card">
                  <Image
                    src={s.image}
                    alt={`${s.title} for ${c.name} businesses`}
                    width={1280}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="absolute -bottom-5 -left-4 rounded-2xl border border-line bg-white px-4 py-3 shadow-card">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name={s.icon as IconName} className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-ink">{s.title}</div>
                      <div className="text-xs text-ink-muted">in {c.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title={
              <>
                Your {c.name} {s.title.toLowerCase()}{" "}
                <span className="text-gradient">package</span>
              </>
            }
            description={`Everything we deliver to grow your ${c.name} business with ${s.title.toLowerCase()}.`}
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {s.features.map((f, i) => (
              <Reveal key={f} delay={(i % 2) * 0.06}>
                <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 text-sm text-ink-soft">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {f}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {s.deliverables.map((d) => (
              <span
                key={d}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-ink-soft"
              >
                {d}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Why us"
            title={
              <>
                Why {c.name} businesses pick us for{" "}
                <span className="text-gradient">{s.title.toLowerCase()}</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
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

      <ProcessSection />

      {/* FAQ */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading eyebrow="FAQ" title={`${s.title} in ${c.name}, answered`} />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 0.08} className={i === 2 ? "sm:col-span-2" : ""}>
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

      {/* Recent projects (show 6) */}
      <ProjectsSection limit={6} />

      {/* Other services in this city */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow={`More in ${c.name}`}
            title={
              <>
                Other services in <span className="text-gradient">{c.name}</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((os, i) => (
              <Reveal key={os.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/locations/${c.slug}/${os.slug}`}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={os.icon as IconName} className="h-6 w-6" />
                  </span>
                  <span className="flex-1 text-sm font-bold text-ink">
                    {os.title} in {c.name}
                  </span>
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-darker"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Same service, other cities */}
      <section className="bg-zinc-50/70 py-12">
        <Container>
          <Reveal>
            <h2 className="text-center text-xl font-bold text-ink">
              {s.title} in other UK cities
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {otherCities.map((o) => (
                <Link
                  key={o.slug}
                  href={`/locations/${o.slug}/${s.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="mapPin" className="h-4 w-4 text-brand" />
                  {s.title} in {o.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title={`Ready for ${s.title.toLowerCase()} in ${c.name}?`}
        subtitle={`Book a free ${c.name} growth call. We'll show you exactly how we'd win you more clients with ${s.title.toLowerCase()}.`}
      />
    </>
  );
}
