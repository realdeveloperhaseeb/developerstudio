"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/content";
import { Icon } from "@/components/icons";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before we start growing your business."
        />

        <div className="mt-12 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-brand text-white" : "bg-brand-50 text-brand-darker"
                    }`}
                  >
                    <Icon
                      name="chevronDown"
                      className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
