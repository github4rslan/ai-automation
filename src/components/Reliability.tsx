import { BellRing, CheckCircle2, CircleDollarSign, FileCheck2, Gauge, LockKeyhole, RefreshCcw, UserCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const safeguards = [
  [RefreshCcw, "Retries & recovery"], [BellRing, "Failure alerts"],
  [UserCheck, "Human approvals"], [CheckCircle2, "Output validation"],
  [Gauge, "Rate-limit handling"], [FileCheck2, "Execution logging"],
  [CircleDollarSign, "AI cost control"], [LockKeyhole, "Secure credentials"],
] as const;

export default function Reliability() {
  return (
    <section id="reliability" className="relative scroll-mt-24 py-24">
      <div className="container-x">
        <Reveal>
          <div className="overflow-hidden rounded-5xl bg-night p-7 sm:p-10 lg:p-14">
            <SectionHeading eyebrow="Built for production" title="The automation should keep working when nobody is watching." className="mb-10 [&_h2]:text-white" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {safeguards.map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4 text-sm font-medium text-white/80">
                  <Icon size={18} className="shrink-0 text-brand" /> {label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
