import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { getUaeLocation } from "@/data/uae";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Mark from "@/components/Mark";
import CtaSection from "@/components/sections/CtaSection";
import DubaiServicesTabs from "@/components/dubai/DubaiServicesTabs";
import DubaiCaseCarousel from "@/components/dubai/DubaiCaseCarousel";

/*
  Dubai landing page. The flagship UAE page.

  SEO objective: rank for the "digital marketing agency dubai" cluster.
  Primary keyword sits in H1, meta title, meta description, canonical,
  LocalBusiness schema, and appears naturally in H2s and body copy.

  Design: agency-quality visual layout using existing team photography
  + project screenshots + our own inline SVGs. Tabbed services, case
  study carousel, comparison pricing table, founder split-screen
  feature. Same white/black/green scheme as the rest of the site.
*/

const SLUG = "digital-marketing-agency-dubai";

const TITLE =
  "Digital Marketing Agency Dubai | SEO, Google Ads & Meta Ads | Developer Studio";
const DESCRIPTION =
  "Developer Studio is a results-driven digital marketing agency in Dubai. We manage SEO, Google Ads, Meta Ads and web development for ambitious UAE brands. With 2+ years of proven Dubai-market experience and campaigns delivering up to 13.5× ROAS. Book a free strategy call.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${site.url}/${SLUG}`,
    siteName: site.name,
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Digital marketing agency in Dubai: SEO, Google Ads, Meta Ads & web development. Proven UAE results.",
  },
  robots: { index: true, follow: true },
  keywords: [
    "digital marketing agency dubai",
    "digital marketing companies in dubai",
    "digital marketing company dubai",
    "dubai digital marketing agency",
    "digital marketing dubai",
    "digital marketing firms in dubai",
    "best digital marketing services in dubai",
    "digital marketing company in dubai",
    "digital marketing agency in dubai uae",
    "digital marketing services in dubai",
    "top 10 digital marketing companies in dubai",
    "digital marketing services dubai",
    "digital marketing consultant in dubai",
    "digital marketing firms dubai",
    "digital marketing dubai companies",
    "dubai digital marketing companies",
  ],
};

const PHONE_E164 = site.phones.uk.e164;
const PHONE_DISPLAY = site.phones.uk.display;

/* ---------------- Data ---------------- */

const trustBadges: { icon: IconName; value: string; label: string }[] = [
  { icon: "star",   value: "5.0",     label: "Client rating" },
  { icon: "rocket", value: "13.5×",   label: "Highest ROAS" },
  { icon: "bolt",   value: "2+ yrs",  label: "UAE experience" },
  { icon: "mapPin", value: "Dubai",   label: "UK · US · UAE" },
];

const painsInDubai: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "search",
    title: "You're invisible on Google in Dubai",
    text: "Competitors are on page one for the searches that matter. You aren't, and you can't afford to be scrolled past.",
  },
  {
    icon: "bolt",
    title: "CPCs in the UAE keep rising",
    text: "Dubai is one of the most competitive paid-media markets in the region. Unfocused campaigns burn AED fast.",
  },
  {
    icon: "code",
    title: "A slow, dated website",
    text: "Your site loads slowly on mobile in the UAE, looks nothing like your competitors, and loses you every enquiry.",
  },
  {
    icon: "mail",
    title: "Agencies that go dark after signup",
    text: "You've been through the Dubai agency carousel: bold promises, monthly retainer, then radio silence.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    tag: "Local presence",
    priceMonthly: "AED 3,500",
    priceHint: "/month · 3-month min",
    description:
      "For Dubai founders who need to start showing up locally. Foundation + a paid channel test.",
    ctaLabel: "Start local",
    highlight: false,
  },
  {
    name: "Growth",
    tag: "Most popular",
    priceMonthly: "AED 8,500",
    priceHint: "/month · 3-month min",
    description:
      "Full paid engine + SEO for growing UAE brands who need consistent, measurable lead flow.",
    ctaLabel: "Choose growth",
    highlight: true,
  },
  {
    name: "Scale",
    tag: "Full engine",
    priceMonthly: "AED 18,000",
    priceHint: "/month · 6-month min",
    description:
      "Every channel, senior-led, with weekly optimisation and dedicated founder access.",
    ctaLabel: "Talk to us",
    highlight: false,
  },
];

const pricingFeatures: {
  label: string;
  values: [string | boolean, string | boolean, string | boolean];
}[] = [
  { label: "Google Business Profile setup + monthly optimisation", values: [true, true, true] },
  { label: "Local Dubai SEO (on-page + technical)",                values: [true, true, true] },
  { label: "Monthly SEO content (blog + landing pages)",            values: ["2 posts", "6 posts", "12 posts"] },
  { label: "Google Ads management",                                 values: [false, true, true] },
  { label: "Meta Ads (Facebook + Instagram)",                       values: [false, true, true] },
  { label: "Landing page design + A/B testing",                     values: [false, "1 / quarter", "Unlimited"] },
  { label: "Meta Pixel + Conversions API + GTM setup",              values: ["Basic", true, true] },
  { label: "Bilingual (Arabic + English) creative",                 values: [false, true, true] },
  { label: "Weekly optimisation calls",                             values: [false, true, true] },
  { label: "Monthly performance report",                            values: [true, true, true] },
  { label: "Direct access to founders",                             values: [false, true, true] },
  { label: "Dedicated Slack + WhatsApp channel",                    values: [false, false, true] },
];

const process = [
  {
    step: "01",
    title: "Free Dubai growth audit",
    text: "We audit your website, current campaigns, Google Business Profile and top 5 Dubai competitors. Then send you a plain-English opportunity map. No fee, no pitch trap.",
  },
  {
    step: "02",
    title: "Strategy & KPI agreement",
    text: "We agree the target CPL, ROAS or ranking positions for your Dubai market and lock the 90-day plan before any AED is spent on media.",
  },
  {
    step: "03",
    title: "Build & launch in 14 days",
    text: "Site tuning, tracking setup, campaign build, creative production. Live in the UAE market inside two weeks, not two months.",
  },
  {
    step: "04",
    title: "Optimise & report",
    text: "Weekly optimisations, monthly reporting call, transparent dashboard. You always know what's working, what isn't, and what we're doing about it.",
  },
];

const industriesDubai: { icon: IconName; name: string; text: string }[] = [
  { icon: "scale",  name: "Law firms & DIFC advisors",    text: "Corporate, family, immigration and property law practices ranking locally and winning consultation-quality leads." },
  { icon: "home",   name: "Real estate & property",        text: "Off-plan, secondary market, holiday-home and short-let brands filling their diaries via Meta and Google." },
  { icon: "rocket", name: "E-commerce & D2C brands",       text: "UAE-native online stores scaling profitably with Meta Ads, remarketing and conversion-focused product pages." },
  { icon: "target", name: "Local services & trades",       text: "Roofers, cleaners, movers, contractors capturing high-intent 'near me' searches across Dubai's neighbourhoods." },
  { icon: "star",   name: "Hospitality & F&B",             text: "Restaurants, cafés, hotels and event venues driving reservations and reviews across Instagram and Google." },
  { icon: "app",    name: "Startups & SaaS",               text: "Founders in DIFC, ADGM and DMCC building repeatable acquisition engines before their Series A." },
];

const dubaiFaqs: { q: string; a: string }[] = [
  {
    q: "How much does digital marketing cost in Dubai?",
    a: "It depends on channel and goal. A Google Ads engagement in Dubai typically starts around AED 3,500 to 5,000 per month in management on top of media spend (we recommend starting at AED 5,000+ for a valid test). SEO retainers start around AED 4,000/month. Our packages start at AED 3,500 and scale to AED 18,000 for full service. See the pricing table above for details.",
  },
  {
    q: "How long does SEO take to work for a Dubai business?",
    a: "Local SEO in Dubai (Google Business Profile + city + service pages) usually starts producing leads inside 60 to 90 days. Broader organic rankings on competitive UAE terms take 4 to 6 months to move meaningfully and 9 to 12 months to compound. Anyone quoting 'top of Google in 30 days' for a competitive Dubai keyword is either running paid ads to fake the result or doesn't know what they're doing.",
  },
  {
    q: "Do you work with startups and small businesses in Dubai?",
    a: "Yes. Most of our best UAE case studies are with founder-led businesses, not enterprises. If you're pre-revenue we'll usually recommend a lean SEO + Google Business Profile foundation before paid media, so you're not paying to send traffic to a site that can't convert.",
  },
  {
    q: "What makes Developer Studio different from other digital marketing companies in Dubai?",
    a: "Three things. First, you work directly with the founders. No account-manager layer. Second, we report on cost-per-lead and revenue, not clicks or impressions. Third, we're comfortable saying no to work we don't think will succeed. If paid ads aren't right for your Dubai business right now, we'll tell you.",
  },
  {
    q: "Which areas of Dubai do you serve?",
    a: "All of Dubai. Downtown, Business Bay, DIFC, Dubai Marina, JLT, JBR, Deira, Bur Dubai, Al Barsha, Jumeirah, Silicon Oasis, Motor City, JVC, JVT, Al Quoz and every other neighbourhood. We also serve the wider UAE (Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain). Same team, same standard.",
  },
  {
    q: "Do you offer Arabic content or bilingual campaigns?",
    a: "Yes. We produce and run Arabic-language ad creative and landing pages where it's going to lift performance, usually B2C, hospitality, F&B and services targeting Emirati and Arabic-speaking Dubai residents. For B2B and expat-focused work, English is usually enough.",
  },
  {
    q: "Are you a Google Partner or Meta Business Partner agency in Dubai?",
    a: "We work with Google Ads and Meta Ads every day, and our Co-Founder is a certified Google Ads and Meta Ads specialist. Partner-badge status matters far less than case studies; ours are shown in the carousel above.",
  },
];

/* ---------------- Helpers ---------------- */

// Founders in a fixed order (co-founder first for Dubai — UAE market emphasis).
const founders = team
  .filter((m) => m.founder || m.cofounder)
  .sort((a, b) => (b.cofounder ? 1 : 0) - (a.cofounder ? 1 : 0));

// Small helper: render a pricing-table cell (boolean or string).
function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true) {
    return (
      <span
        className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full ${
          highlight ? "bg-brand text-white" : "bg-brand-50 text-brand-darker"
        }`}
      >
        <Icon name="check" className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return <span className="text-ink/25">—</span>;
  }
  return (
    <span
      className={`text-sm font-semibold ${highlight ? "text-brand-darker" : "text-ink-soft"}`}
    >
      {value}
    </span>
  );
}

/* ---------------- Page ---------------- */

export default function DubaiDigitalMarketingPage() {
  const dubaiPage = getUaeLocation(SLUG);

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: `${site.name} — Digital Marketing Agency Dubai`,
              url: `${site.url}/${SLUG}`,
              image: `${site.url}/images/developer-studio-logo.png`,
              telephone: PHONE_E164,
              email: site.email,
              priceRange: "$$",
              areaServed: [
                { "@type": "City", name: "Dubai" },
                { "@type": "Country", name: "United Arab Emirates" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              serviceType: [
                "Digital Marketing",
                "Search Engine Optimization",
                "Google Ads Management",
                "Meta Ads Management",
                "Web Development",
                "Social Media Marketing",
              ],
              sameAs: site.social.map((s) => s.href),
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "42",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Digital Marketing Agency Dubai",
                  item: `${site.url}/${SLUG}`,
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: dubaiFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />

      <PageHeader
        eyebrow="🇦🇪 UAE · Dubai"
        title={
          <>
            <Mark variant="underline">Digital marketing agency</Mark> in Dubai
          </>
        }
        description={
          <>
            SEO, Google Ads, Meta Ads and web development for ambitious UAE
            brands. Managed end-to-end by a senior team with proven Dubai-market
            experience and campaigns delivering up to{" "}
            <strong className="text-brand-darker">13.5× ROAS</strong>.
          </>
        }
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "UAE", href: `/${SLUG}` },
          { label: "Dubai" },
        ]}
      />

      {/* ---------------- HERO: image split with CTAs + trust badges ---------------- */}
      <section className="relative overflow-hidden border-b border-line bg-white py-10 sm:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-brand/8 blur-3xl"
        />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {/* Copy */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darker">
                Serving Dubai · Abu Dhabi · Sharjah · Ras Al Khaimah
              </p>
              <h2 className="mt-3 text-3xl font-black leading-[1.1] text-ink sm:text-4xl lg:text-[42px]">
                The <Mark variant="highlight">growth partner</Mark> Dubai
                founders actually keep on retainer.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
                No account-manager layer. No vanity dashboards. Just senior
                strategists shipping campaigns, tracking cost-per-lead in AED,
                and reporting on the numbers that actually move your Dubai
                business.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/contact" size="lg" icon="arrowRight">
                  Get a free Dubai growth plan
                </Button>
                <a
                  href={site.whatsapp.uk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                >
                  <Icon name="phone" className="h-5 w-5 text-brand" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/15 to-brand-light/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-line shadow-card">
                <Image
                  src="/images/developer-studio-team-at-work.webp"
                  alt="Developer Studio team working on a Dubai client's digital marketing strategy"
                  width={1200}
                  height={800}
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-5 -left-4 hidden rounded-2xl border border-line bg-white p-4 shadow-card sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="rocket" className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="tabular text-sm font-bold text-ink">13.5× ROAS</div>
                    <div className="text-xs text-ink-muted">recent UAE campaign</div>
                  </div>
                </div>
              </div>

              {/* Floating "UAE" sticker */}
              <div
                aria-hidden
                className="rotate-slight absolute -bottom-4 right-6 hidden h-20 w-20 items-center justify-center rounded-full bg-ink text-white shadow-card sm:flex"
              >
                <div className="text-center leading-tight">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-brand-light">
                    Serving
                  </div>
                  <div className="tabular mt-0.5 text-lg font-black">UAE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-soft"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-darker">
                  <Icon name={b.icon} className="h-5 w-5" />
                </span>
                <div>
                  <div className="tabular text-lg font-black leading-none text-ink">
                    {b.value}
                  </div>
                  <div className="text-[11px] text-ink-muted">{b.label}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- WHY BRANDS COME TO US (pains) ---------------- */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-brand-50 blur-3xl"
        />
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              Why Dubai brands come to us
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              You&apos;re not another Dubai brand.{" "}
              <Mark variant="highlight">You shouldn&apos;t sound like one either.</Mark>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Most digital marketing companies in Dubai run the same generic
              playbook. That doesn&apos;t work in a market this competitive.
              Here&apos;s what we hear from the founders who come to us for a
              second opinion.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {painsInDubai.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-darker">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- SERVICES TABS ---------------- */}
      <DubaiServicesTabs />

      {/* ---------------- CASE STUDIES CAROUSEL ---------------- */}
      <DubaiCaseCarousel />

      {/* ---------------- PRICING TABLE ---------------- */}
      <section className="relative overflow-hidden bg-zinc-50/60 py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              Pricing
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Transparent Dubai <Mark variant="underline">pricing</Mark>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Fixed monthly fees in AED. No lock-in retainers. Media spend is
              billed separately (you always own your ad accounts).
            </p>
          </div>

          {/* Plan headers */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Reveal key={plan.name}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all ${
                    plan.highlight
                      ? "border-brand bg-ink text-white shadow-card ring-4 ring-brand/25"
                      : "border-line bg-white text-ink shadow-soft hover:-translate-y-0.5 hover:shadow-card"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-card">
                      {plan.tag}
                    </span>
                  )}
                  <div
                    className={`text-[11px] font-semibold uppercase tracking-widest ${
                      plan.highlight ? "text-brand-light" : "text-brand-darker"
                    }`}
                  >
                    {plan.name}
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="tabular text-3xl font-black leading-none sm:text-4xl">
                      {plan.priceMonthly}
                    </span>
                    <span
                      className={`text-xs ${plan.highlight ? "text-white/60" : "text-ink-muted"}`}
                    >
                      {plan.priceHint}
                    </span>
                  </div>
                  <p
                    className={`mt-4 flex-1 text-sm leading-relaxed ${
                      plan.highlight ? "text-white/75" : "text-ink-muted"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-all active:scale-95 ${
                      plan.highlight
                        ? "bg-brand text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] hover:bg-brand-dark"
                        : "bg-ink text-white hover:bg-ink/90"
                    }`}
                  >
                    {plan.ctaLabel}
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Feature comparison table */}
          <div className="mt-10 overflow-x-auto rounded-3xl border border-line bg-white shadow-soft">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-line bg-zinc-50/70 text-[11px] font-semibold uppercase tracking-widest text-ink-muted">
                  <th className="px-6 py-4">What&apos;s included</th>
                  {pricingPlans.map((p) => (
                    <th
                      key={p.name}
                      className={`px-4 py-4 text-center ${
                        p.highlight ? "text-brand-darker" : "text-ink-muted"
                      }`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingFeatures.map((f, rowIdx) => (
                  <tr
                    key={f.label}
                    className={`border-b border-line last:border-b-0 ${
                      rowIdx % 2 === 1 ? "bg-zinc-50/40" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-ink-soft">{f.label}</td>
                    {f.values.map((v, colIdx) => (
                      <td key={colIdx} className="px-4 py-4 text-center">
                        <Cell value={v} highlight={pricingPlans[colIdx].highlight} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-center text-xs text-ink-muted">
            Prices exclude media spend and 5% UAE VAT. Custom scopes available
            for enterprise Dubai clients.
          </p>
        </Container>
      </section>

      {/* ---------------- FOUNDER FEATURE: Abida (UAE expert) ---------------- */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-light/20 blur-3xl" />
        </div>
        <Container>
          {founders.length > 0 &&
            (() => {
              const abida = founders[0];
              return (
                <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                  <Reveal direction="right">
                    <div className="relative mx-auto max-w-sm">
                      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/25 via-transparent to-brand-light/25 blur-2xl" />
                      <div className="overflow-hidden rounded-3xl border border-white/15 shadow-card">
                        <Image
                          src={abida.image}
                          alt={`${abida.fullName || abida.name}, Co-Founder of Developer Studio`}
                          width={480}
                          height={560}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl border border-white/15 bg-ink px-5 py-3 text-center shadow-card">
                        <div className="text-sm font-bold text-white">
                          {abida.fullName || abida.name}
                        </div>
                        <div className="text-xs text-brand-light">{abida.role}</div>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal direction="left">
                    <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-light">
                      <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand-light" />
                      The Dubai expert on your account
                    </span>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                      Meet <span className="text-brand-light">Abida Siddiqui</span>, your Co-Founder for the UAE market.
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                      Abida has managed Meta Ads, Google Ads and Google Business
                      Profile optimisation for brands across the UAE, UK and US
                      for 2+ years. Every Dubai campaign we run gets her direct
                      strategy and weekly optimisation. Not a junior handoff.
                    </p>

                    <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                      {(abida.expertise || []).slice(0, 8).map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5 text-sm text-white/85">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                            <Icon name="check" className="h-3.5 w-3.5" />
                          </span>
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/team/${abida.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-all hover:bg-brand-dark active:scale-95"
                      >
                        View Abida&apos;s full profile
                        <Icon name="arrowRight" className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-light hover:text-brand-light"
                      >
                        Book a strategy call
                      </Link>
                    </div>
                  </Reveal>
                </div>
              );
            })()}
        </Container>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              How we work
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              From audit to <Mark variant="underline">measurable growth</Mark> in 4 steps.
            </h2>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 0.08}
                className={i % 2 === 1 ? "lg:mt-10" : ""}
              >
                <div className="relative">
                  <div
                    aria-hidden
                    className="tabular pointer-events-none select-none text-[7rem] font-black leading-[0.85] text-ink/[0.06] sm:text-[9rem]"
                  >
                    {p.step}
                  </div>
                  <div className="-mt-16 sm:-mt-20">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darker">
                      Step {p.step}
                    </span>
                    <h3 className="mt-3 text-xl font-bold leading-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- INDUSTRIES ---------------- */}
      <section className="bg-zinc-50/60 py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              Who we serve in Dubai
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Industries we grow in <Mark variant="highlight">the UAE</Mark>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              We&apos;re not a one-size-fits-all Dubai digital marketing firm.
              We specialise in the sectors where our playbooks and case
              studies are strongest.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industriesDubai.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 3) * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-darker">
                    <Icon name={ind.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{ind.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {ind.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              What Dubai clients <Mark variant="underline">ask us first</Mark>
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-3">
              {dubaiFaqs.map((f, i) => (
                <Reveal key={f.q} delay={(i % 3) * 0.05}>
                  <details className="group rounded-2xl border border-line bg-white p-5 transition-all open:shadow-card">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                      <h3 className="flex-1 text-base font-bold text-ink">{f.q}</h3>
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-darker transition-transform group-open:rotate-45">
                        <Icon name="arrowRight" className="h-4 w-4 -rotate-45" />
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <CtaSection
        title={
          dubaiPage
            ? `Ready to grow your ${dubaiPage.city} business?`
            : "Ready to grow your Dubai business?"
        }
        subtitle="Book a free 30-minute strategy call. We'll audit your funnel, spot the quick wins, and send you a Dubai-specific growth plan. No fee, no obligation."
      />
    </>
  );
}
