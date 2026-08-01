import Image from "next/image";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Mark from "@/components/Mark";

const points = [
  "A senior, in-house team — not outsourced freelancers",
  "Direct access to the people doing the work",
  "Transparent reporting on leads, rankings & ROI",
  "Proven playbooks for UK law firms & roofers",
];

const photos = [
  {
    src: "/images/uk-law-firm-client-meeting.webp",
    alt: "Developer Studio meeting a UK law firm client in a boardroom",
    caption: "Real client meetings, real results",
    badge: true,
  },
  {
    src: "/images/developer-studio-team-at-work.webp",
    alt: "The Developer Studio team collaborating in the office",
    caption: "Our team, hard at work for you",
    badge: false,
  },
];

export default function AuthoritySection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      {/* Off-grid ornament — asymmetric, breathes on the right side */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-24 h-96 w-96 rounded-full bg-brand-50 blur-3xl opacity-70"
      />
      <Container>
        {/* Personal, conversational note above the section heading —
            humanises the brand instead of another agency headline. */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white px-4 py-1.5 shadow-soft">
            <Image
              src="/images/team/haseeb.png"
              alt="Haseeb Ahmad, founder of Developer Studio"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">Hey — it&apos;s Haseeb.</span>{" "}
              <span className="text-ink-muted">Here&apos;s who we really are.</span>
            </span>
          </div>
        </Reveal>

        <div className="mt-5">
          <SectionHeading
            eyebrow="Why Developer Studio"
            title={
              <>
                A real team behind your <Mark variant="underline">growth</Mark>
              </>
            }
            description="We're not a faceless agency. You get a dedicated, senior team that meets with you, plans with you, and treats your business like our own."
          />
        </div>

        {/* Both real photos — large */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.1} direction={i === 0 ? "right" : "left"}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-card">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {p.badge && (
                  <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-2.5 shadow-card backdrop-blur">
                    <div className="text-xl font-extrabold leading-none text-brand-darker">120+</div>
                    <div className="text-[11px] font-medium text-ink-muted">Projects completed</div>
                  </div>
                )}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent p-5 pt-14 text-sm font-semibold text-white">
                  <Icon name="check" className="h-4 w-4 text-brand-light" />
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Trust points */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5 text-sm text-ink-soft">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {p}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/about" icon="arrowRight">
            Meet the team
          </Button>
        </div>
      </Container>
    </section>
  );
}
