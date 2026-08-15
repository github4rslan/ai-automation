import { GraduationCap } from "lucide-react";
import { experience, education } from "../data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Track record" title="Where I have been building." />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 0.1}>
                  <div className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-brand ring-4 ring-cream" />
                    <div className="rounded-4xl border border-line bg-paper p-6 shadow-soft">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h3 className="font-display text-lg font-semibold text-ink">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs text-brand">{exp.period}</span>
                      </div>
                      <div className="mt-0.5 text-sm text-ink-muted">
                        {exp.company} · {exp.location}
                      </div>
                      <ul className="mt-4 space-y-2.5">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex gap-2.5 text-sm text-ink-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/50" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="card p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <GraduationCap size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((ed) => (
                  <div key={ed.degree} className="border-l-2 border-line pl-4">
                    <div className="text-sm font-semibold text-ink">{ed.degree}</div>
                    <div className="mt-0.5 text-sm text-ink-muted">{ed.school}</div>
                    {ed.year && (
                      <div className="mt-0.5 font-mono text-xs text-ink-faint">{ed.year}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
