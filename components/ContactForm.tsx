"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { cities } from "@/data/cities";
import { Icon } from "@/components/icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0].title,
    city: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `New enquiry for Developer Studio`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.city && `City: ${form.city}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${site.phones.uk.e164}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand focus:ring-2 focus:ring-brand/20";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-brand/30 bg-brand-50 p-10 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks, {form.name || "there"}!</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          We&apos;ve opened WhatsApp so you can send your enquiry directly. Prefer email? Reach us
          at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand-darker">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-brand-darker hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Name *</label>
          <input required value={form.name} onChange={update("name")} className={field} placeholder="Jane Smith" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Email *</label>
          <input required type="email" value={form.email} onChange={update("email")} className={field} placeholder="jane@firm.co.uk" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">Phone</label>
          <input value={form.phone} onChange={update("phone")} className={field} placeholder="+44 ..." />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink">City</label>
          <select value={form.city} onChange={update("city")} className={field}>
            <option value="">Select a city</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-semibold text-ink">Service of interest</label>
          <select value={form.service} onChange={update("service")} className={field}>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-semibold text-ink">How can we help? *</label>
          <textarea
            required
            value={form.message}
            onChange={update("message")}
            rows={4}
            className={field}
            placeholder="Tell us about your business and goals..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-[0.99]"
      >
        Send enquiry
        <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-3 text-center text-xs text-ink-muted">
        We&apos;ll reply within one business day. No spam, ever.
      </p>
    </form>
  );
}
