import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";
import { Icon } from "@/components/icons";

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white pt-12 pb-16 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      </div>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          {breadcrumb && (
            <nav className="mb-6 flex items-center justify-center gap-1.5 text-sm text-ink-muted">
              {breadcrumb.map((b, i) => (
                <span key={b.label} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-line">/</span>}
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-brand-darker">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-ink">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && (
            <div className="mb-5 flex justify-center">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 className="text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
