"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import Mark from "@/components/Mark";

/*
  Auto-advancing case-study carousel. One case per slide, big screenshot
  on the right, stat block on the left. Prev/Next arrows, dot indicators,
  tabular counter, keyboard nav, pauses on hover.
*/

type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  metrics: { value: string; label: string }[];
};

const CASES: CaseStudy[] = [
  {
    slug: "meta-ecommerce",
    tag: "Meta Ads · E-commerce · UAE",
    title: "13.5× ROAS on a UAE e-commerce brand",
    summary:
      "Meta Ads campaign delivering 121 website purchases at £1.47 cost-per-purchase over 18 days. Custom Meta Pixel + Conversions API setup, audience testing, creative rotation, weekly optimisation.",
    image: "/images/projects/google-ads-results-3.jpeg",
    imageAlt: "Meta Ads performance report showing 13.5x ROAS for a UAE e-commerce brand",
    metrics: [
      { value: "121", label: "Purchases" },
      { value: "£1.47", label: "Cost / purchase" },
      { value: "13.5×", label: "ROAS" },
    ],
  },
  {
    slug: "google-ads-multi-region",
    tag: "Google Ads · Lead generation · UK + US",
    title: "49 conversions from $1.21k test budget",
    summary:
      "Multi-region Search + Performance Max campaign, full GTM conversion tracking, tight audience segmentation. Proved the channel on a small budget before scaling.",
    image: "/images/projects/google-ads-results-1.jpeg",
    imageAlt: "Google Ads campaign dashboard showing 49 conversions from $1.2k spend",
    metrics: [
      { value: "49", label: "Conversions" },
      { value: "4,040", label: "Impressions" },
      { value: "210", label: "Clicks" },
    ],
  },
  {
    slug: "meta-lead-gen",
    tag: "Meta Ads · Lead generation",
    title: "Leads at £5.69 each from £51 test spend",
    summary:
      "Meta lead-generation funnel with Conversions API — proved the channel on a small test budget before scaling. Perfect model for Dubai service-business founders unsure about paid social.",
    image: "/images/projects/google-ads-results-2.jpeg",
    imageAlt: "Meta Ads lead generation report showing 9 leads at £5.69 cost per lead",
    metrics: [
      { value: "9", label: "Form leads" },
      { value: "£5.69", label: "Cost / lead" },
      { value: "£51", label: "Spend" },
    ],
  },
  {
    slug: "petroff-law",
    tag: "Web + SEO · Law firm",
    title: "Website + SEO growth for Petroff Law",
    summary:
      "Rebuilt a law firm's site as a conversion-focused Next.js build and layered ongoing local SEO on top. Result: 3.4× more consultation requests inside the first year.",
    image: "/images/projects/petroff-law-firm-website-design.png",
    imageAlt: "Petroff Law Firm website design, a Developer Studio client",
    metrics: [
      { value: "+180%", label: "Organic traffic" },
      { value: "3.4×", label: "Consultations" },
      { value: "0.9s", label: "Load time" },
    ],
  },
];

export default function DubaiCaseCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(((next % CASES.length) + CASES.length) % CASES.length);
    },
    [index]
  );
  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % CASES.length);
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + CASES.length) % CASES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const c = CASES[index];

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
            <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
            Real UAE + global campaigns
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
            Results, not <Mark variant="underline">promises</Mark>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            A snapshot of live campaigns we&apos;ve run for clients across
            the UAE, UK and US. Every number below is from a real dashboard,
            not a template.
          </p>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-6xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Prev / Next arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous case study"
            className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card transition-all hover:border-brand hover:text-brand-darker active:scale-95 sm:-left-6 lg:-left-16"
          >
            <Icon name="arrowRight" className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next case study"
            className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card transition-all hover:border-brand hover:text-brand-darker active:scale-95 sm:-right-6 lg:-right-16"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>

          {/* Card */}
          <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-0 lg:grid-cols-[1fr_1.1fr]"
              >
                {/* Copy side */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-darker">
                    {c.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-ink sm:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {c.summary}
                  </p>
                  {/* Metric row */}
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="tabular text-2xl font-black leading-none text-brand-darker sm:text-3xl">
                          {m.value}
                        </div>
                        <div className="mt-1.5 text-xs font-medium text-ink-muted">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <div className="relative min-h-64 overflow-hidden bg-zinc-50 lg:min-h-0">
                  <Image
                    src={c.image}
                    alt={c.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + counter */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex gap-2">
              {CASES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to case ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-8 bg-brand"
                      : "w-2 bg-ink/15 hover:bg-ink/30"
                  }`}
                />
              ))}
            </div>
            <span className="tabular text-xs font-semibold text-ink-muted">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-1 text-ink/25">/</span>
              {String(CASES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
