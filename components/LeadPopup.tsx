"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";
import { cities } from "@/data/cities";
import { Icon } from "@/components/icons";

/*
  The popup shows AT MOST ONCE per browser session and only after the
  visitor has scrolled past the halfway point of the page. Both flags
  live in sessionStorage so navigating between pages doesn't re-trigger,
  and closing the tab resets the state (fresh chance on a new visit).
*/
const SUBMIT_KEY = "ds_lead_submitted"; // set after they submit
const SHOWN_KEY = "ds_lead_shown";      // set the first time it opens

type Form = {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  business: string;
  challenge: string;
  budget: string;
  hired: string;
  website: string;
  social: string;
};

const empty: Form = {
  name: "",
  email: "",
  whatsapp: "",
  city: "",
  business: "",
  challenge: "",
  budget: "",
  hired: "",
  website: "",
  social: "",
};

const challenges = [
  "Not enough leads or clients",
  "No website / outdated website",
  "Low Google rankings",
  "Social media isn't working",
  "Wasting money on ads",
  "Starting from scratch",
];
const budgets = [
  "Under £500/mo",
  "£500 – £1k/mo",
  "£1k – £2.5k/mo",
  "£2.5k – £5k/mo",
  "£5k+/mo",
  "Not sure yet",
];

const STEPS = ["About you", "Your challenge", "A bit more", "Send"];

function Choice({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border px-4 py-3 text-left text-sm transition-all",
        active
          ? "border-brand bg-brand-50 font-semibold text-brand-darker ring-2 ring-brand/30"
          : "border-line bg-white text-ink-soft hover:border-brand/50"
      )}
    >
      {children}
    </button>
  );
}

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<Form>(empty);

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand focus:ring-2 focus:ring-brand/20";

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  /*
    Trigger: fire once, ever, per session, when the visitor has scrolled
    past 50% of the page. Skip entirely if they've already been shown
    the popup this session or already submitted.
  */
  useEffect(() => {
    setOpen(false);

    // Already shown / submitted this session? Never trigger again.
    try {
      if (
        sessionStorage.getItem(SUBMIT_KEY) ||
        sessionStorage.getItem(SHOWN_KEY)
      ) {
        return;
      }
    } catch {
      /* sessionStorage might be blocked (private mode, cookie block) */
    }

    const onScroll = () => {
      // Total scrollable height (docHeight - viewportHeight).
      const doc = document.documentElement;
      const body = document.body;
      const scrollable =
        Math.max(doc.scrollHeight, body.scrollHeight) - window.innerHeight;
      if (scrollable <= 0) return; // page not scrollable

      const scrolled = window.scrollY || doc.scrollTop || body.scrollTop || 0;
      const pct = scrolled / scrollable;

      if (pct >= 0.5) {
        // Mark shown BEFORE opening so a rapid re-render can't double-fire.
        try {
          sessionStorage.setItem(SHOWN_KEY, "1");
        } catch {}
        setStep(0);
        setSent(false);
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Check once on mount in case the visitor lands mid-page (deep link, back-nav).
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Dismissing just closes it. No timer, no re-queue.
  const dismiss = () => setOpen(false);

  const canProceed =
    step === 0
      ? form.name.trim() !== "" && /\S+@\S+\.\S+/.test(form.email)
      : step === 1
        ? form.challenge !== "" && form.budget !== ""
        : step === 2
          ? form.hired !== "" && form.website !== "" && form.social !== ""
          : true;

  const buildMessage = () =>
    [
      "New enquiry from developerstudio.org",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.whatsapp ? `WhatsApp: ${form.whatsapp}` : null,
      form.city ? `City: ${form.city}` : null,
      form.business ? `Business: ${form.business}` : null,
      "",
      `Biggest challenge: ${form.challenge}`,
      `Budget: ${form.budget}`,
      `Hired an agency before: ${form.hired}`,
      `Has a website: ${form.website}`,
      `Active on social media: ${form.social}`,
    ]
      .filter((l): l is string => l !== null)
      .join("\n");

  const sendTo = (e164: string) => {
    const url = `https://wa.me/${e164}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    try {
      sessionStorage.setItem(SUBMIT_KEY, "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* overlay */}
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.25 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-white shadow-card"
          >
            {/* header */}
            <div className="relative overflow-hidden bg-ink px-6 py-5 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand/40 blur-3xl" />
              <button
                type="button"
                onClick={dismiss}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
              {!sent ? (
                <>
                  <p className="relative inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-light">
                    <Icon name="sparkles" className="h-4 w-4" /> Free growth plan
                  </p>
                  <h3 className="relative mt-1 text-xl font-bold">
                    Let&apos;s grow your business
                  </h3>
                  <p className="relative mt-0.5 text-sm text-white/70">
                    60 seconds. No obligation. We reply in minutes.
                  </p>
                  {/* progress */}
                  <div className="relative mt-4 flex items-center gap-2">
                    {STEPS.map((label, i) => (
                      <div key={label} className="flex-1">
                        <div
                          className={cn(
                            "h-1.5 rounded-full transition-colors",
                            i <= step ? "bg-brand" : "bg-white/20"
                          )}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="relative mt-2 text-xs text-white/60">
                    Step {step + 1} of {STEPS.length} · {STEPS[step]}
                  </p>
                </>
              ) : (
                <h3 className="relative text-xl font-bold">You&apos;re all set!</h3>
              )}
            </div>

            {/* body */}
            <div className="p-6">
              {sent ? (
                <div className="text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                    <Icon name="check" className="h-7 w-7" />
                  </span>
                  <h4 className="mt-4 text-lg font-bold text-ink">
                    Thanks{form.name ? `, ${form.name}` : ""}!
                  </h4>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-ink-muted">
                    We&apos;ve opened WhatsApp so you can send your details to our UK team. Prefer
                    our Pakistan team? Use the button below.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={site.whatsapp.pk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                    >
                      <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                      Chat with our PK team ({site.phones.pk.display})
                    </a>
                  </div>
                  <Socials />
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 0 && (
                      <div className="grid gap-3">
                        <input
                          className={field}
                          placeholder="Your name *"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                        />
                        <input
                          className={field}
                          type="email"
                          placeholder="Email address *"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                        />
                        <input
                          className={field}
                          placeholder="WhatsApp number"
                          value={form.whatsapp}
                          onChange={(e) => set("whatsapp", e.target.value)}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <select
                            className={field}
                            value={form.city}
                            onChange={(e) => set("city", e.target.value)}
                          >
                            <option value="">Your city</option>
                            {cities.map((c) => (
                              <option key={c.slug} value={c.name}>
                                {c.name}
                              </option>
                            ))}
                            <option value="Other">Other</option>
                          </select>
                          <input
                            className={field}
                            placeholder="Business"
                            value={form.business}
                            onChange={(e) => set("business", e.target.value)}
                          />
                        </div>
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <p className="mb-2 text-sm font-semibold text-ink">
                            What&apos;s your biggest challenge?
                          </p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {challenges.map((ch) => (
                              <Choice
                                key={ch}
                                active={form.challenge === ch}
                                onClick={() => set("challenge", ch)}
                              >
                                {ch}
                              </Choice>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="mb-2 text-sm font-semibold text-ink">
                            Monthly budget?
                          </p>
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {budgets.map((b) => (
                              <Choice
                                key={b}
                                active={form.budget === b}
                                onClick={() => set("budget", b)}
                              >
                                {b}
                              </Choice>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-5">
                        <ToggleRow
                          label="Have you hired an agency before?"
                          options={["First time", "Hired before"]}
                          value={form.hired}
                          onChange={(v) => set("hired", v)}
                        />
                        <ToggleRow
                          label="Do you have a website?"
                          options={["Yes", "No"]}
                          value={form.website}
                          onChange={(v) => set("website", v)}
                        />
                        <ToggleRow
                          label="Active on social media?"
                          options={["Yes", "No"]}
                          value={form.social}
                          onChange={(v) => set("social", v)}
                        />
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <p className="text-sm text-ink-muted">
                          Almost done! Send your details to our team and we&apos;ll come back with
                          a free growth plan.
                        </p>
                        <div className="mt-4 rounded-2xl border border-line bg-zinc-50/70 p-4 text-sm text-ink-soft">
                          <p>
                            <span className="font-semibold text-ink">{form.name}</span>
                            {form.business ? ` · ${form.business}` : ""}
                            {form.city ? ` · ${form.city}` : ""}
                          </p>
                          <p className="mt-1 text-ink-muted">
                            {form.challenge} · {form.budget}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => sendTo(site.phones.uk.e164)}
                          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark active:scale-[0.99]"
                        >
                          <Icon name="whatsapp" className="h-5 w-5" />
                          Send to our UK team
                          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                          type="button"
                          onClick={() => sendTo(site.phones.pk.e164)}
                          className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-darker"
                        >
                          <Icon name="whatsapp" className="h-5 w-5 text-brand" />
                          Prefer our PK team? Send here
                        </button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}

              {/* nav */}
              {!sent && (
                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => (step === 0 ? dismiss() : setStep((s) => s - 1))}
                    className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                  >
                    {step === 0 ? "Maybe later" : "Back"}
                  </button>
                  {step < 3 && (
                    <button
                      type="button"
                      disabled={!canProceed}
                      onClick={() => canProceed && setStep((s) => s + 1)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all",
                        canProceed
                          ? "bg-brand text-white hover:bg-brand-dark"
                          : "cursor-not-allowed bg-zinc-200 text-zinc-400"
                      )}
                    >
                      Continue
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ToggleRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink">{label}</p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((o) => (
          <Choice key={o} active={value === o} onClick={() => onChange(o)}>
            <span className="block text-center">{o}</span>
          </Choice>
        ))}
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div className="mt-6 border-t border-line pt-5">
      <p className="text-xs text-ink-muted">Or follow us</p>
      <div className="mt-2.5 flex flex-wrap justify-center gap-2">
        {site.social.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-darker transition-colors hover:bg-brand hover:text-white"
          >
            <Icon name={s.icon as never} className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
