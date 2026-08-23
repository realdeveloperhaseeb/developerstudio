"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/*
  Animated hand-drawn signature. When scrolled into view, the SVG paths
  "write" themselves left-to-right using stroke-dasharray, then a small
  underline flourish follows. Loops of animation are one-shot per mount
  — reads as intentional craft, not attention-grabbing.

  Drop it anywhere: <Signature /> uses the default `Developer Studio`
  script. Override with `text` prop for a name / other short caption.
*/

type Path = {
  d: string;
  length: number;   // approximate SVG path length (drives dash animation)
  delay: number;    // seconds after visible before this path starts
  duration: number; // seconds to draw
};

// Hand-plotted "Developer Studio" script — each stroke follows the
// natural flow of a signature (loops, drops, tail flourish).
const SCRIPT: Path[] = [
  // "Developer" — flowing lower-case script
  {
    d: "M20 60 C 30 20, 55 25, 55 60 C 55 90, 30 90, 25 60 M 55 35 C 65 40, 80 40, 85 60 C 90 80, 70 80, 65 60 C 62 45, 80 30, 95 45 M 100 60 C 108 50, 120 50, 122 60 C 124 72, 110 72, 105 60 C 108 45, 128 45, 132 60 M 145 30 L 145 75 C 150 82, 158 78, 160 65 M 175 45 C 185 40, 195 45, 195 60 C 195 75, 175 75, 175 60 C 175 45, 200 45, 205 55 M 220 30 L 220 78 M 240 45 C 250 40, 260 50, 260 60 C 260 72, 245 75, 240 65 C 235 55, 250 45, 262 52",
    length: 900,
    delay: 0.05,
    duration: 1.8,
  },
  // "Studio" — flourish
  {
    d: "M 40 108 C 25 108, 25 122, 40 122 C 60 122, 60 138, 40 138 C 25 138, 28 130, 30 128 M 68 100 L 68 138 C 68 145, 76 145, 82 138 M 92 118 C 105 108, 118 118, 115 130 C 112 142, 92 142, 92 128 C 92 115, 108 115, 118 120 M 130 100 L 130 138 M 148 118 C 158 112, 172 118, 172 128 C 172 140, 150 140, 150 128 C 150 118, 175 118, 178 125 M 190 120 L 190 138 M 190 108 L 192 110",
    length: 700,
    delay: 1.1,
    duration: 1.6,
  },
  // Final swash underline
  {
    d: "M 15 158 C 100 148, 180 155, 240 148 C 260 146, 265 152, 258 158",
    length: 320,
    delay: 2.2,
    duration: 0.9,
  },
];

export default function Signature({
  text = "Developer Studio",
  className,
  color = "currentColor",
}: {
  text?: string;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("inline-block", className)}
      aria-label={text}
      role="img"
    >
      <svg
        viewBox="0 0 280 170"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", width: "100%", maxWidth: 260, height: "auto" }}
      >
        {SCRIPT.map((p, i) => (
          <path
            key={i}
            d={p.d}
            fill="none"
            stroke={color}
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: p.length,
              strokeDashoffset: visible ? 0 : p.length,
              transition: `stroke-dashoffset ${p.duration}s cubic-bezier(0.65, 0, 0.35, 1) ${p.delay}s`,
              opacity: visible ? 1 : 0,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
