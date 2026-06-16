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
  Agency pitch: Developer Studio selling website services to UK roofers.
  All-custom SVG illustrations (no photos). Visually rich layout designed
  for Google Ads landing.
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
  { icon: "star",   value: "5.0",      label: "Google rating" },
  { icon: "bolt",   value: "120+",     label: "websites built" },
  { icon: "rocket", value: "14 days",  label: "to live" },
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
  { icon: "bolt",     title: "Mobile-first & lightning fast", text: "Loads in under a second on a phone. Every section optimised to turn a tap into a quote request." },
  { icon: "target",   title: "Instant quote form",            text: "A simple step-by-step form on every page. Job type, postcode, photos — straight to your phone." },
  { icon: "sparkles", title: "Before & after gallery",        text: "A showcase that proves quality. Easy to update — no developer needed." },
  { icon: "search",   title: "Local SEO + Google Business",   text: "Your firm at the top of 'roofers near me' in your service area. GBP setup and review collection included." },
  { icon: "star",     title: "Reviews front-and-centre",      text: "Google reviews and trust badges woven through the site so visitors feel safe to call." },
  { icon: "phone",    title: "Call tracking & reporting",     text: "Know which jobs came from the site, which ads worked, and where your money went." },
];

const variants = [
  { name: "Classic Pro",  tag: "Clean & trusted",     primary: "#10b981", dark: "#0f172a", accent: "#ecfdf5" },
  { name: "Bold Modern",  tag: "Dark & punchy",       primary: "#10b981", dark: "#000000", accent: "#1f2937" },
  { name: "Friendly Local", tag: "Warm & community",  primary: "#ea580c", dark: "#7c2d12", accent: "#fef3c7" },
];

const testimonials = [
  {
    rating: 5,
    quote: "Diary was quiet for weeks. Within 6 weeks of launching the site, we had 4–5 quote requests a day. The investment paid for itself in the first month.",
    name: "James M.", role: "Managing Director", business: "Apex Roofing Ltd", location: "Leeds", initial: "J",
  },
  {
    rating: 5,
    quote: "Tried 3 other web designers — all promised the world, delivered a template. Developer Studio actually understood roofing. The local SEO setup is what won us page 1.",
    name: "Sarah W.", role: "Owner", business: "Premier Roofers", location: "Manchester", initial: "S",
  },
  {
    rating: 5,
    quote: "Honest, straightforward, no jargon. Built our site in 12 days, ranked us #1 for 'flat roofers Sheffield' in 90 days. Best money I've spent on marketing.",
    name: "Dave K.", role: "Director", business: "Northern Roofing Co", location: "Sheffield", initial: "D",
  },
];

const steps: { n: string; title: string; text: string; icon: IconName }[] = [
  { n: "01", title: "Discovery call",   text: "20 minutes. We learn your jobs, your area, and your goals.",          icon: "compass" },
  { n: "02", title: "Design",            text: "We design a homepage and quote flow built for your customers.",       icon: "map" },
  { n: "03", title: "Build & content",   text: "We build the site, write the copy, and set up tracking.",             icon: "code" },
  { n: "04", title: "Launch & SEO",      text: "We launch, configure Google Business Profile, and start ranking.",    icon: "rocket" },
];

const promises: { icon: IconName; title: string; text: string }[] = [
  { icon: "phone",  title: "Free 20-min discovery call",   text: "Zero obligation. Tell us your business, we'll show you exactly what we'd build." },
  { icon: "bolt",   title: "Live in 14 days — guaranteed", text: "Your site goes live in two weeks. If we miss the date, the next month is on us." },
  { icon: "check",  title: "No long contracts",            text: "Stay only as long as you're happy. Month-to-month support, cancel any time." },
  { icon: "search", title: "Monthly performance reports",  text: "Clear, honest reports on traffic, calls, and rankings — straight to your inbox." },
];

const stats = [
  { value: "+95%", label: "Bookings increase",   bar: 95 },
  { value: "#1",   label: "Local pack rankings", bar: 100 },
  { value: "120+", label: "Calls per month",     bar: 80 },
  { value: "0.9s", label: "Mobile load time",    bar: 92 },
];

const faqs = [
  { q: "How long until my roofing site is live?", a: "Typically 14 days from kickoff to launch — including copywriting, design, build, hosting setup, and Google Business Profile optimisation." },
  { q: "Do I have to write the content?",         a: "No. We write everything — your services, your area, your pitch — based on a single 20-minute discovery call." },
  { q: "Will it actually bring me quotes?",       a: "Yes. Every page is designed to convert. Combined with the local SEO setup and (optionally) Google Ads, most of our roofing clients see a noticeable jump in quote requests within 30–60 days." },
  { q: "How much does it cost?",                  a: "We quote per project after the discovery call so it matches your size and area. Get in touch and we'll give you a clear, no-pressure price." },
];

/* ---------------- Custom SVG illustrations ---------------- */

function HouseIllustration() {
  return (
    <svg viewBox="0 0 640 520" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" role="img" aria-label="Modern house illustration">
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
      <path d="M0 380 L80 320 L140 340 L200 300 L260 330 L320 290 L380 320 L440 290 L500 330 L560 310 L640 340 L640 520 L0 520 Z" fill="#a7f3d0" opacity="0.55" />
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

/* Laptop + phone mockup showing the roofer site at two breakpoints */
function MultiDeviceMockup() {
  return (
    <svg viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" role="img" aria-label="Roofing website on laptop and phone">
      <defs>
        <linearGradient id="md_hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f172a" />
          <stop offset="1" stopColor="#064e3b" />
        </linearGradient>
        <linearGradient id="md_screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8fafc" />
          <stop offset="1" stopColor="#eef2f4" />
        </linearGradient>
      </defs>

      {/* Glow */}
      <circle cx="500" cy="320" r="280" fill="#10b981" fillOpacity="0.12" />

      {/* ====== LAPTOP ====== */}
      <g transform="translate(40 60)">
        {/* Body */}
        <rect x="0" y="0" width="720" height="440" rx="18" fill="#111827" />
        <rect x="14" y="14" width="692" height="408" rx="10" fill="url(#md_screen)" />
        {/* Title bar */}
        <rect x="14" y="14" width="692" height="32" rx="10" fill="#ffffff" />
        <circle cx="32"  cy="30" r="5" fill="#fca5a5" />
        <circle cx="50"  cy="30" r="5" fill="#fde68a" />
        <circle cx="68"  cy="30" r="5" fill="#86efac" />
        <rect  x="110" y="22" width="380" height="16" rx="8" fill="#f1f5f9" />
        <text x="124" y="34" fontFamily="ui-monospace, monospace" fontSize="10" fill="#64748b">yourroofingco.co.uk</text>

        {/* Header */}
        <rect x="14" y="46" width="692" height="44" fill="#ffffff" />
        <circle cx="46" cy="68" r="10" fill="#10b981" />
        <rect x="64" y="62" width="78" height="12" rx="2" fill="#0f172a" />
        <g fill="#94a3b8">
          <rect x="350" y="64" width="40" height="8" rx="2" />
          <rect x="402" y="64" width="40" height="8" rx="2" />
          <rect x="454" y="64" width="40" height="8" rx="2" />
        </g>
        <rect x="600" y="56" width="92" height="26" rx="13" fill="#10b981" />
        <text x="646" y="73" textAnchor="middle" fontFamily="Arial" fontSize="10" fontWeight="700" fill="#ffffff">Get a Quote</text>

        {/* Hero band */}
        <rect x="14" y="90" width="692" height="200" fill="url(#md_hero)" />
        {/* Decorative dots */}
        <g fill="#10b981" fillOpacity="0.5">
          <circle cx="640" cy="120" r="3" />
          <circle cx="660" cy="160" r="2" />
          <circle cx="680" cy="200" r="3" />
        </g>
        <rect x="50" y="120" width="120" height="10" rx="5" fill="#10b981" />
        <rect x="50" y="142" width="380" height="22" rx="4" fill="#ffffff" />
        <rect x="50" y="172" width="320" height="22" rx="4" fill="#ffffff" />
        <rect x="50" y="210" width="280" height="10" rx="4" fill="#ffffff" fillOpacity="0.6" />
        <rect x="50" y="226" width="220" height="10" rx="4" fill="#ffffff" fillOpacity="0.6" />
        <rect x="50" y="252" width="150" height="30" rx="15" fill="#10b981" />
        <text x="125" y="271" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="700" fill="#ffffff">Get a Free Quote</text>
        <rect x="210" y="252" width="116" height="30" rx="15" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.3" />
        <text x="268" y="271" textAnchor="middle" fontFamily="Arial" fontSize="11" fontWeight="600" fill="#ffffff">Call now</text>

        {/* 3 trust cards row */}
        <g>
          <rect x="50"  y="310" width="200" height="92" rx="10" fill="#ffffff" stroke="#e2e8f0" />
          <rect x="64"  y="324" width="32" height="32" rx="8" fill="#d1fae5" />
          <rect x="64"  y="368" width="110" height="8" rx="3" fill="#0f172a" />
          <rect x="64"  y="382" width="150" height="6" rx="2" fill="#94a3b8" />
          <rect x="64"  y="392" width="120" height="6" rx="2" fill="#94a3b8" />

          <rect x="262" y="310" width="200" height="92" rx="10" fill="#ffffff" stroke="#e2e8f0" />
          <rect x="276" y="324" width="32" height="32" rx="8" fill="#d1fae5" />
          <rect x="276" y="368" width="130" height="8" rx="3" fill="#0f172a" />
          <rect x="276" y="382" width="150" height="6" rx="2" fill="#94a3b8" />
          <rect x="276" y="392" width="120" height="6" rx="2" fill="#94a3b8" />

          <rect x="474" y="310" width="220" height="92" rx="10" fill="#ffffff" stroke="#e2e8f0" />
          <rect x="488" y="324" width="32" height="32" rx="8" fill="#d1fae5" />
          <rect x="488" y="368" width="120" height="8" rx="3" fill="#0f172a" />
          <rect x="488" y="382" width="160" height="6" rx="2" fill="#94a3b8" />
          <rect x="488" y="392" width="140" height="6" rx="2" fill="#94a3b8" />
        </g>

        {/* Base shadow */}
        <rect x="-20" y="440" width="760" height="14" rx="6" fill="#0f172a" fillOpacity="0.18" />
        <rect x="-32" y="442" width="784" height="10" rx="3" fill="#1f2937" />
      </g>

      {/* ====== PHONE ====== */}
      <g transform="translate(740 100)">
        {/* Body */}
        <rect x="0" y="0" width="220" height="430" rx="28" fill="#111827" />
        <rect x="8" y="8" width="204" height="414" rx="22" fill="#ffffff" />
        {/* Notch */}
        <rect x="80" y="14" width="60" height="10" rx="5" fill="#0f172a" />
        {/* Top header */}
        <rect x="14" y="36" width="192" height="24" fill="#ffffff" />
        <circle cx="30" cy="48" r="6" fill="#10b981" />
        <rect x="42" y="44" width="56" height="8" rx="2" fill="#0f172a" />
        <circle cx="190" cy="48" r="6" fill="#f1f5f9" />
        {/* Hero */}
        <rect x="14" y="64" width="192" height="150" fill="url(#md_hero)" />
        <rect x="26" y="80" width="80" height="6" rx="3" fill="#10b981" />
        <rect x="26" y="94" width="160" height="14" rx="3" fill="#ffffff" />
        <rect x="26" y="114" width="140" height="14" rx="3" fill="#ffffff" />
        <rect x="26" y="144" width="160" height="8" rx="3" fill="#ffffff" fillOpacity="0.6" />
        <rect x="26" y="158" width="120" height="8" rx="3" fill="#ffffff" fillOpacity="0.6" />
        <rect x="26" y="180" width="170" height="24" rx="12" fill="#10b981" />
        <text x="111" y="196" textAnchor="middle" fontFamily="Arial" fontSize="10" fontWeight="700" fill="#ffffff">Get a Free Quote</text>
        {/* Card 1 */}
        <rect x="14" y="226" width="192" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" />
        <rect x="26" y="238" width="28" height="28" rx="6" fill="#d1fae5" />
        <rect x="62" y="244" width="110" height="8" rx="3" fill="#0f172a" />
        <rect x="62" y="262" width="120" height="6" rx="2" fill="#94a3b8" />
        <rect x="62" y="274" width="100" height="6" rx="2" fill="#94a3b8" />
        {/* Card 2 */}
        <rect x="14" y="316" width="192" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" />
        <rect x="26" y="328" width="28" height="28" rx="6" fill="#d1fae5" />
        <rect x="62" y="334" width="100" height="8" rx="3" fill="#0f172a" />
        <rect x="62" y="352" width="120" height="6" rx="2" fill="#94a3b8" />
        <rect x="62" y="364" width="90" height="6" rx="2" fill="#94a3b8" />
      </g>

      {/* Floating UI badges */}
      <g transform="translate(620 510)">
        <rect width="170" height="46" rx="23" fill="#ffffff" stroke="#e2e8f0" />
        <circle cx="23" cy="23" r="13" fill="#10b981" />
        <path d="M16 23 l4 4 l8 -8" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="46" y="20" fontFamily="Arial" fontSize="10" fontWeight="700" fill="#0f172a">Quote received</text>
        <text x="46" y="34" fontFamily="Arial" fontSize="9" fill="#64748b">just now &middot; mobile</text>
      </g>
    </svg>
  );
}

/* Mini browser mockup with variable colour palette — for the style gallery */
function StyleVariant({ primary, dark, accent, label }: { primary: string; dark: string; accent: string; label: string }) {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" role="img" aria-label={`${label} website mockup`}>
      {/* Browser frame */}
      <rect width="400" height="320" rx="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <rect width="400" height="28" rx="14" fill="#f8fafc" />
      <rect y="14" width="400" height="14" fill="#f8fafc" />
      <circle cx="18" cy="14" r="4" fill="#fca5a5" />
      <circle cx="32" cy="14" r="4" fill="#fde68a" />
      <circle cx="46" cy="14" r="4" fill="#86efac" />
      <rect x="64" y="8" width="200" height="12" rx="6" fill="#ffffff" stroke="#e2e8f0" />

      {/* Hero band — colour varies */}
      <rect y="28" width="400" height="140" fill={dark} />
      {/* Decorative shape */}
      <circle cx="360" cy="60" r="28" fill={primary} fillOpacity="0.4" />
      <circle cx="360" cy="60" r="14" fill={primary} />
      <rect x="20" y="50" width="80" height="8" rx="3" fill={primary} />
      <rect x="20" y="66" width="220" height="14" rx="3" fill="#ffffff" />
      <rect x="20" y="86" width="180" height="14" rx="3" fill="#ffffff" />
      <rect x="20" y="112" width="100" height="22" rx="11" fill={primary} />
      <rect x="128" y="112" width="80" height="22" rx="11" fill="#ffffff" fillOpacity="0.1" stroke="#ffffff" strokeOpacity="0.3" />

      {/* Card row */}
      <rect x="20"  y="184" width="110" height="118" rx="10" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="32"  y="196" width="22" height="22" rx="6" fill={accent} />
      <rect x="32"  y="226" width="80" height="8" rx="3" fill="#0f172a" />
      <rect x="32"  y="240" width="90" height="5" rx="2" fill="#94a3b8" />
      <rect x="32"  y="250" width="70" height="5" rx="2" fill="#94a3b8" />

      <rect x="145" y="184" width="110" height="118" rx="10" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="157" y="196" width="22" height="22" rx="6" fill={accent} />
      <rect x="157" y="226" width="80" height="8" rx="3" fill="#0f172a" />
      <rect x="157" y="240" width="90" height="5" rx="2" fill="#94a3b8" />
      <rect x="157" y="250" width="70" height="5" rx="2" fill="#94a3b8" />

      <rect x="270" y="184" width="110" height="118" rx="10" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="282" y="196" width="22" height="22" rx="6" fill={accent} />
      <rect x="282" y="226" width="80" height="8" rx="3" fill="#0f172a" />
      <rect x="282" y="240" width="90" height="5" rx="2" fill="#94a3b8" />
      <rect x="282" y="250" width="70" height="5" rx="2" fill="#94a3b8" />
    </svg>
  );
}

/* Decorative blobs / orbs to add visual depth */
function Orbs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${className ?? ""}`}>
      <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-brand-light/15 blur-3xl" />
    </div>
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
          <div className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute top-40 -left-24 h-96 w-96 rounded-full bg-brand-light/20 blur-3xl" />
          {/* faint diagonal lines */}
          <svg aria-hidden className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04]">
            <defs>
              <pattern id="diag" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-1 41 L41 -1" stroke="#0a0a0a" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
        </div>

        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
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
                <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/15 via-transparent to-brand-light/25 blur-2xl" />
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
                <div className="absolute right-6 -bottom-5 hidden rounded-2xl border border-line bg-white p-3 shadow-card md:block">
                  <div className="flex items-center gap-2">
                    <span className="flex text-brand">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon key={i} name="star" className="h-3.5 w-3.5" />
                      ))}
                    </span>
                    <span className="text-xs font-semibold text-ink">5.0 · 120+ reviews</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Pain points */}
      <section className="relative overflow-hidden bg-zinc-50/70 py-12 sm:py-16">
        <Orbs />
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
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card">
                  {/* number watermark */}
                  <span className="pointer-events-none absolute -right-2 -top-4 text-7xl font-black text-rose-50 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-4 font-bold text-ink">{p.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
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

      {/* 4. NEW: Style variations gallery */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50/70 py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Designed your way"
            title={
              <>
                Three styles. <span className="text-gradient">One conversion-machine.</span>
              </>
            }
            description="We tailor the look to your brand — but every variant is built around the same proven roofing-website blueprint."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {variants.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) * 0.08}>
                <div className="group relative">
                  <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-brand/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card">
                    <StyleVariant primary={v.primary} dark={v.dark} accent={v.accent} label={v.name} />
                    <div className="border-t border-line p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-ink">{v.name}</h3>
                        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-darker">
                          {v.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button href="/contact" icon="arrowRight">
              Pick a style for your business
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* 5. Mockup showcase */}
      <section className="relative overflow-hidden bg-ink py-12 text-white sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-brand-light/30 blur-3xl" />
        </div>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="border-brand-light/30 bg-white/5 text-brand-light">
              The finished product
            </Eyebrow>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Looks great everywhere. <span className="text-gradient">Converts everywhere.</span>
            </h2>
            <p className="mt-4 text-white/70">
              Every site we build is engineered for desktop, tablet, and phone — pixel-perfect and tap-friendly.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-brand/20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl shadow-[0_30px_80px_-20px_rgba(16,185,129,0.5)]">
                <MultiDeviceMockup />
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
              <div className="absolute -right-3 bottom-12 hidden rounded-2xl border border-white/10 bg-ink/80 px-4 py-3 shadow-card backdrop-blur sm:block">
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

      {/* 6. Testimonials */}
      <section className="relative overflow-hidden bg-zinc-50/70 py-12 sm:py-16">
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
                <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft">
                  {/* Decorative quote mark */}
                  <span aria-hidden className="pointer-events-none absolute -top-4 right-4 select-none font-serif text-[8rem] leading-none text-brand-50">
                    &ldquo;
                  </span>
                  <div className="relative flex gap-0.5 text-brand">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Icon key={j} name="star" className="h-5 w-5" />
                    ))}
                  </div>
                  <blockquote className="relative mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-darker text-base font-bold text-white">
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

      {/* 7. Process timeline */}
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
          <div className="relative mt-16">
            {/* Connector line + dashed flow */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand to-transparent lg:block" />
            <div className="absolute left-0 right-0 top-8 hidden h-px lg:block" style={{ background: "repeating-linear-gradient(90deg, #10b981 0 6px, transparent 6px 14px)" }} />

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08} className="relative">
                  {/* Arrow on the right side, between steps (desktop only) */}
                  {i < steps.length - 1 && (
                    <span aria-hidden className="pointer-events-none absolute right-[-26px] top-6 hidden text-brand/60 lg:block">
                      <Icon name="arrowRight" className="h-5 w-5" />
                    </span>
                  )}
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-zinc-50 ring-1 ring-line shadow-card">
                      <Icon name={s.icon} className="h-7 w-7 text-brand-darker" />
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white shadow-[0_6px_20px_-6px_rgba(16,185,129,0.7)]">
                        {s.n}
                      </span>
                    </span>
                    <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Risk reversal / Our promise */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50 py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />
        <div className="pointer-events-none absolute -left-10 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-light/20 blur-3xl" />
        <Container>
          <Reveal>
            <div className="mx-auto max-w-5xl rounded-3xl border border-brand/20 bg-white p-8 shadow-card sm:p-12">
              <div className="text-center">
                {/* "Our Promise" seal */}
                <span aria-hidden className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-darker text-white shadow-card">
                  <Icon name="sparkles" className="h-8 w-8" />
                </span>
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
                    className="flex items-start gap-4 rounded-2xl border border-line bg-zinc-50/60 p-5 transition-colors hover:bg-white"
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

      {/* 9. Stats with bar viz */}
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
            <div className="relative mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="text-center">
                  <div className="text-4xl font-extrabold text-white sm:text-5xl">
                    <span className="text-gradient">{s.value}</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-brand-light"
                      style={{ width: `${s.bar}%` }}
                    />
                  </div>
                  <div className="mt-3 text-sm text-white/60">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 10. FAQ */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Quick answers" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 0.06}>
                <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all hover:border-brand/40 hover:shadow-card">
                  <h3 className="flex items-start gap-2.5 font-bold text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-extrabold text-brand-darker">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </h3>
                  <p className="mt-3 pl-10 text-sm leading-relaxed text-ink-muted">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. Closing CTA */}
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
