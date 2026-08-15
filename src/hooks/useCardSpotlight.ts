import { useEffect } from "react";

/**
 * Gives every `.card` a soft violet glow that follows the cursor.
 *
 * One delegated pointermove listener on the document rather than a
 * listener per card, and it writes to CSS custom properties so the
 * paint happens in CSS (see `.card` in index.css). Nothing to wire up
 * in the individual card components.
 */
export default function useCardSpotlight() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    // Coarse pointers have no hover, so the glow would just be noise.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let pending: { card: HTMLElement; x: number; y: number } | null = null;

    const flush = () => {
      frame = 0;
      if (!pending) return;
      const { card, x, y } = pending;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      pending = null;
    };

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      pending = { card, x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!frame) frame = requestAnimationFrame(flush);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
