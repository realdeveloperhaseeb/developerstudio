"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import { Icon } from "@/components/icons";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const options = [
    { ...site.phones.uk, href: site.whatsapp.uk },
    { ...site.phones.pk, href: site.whatsapp.pk },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-64 overflow-hidden rounded-2xl border border-line bg-white shadow-card"
          >
            <div className="bg-brand px-4 py-3 text-white">
              <p className="text-sm font-semibold">Chat with us on WhatsApp</p>
              <p className="text-xs text-white/80">We usually reply in minutes</p>
            </div>
            <div className="p-2">
              {options.map((o) => (
                <a
                  key={o.e164}
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-darker">
                    <Icon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {o.label} Team
                    </span>
                    <span className="block text-xs text-ink-muted">{o.display}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        aria-expanded={open}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_30px_-6px_rgba(16,185,129,0.7)] transition-transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand/40" />
        <Icon name={open ? "close" : "whatsapp"} className="h-7 w-7" />
      </button>
    </div>
  );
}
