import Image from "next/image";
import { team } from "@/data/team";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function TeamSection({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        {heading && (
          <SectionHeading
            eyebrow="The team"
            title={
              <>
                The people who <span className="text-gradient">grow your business</span>
              </>
            }
            description="A focused, senior team that treats your business like our own — led by founder Haseeb."
          />
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 0.08}>
              <article className="group relative overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {m.founder && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-darker backdrop-blur">
                      <Icon name="sparkles" className="h-3.5 w-3.5" />
                      Founder
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 pt-12">
                    <h3 className="text-lg font-bold text-white">{m.name}</h3>
                    <p className="text-sm text-white/80">{m.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-ink-muted">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
