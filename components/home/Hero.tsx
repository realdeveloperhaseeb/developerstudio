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

          {/* Visual: dual-niche browser mockups.
              Main card = a real law firm client (Petroff Law).
              Secondary card = a designed-in-SVG roofer mockup, rotated
              behind the main card so the two niches read at a glance. */}
          <div className="animate-load relative" style={delay(0.2)}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/10 via-transparent to-brand-light/20 blur-2xl" />

              {/* SECONDARY: roofing mockup (designed inline). Sits behind, rotated. */}
              <div
                aria-hidden
                className="animate-float absolute -bottom-10 -right-4 hidden w-[62%] rotate-[4deg] overflow-hidden rounded-2xl border border-line bg-white shadow-card sm:block lg:-right-8"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-1.5 border-b border-line bg-zinc-50 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 truncate text-[10px] text-ink-muted">
                    apexroofing.co.uk
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white p-4">
                  {/* Roof silhouette */}
                  <svg
                    viewBox="0 0 300 180"
                    className="absolute inset-x-0 bottom-0 h-full w-full"
                    preserveAspectRatio="xMidYMax slice"
                  >
                    <defs>
                      <pattern id="rooftiles" width="10" height="6" patternUnits="userSpaceOnUse">
                        <path
                          d="M0 6 L5 0 L10 6"
                          stroke="rgba(4,120,87,0.35)"
                          fill="none"
                          strokeWidth="0.8"
                        />
                      </pattern>
                    </defs>
                    <path
                      d="M40 110 L150 40 L260 110 L260 175 L40 175 Z"
                      fill="rgba(16,185,129,0.10)"
                    />
                    <path
                      d="M40 110 L150 40 L260 110"
                      fill="url(#rooftiles)"
                    />
                    <path
                      d="M40 110 L150 40 L260 110"
                      fill="none"
                      stroke="rgba(4,120,87,0.55)"
                      strokeWidth="1.2"
                    />
                    <rect x="140" y="132" width="20" height="43" fill="rgba(4,120,87,0.6)" rx="1" />
                    <circle cx="156" cy="154" r="1.2" fill="#fff" />
                  </svg>
                  <div className="relative">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-darker">
                      Apex Roofing Co.
                    </div>
                    <div className="mt-1 text-[13px] font-black leading-tight text-ink">
                      Free roof
                      <br />
                      inspection.
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[9px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                      Get a Quote →
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN: real law-firm client — Petroff Law */}
              <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <div className="flex items-center gap-1.5 border-b border-line bg-zinc-50 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 flex items-center gap-1.5 text-xs text-ink-muted">
                    <Icon name="lock" className="h-3 w-3" />
                    petrofflaw.co.uk
                  </span>
                </div>
                <Image
                  src="/images/projects/petroff-law-firm-website-design.png"
                  alt="Petroff Law Firm website — a Developer Studio client"
                  width={1280}
                  height={720}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
              </div>

              {/* Niche chip on the main (law firm) card */}
              <div className="absolute -top-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand-darker shadow-card ring-1 ring-brand/25">
                <Icon name="scale" className="h-3.5 w-3.5 text-brand" />
                Law Firms
              </div>

              {/* Niche chip on the roofer card */}
              <div className="absolute -bottom-2 right-10 hidden rotate-[4deg] items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white shadow-card sm:inline-flex">
                <Icon name="home" className="h-3.5 w-3.5 text-brand-light" />
                Roofing Companies
              </div>

              {/* Floating "+212% leads" chip — kept small, tucked into the corner so it doesn't compete */}
              <div
                className="animate-float absolute -top-4 right-4 hidden rounded-2xl border border-line bg-white p-3 shadow-card sm:block"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="bolt" className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="tabular text-sm font-bold text-ink">+212% leads</div>
                    <div className="text-[10px] text-ink-muted">in 6 months</div>
                  </div>
                </div>
              </div>

              {/* Rotated 5.0 sticker — moved to top-left so it doesn't fight the roofer card */}
              <div
                aria-hidden
                className="rotate-slight-r absolute -top-6 -left-6 hidden h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-card sm:flex"
              >
                <div className="text-center leading-none">
                  <div className="tabular text-base font-black">5.0</div>
                  <div className="mt-0.5 text-[8px] font-semibold tracking-widest text-white/70">
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
