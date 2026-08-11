import { testimonials } from "@/data/content";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";

/*
  Editorial testimonial spread:
    · First testimonial is a full-width pull-quote (huge quote mark, big
      body copy). The "hero" quote of the section.
    · Remaining testimonials become smaller support cards below.
  Aggressive size contrast between the two treatments is the point .
  breaks the "three identical cards in a row" template.
*/
export default function TestimonialsSection() {
  const [hero, ..rest] = testimonials;

  return (
    <section className="relative overflow-hidden bg-zinc-50/70 py-14 sm:py-20">
      {/* Off-grid ornament */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl"
      />

      <Container>
        <SectionHeading
          eyebrow="Client results"
          title={
            <>
              Businesses we&apos;ve <Mark variant="underline">grown</Mark>
            </>
          }
          description="We measure success in leads, cases, and booked jobs. Not vanity metrics."
        />

        {/* Rating summary */}
        <Reveal className="mt-7 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5 shadow-soft">
            <span className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5" />
              ))}
            </span>
            <span className="tabular text-sm font-semibold text-ink">
              5.0 average from happy clients
            </span>
          </div>
        </Reveal>

        {/* HERO PULL-QUOTE. The biggest, most human moment of the section */}
        {hero && (
          <Reveal className="mt-14">
            <figure className="relative mx-auto max-w-4xl rounded-3xl border border-line bg-white p-8 shadow-card sm:p-12 lg:p-14">
              {/* Massive editorial quote mark */}
              <span
                aria-hidden
                className="absolute -top-6 left-6 font-black text-brand/25 sm:left-10"
                style={{ fontSize: "8rem", lineHeight: 1 }}
              >
                &ldquo;
              </span>

              <div className="relative">
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: hero.rating }).map((_, j) => (
                    <Icon key={j} name="star" className="h-6 w-6" />
                  ))}
                </div>
                <blockquote className="mt-6 text-xl font-medium leading-snug text-ink-soft sm:text-2xl md:text-[28px] md:leading-[1.35]">
                  {hero.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-black text-white shadow-card">
                    {hero.name.charAt(0)}
                  </span>
                  <span className="flex-1">
                    <span className="block text-base font-bold text-ink">{hero.name}</span>
                    <span className="block text-sm text-ink-muted">
                      {hero.role} <span className="text-ink/25">·</span> {hero.location}
                    </span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-darker">
                    <Icon name="check" className="h-3.5 w-3.5" />
                    Verified client
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        )}

        {/* Support cards. Small, tight, uniform */}
        {rest.length > 0 && (
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {rest.map((t, i) => (
              <Reveal key={t.name + i} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-brand">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Icon key={j} name="star" className="h-4 w-4" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
                      Verified
                    </span>
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-darker">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink">{t.name}</span>
                      <span className="block text-xs text-ink-muted">
                        {t.role} · {t.location}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
