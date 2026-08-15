import { profile } from "../data/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="I ship systems, not scripts." />

        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="space-y-5">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-4xl bg-night p-3 shadow-card">
              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl bg-night-800 p-6 text-center"
                  >
                    <div className="font-display text-4xl font-bold tabular-nums text-brand">
                      <CountUp value={s.value} />
                    </div>
                    <div className="mt-1.5 text-sm text-white/60">{s.label}</div>
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
