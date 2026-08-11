import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

/*
  Layered button treatment. The `inset` shadow is a 1px top-highlight
  (like a keycap or physical button). The tell that this was
  considered rather than defaulted. Hover lifts the outer shadow
  slightly; the press collapses both.
*/
const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1px_2px_rgba(6,95,70,0.4),0_8px_20px_-6px_rgba(16,185,129,0.55)] " +
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_1px_2px_rgba(6,95,70,0.5),0_14px_28px_-8px_rgba(16,185,129,0.65)]",
  secondary:
    "bg-ink text-white hover:bg-ink/90 " +
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_1px_2px_rgba(0,0,0,0.4),0_8px_20px_-8px_rgba(10,10,10,0.6)]",
  ghost:
    "bg-transparent text-ink ring-1 ring-line hover:ring-brand hover:text-brand-dark hover:bg-brand-50/50",
  white:
    "bg-white text-ink hover:bg-brand-50 shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_2px_rgba(10,10,10,0.06),0_8px_20px_-10px_rgba(10,10,10,0.15)]",
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
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-[transform,box-shadow,background-color] duration-200 ease-out",
    "active:translate-y-[1px] active:scale-[0.985]",
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
