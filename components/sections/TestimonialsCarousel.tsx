"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";

/*
  Editorial testimonial carousel. One quote at a time, big and human.
  Auto-advances every 6s, pauses on hover, keyboard-accessible.
  Prev / Next arrows on the sides, numeric+dot indicators below.
*/
export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length);
  }, [index]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-zinc-50/70 py-14 sm:py-20">
      {/* Off-grid ornament */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-50/70 blur-3xl"
      />

      <Container>
        <SectionHeading
          eyebrow="Client results"
          title={
            <>
              Businesses we&apos;ve <Mark variant="underline">grown</Mark>
            </>
          }
          description="We measure success in leads, cases, and booked jobs. Not vanity metrics."
        />

        {/* Rating summary */}
        <Reveal className="mt-7 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5 shadow-soft">
            <span className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5" />
              ))}
            </span>
            <span className="tabular text-sm font-semibold text-ink">
              5.0 average from happy clients
            </span>
          </div>
        </Reveal>

        {/* Carousel */}
        <div
          className="relative mx-auto mt-12 max-w-4xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Prev / Next arrows. Sit outside the card on desktop */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card transition-all hover:border-brand hover:text-brand-darker active:scale-95 sm:-left-6 lg:-left-16"
          >
            <Icon name="arrowRight" className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card transition-all hover:border-brand hover:text-brand-darker active:scale-95 sm:-right-6 lg:-right-16"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-8 shadow-card sm:p-12 lg:p-14">
            {/* Massive editorial quote glyph */}
            <span
              aria-hidden
              className="absolute -top-6 left-6 font-black text-brand/20 select-none sm:left-10"
              style={{ fontSize: "8rem", lineHeight: 1 }}
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -32 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Icon key={j} name="star" className="h-6 w-6" />
                  ))}
                </div>
                <blockquote className="mt-6 text-xl font-medium leading-snug text-ink-soft sm:text-2xl md:text-[28px] md:leading-[1.35]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-black text-white shadow-card">
                    {t.name.charAt(0)}
                  </span>
                  <span className="flex-1">
                    <span className="block text-base font-bold text-ink">{t.name}</span>
                    <span className="block text-sm text-ink-muted">
                      {t.role} <span className="text-ink/25">·</span> {t.location}
                    </span>
                  </span>
                  <span className="hidden items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-darker sm:inline-flex">
                    <Icon name="check" className="h-3.5 w-3.5" />
                    Verified client
                  </span>
                </figcaption>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + counter */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
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
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
