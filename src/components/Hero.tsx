import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { Github, Linkedin, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data/site";
import PipelineViz from "./PipelineViz";
import AnimatedText from "./AnimatedText";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  // Drives the parallax on the pipeline card as the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -64]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section ref={sectionRef} id="top" className="relative pt-32 pb-16 sm:pt-40">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Available for freelance and full time roles
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-[4.2rem]">
            <AnimatedText text="I build reliable AI automations that" immediate delay={0.15} />{" "}
            <AnimatedText text="run 24/7." className="text-brand" immediate delay={0.5} />
          </h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            From customer support and content pipelines to internal AI agents—built
            with n8n, APIs, human approvals, and production-ready error handling.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View completed projects
              <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} />
              Discuss an automation
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-3">
            <SocialLink href={profile.links.github} label="GitHub">
              <Github size={18} />
            </SocialLink>
            <SocialLink href={profile.links.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialLink>
            <span className="ml-1 text-sm text-ink-faint">Remote, worldwide</span>
          </motion.div>
        </motion.div>

        {/* visual: pipeline card on an orange blob */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: visualY, opacity: visualOpacity }}
          className="relative"
        >
          <div className="absolute -right-6 -top-8 -bottom-8 left-10 rounded-[2.75rem] bg-brand" aria-hidden="true" />
          <div className="absolute -left-3 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border-4 border-ink/10 lg:block" aria-hidden="true" />
          <div className="relative animate-floaty">
            <PipelineViz />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-soft transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  );
}
