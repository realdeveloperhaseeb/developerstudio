"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/data/services";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Mark from "@/components/Mark";

/*
  Services section as an editorial tab set: chip-style tab bar at the
  top, big split-screen detail panel below. Clicking a tab crossfades
  the detail (framer-motion). Horizontally scrollable tab bar on
  mobile so all 6 services stay on one line.
*/
export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="services" className="relative overflow-hidden py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything you need to <Mark variant="underline">grow online</Mark>
            </>
          }
          description="From the first line of code to the last conversion, we build and run your entire digital growth engine."
        />

        {/* Tab bar — chips, horizontally scrollable on mobile */}
        <div className="relative mt-12 -mx-4 overflow-x-auto px-4 [-webkit-mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
          <div className="mx-auto flex w-max min-w-full items-center justify-start gap-2 sm:justify-center">
            {services.map((svc, i) => {
              const isActive = i === active;
              return (
                <button
                  key={svc.slug}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-ink text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_20px_-8px_rgba(10,10,10,0.5)]"
                      : "border border-line bg-white text-ink-soft hover:border-brand/40 hover:text-brand-darker"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon
                    name={svc.icon as IconName}
                    className={`h-4 w-4 ${isActive ? "text-brand-light" : "text-brand-darker"}`}
                  />
                  {svc.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel — split screen */}
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
                    <Icon name={s.icon as IconName} className="h-6 w-6" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darker">
                    Service {String(active + 1).padStart(2, "0")} of{" "}
                    {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black leading-tight text-ink sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {s.description}
                </p>

                {/* Feature list */}
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {s.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Outcome pill */}
                <div className="mt-6 rounded-2xl border border-brand/25 bg-brand-50/60 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-darker">
                    Typical outcome
                  </div>
                  <div className="mt-1 text-sm font-semibold text-ink">{s.outcome}</div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/services#${s.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_20px_-8px_rgba(10,10,10,0.5)] transition-all hover:bg-ink/90 active:scale-95"
                  >
                    See {s.title.toLowerCase()} details
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                  >
                    Get a quote
                  </Link>
                </div>
              </div>

              {/* Image side */}
              <div className="relative min-h-64 overflow-hidden bg-zinc-50 lg:min-h-0">
                {/* Off-grid ornament */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl"
                />
                <div className="relative flex h-full items-center justify-center p-6 sm:p-8 lg:p-10">
                  <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                    <div className="flex items-center gap-1.5 border-b border-line bg-zinc-50 px-3 py-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <span className="ml-2 truncate text-[10px] text-ink-muted">
                        {s.slug}
                      </span>
                    </div>
                    <Image
                      src={s.image}
                      alt={`${s.title} — Developer Studio`}
                      width={1280}
                      height={800}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
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
