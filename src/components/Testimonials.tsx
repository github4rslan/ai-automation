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

        {/* Masonry columns rather than a grid. Reviews range from one line
            to three paragraphs, and equal-height grid rows left ~400px of
            dead space beside the longest quote. Columns let each card size
            to its own content. */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={`${t.name}-${i}`}
              delay={i * 0.07}
              className="mb-5 break-inside-avoid"
            >
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
    <figure className="card card-hover flex flex-col p-6">
      <Quote size={22} className="shrink-0 text-brand/35" aria-hidden="true" />

      {/* Blank lines in a quote are the client's own paragraph breaks.
          Rendering the raw string would run them together. */}
      <blockquote className="mt-4 flex-1 space-y-3 text-sm leading-relaxed text-ink-muted">
        {t.quote.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </blockquote>

      {t.tags && t.tags.length > 0 && (
        // Upwork hands out up to five endorsements. Showing them all turns
        // the card into a chip wall, so display the first three and keep
        // the rest in the data.
        <div className="mt-4 flex flex-wrap gap-1.5">
          {t.tags.slice(0, 3).map((tag) => (
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
            // Wraps rather than truncates: a long project name plus a
            // country does not fit on one line and was clipping the
            // country to "U...".
            <div className="mt-0.5 text-xs leading-snug text-ink-faint">
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
