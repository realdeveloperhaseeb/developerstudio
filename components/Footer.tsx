import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-line bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex" aria-label={site.name}>
              <Image
                src="/images/developer-studio-logo.png"
                alt={`${site.name} — digital marketing agency`}
                width={367}
                height={178}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {site.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-all hover:bg-brand hover:text-white hover:ring-brand"
                >
                  <Icon name={s.icon as never} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-brand-light"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Locations", href: "/locations" },
                { label: "Landing Pages", href: "/landing-pages" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Get in touch
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-light"
              >
                <Icon name="mail" className="h-5 w-5 text-brand-light" />
                {site.email}
              </a>
              <a
                href={site.whatsapp.uk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-light"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-brand-light" />
                {site.phones.uk.display} <span className="text-white/40">(UK)</span>
              </a>
              <a
                href={site.whatsapp.pk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-light"
              >
                <Icon name="whatsapp" className="h-5 w-5 text-brand-light" />
                {site.phones.pk.display} <span className="text-white/40">(PK)</span>
              </a>
            </div>

            <h3 className="mt-7 text-sm font-semibold uppercase tracking-wider text-white/40">
              Popular locations
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cities.slice(0, 8).map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60 ring-1 ring-white/10 transition-colors hover:bg-brand hover:text-white"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <span className="inline-flex items-center gap-1.5">
              Built with
              <Icon name="heart" className="h-4 w-4 text-brand" />
              by
              <Link href="/about" className="font-semibold text-white/80 transition-colors hover:text-brand-light">
                Developer Haseeb
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
