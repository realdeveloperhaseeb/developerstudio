import { testimonials } from "@/data/content";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="bg-zinc-50/70 py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Client results"
          title={
            <>
              Businesses we&apos;ve <span className="text-gradient">grown</span>
            </>
          }
          description="We measure success in leads, cases, and booked jobs — not vanity metrics."
        />

        {/* Rating summary */}
        <Reveal className="mt-7 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5 shadow-soft">
            <span className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5" />
              ))}
            </span>
            <span className="text-sm font-semibold text-ink">
              5.0 average from happy clients
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Icon key={j} name="star" className="h-5 w-5" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-darker">
                    <Icon name="check" className="h-3 w-3" />
                    Verified client
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-darker">
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
      </Container>
    </section>
  );
}
