import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  /** Plain text. Each word animates in on its own. */
  text: string;
  className?: string;
  /** Seconds before the first word starts. */
  delay?: number;
  /** Seconds between consecutive words. */
  stagger?: number;
  /** Runs on mount instead of waiting to be scrolled into view. */
  immediate?: boolean;
  /** Rendered after the last word, e.g. a coloured span. */
  children?: ReactNode;
};

/**
 * Word-by-word reveal. Words are real text nodes with normal spaces
 * between them, so the heading still selects, wraps and reads to a
 * screen reader as one continuous string.
 */
export default function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  immediate = false,
  children,
}: Props) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  // With reduced motion the whole thing renders plainly, no transforms.
  if (reduced) {
    return (
      <span className={className}>
        {text}
        {children}
      </span>
    );
  }

  const activate = immediate
    ? { animate: "show" as const }
    : { whileInView: "show" as const, viewport: { once: true, margin: "-70px" } };

  return (
    <motion.span
      className={className}
      initial="hidden"
      {...activate}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            aria-hidden="true"
            variants={{
              hidden: { y: "105%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
      {children}
    </motion.span>
  );
}
