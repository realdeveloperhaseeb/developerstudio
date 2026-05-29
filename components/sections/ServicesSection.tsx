import Link from "next/link";
import { services } from "@/data/services";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function ServicesSection({
  heading = true,
}: {
  heading?: boolean;
}) {
  return (
    <section id="services" className="py-12 sm:py-16">
      <Container>
        {heading && (
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything you need to <span className="text-gradient">grow online</span>
              </>
            }
            description="From the first line of code to the last conversion, we build and run your entire digital growth engine."
          />
        )}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-brand-50 text-brand-darker transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon as IconName} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {s.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker">
                  Learn more
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
