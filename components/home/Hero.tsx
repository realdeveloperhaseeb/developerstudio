"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import Mark from "@/components/Mark";
import AnimatedNumber from "@/components/AnimatedNumber";

/*
  Home hero. Client component so we can:
    · rotate a highlight word in the H1 (business → law firm → …)
    · run a cursor-following spotlight overlay
    · trigger the count-up numbers when hero is in view
*/

const delay = (s: number) => ({ ["--load-delay"]: `${s}s` }) as React.CSSProperties;

// Words that swap in the H1. Same character-width envelope-ish so the
// layout doesn't jump.
const ROTATE_WORDS = ["business", "law firm", "roofing company", "UAE brand"];

/* ---------------- Cursor spotlight ---------------- */

function CursorSpotlight() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    const section = overlay.parentElement;
    if (!section) return;

    // Only enable on true pointer devices (skip touch → no cursor to follow).
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        overlay.style.background = `radial-gradient(520px circle at ${x}px ${y}px, rgba(16,185,129,0.14), transparent 55%)`;
        overlay.style.opacity = "1";
      });
    };
    const onLeave = () => {
      overlay.style.opacity = "0";
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 md:block"
      style={{ zIndex: 1 }}
    />
  );
}

/* ---------------- Rotating word ---------------- */

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROTATE_WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className="relative inline-flex align-baseline"
      style={{ minWidth: "6ch" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          <Mark variant="underline">{ROTATE_WORDS[i]}</Mark>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ---------------- Hero ---------------- */

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-12 lg:pt-16">
      {/* Cursor spotlight overlay (desktop only) */}
      <CursorSpotlight />

      {/* Background decor — grid + two drifting ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="animate-drift-a absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
        <div className="animate-drift-b absolute top-40 -left-24 h-80 w-80 rounded-full bg-brand-light/15 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="relative">
            <div className="animate-load" style={delay(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 py-1 pl-1 pr-4 text-xs font-semibold text-brand-darker sm:text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="star" className="h-3.5 w-3.5" />
                </span>
                UK&apos;s&nbsp;<span className="font-bold">#1</span>&nbsp;for Law Firms &amp; Roofing Companies
              </span>
            </div>

            {/*
              H1: "We grow your [rotating word] from zero to industry
              leader." The rotating span cycles through business / law
              firm / roofing company / UAE brand, each getting a
              hand-drawn brand underline via the Mark component.
            */}
            <h1
              className="animate-load mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
              style={delay(0.1)}
            >
              We grow your <RotatingWord />
              <br className="hidden sm:block" /> from zero to industry leader.
            </h1>

            <p
              className="animate-load mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
              style={delay(0.2)}
            >
              Web &amp; app development, SEO, social media, and Google Ads. Built for UK law
              firms and roofing companies. One accountable team that handles the whole growth
              engine, so you can focus on clients.
            </p>

            <div
              className="animate-load mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={delay(0.3)}
            >
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-all hover:bg-brand-dark active:scale-95"
              >
                Get a Free Growth Plan
                <Icon name="arrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={site.whatsapp.uk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                Chat on WhatsApp
              </a>
            </div>

            <div
              className="animate-load mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={delay(0.4)}
            >
              {[
                { value: "120+", label: "Projects delivered" },
                { value: "3.4×", label: "Avg. lead growth" },
                { value: "98%", label: "Client retention" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="tabular text-2xl font-bold text-ink">
                    <AnimatedNumber value={s.value} />
                  </div>
                  <div className="text-sm text-ink-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="animate-load relative" style={delay(0.2)}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/10 via-transparent to-brand-light/20 blur-2xl" />

              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <div className="flex items-center gap-1.5 border-b border-line bg-zinc-50 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-ink-muted">developerstudio.org</span>
                </div>
                <Image
                  src="/images/projects/auto-repair-shop-website-design.png"
                  alt="Auto repair shop website designed by Developer Studio"
                  width={1280}
                  height={720}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>

              {/* Floating stat card */}
              <div className="animate-float absolute -bottom-6 -left-6 hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                    <Icon name="search" className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-ink">Ranking #1</div>
                    <div className="text-xs text-ink-muted">on Google in 90 days</div>
                  </div>
                </div>
              </div>

              {/* Floating leads card */}
              <div
                className="animate-float absolute -top-5 -right-4 hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:block"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="bolt" className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="tabular text-sm font-bold text-ink">
                      <AnimatedNumber value="+212%" />&nbsp;leads
                    </div>
                    <div className="text-xs text-ink-muted">in 6 months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
          Scroll cue — tiny "SCROLL" label + a vertical line that fades
          from brand-green to transparent, gently bouncing to signal
          there's more below the fold.
        */}
        <div className="pointer-events-none mt-14 hidden justify-center lg:flex">
          <div className="animate-bounce-cue flex flex-col items-center gap-2 text-ink-muted">
            <span className="text-[10px] font-bold uppercase tracking-[0.32em]">
              Scroll
            </span>
            <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-brand to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
