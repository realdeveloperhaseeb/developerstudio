import { cn } from "@/lib/cn";

/*
  Editorial "marker" accent. Sits inline in headings/paragraphs in place
  of a hollow <span className="text-gradient">. Three variants. Pick
  sparingly (one per heading, not one per word) so it reads as human
  emphasis rather than another template flourish.

    <Mark>zero</Mark>                 → wavy green underline
    <Mark variant="highlight">…</Mark> → highlighter swipe
    <Mark variant="circle">…</Mark>    → hand-drawn circle
*/
export default function Mark({
  children,
  variant = "underline",
  className,
}: {
  children: React.ReactNode;
  variant?: "underline" | "highlight" | "circle";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block",
        variant === "underline" && "mark-underline",
        variant === "highlight" && "mark-highlight",
        variant === "circle" && "mark-circle",
        className
      )}
    >
      {children}
    </span>
  );
}
