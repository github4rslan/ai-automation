import type { FormEvent } from "react";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { profile } from "../data/site";
import Reveal from "./Reveal";

export default function Contact() {
  const sendEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Process to automate: ${data.get("process")}`,
      `Tools involved: ${data.get("tools")}`,
      `How often it runs: ${data.get("frequency")}`,
      `Current manual process: ${data.get("manual")}`,
      `Budget / project size: ${data.get("budget")}`,
    ].join("\n\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Automation project enquiry")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-night px-6 py-12 sm:px-12 sm:py-16">
            {/* orange blob accents */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand/20" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-brand/10" aria-hidden="true" />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="text-center lg:pt-4 lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Open to work
              </span>

              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Have a workflow worth <span className="text-brand">automating?</span>
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/60">
                Tell me the manual process eating your time and I will show you how to make it
                run on its own. Fast replies, clear scope, clean handover.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail size={16} />
                  {profile.email}
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-sm text-white/55 lg:justify-start">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
                >
                  <Github size={15} /> GitHub <ArrowUpRight size={13} />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
                >
                  <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
                </a>
              </div>
              </div>

              <form onSubmit={sendEnquiry} className="rounded-4xl bg-white p-5 text-left shadow-card sm:p-7">
                <h3 className="font-display text-xl font-semibold text-ink">Tell me about the workflow</h3>
                <p className="mt-1 text-sm text-ink-muted">A few details help me suggest the right approach.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field name="process" label="What should be automated?" placeholder="Lead qualification and follow-up" required />
                  <Field name="tools" label="Which tools are involved?" placeholder="HubSpot, Gmail, Slack..." />
                  <Field name="frequency" label="How often does it run?" placeholder="Every lead / daily / weekly" />
                  <Field name="budget" label="Budget or project size" placeholder="Optional" />
                  <label className="sm:col-span-2">
                    <span className="text-xs font-semibold text-ink-soft">What is currently done manually?</span>
                    <textarea name="manual" rows={4} required placeholder="Describe the current steps and biggest bottleneck..." className="mt-2 w-full resize-none rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10" />
                  </label>
                </div>
                <button type="submit" className="btn-primary mt-5 w-full"><Send size={16} /> Prepare email enquiry</button>
                <p className="mt-3 text-center text-[11px] text-ink-faint">This opens your email app. No form data is stored on this site.</p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, required = false }: { name: string; label: string; placeholder: string; required?: boolean }) {
  return (
    <label>
      <span className="text-xs font-semibold text-ink-soft">{label}</span>
      <input name={name} required={required} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10" />
    </label>
  );
}
