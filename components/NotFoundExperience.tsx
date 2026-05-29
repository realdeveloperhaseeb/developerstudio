"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { Icon, type IconName } from "@/components/icons";

const phrases = ["a law firm", "a roofing company"];

const script = (phrase: string) =>
  [
    `$ devstudio init --client "${phrase}"`,
    `→ researching the ${phrase.replace("a ", "")} market…`,
    `→ designing a conversion-first website…`,
    `→ launching SEO + Google Ads…`,
    `✓ growth engine live — more clients incoming`,
  ].join("\n");

function lineClass(line: string) {
  if (line.startsWith("$")) return "text-white";
  if (line.startsWith("✓")) return "text-brand-light font-semibold";
  if (line.startsWith("→")) return "text-emerald-300/70";
  return "text-white/60";
}

const links: { label: string; href: string; icon: IconName; desc: string }[] = [
  { label: "Home", href: "/", icon: "home", desc: "Back to the start" },
  { label: "Services", href: "/services", icon: "rocket", desc: "What we build" },
  { label: "Projects", href: "/projects", icon: "sparkles", desc: "Our recent work" },
  { label: "Locations", href: "/locations", icon: "mapPin", desc: "UK cities we serve" },
  { label: "About", href: "/about", icon: "scale", desc: "Meet the team" },
  { label: "Contact", href: "/contact", icon: "mail", desc: "Get a free plan" },
];

function Terminal() {
  const [pi, setPi] = useState(0);
  const [out, setOut] = useState("");
  const to = useRef<number | null>(null);

  useEffect(() => {
    const full = script(phrases[pi]);
    let i = 0;
    setOut("");
    const iv = window.setInterval(() => {
      i += 1;
      setOut(full.slice(0, i));
      if (i >= full.length) {
        window.clearInterval(iv);
        to.current = window.setTimeout(
          () => setPi((p) => (p + 1) % phrases.length),
          2400
        );
      }
    }, 28);
    return () => {
      window.clearInterval(iv);
      if (to.current) window.clearTimeout(to.current);
    };
  }, [pi]);

  const lines = out.split("\n");

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1512] shadow-[0_30px_80px_-30px_rgba(16,185,129,0.5)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-white/40">developerstudio — build</span>
      </div>
      <pre className="min-h-[190px] whitespace-pre-wrap p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, idx) => (
          <div key={idx} className={lineClass(line)}>
            {line}
            {idx === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-brand-light align-middle animate-blink" />
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}

export default function NotFoundExperience() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl" />
          <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-brand-dark/30 blur-3xl" />
        </div>

        {/* floating code glyphs */}
        {["</>", "{ }", "404", "●", "→"].map((g, i) => (
          <motion.span
            key={g}
            aria-hidden
            className="pointer-events-none absolute font-mono text-white/10"
            style={{
              top: `${12 + i * 16}%`,
              left: `${[8, 82, 18, 70, 45][i]}%`,
              fontSize: `${[44, 60, 30, 24, 40][i]}px`,
            }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            {g}
          </motion.span>
        ))}

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-light">
                <Icon name="bolt" className="h-4 w-4" /> Error 404
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                This page went <span className="text-gradient">off the grid.</span>
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
                The link you followed has moved or never existed. Good news — building things
                that actually work is literally our job. Let&apos;s get you somewhere useful.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/services" icon="arrowRight">
                  See what we build
                </Button>
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand-light"
                >
                  <Icon name="home" className="h-5 w-5" />
                  Back to home
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <Terminal />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quick links */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Where would you like to go?
            </h2>
            <p className="mt-3 text-ink-muted">
              Jump straight to what you were looking for.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={l.href}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={l.icon} className="h-6 w-6" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold text-ink">{l.label}</span>
                    <span className="block text-sm text-ink-muted">{l.desc}</span>
                  </span>
                  <Icon
                    name="arrowUpRight"
                    className="h-5 w-5 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-darker"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
