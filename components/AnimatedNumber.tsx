"use client";

import { useEffect, useRef, useState } from "react";

/*
  Count-up number component. Parses whatever string you give it
  ("120+", "3.4×", "98%", "£5.69", "13.5× ROAS") and animates the
  numeric part from 0 to the target with an ease-out curve when
  the element scrolls into view. Runs once per mount.
*/

type Parsed = {
  prefix: string;   // "£", "" etc.
  num: number;      // the actual number to animate to
  suffix: string;   // "%", "×", "+", " ROAS" etc.
  decimals: number; // preserve source decimal precision
};

function parse(value: string): Parsed {
  // Grab: leading non-numeric prefix, the numeric core, trailing suffix
  const m = value.match(/^([^\d.-]*)([-]?\d*\.?\d+)(.*)$/);
  if (!m) return { prefix: "", num: NaN, suffix: value, decimals: 0 };
  const [, prefix, numStr, suffix] = m;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, num: parseFloat(numStr), suffix, decimals };
}

function format({ prefix, num, suffix, decimals }: Parsed, current: number) {
  return prefix + current.toFixed(decimals) + suffix;
}

export default function AnimatedNumber({
  value,
  duration = 1500,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const parsed = parse(value);
  const isNumeric = !Number.isNaN(parsed.num);

  // Server render / first client paint shows a "0"-filled version so the
  // final value doesn't flash before the count-up starts.
  const initial = isNumeric ? format(parsed, 0) : value;
  const [display, setDisplay] = useState(initial);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        io.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // ease-out cubic — fast then decelerating
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(format(parsed, parsed.num * eased));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, isNumeric, parsed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
