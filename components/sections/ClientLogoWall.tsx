import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";

/*
  Client / brand wall. Each "logo" is a piece of styled text rendered
  with a distinctive typographic treatment (serif italic, condensed
  caps, monospace, thin tracked-out, etc.) so the grid looks like a
  real logo wall without needing 12 vector logo files. Ink at 35%
  opacity by default; brand-darker on hover.
*/

const LOGOS: { name: string; style: string }[] = [
  { name: "Petroff Law",           style: "font-serif italic text-2xl" },
  { name: "APEX ROOFING",          style: "font-black tracking-[0.25em] text-lg" },
  { name: "London Motor Sports",   style: "font-semibold text-xl" },
  { name: "FRENCH CHATEAU",        style: "font-light tracking-[0.3em] text-lg" },
  { name: "Village Dog",           style: "font-bold text-2xl" },
  { name: "AUTO REPAIR STUDIO",    style: "font-semibold uppercase tracking-wider text-sm" },
  { name: "Posting Workers FR",    style: "font-medium text-xl" },
  { name: "Nat/UI",                style: "font-mono lowercase tracking-tight text-2xl" },
  { name: "StayRight.",            style: "font-black text-2xl" },
  { name: "ANI°",                  style: "font-thin tracking-[0.35em] text-2xl" },
  { name: "Methew",                style: "font-serif italic text-2xl" },
  { name: "Northern Roofing Co.",  style: "font-bold italic text-lg" },
];

export default function ClientLogoWall() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-white py-14 sm:py-20">
      {/* Soft diagonal ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_65%)]"
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Trusted by"
            title={
              <>
                Ambitious brands that <Mark variant="underline">trust us</Mark> to grow them
              </>
            }
            description="Law firms, roofing companies, product founders and personal brands. From first line of code to first booked client."
          />
        </div>

        <div className="mt-14 grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 md:gap-x-10 md:gap-y-12 lg:grid-cols-4">
          {LOGOS.map((logo, i) => (
            <Reveal key={logo.name} delay={(i % 4) * 0.05}>
              <div className="flex h-14 items-center justify-center">
                <span
                  className={`text-ink/40 transition-colors duration-300 hover:text-brand-darker ${logo.style}`}
                >
                  {logo.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tiny credibility strip below */}
        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-ink-muted">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            120+ projects shipped
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            5.0 ★ average rating
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            98% client retention
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            UK · UAE · global
          </span>
        </div>
      </Container>
    </section>
  );
}
