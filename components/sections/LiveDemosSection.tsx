import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Mark from "@/components/Mark";
import { Icon } from "@/components/icons";

/*
  Interactive live demos. Each card embeds the real deployed site inside
  a browser-chrome iframe. Visitors can scroll and interact with the
  actual project, not just look at a screenshot.

  Iframes are lazy-loaded (loading="lazy") so they only fetch when
  scrolled near the viewport — no cost to initial page paint.
*/

type LiveDemo = {
  slug: string;
  title: string;
  tag: string;
  url: string;
  summary: string;
};

const demos: LiveDemo[] = [
  {
    slug: "ani-improved",
    title: "Ani Portfolio",
    tag: "Personal portfolio · UI redesign",
    url: "https://ani-improved.vercel.app/",
    summary:
      "A polished personal portfolio rebuild with editorial typography and considered micro-interactions.",
  },
  {
    slug: "fizaismail",
    title: "Fiza Ismail",
    tag: "Creative portfolio",
    url: "https://fizaismail.vercel.app/",
    summary:
      "A creative-professional portfolio with rich imagery, motion, and a strong personal brand voice.",
  },
  {
    slug: "stayright-two",
    title: "StayRight",
    tag: "Product landing · Web app",
    url: "https://stayright-two.vercel.app/",
    summary:
      "Product landing for a modern lifestyle app, focused on conversion and clean information hierarchy.",
  },
  {
    slug: "nat-ui-improved",
    title: "Nat UI",
    tag: "SaaS · UI system",
    url: "https://nat-ui-improved.vercel.app/",
    summary:
      "A SaaS marketing site with a full design system, animated hero, and modular content blocks.",
  },
  {
    slug: "nixocontentgrid",
    title: "Nixo — Content Grid",
    tag: "Agency · Editorial layout",
    url: "https://nixocontentgrid.vercel.app/",
    summary:
      "An agency site built around an editorial bento grid — the design language we drew from for our own rebuild.",
  },
  {
    slug: "luke-ui",
    title: "Luke UI",
    tag: "Personal brand · Portfolio",
    url: "https://luke-ui.vercel.app/",
    summary:
      "A bold personal-brand site with heavy typographic contrast and interactive project showcases.",
  },
];

// Strip protocol for the browser-chrome URL label (matches macOS Safari).
function hostname(url: string) {
  try {
    return new URL(url).host + new URL(url).pathname.replace(/\/$/, "");
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

export default function LiveDemosSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* Off-grid ornament */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
      />

      <Container>
        <SectionHeading
          eyebrow="Interactive previews"
          title={
            <>
              Live projects you can <Mark variant="underline">scroll yourself</Mark>
            </>
          }
          description="Every card below embeds the real deployed site. Scroll, click, poke around. If you'd rather see it full-screen, tap the arrow to open it in a new tab."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {demos.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-shadow hover:shadow-card">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b border-line bg-zinc-50 px-3 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 flex-1 truncate rounded-md bg-white/70 px-2 py-0.5 text-[11px] text-ink-muted">
                    {hostname(d.url)}
                  </span>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${d.title} in new tab`}
                    className="flex h-6 w-6 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-brand-50 hover:text-brand-darker"
                  >
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </a>
                </div>

                {/* Live iframe */}
                <div className="relative h-[420px] overflow-hidden bg-zinc-100 sm:h-[520px]">
                  <iframe
                    src={d.url}
                    title={d.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    className="h-full w-full border-0"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-darker">
                      {d.tag}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-ink">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {d.summary}
                    </p>
                  </div>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                  >
                    Visit
                    <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Small note about iframes */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-muted">
          Interactive previews load on demand. Some sites may render at desktop
          resolution inside the frame — hit the arrow icon to open the full
          version in a new tab.
        </p>
      </Container>
    </section>
  );
}
