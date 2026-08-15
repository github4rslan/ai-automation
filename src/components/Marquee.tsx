import { techMarquee } from "../data/site";

export default function Marquee() {
  const row = [...techMarquee, ...techMarquee];
  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
      <div className="marquee-track flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-mono text-sm font-medium text-ink-faint transition-colors hover:text-brand"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
