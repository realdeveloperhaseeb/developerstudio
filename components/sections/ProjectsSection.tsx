import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function ProjectsSection({
  limit,
  heading = true,
}: {
  limit?: number;
  heading?: boolean;
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-12 sm:py-16">
      <Container>
        {heading && (
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Our work"
              title={
                <>
                  Results we&apos;ve <span className="text-gradient">delivered</span>
                </>
              }
              description="Real websites and campaigns for real businesses — built to look great and drive revenue."
            />
            <Link
              href="/projects"
              className="hidden shrink-0 items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker sm:inline-flex"
            >
              View all projects
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {p.industry}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-darker">
                    {p.category}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {p.summary}
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
                    {p.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-base font-bold text-brand-darker">{r.value}</div>
                        <div className="text-[11px] leading-tight text-ink-muted">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {heading && (
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink"
            >
              View all projects
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
