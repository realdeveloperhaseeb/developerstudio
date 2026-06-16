import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SectionHeading, { Eyebrow } from "@/components/SectionHeading";
import CtaSection from "@/components/sections/CtaSection";

/*
  Agency pitch page: Developer Studio pitching website development services
  to UK roofing companies. Designed for Google Ads — strong above-the-fold
  hook, testimonials, risk reversal, sticky mobile CTA, and click-to-call.
*/

const SLUG = "website-development-services-for-roofing-companies";
const TITLE = "Roofing Websites That Fill Your Diary | Built in 14 Days";
const PHONE_E164 = site.phones.uk.e164;
const PHONE_DISPLAY = site.phones.uk.display;

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Mobile-first roofing websites engineered to fill your diary with quote requests. Instant lead forms, local SEO, Google reviews — built and launched in 14 days. Free consultation.",
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: `${TITLE} | ${site.name}`,
    description:
      "Lead-generating roofing websites with instant quote forms, local SEO, and Google reviews. Live in 14 days. Free consultation.",
    url: `${site.url}/${SLUG}`,
  },
};

const trustBadges: { icon: IconName; value: string; label: string }[] = [
  { icon: "star", value: "5.0", label: "Google rating" },
  { icon: "bolt", value: "120+", label: "websites built" },
  { icon: "rocket", value: "14 days", label: "to live" },
  { icon: "mapPin", value: "UK-based", label: "in-house team" },
];

const pains: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "phone",
    title: "Quiet phones, empty diary",
    text: "Your competitors are getting calls every day. Your line stays silent — or rings with the wrong jobs.",
  },
  {
    icon: "search",
    title: "Invisible on Google",
    text: "When someone types 'roofer near me', your business is on page two. Nobody scrolls that far.",
  },
  {
    icon: "code",
    title: "An old, slow website",
    text: "Loads slowly on mobile, looks dated, and no one trusts it. You're losing quotes before you even know.",
  },
  {
    icon: "mail",
    title: "Manual back-and-forth",
    text: "Every quote starts with five emails. You'd rather be on the roof than at the keyboard.",
  },
];

const features: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "bolt",
    title: "Mobile-first & lightning fast",
    text: "Loads in under a second on a phone. Every section optimised to turn a tap into a quote request.",
  },
  {
    icon: "target",
    title: "Instant quote form",
    text: "A simple step-by-step form on every page. Job type, postcode, photos — straight to your phone.",
  },
  {
    icon: "sparkles",
    title: "Before & after gallery",
    text: "A showcase that proves quality. Easy to update — no developer needed.",
  },
  {
    icon: "search",
    title: "Local SEO + Google Business",
    text: "Your firm at the top of 'roofers near me' in your service area. GBP setup and review collection included.",
  },
  {
    icon: "star",
    title: "Reviews front-and-centre",
    text: "Google reviews and trust badges woven through the site so visitors feel safe to call.",
  },
  {
    icon: "phone",
    title: "Call tracking & reporting",
    text: "Know which jobs came from the site, which ads worked, and where your money went.",
  },
];

const testimonials = [
  {
    rating: 5,
    quote:
      "Diary was quiet for weeks. Within 6 weeks of launching the site, we had 4–5 quote requests a day. The investment paid for itself in the first month.",
    name: "James M.",
    role: "Managing Director",
    business: "Apex Roofing Ltd",
    location: "Leeds",
    initial: "J",
  },
  {
    rating: 5,
    quote:
      "Tried 3 other web designers — all promised the world, delivered a template. Developer Studio actually understood roofing. The local SEO setup is what won us page 1.",
    name: "Sarah W.",
    role: "Owner",
    business: "Premier Roofers",
    location: "Manchester",
    initial: "S",
  },
  {
    rating: 5,
    quote:
      "Honest, straightforward, no jargon. Built our site in 12 days, ranked us #1 for 'flat roofers Sheffield' in 90 days. Best money I've spent on marketing.",
    name: "Dave K.",
    role: "Director",
    business: "Northern Roofing Co",
    location: "Sheffield",
    initial: "D",
  },
];

const steps: { n: string; title: string; text: string; icon: IconName }[] = [
  { n: "01", title: "Discovery call", text: "20 minutes. We learn your jobs, your area, and your goals.", icon: "compass" },
  { n: "02", title: "Design",         text: "We design a homepage and quote flow built for your customers.", icon: "map" },
  { n: "03", title: "Build & content", text: "We build the site, write the copy, and set up tracking.",      icon: "code" },
  { n: "04", title: "Launch & SEO",    text: "We launch, configure Google Business Profile, and start ranking.", icon: "rocket" },
];

const promises: { icon: IconName; title: string; text: string }[] = [
  { icon: "phone",    title: "Free 20-min discovery call", text: "Zero obligation. Tell us your business, we'll show you exactly what we'd build." },
  { icon: "bolt",     title: "Live in 14 days — guaranteed", text: "Your site goes live in two weeks. If we miss the date, the next month is on us." },
  { icon: "check",    title: "No long contracts",         text: "Stay only as long as you're happy. Month-to-month support, cancel any time." },
  { icon: "search",   title: "Monthly performance reports", text: "Clear, honest reports on traffic, calls, and rankings — straight to your inbox." },
];

const stats = [
  { value: "+95%", label: "Bookings increase" },
  { value: "#1", label: "Local pack rankings" },
  { value: "120+", label: "Calls per month" },
  { value: "0.9s", label: "Mobile load time" },
];

const faqs = [
  {
    q: "How long until my roofing site is live?",
    a: "Typically 14 days from kickoff to launch — including copywriting, design, build, hosting setup, and Google Business Profile optimisation.",
  },
  {
    q: "Do I have to write the content?",
    a: "No. We write everything — your services, your area, your pitch — based on a single 20-minute discovery call.",
  },
  {
    q: "Will it actually bring me quotes?",
    a: "Yes. Every page is designed to convert. Combined with the local SEO setup and (optionally) Google Ads, most of our roofing clients see a noticeable jump in quote requests within 30–60 days.",
  },
  {
    q: "How much does it cost?",
    a: "We quote per project after the discovery call so it matches your size and area. Get in touch and we'll give you a clear, no-pressure price.",
  },
];

/* ---------------- Original SVG illustrations ---------------- */

function HouseIllustration() {
  return (
    <svg
      viewBox="0 0 640 520"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="Modern house with tiled roof and a green ladder"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ecfdf5" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="1" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="640" height="520" fill="url(#sky)" rx="28" />
      <circle cx="540" cy="100" r="80" fill="#10b981" fillOpacity="0.15" />
      <circle cx="540" cy="100" r="46" fill="#10b981" fillOpacity="0.35" />
      <path
        d="M0 380 L80 320 L140 340 L200 300 L260 330 L320 290 L380 320 L440 290 L500 330 L560 310 L640 340 L640 520 L0 520 Z"
        fill="#a7f3d0"
        opacity="0.55"
      />
      <rect x="130" y="320" width="340" height="180" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      <polygon points="100 330, 300 170, 500 330" fill="url(#roof)" />
      <g stroke="#0f172a" strokeWidth="2" opacity="0.5">
        <line x1="130" y1="318" x2="470" y2="318" />
        <line x1="158" y1="290" x2="442" y2="290" />
        <line x1="186" y1="262" x2="414" y2="262" />
        <line x1="214" y1="234" x2="386" y2="234" />
        <line x1="242" y1="206" x2="358" y2="206" />
        <line x1="270" y1="178" x2="330" y2="178" />
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
        <line x1="500" y1="340" x2="550" y2="340" />
        <line x1="510" y1="285" x2="560" y2="285" />
      </g>
      <rect y="500" width="640" height="20" fill="#10b981" opacity="0.1" />
    </svg>
  );
}

function WebsiteMockup() {
  return (
    <svg
      viewBox="0 0 800 520"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-label="Browser mockup of a roofing company website"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="1" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="760" height="480" rx="18" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="20" y="20" width="760" height="44" rx="18" fill="#f8fafc" />
      <rect x="20" y="44" width="760" height="20" fill="#f8fafc" />
      <circle cx="44" cy="42" r="6" fill="#fda4af" />
      <circle cx="64" cy="42" r="6" fill="#fde68a" />
      <circle cx="84" cy="42" r="6" fill="#86efac" />
      <rect x="120" y="32" width="420" height="22" rx="11" fill="#ffffff" stroke="#e2e8f0" />
      <text x="140" y="48" fontFamily="ui-monospace, monospace" fontSize="12" fill="#475569">
        yourroofingco.co.uk
      </text>
      <rect x="20" y="64" width="760" height="220" fill="url(#heroBg)" />
      <circle cx="720" cy="120" r="36" fill="#10b981" fillOpacity="0.3" />
      <circle cx="720" cy="120" r="20" fill="#10b981" />
      <rect x="60" y="100" width="180" height="14" rx="7" fill="#10b981" />
      <rect x="60" y="130" width="420" height="26" rx="6" fill="#ffffff" />
      <rect x="60" y="166" width="360" height="26" rx="6" fill="#ffffff" />
      <rect x="60" y="210" width="320" height="14" rx="6" fill="#ffffff" fillOpacity="0.6" />
      <rect x="60" y="234" width="240" height="14" rx="6" fill="#ffffff" fillOpacity="0.6" />
      <rect x="60" y="266" width="170" height="36" rx="18" fill="#10b981" />
      <text x="145" y="289" textAnchor="middle" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#ffffff">
        Get a Free Quote
      </text>
      <rect x="240" y="266" width="150" height="36" rx="18" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.3" />
      <text x="315" y="289" textAnchor="middle" fontFamily="Arial" fontSize="13" fontWeight="600" fill="#ffffff">
        Call us now
      </text>
      <g>
        <rect x="60" y="320" width="220" height="120" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        <rect x="80" y="340" width="40" height="40" rx="10" fill="#d1fae5" />
        <rect x="80" y="392" width="120" height="10" rx="5" fill="#0f172a" />
        <rect x="80" y="410" width="170" height="8" rx="4" fill="#94a3b8" />
        <rect x="80" y="422" width="130" height="8" rx="4" fill="#94a3b8" />

        <rect x="290" y="320" width="220" height="120" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        <rect x="310" y="340" width="40" height="40" rx="10" fill="#d1fae5" />
        <rect x="310" y="392" width="140" height="10" rx="5" fill="#0f172a" />
        <rect x="310" y="410" width="170" height="8" rx="4" fill="#94a3b8" />
        <rect x="310" y="422" width="130" height="8" rx="4" fill="#94a3b8" />

        <rect x="520" y="320" width="220" height="120" rx="14" fill="#ffffff" stroke="#e2e8f0" />
        <rect x="540" y="340" width="40" height="40" rx="10" fill="#d1fae5" />
        <rect x="540" y="392" width="110" height="10" rx="5" fill="#0f172a" />
        <rect x="540" y="410" width="170" height="8" rx="4" fill="#94a3b8" />
        <rect x="540" y="422" width="130" height="8" rx="4" fill="#94a3b8" />
      </g>
      <rect x="60" y="460" width="680" height="24" rx="6" fill="#f1f5f9" />
    </svg>
  );
}

/* ---------------- Page ---------------- */

export default function RoofingLandingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-14 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-brand-light/15 blur-3xl" />
        </div>

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              {/* Urgency / live indicator */}
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-darker">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
                </span>
                Now booking 14-day builds &mdash; limited spots
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
                Roofing websites that{" "}
                <span className="text-gradient">fill your diary.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                Mobile-first sites engineered to bring you quote requests every
                single day &mdash; with local SEO, instant lead forms, Google
                reviews and call tracking baked in. <strong className="text-ink">Live in 14 days.</strong>
              </p>

              {/* Triple CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/contact" size="lg" icon="arrowRight">
                  Get my free website plan
                </Button>
                <a
                  href={`tel:+${PHONE_E164}`}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-6 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={site.whatsapp.uk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                  WhatsApp
                </a>
              </div>

              {/* Trust badges row */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {trustBadges.map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-darker">
                      <Icon name={b.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-bold text-ink">{b.value}</div>
                      <div className="truncate text-xs text-ink-muted">{b.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/10 via-transparent to-brand-light/20 blur-2xl" />
                <HouseIllustration />
                <div className="absolute -bottom-5 -left-3 rounded-2xl border border-line bg-white p-4 shadow-card sm:-left-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="bolt" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-ink">+3 new quotes</div>
                      <div className="text-xs text-ink-muted">this week alone</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-3 top-4 hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:block">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                      <Icon name="search" className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-ink">#1 in local pack</div>
                      <div className="text-xs text-ink-muted">in 90 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Pain points */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Sound familiar?"
            title={
              <>
                You&apos;re a great roofer.{" "}
                <span className="text-gradient">Your website isn&apos;t.</span>
              </>
            }
            description="Most roofing businesses lose work not on price or quality — but because customers can't find them, can't trust the site, or can't easily get a quote."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pains.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Features */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What you get"
            title={
              <>
                Everything a modern{" "}
                <span className="text-gradient">roofing website needs.</span>
              </>
            }
            description="Not a brochure — a lead-generation engine purpose-built for roofers."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Testimonials */}
      <section className="bg-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What roofers say"
            title={
              <>
                Diary-filling sites.{" "}
                <span className="text-gradient">Happy roofers.</span>
              </>
            }
            description="A few words from roofing companies we've helped grow."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Icon key={j} name="star" className="h-5 w-5" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                      {t.initial}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-ink">
                        {t.name} &middot; {t.role}
                      </span>
                      <span className="block text-xs text-ink-muted">
                        {t.business}, {t.location}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Mockup showcase */}
      <section className="bg-ink py-12 text-white sm:py-16">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="border-brand-light/30 bg-white/5 text-brand-light">
              The finished product
            </Eyebrow>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Here&apos;s what we&apos;d build for you.
            </h2>
            <p className="mt-4 text-white/70">
              A polished, conversion-focused website tailored to your area and your services.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand/20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(16,185,129,0.5)]">
                <WebsiteMockup />
              </div>
              <div className="absolute -left-3 top-10 hidden rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 shadow-card backdrop-blur sm:block">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="bolt" className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">Loads in &lt; 1s</div>
                    <div className="text-xs text-white/60">on mobile</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-3 bottom-10 hidden rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 shadow-card backdrop-blur sm:block">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-ink">
                    <Icon name="target" className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white">Quote in 30s</div>
                    <div className="text-xs text-white/60">from any page</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6. Process */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                Live in <span className="text-gradient">14 days.</span>
              </>
            }
            description="A simple four-step path from first call to a website that brings you work."
          />
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08} className="relative">
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-brand-darker shadow-soft">
                      <span className="text-base font-extrabold">{s.n}</span>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                        <Icon name={s.icon} className="h-3.5 w-3.5" />
                      </span>
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Risk reversal / Our promise */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-3xl border border-brand/20 bg-white p-8 shadow-card sm:p-12">
              <div className="text-center">
                <Eyebrow>Our promise to you</Eyebrow>
                <h2 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
                  Risk-free, results-first.{" "}
                  <span className="text-gradient">No fine print.</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
                  We&apos;re only successful when you are. Here&apos;s exactly what you can expect — in writing.
                </p>
              </div>

              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {promises.map((p) => (
                  <li
                    key={p.title}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-zinc-50/60 p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.5)]">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-ink">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" size="lg" icon="arrowRight">
                  Book my free 20-min call
                </Button>
                <a
                  href={`tel:+${PHONE_E164}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand-darker"
                >
                  <Icon name="phone" className="h-4 w-4 text-brand" />
                  or call us on {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 8. Stats */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 sm:px-12">
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-brand/40 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-brand-light/30 blur-3xl" />
            </div>
            <Reveal className="relative mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-light">
                Real results from our roofing clients
              </p>
            </Reveal>
            <div className="relative mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06} className="text-center">
                  <div className="text-4xl font-extrabold text-white sm:text-5xl">
                    <span className="text-gradient">{s.value}</span>
                  </div>
                  <div className="mt-2 text-sm text-white/60">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 9. FAQ */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Quick answers" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <h3 className="flex items-start gap-2.5 font-bold text-ink">
                    <Icon name="sparkles" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {f.q}
                  </h3>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. Closing CTA */}
      <CtaSection
        title="Ready to fill your diary?"
        subtitle={`Get a free, no-pressure quote for your new roofing website — or call us right now on ${PHONE_DISPLAY}.`}
      />

      <div className="pb-28 text-center sm:pb-12">
        <Link
          href="/landing-pages"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker hover:underline"
        >
          <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
          Back to all landing pages
        </Link>
      </div>

      {/* Sticky mobile CTA bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 py-2.5 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md sm:hidden"
        role="complementary"
        aria-label="Quick contact"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 pr-16">
          <a
            href={`tel:+${PHONE_E164}`}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white"
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <Link
            href="/contact"
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)]"
          >
            Get a Free Quote
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
