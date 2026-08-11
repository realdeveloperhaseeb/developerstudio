"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import Mark from "@/components/Mark";

/*
  Dubai-tailored services tab set. Six tabs across the top (horizontally
  scrollable on mobile), split-screen panel below with a real preview
  image on the right. Nixo-style: chip tabs, dark active state, image
  next to copy so each service reads like its own mini-landing.
*/

type DubaiService = {
  slug: string;
  icon: IconName;
  title: string;
  description: string;
  features: string[];
  outcome: string;
  image: string;
  imageAlt: string;
};

const DUBAI_SERVICES: DubaiService[] = [
  {
    slug: "seo",
    icon: "search",
    title: "SEO in Dubai",
    description:
      "Technical SEO, on-page optimisation and Google Business Profile management engineered to rank your Dubai business on the searches that actually generate revenue.",
    features: [
      "Local Dubai keyword research",
      "Google Business Profile setup & optimisation",
      "On-page + technical SEO fixes",
      "Content built around UAE buyer intent",
      "Backlink building from UAE-relevant sites",
      "Monthly ranking + traffic reporting",
    ],
    outcome: "Top-3 rankings for high-intent Dubai searches inside 6 months",
    image: "/images/uk-law-firm-strategy-meeting.webp",
    imageAlt: "Digital marketing strategy session for a Dubai business",
  },
  {
    slug: "google-ads",
    icon: "target",
    title: "Google Ads (PPC)",
    description:
      "Search, Performance Max and remarketing campaigns tuned for cost-per-lead in the UAE market, with full GTM conversion tracking so you see exactly which AED delivered which lead.",
    features: [
      "Dubai-market keyword strategy",
      "Search + Performance Max campaigns",
      "Landing page conversion tracking",
      "Weekly bid + creative optimisation",
      "Full GTM setup (no black-box reporting)",
      "Transparent monthly performance calls",
    ],
    outcome: "49 conversions from $1.2k test spend on a recent UAE campaign",
    image: "/images/projects/google-ads-results-1.jpeg",
    imageAlt: "Google Ads dashboard for a Dubai-market client",
  },
  {
    slug: "meta-ads",
    icon: "share",
    title: "Meta Ads (Facebook + Instagram)",
    description:
      "Lead-generation and e-commerce funnels running on Meta's ad platform with the Pixel, Conversions API and creative built to stop the scroll on UAE feeds.",
    features: [
      "Meta Pixel + Conversions API setup",
      "Audience research + custom segments",
      "Creative production (image + video)",
      "Bilingual copy where it converts",
      "A/B testing on every creative round",
      "Weekly optimisation, monthly reports",
    ],
    outcome: "13.5× ROAS on a recent UAE e-commerce Meta campaign",
    image: "/images/projects/google-ads-results-3.jpeg",
    imageAlt: "Meta Ads performance report for a UAE e-commerce client",
  },
  {
    slug: "web",
    icon: "code",
    title: "Web development",
    description:
      "Fast, conversion-focused websites built on modern stacks (Next.js, headless CMS) that load in under a second on UAE mobile networks and rank locally out of the box.",
    features: [
      "Custom Next.js / headless builds",
      "Core Web Vitals optimised",
      "Mobile-first responsive design",
      "Bilingual (Arabic + English) ready",
      "Booking / quote forms + live chat",
      "SEO foundation built in",
    ],
    outcome: "Sites that convert 2 to 3 times better than agency defaults",
    image: "/images/projects/petroff-law-firm-website-design.png",
    imageAlt: "Website design for a Developer Studio client",
  },
  {
    slug: "social",
    icon: "app",
    title: "Social media management",
    description:
      "Content, community and paid amplification on Instagram, TikTok and LinkedIn, built around your UAE audience and brand voice, not generic template posts.",
    features: [
      "Content calendar + brand tone-of-voice",
      "Instagram + TikTok + LinkedIn cadence",
      "Reels + short-form video production",
      "Community management + DMs",
      "Paid amplification of best posts",
      "Monthly growth + engagement report",
    ],
    outcome: "Owned social channels that fill the top of your pipeline",
    image: "/images/projects/village-dog-brand-website-design.png",
    imageAlt: "Social media content for a Developer Studio client",
  },
  {
    slug: "consulting",
    icon: "rocket",
    title: "Consulting & audits",
    description:
      "Not ready for a full retainer? Book our senior team by the hour to audit your funnels, campaigns and website and get a clear action plan you can hand to any agency.",
    features: [
      "Full website + funnel audit",
      "Ad account audit (Google + Meta)",
      "SEO gap + opportunity analysis",
      "Competitor teardown (top 5 in Dubai)",
      "90-day action plan, prioritised",
      "Optional monthly strategy calls",
    ],
    outcome: "Clarity on where every AED should be spent",
    image: "/images/developer-studio-team-at-work.webp",
    imageAlt: "Developer Studio team consulting on a Dubai client's growth plan",
  },
];

export default function DubaiServicesTabs() {
  const [active, setActive] = useState(0);
  const s = DUBAI_SERVICES[active];

  return (
    <section id="services" className="relative overflow-hidden bg-zinc-50/60 py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
            <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
            What we do
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
            Digital marketing services in <Mark variant="underline">Dubai</Mark>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            Full-stack growth: SEO, paid media, web and social. Click a tab
            to see exactly what&apos;s inside each service.
          </p>
        </div>

        {/* Tab bar */}
        <div className="relative mt-12 -mx-4 overflow-x-auto px-4 [-webkit-mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
          <div className="mx-auto flex w-max min-w-full items-center justify-start gap-2 sm:justify-center">
            {DUBAI_SERVICES.map((svc, i) => {
              const isActive = i === active;
              return (
                <button
                  key={svc.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-ink text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_20px_-8px_rgba(10,10,10,0.5)]"
                      : "border border-line bg-white text-ink-soft hover:border-brand/40 hover:text-brand-darker"
                  }`}
                >
                  <Icon
                    name={svc.icon}
                    className={`h-4 w-4 ${isActive ? "text-brand-light" : "text-brand-darker"}`}
                  />
                  {svc.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-0 lg:grid-cols-[1.05fr_1fr]"
            >
              {/* Copy side */}
              <div className="flex flex-col p-8 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darker">
                    Service {String(active + 1).padStart(2, "0")} of{" "}
                    {String(DUBAI_SERVICES.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black leading-tight text-ink sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {s.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-brand/25 bg-brand-50/60 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-darker">
                    Typical Dubai outcome
                  </div>
                  <div className="mt-1 text-sm font-semibold text-ink">{s.outcome}</div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_20px_-8px_rgba(10,10,10,0.5)] transition-all hover:bg-ink/90 active:scale-95"
                  >
                    Get a {s.title.toLowerCase()} quote
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Image side */}
              <div className="relative min-h-64 overflow-hidden bg-zinc-100 lg:min-h-0">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-card backdrop-blur">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-darker">
                    Preview
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-ink">
                    {s.title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
