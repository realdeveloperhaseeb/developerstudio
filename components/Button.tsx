import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-[0_8px_24px_-8px_rgba(16,185,129,0.6)] hover:shadow-[0_10px_30px_-8px_rgba(16,185,129,0.75)]",
  secondary:
    "bg-ink text-white hover:bg-ink/90 shadow-[0_8px_24px_-10px_rgba(10,10,10,0.5)]",
  ghost:
    "bg-transparent text-ink ring-1 ring-line hover:ring-brand hover:text-brand-dark",
  white: "bg-white text-ink hover:bg-brand-50 shadow-soft",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  className?: string;
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
