import { cn } from "@/lib/cn";
import Reveal from "@/components/Reveal";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-darker",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "text-3xl font-bold leading-[1.1] text-ink sm:text-4xl md:text-[2.75rem]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
