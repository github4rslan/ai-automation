import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "../data/site";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const shown = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <section id="work" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <div>
          <SectionHeading
            eyebrow="Completed projects"
            title="Business problems turned into working systems."
            className="mb-0"
          />
        </div>

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const gallery = project.images ?? (project.image ? [{ src: project.image, alt: `${project.name} screenshot` }] : []);
  const [activeImage, setActiveImage] = useState(0);
  const Icon = project.icon;
  const badges = (
    <div className="flex items-center gap-2">
      <span className="chip">{project.category}</span>
      {project.featured && (
        <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
          Featured
        </span>
      )}
    </div>
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      {gallery.length > 0 ? (
        <div>
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-cream-50">
          <img
            src={gallery[activeImage].src}
            alt={gallery[activeImage].alt}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute right-4 top-4">{badges}</div>
          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-brand shadow-soft backdrop-blur">
            <Icon size={18} />
          </div>
        </div>
        {gallery.length > 1 && (
          <div className="grid grid-cols-3 gap-2 border-b border-line bg-paper p-3">
            {gallery.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1} of ${gallery.length}`}
                aria-pressed={activeImage === index}
                className={`overflow-hidden rounded-xl border-2 transition ${activeImage === index ? "border-brand" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <img src={image.src} alt="" loading="lazy" className="aspect-[16/9] h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
        </div>
      ) : (
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-line bg-cream-50">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#a78bfa_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="relative flex flex-col items-center gap-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand shadow-soft">
              <Icon size={28} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Project preview coming soon
            </span>
          </div>
          <div className="absolute right-4 top-4">{badges}</div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
        {project.role && (
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            My role · {project.role}
          </p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.blurb}</p>

      <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">What I built</div>
      <ul className="mt-2 space-y-2">
        {project.highlights.slice(0, 3).map((h, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-ink-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-line bg-cream-50 px-2 py-0.5 font-mono text-[11px] text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

        {(project.liveUrl || project.codeUrl || project.caseStudyUrl) && (
          <div className="mt-6 flex items-center gap-4 border-t border-line pt-4">
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                View case study
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                Live site
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors hover:text-brand"
              >
                <Github size={15} />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
