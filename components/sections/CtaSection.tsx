import Link from "next/link";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function CtaSection({
  title = "Ready to grow your business from zero?",
  subtitle = "Book a free, no-pressure growth call. We'll audit your market and show you exactly how we'd win more clients for you.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-gradient-to-br from-brand-50 via-white to-brand-50 px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-50" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-light/20 blur-3xl" />

            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-muted sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(16,185,129,0.7)] transition-all hover:bg-brand-dark active:scale-95"
              >
                Get a Free Quote
                <Icon name="arrowRight" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={site.whatsapp.uk}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 text-base font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                Message us now
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
