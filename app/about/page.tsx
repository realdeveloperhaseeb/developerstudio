import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/data/team";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import TeamSection from "@/components/sections/TeamSection";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About — The Team Growing UK Businesses",
  description:
    "Developer Studio is a UK digital growth partner for law firms and roofing companies. Founded by Haseeb, we grow businesses from zero and manage the entire engine.",
  alternates: { canonical: "/about" },
};

const founder = team.find((m) => m.founder)!;

const values = [
  {
    icon: "target" as IconName,
    title: "Results over vanity",
    text: "We measure success in leads, cases, and booked jobs — never likes or impressions for their own sake.",
  },
  {
    icon: "bolt" as IconName,
    title: "Speed & ownership",
    text: "We move fast and take full ownership of your growth, so you never have to chase or micromanage.",
  },
  {
    icon: "scale" as IconName,
    title: "Honest & transparent",
    text: "Clear reporting, fair pricing, and straight answers. You always know exactly what we're doing and why.",
  },
  {
    icon: "rocket" as IconName,
    title: "Growth from zero",
    text: "From brand-new businesses to established firms, we build the whole engine and scale what works.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            We grow businesses <span className="text-gradient">from zero</span>
          </>
        }
        description="Developer Studio is a UK-focused digital growth partner. We blend design, engineering, and marketing into one accountable team obsessed with your results."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Founder */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal direction="right">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/15 to-brand-light/20 blur-2xl" />
                <div className="overflow-hidden rounded-3xl border border-line shadow-card">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={480}
                    height={560}
                    className="h-auto w-full"
                  />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-line bg-white px-5 py-3 text-center shadow-card">
                  <div className="text-sm font-bold text-ink">{founder.name}</div>
                  <div className="text-xs text-brand-darker">{founder.role}</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-darker">
                <Icon name="sparkles" className="h-4 w-4" />
                Our story
              </span>
              <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
                Founded to help ambitious firms win online
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Developer Studio was founded by <strong className="text-ink">Haseeb</strong>, a
                  developer who saw too many great businesses lose out online to competitors with
                  worse services but better marketing.
                </p>
                <p>
                  So he built a different kind of agency — one that combines world-class web
                  development with the SEO, content, and ads needed to actually win clients. No
                  silos, no finger-pointing, just one team accountable for your growth.
                </p>
                <p>
                  Today we specialise in law firms and roofing companies across the UK, growing
                  businesses from zero and managing the entire engine end-to-end.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {[
                  { value: "120+", label: "Projects" },
                  { value: "8+", label: "Years" },
                  { value: "98%", label: "Retention" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-line bg-white p-4 text-center">
                    <div className="text-2xl font-extrabold text-brand-darker">{s.value}</div>
                    <div className="text-xs text-ink-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">What we stand for</h2>
            <p className="mt-4 text-lg text-ink-muted">
              The principles behind every project we take on.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-darker">
                    <Icon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TeamSection />
      <StatsSection />
      <CtaSection title="Let's grow your business together" subtitle="Meet the team and get a free growth plan tailored to your firm." />
    </>
  );
}
