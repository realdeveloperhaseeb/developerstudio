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
  {
    slug: "loop-liard",
    title: "Loop",
    tag: "Product · Landing page",
    url: "https://loop-liard.vercel.app/",
    summary:
      "A tightly composed product landing page with an editorial visual system.",
  },
  {
    slug: "qadirgraphics",
    title: "Qadir Graphics",
    tag: "Graphic designer · Portfolio",
    url: "https://qadirgraphics.vercel.app/",
    summary:
      "A graphic-designer portfolio showcasing brand identity work and print + digital campaigns.",
  },
  {
    slug: "shanzay-akhtar",
    title: "Shanzay Akhtar",
    tag: "Personal portfolio",
    url: "https://shanzay-akhtar.vercel.app/",
    summary:
      "A personal portfolio with confident typography and a photography-forward hero.",
  },
  {
    slug: "alitalal",
    title: "Ali Talal",
    tag: "Personal portfolio",
    url: "https://alitalal.vercel.app/",
    summary:
      "A creator's personal site with a bold, minimal build focused on project work.",
  },
  {
    slug: "anum-ishfaq",
    title: "Anum Ishfaq",
    tag: "Personal portfolio · Editorial",
    url: "https://anum-ishfaq.vercel.app/",
    summary:
      "A calm, editorial personal portfolio with thoughtful section rhythm.",
  },
  {
    slug: "asmakhalid",
    title: "Asma Khalid",
    tag: "Personal portfolio",
    url: "https://asmakhalid.vercel.app/",
    summary:
      "A modern personal brand site with a clean case-study index.",
  },
  {
    slug: "mark-phi-inky",
    title: "Mark Phi",
    tag: "Personal brand · Content",
    url: "https://mark-phi-inky.vercel.app/",
    summary:
      "A content-first personal brand site with a bold hero and rich long-form reading.",
  },
  {
    slug: "johnbrosio-imp",
    title: "John Brosio",
    tag: "Creator portfolio",
    url: "https://johnbrosio-imp.vercel.app/",
    summary:
      "A creator portfolio with a distinctive art direction and quiet, confident typography.",
  },
  {
    slug: "marina-panova",
    title: "Marina Panova",
    tag: "Designer portfolio",
    url: "https://marina-panova.vercel.app/",
    summary:
      "A designer portfolio built around a strong grid, careful whitespace and project deep-dives.",
  },
  {
    slug: "sarah-nimblepenguin",
    title: "Sarah — Nimble Penguin",
    tag: "Personal brand · Product",
    url: "https://sarah-nimblepenguin.vercel.app/",
    summary:
      "A polished personal brand & product site with playful motion and a strong POV.",
  },
  {
    slug: "amanda-improved",
    title: "Amanda",
    tag: "Personal portfolio",
    url: "https://amanda-improved.vercel.app/",
    summary:
      "A refined personal portfolio with editorial rhythm and photo-driven case cards.",
  },
  {
    slug: "jen-r-miller",
    title: "Jen R. Miller",
    tag: "Writer · Portfolio",
    url: "https://jen-r-miller.vercel.app/",
    summary:
      "A writer's portfolio with a considered reading experience and a clear archive.",
  },
  {
    slug: "millerthekiller",
    title: "Miller",
    tag: "Personal brand · Editorial",
    url: "https://millerthekiller.vercel.app/",
    summary:
      "A bold personal-brand site with an editorial tone and confident typography.",
  },
  {
    slug: "meghann-misiak",
    title: "Meghann Misiak",
    tag: "Coach · Personal brand",
    url: "https://meghann-misiak.vercel.app/",
    summary:
      "A coaching site built around trust signals, offer clarity and a warm personal tone.",
  },
  {
    slug: "tim-denning",
    title: "Tim Denning",
    tag: "Writer · Content brand",
    url: "https://tim-denning.vercel.app/",
    summary:
      "A writer's content brand with a strong hero, newsletter capture and clean article surfacing.",
  },
  {
    slug: "maddy-faulkner",
    title: "Maddy Faulkner",
    tag: "Personal portfolio",
    url: "https://maddy-faulkner.vercel.app/",
    summary:
      "A personal portfolio with a focused case-study format and calm visual language.",
  },
  {
    slug: "christiana-maxion",
    title: "Christiana Maxion",
    tag: "Creator · Personal brand",
    url: "https://christiana-maxion.vercel.app/",
    summary:
      "A creator's personal brand site with strong visuals and a clear conversion path.",
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
        {/* Prev / Next — big floating arrows on the sides */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_30px_-8px_rgba(10,10,10,0.5)] transition-all hover:bg-brand-dark active:scale-95 sm:left-4 lg:left-0 lg:-translate-x-1/2"
        >
          <Icon name="arrowRight" className="h-6 w-6 rotate-180" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_10px_30px_-8px_rgba(10,10,10,0.5)] transition-all hover:bg-brand-dark active:scale-95 sm:right-4 lg:right-0 lg:translate-x-1/2"
        >
          <Icon name="arrowRight" className="h-6 w-6" />
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

        {/*
          Bottom nav bar — prev, counter + progress dots, next.
          Redundant with the side arrows but far more discoverable at
          a glance, and easier to reach with thumb on mobile.
        */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="group inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white pl-3 pr-4 text-sm font-semibold text-ink shadow-soft transition-all hover:border-brand hover:text-brand-darker active:scale-95"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
              <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
            </span>
            Prev
          </button>

          <div className="flex items-center gap-3">
            {/* Dots — cap at ~10 visible so 20+ demos don't get a mile-long strip */}
            <div className="hidden gap-1.5 sm:flex">
              {demos.map((_, i) => {
                // Slide a 9-dot window across the timeline as we advance.
                const windowSize = 9;
                const half = Math.floor(windowSize / 2);
                let start = Math.max(0, index - half);
                const end = Math.min(demos.length, start + windowSize);
                if (end - start < windowSize)
                  start = Math.max(0, end - windowSize);
                if (i < start || i >= end) return null;
                return (
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
                );
              })}
            </div>
            {/* Tabular counter — always visible */}
            <span className="tabular inline-flex items-baseline text-sm font-bold text-ink">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-1.5 text-ink/25">/</span>
              <span className="text-ink-muted">
                {String(demos.length).padStart(2, "0")}
              </span>
            </span>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="group inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white pl-4 pr-3 text-sm font-semibold text-ink shadow-soft transition-all hover:border-brand hover:text-brand-darker active:scale-95"
          >
            Next
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
              <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </button>
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
