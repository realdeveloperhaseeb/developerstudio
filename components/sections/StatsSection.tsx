import { stats } from "@/data/content";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function StatsSection() {
  return (
    <section className="py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 sm:px-12">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-brand/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-brand-light/30 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
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
  );
}
