import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Splits a display value into the part worth animating and the rest.
 *   "35+"   -> 35 and "+"
 *   "4.9/5" -> 4.9 and "/5"
 *   "24/7"  -> 24 and "/7"
 *   "50"    -> 50 and ""
 * Anything that does not start with a number is returned as-is.
 */
function parse(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, digits, suffix] = match;
  const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
  return { target: parseFloat(digits), suffix, decimals };
}

export default function CountUp({
  value,
  className,
  duration = 1.5,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const parsed = parse(value);
  const [display, setDisplay] = useState(() =>
    parsed ? `0${parsed.decimals ? "." + "0".repeat(parsed.decimals) : ""}${parsed.suffix}` : value
  );

  useEffect(() => {
    if (!parsed) return;

    // Respect the OS setting: show the final number, skip the animation.
    if (reduced) {
      setDisplay(parsed.target.toFixed(parsed.decimals) + parsed.suffix);
      return;
    }
    if (!inView) return;

    let frame = 0;
    // Seeded on the first frame, not here. There can be a long gap between
    // this effect running and the first paint, and starting the clock now
    // would burn the whole duration before a single frame renders --
    // the counter would jump straight to its final value.
    let start = 0;
    const ms = duration * 1000;

    const tick = (now: number) => {
      if (!start) start = now;
      const linear = Math.min((now - start) / ms, 1);
      // easeOutCubic -- quick start, readable settle. Steeper curves
      // (expo) hit the rounded final value so early it reads as a jump.
      const eased = 1 - Math.pow(1 - linear, 3);
      setDisplay((parsed.target * eased).toFixed(parsed.decimals) + parsed.suffix);
      if (linear < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // `parsed` is derived from `value`, so `value` is the real dependency.
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
    </span>
  );
}
