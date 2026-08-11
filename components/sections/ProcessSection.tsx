import { process } from "@/data/content";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";

/*
  Editorial process cards: the huge tabular numeral IS the visual, the
  copy sits under it. Aggressive size contrast. The same nixo/editorial
  move. Lands the "01 → 02 → 03 → 04" rhythm without needing a graph
  or a badge. Alternating card offset (odd rows nudged down slightly)
  breaks the perfect four-column grid so it doesn't read as templated.
*/
export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* Off-grid ornament (soft green blob offset from the grid rhythm) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-8 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
      />
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A simple path from <Mark variant="underline">zero to growth</Mark>
            </>
          }
          description="No jargon, no surprises. A proven four-step system that turns your business into a lead-generating machine."
        />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => {
            const stepPadded = String(i + 1).padStart(2, "0");
            return (
              <Reveal
                key={p.step}
                delay={i * 0.08}
                className={i % 2 === 1 ? "lg:mt-10" : ""}
              >
                <div className="relative">
                  {/* Massive editorial numeral. Sits behind the icon. */}
                  <div
                    aria-hidden
                    className="tabular pointer-events-none select-none text-[7rem] font-black leading-[0.85] text-ink/[0.06] sm:text-[9rem]"
                  >
                    {stepPadded}
                  </div>

                  {/* Icon + step chip overlay */}
                  <div className="-mt-16 flex items-center gap-3 sm:-mt-20">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white text-brand-darker shadow-card">
                      <Icon name={p.icon as IconName} className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-darker">
                      Step {stepPadded}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.description}
                  </p>

                  {/* Small trailing arrow to the next step (visible on desktop) */}
                  {i < process.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute -right-6 top-2 hidden text-ink/15 lg:block"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
