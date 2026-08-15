import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/site";
import type { Testimonial } from "../data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  // Nothing to show until real reviews are pasted into site.ts.
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Client feedback" title="What people say after the handover." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={i * 0.07}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card card-hover flex h-full flex-col p-6">
      <Quote size={22} className="shrink-0 text-brand/35" aria-hidden="true" />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
        {t.quote}
      </blockquote>

      {t.tags && t.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {t.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      )}

      {typeof t.rating === "number" && <Rating value={t.rating} />}

      <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-ink">
            {t.name ?? "Verified client"}
          </div>
          {(t.project || t.country) && (
            <div className="mt-0.5 truncate text-xs text-ink-faint">
              {[t.project, t.country].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>
        {t.source && <span className="chip shrink-0">{t.source}</span>}
      </figcaption>
    </figure>
  );
}

function Rating({ value }: { value: number }) {
  const rounded = Math.round(value);
  return (
    <div className="mt-4 flex items-center gap-1" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          aria-hidden="true"
          className={i < rounded ? "fill-brand text-brand" : "text-line"}
        />
      ))}
    </div>
  );
}
