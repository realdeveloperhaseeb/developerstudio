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
import LiveDemosSection from "@/components/sections/LiveDemosSection";

/*
  Dubai landing page. The flagship UAE page.

  SEO objective: rank for the "digital marketing agency dubai" cluster
  (see keyword table). Primary keyword sits in H1, meta title, meta
  description, canonical, LocalBusiness schema, and appears naturally
  in H2s and body copy without stuffing.

  Design: uses the same white / black / green system as the rest of
  the site, existing components (SectionHeading, Container, Reveal,
  Button, Icon, Mark), and reuses the real Google Ads + Meta Ads
  screenshots we already have for social proof.
*/

const SLUG = "digital-marketing-agency-dubai";
const CITY = "Dubai";

const TITLE =
  "Digital Marketing Agency Dubai | SEO, Google Ads & Meta Ads | Developer Studio";
const DESCRIPTION =
  "Developer Studio is a results-driven digital marketing agency in Dubai. We manage SEO, Google Ads, Meta Ads and web development for ambitious UAE brands. With 2+ years of proven Dubai-market experience and campaigns delivering up to 13.5× ROAS. Book a free strategy call.";

export const metadata: Metadata = {
  // Absolute overrides the root layout's title template so we get the
  // clean, keyword-first title on this landing page.
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

/* ---------------- Data blocks ---------------- */

const trustBadges: { icon: IconName; value: string; label: string }[] = [
  { icon: "star",   value: "5.0",     label: "Client rating" },
  { icon: "rocket", value: "13.5×",   label: "Highest ROAS" },
  { icon: "bolt",   value: "2+ yrs",  label: "In UAE markets" },
  { icon: "mapPin", value: "Dubai",   label: "UK · US · UAE" },
];

const painsInDubai: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "search",
    title: "You're invisible on Google in Dubai",
    text: "Competitors are on page one for the searches that matter. 'digital marketing agency Dubai', 'lawyer Dubai', 'roofing Dubai'. You aren't, and you can't afford to be scrolled past.",
  },
  {
    icon: "bolt",
    title: "CPCs in the UAE keep rising",
    text: "Dubai is one of the most competitive paid-media markets in the region. Unfocused Google or Meta campaigns burn AED fast and return nothing measurable.",
  },
  {
    icon: "code",
    title: "A slow, dated website",
    text: "Your site loads slowly on mobile in the UAE, looks nothing like the brands you compete with, and quietly loses you every enquiry it should be catching.",
  },
  {
    icon: "mail",
    title: "Agencies that go dark after signup",
    text: "You've been through the Dubai agency carousel: bold promises, monthly retainer, then radio silence. No reports, no calls, no accountability.",
  },
];

const services: {
  icon: IconName;
  title: string;
  bullet: string;
  outcome: string;
}[] = [
  {
    icon: "search",
    title: "SEO for Dubai businesses",
    bullet:
      "Technical SEO, local Dubai keywords, Google Business Profile optimisation and content built to rank in the UAE.",
    outcome: "Top-3 rankings for high-intent Dubai searches",
  },
  {
    icon: "target",
    title: "Google Ads (PPC) in Dubai",
    bullet:
      "Search, Performance Max, and remarketing campaigns tuned for cost-per-lead in the UAE. With full GTM conversion tracking.",
    outcome: "49 conversions from $1.2k test spend (recent client)",
  },
  {
    icon: "share",
    title: "Facebook & Instagram Ads for Dubai",
    bullet:
      "Lead-generation and e-commerce funnels with the Meta Pixel, Conversions API and creative that stops the scroll in Arabic and English feeds.",
    outcome: "13.5× ROAS on a recent UAE e-commerce campaign",
  },
  {
    icon: "code",
    title: "Web development for Dubai",
    bullet:
      "Fast, conversion-focused websites (Next.js / headless) built to load in under one second on UAE mobile networks and rank locally.",
    outcome: "Sites that convert 2–3× better than agency defaults",
  },
  {
    icon: "app",
    title: "Social media management",
    bullet:
      "Content, community and paid amplification on Instagram, TikTok and LinkedIn. Bilingual where it matters, always brand-first.",
    outcome: "Owned social channels that fill the pipeline",
  },
  {
    icon: "rocket",
    title: "Digital marketing consulting",
    bullet:
      "Not ready for a full retainer? Book our senior team by the hour to audit your funnels, campaigns and site.",
    outcome: "Clarity on where every AED should be spent",
  },
];

const whyUs: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "check",
    title: "Real Dubai-market experience",
    text: "Our Co-Founder Abida has managed Meta and Google Ads for UAE, UK and US brands for 2+ years. Including UAE Google Business Profile optimisation and Dubai-audience targeting.",
  },
  {
    icon: "target",
    title: "Cost-per-lead, not clicks",
    text: "We report on the metrics that actually matter to your business: leads, calls, bookings, revenue. Not vanity dashboards designed to hide waste.",
  },
  {
    icon: "bolt",
    title: "No lock-in retainers",
    text: "Month-to-month engagements. If we're not driving measurable growth for your Dubai business, you're free to leave. Most clients stay because it works.",
  },
  {
    icon: "star",
    title: "Direct access to founders",
    text: "You work directly with the people doing the work. No account-manager layer, no delayed replies, no lost context.",
  },
];

const process = [
  {
    step: "01",
    title: "Free Dubai growth audit",
    text: "We audit your website, current campaigns, Google Business Profile and competitors in Dubai. Then send you a plain-English opportunity map. No fee, no pitch trap.",
  },
  {
    step: "02",
    title: "Strategy & KPI agreement",
    text: "We agree the target CPL / ROAS / ranking positions for your Dubai market and lock the 90-day plan before any AED is spent on media.",
  },
  {
    step: "03",
    title: "Build & launch (14 days)",
    text: "Site tuning, tracking setup, campaign build, creative production. Live in the UAE market inside two weeks. Not two months.",
  },
  {
    step: "04",
    title: "Optimise & report",
    text: "Weekly optimisations, monthly reporting call, transparent dashboard. You always know what's working, what isn't and what we're doing about it.",
  },
];

const industriesDubai: { icon: IconName; name: string; text: string }[] = [
  {
    icon: "scale",
    name: "Law firms in Dubai & DIFC",
    text: "Corporate, family, immigration and property law practices ranking locally and winning consultation-quality leads.",
  },
  {
    icon: "home",
    name: "Real estate & property",
    text: "Off-plan, secondary market, holiday-home and short-let brands filling their diaries via Meta and Google.",
  },
  {
    icon: "rocket",
    name: "E-commerce & D2C brands",
    text: "UAE-native online stores scaling profitably with Meta Ads, remarketing and conversion-focused product pages.",
  },
  {
    icon: "target",
    name: "Local services & trades",
    text: "Roofers, cleaners, movers, contractors. Capturing high-intent 'near me' searches across Dubai's neighbourhoods.",
  },
  {
    icon: "star",
    name: "Hospitality & F&B",
    text: "Restaurants, cafés, hotels and event venues driving reservations and reviews across Instagram and Google.",
  },
  {
    icon: "app",
    name: "Startups & SaaS",
    text: "Founders in DIFC, ADGM and DMCC building repeatable acquisition engines before Series A.",
  },
];

const dubaiFaqs: { q: string; a: string }[] = [
  {
    q: "How much does digital marketing cost in Dubai?",
    a: "It depends entirely on channel and goal. A Google Ads engagement in Dubai typically starts around AED 3,500–5,000 per month in management on top of media spend (which we recommend starting at AED 5,000+ for a valid test). SEO retainers start around AED 4,000/month. We only quote after understanding your business. No generic 'packages'. So book a free call and we'll send a Dubai-specific proposal.",
  },
  {
    q: "How long does SEO take to work for a Dubai business?",
    a: "Local SEO in Dubai (Google Business Profile + city + service pages) usually starts producing leads inside 60–90 days. Broader organic rankings on competitive UAE terms take 4–6 months to move meaningfully and 9–12 months to compound. Anyone quoting 'top of Google in 30 days' for a competitive Dubai keyword is either running paid ads to fake the result or doesn't know what they're doing.",
  },
  {
    q: "Do you work with startups and small businesses in Dubai?",
    a: "Yes. Most of our best UAE case studies are with founder-led businesses, not enterprises. If you're pre-revenue we'll usually recommend a lean SEO + Google Business Profile foundation before paid media. So you're not paying to send traffic to a site that can't convert.",
  },
  {
    q: "What makes Developer Studio different from other digital marketing companies in Dubai?",
    a: "Three things. First, you work directly with the founders. No account-manager layer. Second, we report on cost-per-lead and revenue, not clicks or impressions. Third, we're comfortable saying no to work we don't think will succeed. If paid ads aren't right for your Dubai business right now, we'll tell you.",
  },
  {
    q: "Which areas of Dubai do you serve?",
    a: "All of Dubai. Downtown, Business Bay, DIFC, Dubai Marina, JLT, JBR, Deira, Bur Dubai, Al Barsha, Jumeirah, Silicon Oasis, Motor City, JVC, JVT, Al Quoz and every other neighbourhood. We also serve the wider UAE (Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain). The same team, the same standard.",
  },
  {
    q: "Do you offer Arabic content or bilingual campaigns?",
    a: "Yes. We produce and run Arabic-language ad creative and landing pages where it's genuinely going to lift performance. Usually B2C, hospitality, F&B and services targeting Emirati and Arabic-speaking Dubai residents. For B2B and expat-focused work, English is usually enough.",
  },
  {
    q: "Are you a Google Partner / Meta Business Partner agency in Dubai?",
    a: "We work with Google Ads and Meta Ads every day. Our Co-Founder is a certified Google Ads and Meta Ads specialist. Partner-badge status matters far less than case studies; ours are on this page.",
  },
];

/* ---------------- Small helpers ---------------- */

// Ensure the two founders are surfaced (in a fixed order). Haseeb + Abida.
const founders = team.filter((m) => m.founder || m.cofounder);

/* ---------------- Page ---------------- */

export default function DubaiDigitalMarketingPage() {
  const dubaiPage = getUaeLocation(SLUG);

  return (
    <>
      {/* Structured data. LocalBusiness + Service + Breadcrumb + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: `${site.name}. Digital Marketing Agency Dubai`,
              url: `${site.url}/${SLUG}`,
              image: `${site.url}/images/developer-studio-logo.png`,
              telephone: PHONE_E164,
              email: site.email,
              priceRange: "$$",
              areaServed: [
                { "@type": "City",    name: "Dubai" },
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

      {/* ---------------- HERO CTAs + trust badges ---------------- */}
      <section className="border-b border-line bg-white">
        <Container className="py-10 sm:py-14">
          <div className="flex flex-col items-center gap-6">
            {/* CTA row: stack until md — at sm the three pill buttons overflow
                because the primary button is nearly 300px wide alone. */}
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:flex-wrap md:justify-center">
              <Button href="/contact" size="lg" icon="arrowRight">
                Get a free Dubai growth plan
              </Button>
              <a
                href={site.whatsapp.uk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker md:w-auto"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker md:w-auto"
              >
                <Icon name="phone" className="h-5 w-5 text-brand" />
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mt-2 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
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
          </div>
        </Container>
      </section>

      {/* ---------------- WHY BUSINESSES CHOOSE US IN DUBAI (pains) ---------------- */}
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
              playbook. The same ad templates, the same landing pages, the same
              monthly reports full of vanity metrics. That doesn&apos;t work in a
              market this competitive. Here&apos;s what we hear from the founders
              who come to us for a second opinion.
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

      {/* ---------------- SERVICES ---------------- */}
      <section
        id="services"
        className="relative overflow-hidden bg-zinc-50/60 py-14 sm:py-20"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              What we do
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Digital marketing services in{" "}
              <Mark variant="underline">Dubai</Mark>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              A full-stack growth engine. SEO, paid media, web and social .
              built for the UAE market and run by senior specialists, not
              juniors on a training plan.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {s.bullet}
                  </p>
                  <div className="mt-5 rounded-xl border border-brand/20 bg-brand-50/70 px-3 py-2">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-darker">
                      Typical outcome
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-ink">
                      {s.outcome}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker hover:underline"
            >
              See our full services & pricing
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- REAL RESULTS (proof) ---------------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              Real UAE campaigns
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Results from a{" "}
              <Mark variant="underline">real Dubai / UAE portfolio</Mark>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              A snapshot from recent Google Ads and Meta Ads campaigns our
              Co-Founder Abida has managed for brands across the UK, US and UAE
             . Not stock case-study slides.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                img: "/images/projects/google-ads-results-1.jpeg",
                tag: "Google Ads · UAE + international",
                title: "49 conversions from $1.21k spend",
                text: "Multi-region search + Performance Max campaign, GTM-tracked conversions, high-quality lead flow at a fraction of Dubai's average CPC.",
              },
              {
                img: "/images/projects/google-ads-results-2.jpeg",
                tag: "Meta Ads · Lead generation",
                title: "Leads at £5.69 each from £51 spend",
                text: "Meta lead-generation funnel with Conversions API. Proved the channel on a small test budget before scaling.",
              },
              {
                img: "/images/projects/google-ads-results-3.jpeg",
                tag: "Meta Ads · E-commerce",
                title: "121 purchases · 13.5× ROAS",
                text: "E-commerce Meta Ads campaign delivering 121 website purchases at £1.47 cost-per-purchase. 13.5× return over 18 days.",
              },
            ].map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                    <Image
                      src={r.img}
                      alt={`Digital marketing campaign result for a Developer Studio client. ${r.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-darker">
                      {r.tag}
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold text-ink">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                      {r.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker hover:underline"
            >
              See all our work
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="relative overflow-hidden bg-ink py-14 text-white sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
        >
          <div className="absolute -left-16 top-4 h-72 w-72 rounded-full bg-brand/45 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-brand-light/25 blur-3xl" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-light">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand-light" />
              Why us
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
              A digital marketing agency in Dubai that acts like{" "}
              <span className="text-brand-light">your growth partner</span>, not a supplier.
            </h2>
          </div>

          <div className="relative mt-14 grid gap-5 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon name={w.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {w.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- FOUNDERS (Dubai-focused) ---------------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              The team behind your Dubai growth
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              You&apos;ll work directly with the{" "}
              <Mark variant="underline">founders</Mark>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              No junior account manager filtering your calls. No offshore
              rotation of freelancers. Just the senior team building the
              strategy and running the campaigns.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {founders.map((m) => (
              <Reveal key={m.slug}>
                <Link
                  href={`/team/${m.slug}`}
                  className="group flex h-full gap-5 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card"
                >
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={m.image}
                      alt={m.fullName || m.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-darker">
                      {m.founder ? "Founder" : "Co-Founder"}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-ink">
                      {m.fullName || m.name}
                    </h3>
                    <p className="text-sm text-ink-muted">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {m.bio}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker">
                      View profile
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- PROCESS ---------------- */}
      <section className="relative overflow-hidden bg-zinc-50/60 py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              How we work
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              From audit to <Mark variant="underline">measurable growth</Mark> .
              in 4 steps.
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
      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              Who we serve in Dubai
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Industries we grow in{" "}
              <Mark variant="highlight">the UAE</Mark>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              We&apos;re not a one-size-fits-all Dubai digital marketing firm .
              we specialise in the sectors where our playbooks and case
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

      {/* ---------------- LIVE PROJECTS (portfolio carousel) ---------------- */}
      <LiveDemosSection />

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-zinc-50/60 py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-darker">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand" />
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight text-ink sm:text-4xl">
              What Dubai clients{" "}
              <Mark variant="underline">ask us first</Mark>
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
