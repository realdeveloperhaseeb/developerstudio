import { process } from "@/data/content";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function ProcessSection() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A simple path from <span className="text-gradient">zero to growth</span>
            </>
          }
          description="No jargon, no surprises. A proven four-step system that turns your business into a lead-generating machine."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1} className="relative">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-brand-darker shadow-soft">
                    <Icon name={p.icon as IconName} className="h-7 w-7" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                      {p.step}
                    </span>
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
