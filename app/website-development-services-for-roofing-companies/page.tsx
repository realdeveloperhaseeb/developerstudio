import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

/*
  This page acts as a LIVE SAMPLE of a roofing company's website.
  Brand: "Apex Roofing UK" (fictional). All "Get a Quote", "Call", etc.
  buttons route to Developer Studio's own contact + WhatsApp — so when
  the link is shared with a real roofer, every CTA leads back to us.
*/

const BRAND = "Apex Roofing UK";
const SLUG = "website-development-services-for-roofing-companies";

export const metadata: Metadata = {
  title: `${BRAND} — Sample Roofing Website by Developer Studio`,
  description:
    "Live sample of a roofing company website built by Developer Studio. See how your roofing business could look online — and get the same site for yours.",
  alternates: { canonical: `/${SLUG}` },
  robots: { index: true, follow: true },
};

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "home",    title: "New Roof Installation", text: "Full residential and commercial re-roofs in slate, tile, and metal — guaranteed for 25 years." },
  { icon: "bolt",    title: "Emergency Roof Repairs", text: "Storm damage, broken tiles, leaks — same-day response across our service area." },
  { icon: "rocket",  title: "Flat Roofing",          text: "EPDM, GRP fibreglass, and felt systems for garages, extensions and commercial roofs." },
  { icon: "scale",   title: "Chimney & Lead Work",   text: "Re-pointing, flashing, and full chimney rebuilds carried out by certified roofers." },
  { icon: "share",   title: "Gutters & Fascias",     text: "Cleaning, repair, and full replacement of guttering, fascias, soffits and downpipes." },
  { icon: "sparkles",title: "Roof Cleaning & Moss",  text: "Professional moss removal and treatment to extend the life of your roof by years." },
];

const why: { icon: IconName; title: string; text: string }[] = [
  { icon: "check",  title: "Fully insured",       text: "£5M public liability cover on every job — your home and our team are protected." },
  { icon: "star",   title: "10-year guarantee",   text: "Every new roof comes with a written 10-year workmanship guarantee, transferable on sale." },
  { icon: "phone",  title: "Free quotes, fast",   text: "Tell us about your job and we'll come back with a clear written quote within 24 hours." },
  { icon: "scale",  title: "Family-run since 2010", text: "Local, trusted, and rated 5.0 on Google. We treat your home like our own." },
];

const gallery: { title: string; area: string; tag: string; svg: (props: { className?: string }) => React.JSX.Element }[] = [
  { title: "Slate re-roof", area: "Leeds, LS6",   tag: "Re-roof",    svg: RoofSlate },
  { title: "Terracotta tile roof", area: "York, YO24", tag: "Re-roof", svg: RoofTile },
  { title: "EPDM flat roof",        area: "Manchester, M20", tag: "Flat roof", svg: RoofFlat },
  { title: "Storm repair",          area: "Sheffield, S11", tag: "Repair",   svg: RoofRepair },
  { title: "Chimney re-point",      area: "Bradford, BD9",  tag: "Chimney",  svg: RoofChimney },
  { title: "New gutters & fascias", area: "Wakefield, WF1", tag: "Guttering",svg: RoofGutter },
];

const reviews = [
  { name: "Sarah J.", area: "Leeds",     text: "Outstanding from start to finish. Honest quote, turned up on time, left the place spotless. Our new slate roof looks fantastic." },
  { name: "Mark T.",  area: "Manchester", text: "Came out same day for a storm leak. Fixed it properly first time. Couldn't ask for better — friendly, professional, fair price." },
  { name: "Priya R.", area: "Sheffield",  text: "Three local roofers quoted us. Apex were the only ones who actually went up to look. Quality work, no nasty surprises on the bill." },
];

const areas = [
  "Leeds", "Manchester", "Sheffield", "Bradford", "York", "Wakefield",
  "Huddersfield", "Halifax", "Doncaster", "Harrogate", "Rotherham", "Barnsley",
];

/* ------------ SVG illustrations (different roof scenes) ------------ */

function RoofSlate({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Slate roof">
      <rect width="400" height="280" fill="#dbeafe" />
      <circle cx="340" cy="60" r="34" fill="#fef3c7" />
      <rect x="60" y="170" width="280" height="100" fill="#f1f5f9" />
      <polygon points="40 180, 200 70, 360 180" fill="#1e293b" />
      <g stroke="#0f172a" strokeWidth="1.5" opacity="0.6">
        <line x1="60" y1="178" x2="340" y2="178" />
        <line x1="80" y1="158" x2="320" y2="158" />
        <line x1="100" y1="138" x2="300" y2="138" />
        <line x1="120" y1="118" x2="280" y2="118" />
        <line x1="140" y1="98"  x2="260" y2="98"  />
      </g>
      <rect x="280" y="100" width="22" height="60" fill="#334155" />
      <rect x="100" y="200" width="40" height="60" rx="3" fill="#cffafe" />
      <rect x="260" y="200" width="40" height="60" rx="3" fill="#cffafe" />
      <rect x="180" y="190" width="40" height="80" rx="3" fill="#10b981" />
    </svg>
  );
}

function RoofTile({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Terracotta tile roof">
      <rect width="400" height="280" fill="#e0f2fe" />
      <rect x="60" y="170" width="280" height="100" fill="#fef3c7" />
      <polygon points="40 180, 200 70, 360 180" fill="#c2410c" />
      <g stroke="#7c2d12" strokeWidth="1.5" opacity="0.55">
        <line x1="60" y1="178" x2="340" y2="178" />
        <line x1="80" y1="158" x2="320" y2="158" />
        <line x1="100" y1="138" x2="300" y2="138" />
        <line x1="120" y1="118" x2="280" y2="118" />
      </g>
      {Array.from({ length: 18 }).map((_, i) => (
        <circle key={i} cx={70 + (i % 9) * 30} cy={170 + Math.floor(i / 9) * -22 + (i % 2) * 2} r="2.4" fill="#7c2d12" opacity="0.5" />
      ))}
      <rect x="270" y="100" width="22" height="60" fill="#7c2d12" />
      <rect x="100" y="200" width="40" height="60" rx="3" fill="#fef9c3" />
      <rect x="260" y="200" width="40" height="60" rx="3" fill="#fef9c3" />
    </svg>
  );
}

function RoofFlat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="EPDM flat roof">
      <rect width="400" height="280" fill="#dbeafe" />
      <rect x="40" y="120" width="320" height="20" fill="#0f172a" />
      <rect x="40" y="140" width="320" height="140" fill="#f1f5f9" />
      <g fill="#1e293b" opacity="0.4">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={50 + i * 26} y={124} width="6" height="12" />
        ))}
      </g>
      <rect x="80"  y="170" width="50" height="60" rx="2" fill="#cffafe" />
      <rect x="170" y="170" width="50" height="60" rx="2" fill="#cffafe" />
      <rect x="260" y="170" width="50" height="60" rx="2" fill="#cffafe" />
      <rect x="0"   y="270" width="400" height="10" fill="#10b981" opacity="0.25" />
      <circle cx="340" cy="55" r="30" fill="#fef3c7" />
    </svg>
  );
}

function RoofRepair({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Storm roof repair">
      <rect width="400" height="280" fill="#e2e8f0" />
      <path d="M0 80 Q60 60, 120 80 T240 80 T400 80 V0 H0 Z" fill="#cbd5e1" />
      <rect x="60" y="170" width="280" height="100" fill="#f8fafc" />
      <polygon points="40 180, 200 70, 360 180" fill="#1e293b" />
      <path d="M180 90 L210 120 L185 130 L215 165" stroke="#fde047" strokeWidth="3" fill="none" />
      <g stroke="#0f172a" strokeWidth="1.5" opacity="0.5">
        <line x1="60" y1="178" x2="340" y2="178" />
        <line x1="80" y1="158" x2="320" y2="158" />
      </g>
      <rect x="240" y="100" width="22" height="60" fill="#334155" />
      <g fill="#10b981">
        <circle cx="155" cy="135" r="10" />
      </g>
      <rect x="180" y="200" width="40" height="70" rx="3" fill="#10b981" />
    </svg>
  );
}

function RoofChimney({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Chimney re-pointing">
      <rect width="400" height="280" fill="#fef3c7" />
      <rect x="60" y="170" width="280" height="100" fill="#f8fafc" />
      <polygon points="40 180, 200 70, 360 180" fill="#7f1d1d" />
      <rect x="240" y="80" width="50" height="110" fill="#b45309" />
      <g stroke="#451a03" strokeWidth="1.2" opacity="0.6">
        <line x1="240" y1="100" x2="290" y2="100" />
        <line x1="240" y1="120" x2="290" y2="120" />
        <line x1="240" y1="140" x2="290" y2="140" />
        <line x1="240" y1="160" x2="290" y2="160" />
        <line x1="252" y1="80"  x2="252" y2="190" />
        <line x1="278" y1="80"  x2="278" y2="190" />
      </g>
      <rect x="238" y="74" width="54" height="10" fill="#7c2d12" />
    </svg>
  );
}

function RoofGutter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="New gutters and fascias">
      <rect width="400" height="280" fill="#dbeafe" />
      <rect x="60" y="180" width="280" height="90" fill="#f1f5f9" />
      <polygon points="40 180, 200 80, 360 180" fill="#1e293b" />
      <rect x="40" y="178" width="320" height="10" rx="3" fill="#10b981" />
      <rect x="60" y="188" width="6" height="80" fill="#10b981" />
      <rect x="334" y="188" width="6" height="80" fill="#10b981" />
      <rect x="100" y="210" width="40" height="55" rx="3" fill="#cffafe" />
      <rect x="260" y="210" width="40" height="55" rx="3" fill="#cffafe" />
      <rect x="180" y="200" width="40" height="65" rx="3" fill="#0f172a" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 640 520"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="Modern UK home with a freshly installed roof"
    >
      <defs>
        <linearGradient id="apexSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bae6fd" />
          <stop offset="1" stopColor="#ecfdf5" />
        </linearGradient>
        <linearGradient id="apexRoof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="640" height="520" fill="url(#apexSky)" rx="28" />
      <circle cx="540" cy="100" r="80" fill="#fde047" fillOpacity="0.45" />
      <circle cx="540" cy="100" r="46" fill="#facc15" />
      <path d="M0 380 L80 320 L140 340 L200 300 L260 330 L320 290 L380 320 L440 290 L500 330 L560 310 L640 340 L640 520 L0 520 Z" fill="#86efac" opacity="0.55" />
      <rect x="130" y="320" width="340" height="180" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <polygon points="100 330, 300 170, 500 330" fill="url(#apexRoof)" />
      <g stroke="#0f172a" strokeWidth="2" opacity="0.5">
        <line x1="130" y1="318" x2="470" y2="318" />
        <line x1="158" y1="290" x2="442" y2="290" />
        <line x1="186" y1="262" x2="414" y2="262" />
        <line x1="214" y1="234" x2="386" y2="234" />
        <line x1="242" y1="206" x2="358" y2="206" />
      </g>
      <rect x="380" y="210" width="34" height="90" fill="#1e293b" />
      <rect x="180" y="370" width="60" height="80" rx="4" fill="#cffafe" />
      <rect x="360" y="370" width="60" height="80" rx="4" fill="#cffafe" />
      <rect x="280" y="370" width="46" height="130" rx="4" fill="#10b981" />
      <g stroke="#10b981" strokeWidth="8" strokeLinecap="round">
        <line x1="470" y1="500" x2="520" y2="240" />
        <line x1="508" y1="500" x2="558" y2="240" />
        <line x1="485" y1="450" x2="535" y2="450" />
        <line x1="492" y1="395" x2="542" y2="395" />
      </g>
      <rect y="500" width="640" height="20" fill="#10b981" opacity="0.1" />
    </svg>
  );
}

/* ------------ Page ------------ */

export default function ApexRoofingSample() {
  return (
    <>
      {/* Small ribbon framing this as a sample built by Developer Studio */}
      <div className="bg-ink text-white">
        <Container className="flex flex-col items-center justify-between gap-2 py-2.5 text-xs sm:flex-row">
          <span className="inline-flex items-center gap-2 text-white/70">
            <Icon name="sparkles" className="h-4 w-4 text-brand-light" />
            Sample roofing website by Developer Studio — your site could look like this.
          </span>
          <Link href="/contact" className="font-semibold text-brand-light hover:underline">
            Get one for your business →
          </Link>
        </Container>
      </div>

      {/* 1. Hero (as the roofer) */}
      <section className="relative overflow-hidden bg-white pt-12 pb-14 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
        </div>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-darker">
                <Icon name="home" className="h-4 w-4" />
                {BRAND}
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                Trusted UK roofers.{" "}
                <span className="text-gradient">Free quotes in 60 seconds.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                Family-run since 2010. Slate, tile, flat roofing, repairs and gutters —
                done properly, guaranteed for 10 years, with a clear written quote before
                we lift a tool.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-all hover:bg-brand-dark active:scale-95"
                >
                  Get a Free Roof Quote
                  <Icon name="arrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={site.whatsapp.uk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                  WhatsApp us
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { v: "5.0", l: "Google rating" },
                  { v: "500+", l: "Jobs completed" },
                  { v: "10 yr", l: "Workmanship guarantee" },
                  { v: "£5M", l: "Insurance cover" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-xl font-extrabold text-brand-darker sm:text-2xl">{s.v}</div>
                    <div className="text-xs text-ink-muted">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/10 via-transparent to-brand-light/20 blur-2xl" />
                <HeroIllustration />
                <div className="absolute -bottom-5 -left-3 rounded-2xl border border-line bg-white p-4 shadow-card sm:-left-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-ink">Same-day callout</div>
                      <div className="text-xs text-ink-muted">for leaks &amp; storm damage</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 top-4 hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:block">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                      <Icon name="star" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-ink">5.0 on Google</div>
                      <div className="text-xs text-ink-muted">200+ verified reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Services */}
      <section id="services" className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title={<>What we do <span className="text-gradient">for your home</span></>}
            description="Every roof job, big or small. Insured, guaranteed, and explained in plain English before we start."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                  <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker">
                    Get a quote
                    <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Why choose us */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Why choose us"
            title={<>The roofer you can <span className="text-gradient">actually trust.</span></>}
            description="No surprise bills, no half-finished jobs, no waiting weeks for a callback."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Recent jobs / gallery */}
      <section id="work" className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Recent work"
            title={<>Roofs we've <span className="text-gradient">finished this season.</span></>}
            description="A snapshot of jobs from across Yorkshire and the North West."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => {
              const Svg = g.svg;
              return (
                <Reveal key={g.title} delay={(i % 3) * 0.06}>
                  <article className="group overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Svg className="h-full w-full" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand-darker backdrop-blur">
                        {g.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-ink">{g.title}</h3>
                      <p className="mt-1 text-xs text-ink-muted">{g.area}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
            >
              Get a free quote for your roof
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. Reviews */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Customer reviews"
            title={<>What our <span className="text-gradient">homeowners say.</span></>}
            description="200+ five-star reviews on Google. Here are three recent ones."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Icon key={j} name="star" className="h-5 w-5" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-darker">
                      {r.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink">{r.name}</span>
                      <span className="block text-xs text-ink-muted">Verified Google review · {r.area}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Service areas */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Service areas"
            title={<>Covering <span className="text-gradient">Yorkshire &amp; the North West.</span></>}
            description="Same-day callouts available across our core area. Not sure if you're covered? Just ask."
          />
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft"
              >
                <Icon name="mapPin" className="h-4 w-4 text-brand" />
                {a}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Final CTA (as roofer) */}
      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-gradient-to-br from-brand-50 via-white to-brand-50 px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
                Get a free, no-obligation roof quote.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-ink-muted sm:text-lg">
                Tell us about your job — type, postcode, photos if you have them. We&apos;ll come
                back within 24 hours with a clear price.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-all hover:bg-brand-dark active:scale-95"
                >
                  Get my free quote
                  <Icon name="arrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={site.whatsapp.uk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Footer disclosure — for the roofer prospect viewing this demo */}
      <div className="border-t border-line bg-ink py-8 text-center text-white">
        <Container>
          <p className="text-sm text-white/70">
            <span className="font-semibold text-white">Like this site?</span> It&apos;s a sample built
            by Developer Studio — we&apos;ll build the real version for your roofing company.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Get a site like this
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
            <Link
              href="/landing-pages"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-brand-light hover:text-brand-light"
            >
              See more samples
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
