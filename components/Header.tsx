"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import { Icon } from "@/components/icons";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Locations", href: "/locations", dropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [mobileLocOpen, setMobileLocOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLocOpen(false);
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
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={site.name}>
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
          {nav.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setLocOpen(true)}
                onMouseLeave={() => setLocOpen(false)}
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
                      locOpen && "rotate-180"
                    )}
                  />
                </Link>
                <AnimatePresence>
                  {locOpen && (
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
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
            )
          )}
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
            className="inline-flex h-10 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-95 shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)]"
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
              {nav.map((item) =>
                item.dropdown ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileLocOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white"
                    >
                      {item.label}
                      <Icon
                        name="chevronDown"
                        className={cn("h-5 w-5 transition-transform", mobileLocOpen && "rotate-180")}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileLocOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 gap-1 pb-2 pl-3">
                            <Link
                              href="/locations"
                              className="col-span-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand-light"
                            >
                              All locations →
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium",
                      isActive(item.href) ? "bg-white/10 text-brand-light" : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
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
