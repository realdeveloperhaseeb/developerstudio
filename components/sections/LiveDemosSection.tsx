"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";

/*
  Full-width live-demo carousel. One project on screen at a time in a
  desktop-shaped browser mockup, so each site is seen the way it was
  designed to be seen. Screenshots come from the free WordPress mshots
  service (works for any public URL, no key required) — this avoids the
  X-Frame-Options blocking that killed the earlier iframe grid.

  Section escapes the Container so the mockup can breathe at desktop
  widths (max 1400px). Auto-advances every 7 s, pauses on hover, arrow
  keys work, single dot + counter below.
*/

type Demo = {
  slug: string;
  title: string;
  tag: string;
  url: string;
  summary: string;
};

const demos: Demo[] = [
  {
    slug: "ani-improved",
    title: "Ani — Personal Portfolio",
    tag: "Portfolio · Editorial UI",
    url: "https://ani-improved.vercel.app/",
    summary:
      "A polished personal portfolio with editorial typography and considered micro-interactions.",
  },
  {
    slug: "fizaismail",
    title: "Fiza Ismail",
    tag: "Creative portfolio · Brand",
    url: "https://fizaismail.vercel.app/",
    summary:
      "A creative-professional portfolio built around rich imagery and a strong personal brand voice.",
  },
  {
    slug: "stayright-two",
    title: "StayRight",
    tag: "Product landing · Web app",
    url: "https://stayright-two.vercel.app/",
    summary:
      "Product landing for a modern lifestyle app — clean information hierarchy, conversion-first.",
  },
  {
    slug: "nat-ui-improved",
    title: "Nat UI",
    tag: "SaaS · Design system",
    url: "https://nat-ui-improved.vercel.app/",
    summary:
      "A SaaS marketing site with a full design system, animated hero, and modular content blocks.",
  },
  {
    slug: "nixocontentgrid",
    title: "Nixo — Content Grid",
    tag: "Agency · Bento layout",
    url: "https://nixocontentgrid.vercel.app/",
    summary:
      "An agency site built around an editorial bento grid — the design language we drew from for our own rebuild.",
  },
  {
    slug: "luke-ui",
    title: "Luke UI",
    tag: "Personal brand · Portfolio",
    url: "https://luke-ui.vercel.app/",
    summary:
      "A bold personal-brand site with heavy typographic contrast and interactive project showcases.",
  },
];

// WordPress mshots — free URL-to-screenshot service, no key required.
// vpw/vph = capture viewport (desktop); w = output pixel width.
function shotUrl(u: string) {
  const encoded = encodeURIComponent(u);
  return `https://s.wordpress.com/mshots/v1/${encoded}?w=1400&h=875&vpw=1400&vph=875`;
}

function hostname(url: string) {
  try {
    const p = new URL(url);
    return p.host + p.pathname.replace(/\/$/, "");
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

export default function LiveDemosSection({
  heading = true,
}: { heading?: boolean }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (n: number) => {
      setDirection(n > index ? 1 : -1);
      setIndex(((n % demos.length) + demos.length) % demos.length);
    },
    [index]
  );
  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % demos.length);
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + demos.length) % demos.length);
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

  const d = demos[index];

  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* Off-grid ornaments */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-100/40 blur-3xl"
      />

      {heading && (
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Live projects"
            title={
              <>
                Sites we&apos;ve shipped, at{" "}
                <Mark variant="underline">desktop scale</Mark>
              </>
            }
            description="Real, live URLs. Scroll through the carousel or click any preview to open the full site in a new tab."
          />
        </div>
      )}

      {/* Carousel — escapes the Container so the browser mockup breathes */}
      <div
        className="relative mx-auto mt-12 w-full max-w-[1440px] px-4 sm:mt-14 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* Prev / Next — big floating arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card transition-all hover:border-brand hover:text-brand-darker active:scale-95 sm:left-6 lg:left-2"
        >
          <Icon name="arrowRight" className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card transition-all hover:border-brand hover:text-brand-darker active:scale-95 sm:right-6 lg:right-2"
        >
          <Icon name="arrowRight" className="h-5 w-5" />
        </button>

        {/* The card */}
        <Reveal>
          <div className="mx-auto overflow-hidden rounded-3xl border border-line bg-white shadow-card">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={d.slug}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-line bg-zinc-50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-2 flex flex-1 items-center gap-2 truncate rounded-md bg-white/80 px-3 py-1 text-xs text-ink-muted ring-1 ring-line">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span className="truncate">{hostname(d.url)}</span>
                  </div>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${d.title} in new tab`}
                    className="flex h-8 items-center gap-1.5 rounded-md bg-brand px-3 text-xs font-semibold text-white transition-all hover:bg-brand-dark active:scale-95"
                  >
                    Open
                    <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Big desktop screenshot */}
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/img relative block aspect-[1400/875] w-full overflow-hidden bg-zinc-100"
                >
                  {/*
                    mshots is async — it renders a "generating" placeholder
                    on first hit, then serves the cached screenshot on
                    subsequent visits. Loading=lazy so we don't pay for it
                    until scrolled near.
                  */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shotUrl(d.url)}
                    alt={`${d.title} — live site screenshot at desktop scale`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover/img:opacity-100">
                    <div className="w-full p-6">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-card">
                        Visit {d.title}
                        <Icon name="arrowUpRight" className="h-4 w-4 text-brand" />
                      </span>
                    </div>
                  </div>
                </a>

                {/* Meta strip */}
                <div className="flex flex-col gap-4 border-t border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-brand-darker">
                      {d.tag}
                    </p>
                    <h3 className="mt-1 text-xl font-black text-ink sm:text-2xl">
                      {d.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                      {d.summary}
                    </p>
                  </div>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:bg-ink/90 active:scale-95"
                  >
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                    View live site
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Dots + counter */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex gap-2">
            {demos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
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
            {String(demos.length).padStart(2, "0")}
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-muted">
          Previews are live desktop screenshots (updated on visit).
          Hover the image or tap &ldquo;View live site&rdquo; to open the real,
          interactive site in a new tab.
        </p>
      </div>
    </section>
  );
}
