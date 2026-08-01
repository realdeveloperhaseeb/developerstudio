import { stats } from "@/data/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

/*
  Editorial stat block. The value carries all the weight — huge, white,
  tabular, no gradient trick. Small green kicker sits above (nixo does
  this consistently: a tiny label, then a giant number). Verticals
  between stats read as a magazine spread rather than four evenly-spaced
  divs.
*/
export default function StatsSection() {
  return (
    <section className="py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 sm:px-14 sm:py-16">
          {/* Ambient glow — off-grid, uneven */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -left-16 top-4 h-72 w-72 rounded-full bg-brand/45 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-brand-light/25 blur-3xl" />
          </div>

          {/* Optional editorial section title inside the dark block */}
          <div className="relative flex flex-col items-start gap-1">
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-light">
              <span aria-hidden className="inline-block h-[2px] w-6 rounded-full bg-brand-light" />
              Impact by the numbers
            </span>
          </div>

          {/* Stats — visually divided by hairlines instead of grid gaps.
              First stat gets no left divider; the rest do. */}
          <div className="relative mt-10 grid grid-cols-2 gap-y-10 sm:mt-12 lg:grid-cols-4 lg:gap-y-0">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 0.08}
                className={
                  "text-left lg:pl-8 " +
                  (i === 0 ? "" : "lg:border-l lg:border-white/10")
                }
              >
                <div className="tabular text-5xl font-black leading-none text-white sm:text-6xl lg:text-[64px]">
                  {s.value}
                </div>
                <div className="mt-3 text-sm font-medium text-white/60">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
