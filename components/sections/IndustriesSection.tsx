import Link from "next/link";
import Image from "next/image";
import { industries } from "@/data/content";
import { Icon, type IconName } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-60" />
      <Container>
        <SectionHeading
          eyebrow="Built for your industry"
          title={
            <>
              We specialise in{" "}
              <Mark variant="highlight">law firms &amp; roofers</Mark>
            </>
          }
          description="Generic agencies guess. We know exactly how your customers search, what makes them call, and how to win in your market."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.1} direction={i === 0 ? "right" : "left"}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:border-brand/40 hover:shadow-card">
                {/*
                  Small "OUR SPECIALTY" sticker — rotated slightly, alternating
                  sides between the two cards so they don't feel duplicated.
                */}
                <div
                  aria-hidden
                  className={`absolute top-4 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-card ${
                    i === 0
                      ? "right-4 rotate-slight-r"
                      : "right-4 rotate-slight"
                  }`}
                >
                  <div className="text-center leading-none">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-brand-light">
                      Our
                    </div>
                    <div className="mt-0.5 text-[10px] font-black tracking-wide">
                      NICHE
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <Image
                    src={ind.image}
                    alt={`Digital marketing for ${ind.name.toLowerCase()}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-darker shadow-soft backdrop-blur">
                    <Icon name={ind.icon as IconName} className="h-4 w-4" />
                    {ind.name}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="text-2xl font-bold text-ink">{ind.name}</h3>
                  <p className="mt-1 text-base font-semibold text-brand-darker">{ind.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{ind.description}</p>
                  <ul className="mt-6 space-y-3">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-darker hover:underline"
                  >
                    Grow my {ind.name.toLowerCase()}
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
