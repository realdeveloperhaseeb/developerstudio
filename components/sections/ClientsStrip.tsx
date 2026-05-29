import { projects } from "@/data/projects";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function ClientsStrip() {
  return (
    <section className="py-12">
      <Container>
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
            Trusted by ambitious businesses across the UK
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            {projects.map((p) => (
              <span
                key={p.slug}
                className="text-lg font-bold uppercase tracking-tight text-ink/40 transition-colors hover:text-ink/70 sm:text-xl"
              >
                {p.title}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
