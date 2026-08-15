import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-night px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* orange blob accents */}
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand/20" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-brand/10" aria-hidden="true" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Open to work
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Have a workflow worth <span className="text-brand">automating?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
                Tell me the manual process eating your time and I will show you how to make it
                run on its own. Fast replies, clear scope, clean handover.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail size={16} />
                  {profile.email}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-white/55">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
