import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { team, getTeamMember } from "@/data/team";
import { getProjectsByOwner, type Project } from "@/data/projects";
import { site } from "@/data/site";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import CtaSection from "@/components/sections/CtaSection";

type Params = { slug: string };

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getTeamMember(slug);
  if (!m) return {};
  const displayName = m.fullName || m.name;
  const headline = m.founder
    ? `${displayName}. Founder of ${site.name}`
    : m.cofounder
      ? `${displayName}. Co-Founder of ${site.name}`
      : `${displayName}. ${m.role} at ${site.name}`;
  return {
    title: { absolute: `${headline} | ${m.role}` },
    description:
      (m.longBio || m.bio).replace(/\s+/g, " ").slice(0, 200) + "…",
    alternates: { canonical: `/team/${m.slug}` },
    openGraph: {
      title: headline,
      description: m.bio,
      url: `${site.url}/team/${m.slug}`,
      siteName: site.name,
      type: "profile",
      images: [
        {
          url: m.image,
          width: 480,
          height: 560,
          alt: displayName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: headline,
      description: m.bio,
    },
    robots: { index: true, follow: true },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const m = getTeamMember(slug);
  if (!m) notFound();

  const displayName = m.fullName || m.name;
  const memberProjects: Project[] = getProjectsByOwner(m.slug);
  const role = m.founder
    ? "Founder"
    : m.cofounder
      ? "Co-Founder"
      : "Team Member";

  // Primary CTA: external website if provided (e.g. Haseeb), else /contact
  const primaryCtaHref = m.website || "/contact";
  const primaryCtaIsExternal = Boolean(m.website);
  const primaryCtaLabel = m.website
    ? "Visit my personal site"
    : `Work with ${m.name}`;

  return (
    <>
      <PageHeader
        eyebrow={`${role} · ${site.name}`}
        title={
          <>
            Meet <span className="text-gradient">{displayName}</span>
          </>
        }
        description={m.role}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: displayName },
        ]}
      />

      {/* HERO: photo + intro */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal direction="right">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/15 to-brand-light/20 blur-2xl" />
                <div className="overflow-hidden rounded-3xl border border-line shadow-card">
                  <Image
                    src={m.image}
                    alt={displayName}
                    width={480}
                    height={560}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                {/* Floating role chip */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-line bg-white px-5 py-3 text-center shadow-card">
                  <div className="text-sm font-bold text-ink">{displayName}</div>
                  <div className="text-xs text-brand-darker">{m.role}</div>
                </div>
              </div>

              {/* Socials + location */}
              <div className="mt-12 space-y-3 text-sm">
                {m.location && (
                  <div className="flex items-center gap-2 text-ink-soft">
                    <Icon name="mapPin" className="h-4 w-4 text-brand" />
                    {m.location}
                  </div>
                )}
                {m.website && (
                  <a
                    href={m.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-ink-soft hover:text-brand-darker"
                  >
                    <Icon name="arrowUpRight" className="h-4 w-4 text-brand" />
                    <span className="font-medium underline-offset-2 hover:underline">
                      {m.website.replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                )}
                {/* Use Developer Studio's company social links for every team profile */}
                <div className="pt-2">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    Follow {site.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {site.social.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-darker transition-colors hover:bg-brand hover:text-white"
                      >
                        <Icon name={s.icon as IconName} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-darker">
                <Icon name="sparkles" className="h-4 w-4" />
                About {m.name}
              </span>

              <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
                {m.founder ? "Founder's story" : m.cofounder ? "Co-Founder's story" : `Hi, I'm ${m.name}`}
              </h2>

              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {(m.longBio || m.bio).split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primaryCtaIsExternal ? (
                  <a
                    href={primaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-all hover:bg-brand-dark active:scale-95"
                  >
                    {primaryCtaLabel}
                    <Icon name="arrowUpRight" className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <Button href={primaryCtaHref} size="lg" icon="arrowRight">
                    {primaryCtaLabel}
                  </Button>
                )}
                <a
                  href={site.whatsapp.uk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="mail" className="h-5 w-5 text-brand" />
                  Contact Developer Studio
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* EXPERTISE */}
      {m.expertise && m.expertise.length > 0 && (
        <section className="bg-zinc-50/70 py-12 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Expertise"
              title={
                <>
                  What {m.name}{" "}
                  <span className="text-gradient">does best.</span>
                </>
              }
              description={`The skills and disciplines ${m.name} brings to every Developer Studio project.`}
            />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {m.expertise.map((skill, i) => (
                <Reveal key={skill} delay={(i % 3) * 0.05}>
                  <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-ink-soft">{skill}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* PROJECTS */}
      {memberProjects.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Recent work"
              title={
                <>
                  Projects led by{" "}
                  <span className="text-gradient">{m.name}</span>
                </>
              }
              description="Real campaigns and websites. Measured by the leads, calls and revenue they delivered."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {memberProjects.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                        {p.industry}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-darker">
                        {p.category}
                      </p>
                      <h3 className="mt-1.5 text-lg font-bold text-ink">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                        {p.summary}
                      </p>
                      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
                        {p.results.map((r) => (
                          <div key={r.label}>
                            <div className="text-base font-bold text-brand-darker">{r.value}</div>
                            <div className="text-[11px] leading-tight text-ink-muted">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CLOSING CTA */}
      <CtaSection
        title={m.website ? `Want ${m.name} on your project?` : `Want to work with ${m.name}?`}
        subtitle={
          m.website
            ? `Reach ${m.name} directly via ${m.website.replace(/^https?:\/\//, "")} or book a free Developer Studio call.`
            : `Book a free, no-pressure call with the Developer Studio team and we'll loop ${m.name} in on your project.`
        }
      />

      <div className="pb-12 text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker hover:underline"
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
          Meet the rest of the team
        </Link>
      </div>
    </>
  );
}
