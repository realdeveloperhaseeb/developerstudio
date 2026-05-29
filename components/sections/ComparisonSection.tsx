import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const them = [
  "Juggle dozens of unrelated clients",
  "Hand you to junior account managers",
  "Report on clicks, likes & impressions",
  "Lock you into long, rigid contracts",
  "Generic templates for every industry",
  "Slow replies, endless email threads",
];

const us = [
  "Specialise in law firms & roofing companies",
  "Direct access to senior specialists",
  "Report on leads, cases & booked jobs",
  "Flexible, results-first partnerships",
  "Custom strategy built for your market",
  "Fast replies on WhatsApp, every day",
];

export default function ComparisonSection() {
  return (
    <section className="bg-zinc-50/70 py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="The difference"
          title={
            <>
              Why we beat the <span className="text-gradient">typical agency</span>
            </>
          }
          description="Most agencies try to serve everyone. We do one thing: grow law firms and roofing companies — and it shows."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Them */}
          <Reveal direction="right">
            <div className="h-full rounded-3xl border border-line bg-white p-7">
              <h3 className="text-lg font-bold text-ink-muted">A typical agency</h3>
              <ul className="mt-5 space-y-3.5">
                {them.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-ink-muted">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-500">
                      <Icon name="close" className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Us */}
          <Reveal direction="left">
            <div className="relative h-full overflow-hidden rounded-3xl border border-brand/30 bg-ink p-7 text-white shadow-card">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
              <h3 className="relative flex items-center gap-2 text-lg font-bold">
                <Icon name="sparkles" className="h-5 w-5 text-brand-light" />
                Developer Studio
              </h3>
              <ul className="relative mt-5 space-y-3.5">
                {us.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
