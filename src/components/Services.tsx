import { Bot, Database, Headphones, LineChart, Mail, ShoppingBag, Wrench, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const services = [
  [Headphones, "AI customer support", "Triage, contextual replies, sentiment checks, and human escalation."],
  [LineChart, "Lead & CRM automation", "Capture, enrich, qualify, route, and follow up with every lead."],
  [Mail, "Email & outreach", "Personalized campaigns, inbox workflows, and reply classification."],
  [Database, "RAG assistants", "Grounded AI answers from your documents, databases, and live tools."],
  [Bot, "Content operations", "Research, generate, approve, localize, publish, and report automatically."],
  [ShoppingBag, "E-commerce operations", "Product content, support, orders, inventory, and store integrations."],
  [Workflow, "Custom API integrations", "Connect tools that do not have native nodes using secure APIs and webhooks."],
  [Wrench, "Workflow repair", "Audit, optimize, document, and stabilize existing n8n automations."],
] as const;

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="What I automate" title="Practical AI systems for everyday operations." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([Icon, title, description], index) => (
            <Reveal key={title} delay={(index % 4) * 0.05}>
              <article className="card card-hover h-full p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon size={20} /></div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
