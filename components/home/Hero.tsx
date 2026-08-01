import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import Mark from "@/components/Mark";

const delay = (s: number) => ({ ["--load-delay"]: `${s}s` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 sm:pt-12 lg:pt-16">
      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-brand-light/15 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <div className="animate-load" style={delay(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 py-1 pl-1 pr-4 text-xs font-semibold text-brand-darker sm:text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="star" className="h-3.5 w-3.5" />
                </span>
                UK&apos;s&nbsp;<span className="font-bold">#1</span>&nbsp;for Law Firms &amp; Roofing Companies
              </span>
            </div>

            <h1
              className="animate-load mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
              style={delay(0.1)}
            >
              We grow your business{" "}
              <Mark variant="underline">from zero</Mark> to industry leader.
            </h1>

            <p
              className="animate-load mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
              style={delay(0.2)}
            >
              Web &amp; app development, SEO, social media, and Google Ads — built for UK law
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
                  <div className="tabular text-2xl font-bold text-ink">{s.value}</div>
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

              {/* Floating stat card — offset asymmetrically (not the mirror of the other card) */}
              <div className="animate-float absolute -bottom-6 -left-8 hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:block">
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

              {/* Floating leads card — sits closer to the browser chrome, slightly overlapping */}
              <div
                className="animate-float absolute -top-4 right-4 hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:block"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="bolt" className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-ink">+212% leads</div>
                    <div className="text-xs text-ink-muted">in 6 months</div>
                  </div>
                </div>
              </div>

              {/* Small "5.0" sticker — rotated, hand-crafted feel */}
              <div
                aria-hidden
                className="rotate-slight absolute -bottom-4 right-6 hidden h-20 w-20 items-center justify-center rounded-full bg-ink text-white shadow-card sm:flex"
              >
                <div className="text-center leading-tight">
                  <div className="text-xl font-black tabular">5.0</div>
                  <div className="text-[9px] font-semibold uppercase tracking-widest text-white/70">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
