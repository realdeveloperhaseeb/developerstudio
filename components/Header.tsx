"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import { uaeLocations } from "@/data/uae";
import { Icon } from "@/components/icons";

/*
  Nav items can either be a plain link or a dropdown identified by `key`.
  The header tracks which dropdown key is currently open (only one at a
  time), so adding more dropdowns later (e.g. USA, KSA) is one more
  entry with a matching data source below.
*/
type NavItem =
  | { label: string; href: string; kind?: undefined }
  | { label: string; href: string; kind: "dropdown"; key: "uae" | "locations" };

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "UAE", href: "/digital-marketing-agency-dubai", kind: "dropdown", key: "uae" },
  { label: "Locations", href: "/locations", kind: "dropdown", key: "locations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | "uae" | "locations">(null);
  const [mobileDropdown, setMobileDropdown] = useState<null | "uae" | "locations">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-ink transition-all duration-300",
        scrolled
          ? "border-b border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.7)]"
          : "border-b border-white/5"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={site.name}>
          <Image
            src="/images/developer-studio-logo.png"
            alt={`${site.name} — digital marketing agency`}
            width={367}
            height={178}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            if (item.kind !== "dropdown") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-light"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            }
            const isOpen = openDropdown === item.key;
            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() =>
                  setOpenDropdown((k) => (k === item.key ? null : k))
                }
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-light"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                  <Icon
                    name="chevronDown"
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </Link>
                <AnimatePresence>
                  {isOpen &&
                    (item.key === "locations" ? (
                      <DesktopLocationsMenu />
                    ) : (
                      <DesktopUaeMenu />
                    ))}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.whatsapp.uk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-brand-light"
          >
            <Icon name="whatsapp" className="h-5 w-5 text-brand-light" />
            {site.phones.uk.display}
          </a>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] transition-all hover:bg-brand-dark active:scale-95"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-ink lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {nav.map((item) => {
                if (item.kind !== "dropdown") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-base font-medium",
                        isActive(item.href)
                          ? "bg-white/10 text-brand-light"
                          : "text-white/80 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }
                const open = mobileDropdown === item.key;
                return (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown((k) => (k === item.key ? null : item.key))
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white"
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className={cn(
                          "h-5 w-5 transition-transform",
                          open && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          {item.key === "locations" ? (
                            <div className="grid grid-cols-2 gap-1 pb-2 pl-3">
                              <Link
                                href="/locations"
                                className="col-span-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-light"
                              >
                                All UK locations →
                              </Link>
                              {cities.slice(0, 10).map((c) => (
                                <Link
                                  key={c.slug}
                                  href={`/locations/${c.slug}`}
                                  className="rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                                >
                                  {c.name}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="grid gap-1 pb-2 pl-3">
                              {uaeLocations.map((l) => (
                                <Link
                                  key={l.slug}
                                  href={`/${l.slug}`}
                                  className="flex flex-col rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                                >
                                  <span className="font-semibold">{l.headline}</span>
                                  {l.eyebrow && (
                                    <span className="text-[11px] text-white/50">
                                      {l.eyebrow}
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <div className="flex flex-col gap-3 pt-3">
                <a
                  href={site.whatsapp.uk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 py-3 text-sm font-semibold text-white"
                >
                  <Icon name="whatsapp" className="h-5 w-5 text-brand-light" />
                  WhatsApp {site.phones.uk.display}
                </a>
                <Link
                  href="/contact"
                  className="rounded-full bg-brand py-3 text-center text-sm font-semibold text-white"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------- Desktop dropdown menus ---------- */

function DesktopLocationsMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className="absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3"
    >
      <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between px-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            UK cities we serve
          </p>
          <Link
            href="/locations"
            className="text-xs font-semibold text-brand-darker hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {cities.slice(0, 12).map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-darker"
            >
              <Icon name="mapPin" className="h-4 w-4 text-brand" />
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DesktopUaeMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3"
    >
      <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between px-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            United Arab Emirates
          </p>
          <span className="text-xs text-ink-muted">🇦🇪 UAE</span>
        </div>
        <div className="grid gap-1">
          {uaeLocations.map((l) => (
            <Link
              key={l.slug}
              href={`/${l.slug}`}
              className="group flex items-start gap-3 rounded-lg px-2.5 py-2.5 text-sm text-ink-soft transition-colors hover:bg-brand-50"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-darker group-hover:bg-brand group-hover:text-white">
                <Icon name="mapPin" className="h-4 w-4" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold text-ink group-hover:text-brand-darker">
                  {l.headline}
                </span>
                {l.eyebrow && (
                  <span className="text-[11px] text-ink-muted">{l.eyebrow}</span>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
