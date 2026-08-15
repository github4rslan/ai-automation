import { useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Mail, MessageSquareText, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const demos = {
  support: {
    label: "Support request",
    steps: [[MessageSquareText, "Receive", "Email or helpdesk ticket"], [Sparkles, "Understand", "Classify intent and urgency"], [CheckCircle2, "Approve", "Escalate sensitive responses"], [Mail, "Respond", "Reply and update the CRM"]],
  },
  document: {
    label: "Document assistant",
    steps: [[FileText, "Ingest", "Read and chunk documents"], [Sparkles, "Retrieve", "Find relevant source material"], [CheckCircle2, "Validate", "Ground the answer in context"], [MessageSquareText, "Answer", "Respond with source references"]],
  },
  content: {
    label: "Content pipeline",
    steps: [[FileText, "Research", "Collect and filter sources"], [Sparkles, "Generate", "Write structured content"], [CheckCircle2, "Review", "Human approval when needed"], [ArrowRight, "Publish", "Send to the destination"]],
  },
} as const;

export default function WorkflowDemo() {
  const [active, setActive] = useState<keyof typeof demos>("support");
  return (
    <section id="demo" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Interactive workflow" title="See how a production automation thinks." />
        <Reveal>
          <div className="card overflow-hidden p-5 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {(Object.keys(demos) as Array<keyof typeof demos>).map((key) => (
                <button key={key} onClick={() => setActive(key)} className={active === key ? "btn-dark !px-4 !py-2" : "btn-ghost !px-4 !py-2"}>{demos[key].label}</button>
              ))}
            </div>
            <div className="mt-8 grid gap-3 lg:grid-cols-4">
              {demos[active].steps.map(([Icon, title, detail], index) => (
                <div key={title} className="relative rounded-3xl border border-line bg-cream-50 p-5">
                  <div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon size={19} /></div><span className="font-mono text-xs text-ink-faint">0{index + 1}</span></div>
                  <h3 className="mt-5 font-display font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{detail}</p>
                  {index < 3 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden text-brand lg:block" size={18} />}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-ink-faint">Interactive process preview. Real implementations are tailored to your tools, data, and approval rules.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
