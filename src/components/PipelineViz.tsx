import { motion } from "framer-motion";
import { Rss, Brain, Filter, Send } from "lucide-react";

const steps = [
  { icon: Rss, label: "Trigger", sub: "rss / webhook / cron" },
  { icon: Brain, label: "Reason", sub: "openai / claude" },
  { icon: Filter, label: "Filter", sub: "score & validate" },
  { icon: Send, label: "Deliver", sub: "api / email / db" },
];

/** A clean automation pipeline card with a pulse traveling the flow. */
export default function PipelineViz() {
  return (
    <div className="rounded-4xl border border-line bg-paper p-6 shadow-card sm:p-7">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream-200" />
        </div>
        <span className="font-mono text-xs text-ink-faint">automation.flow</span>
      </div>

      <div className="flex flex-col gap-2.5">
        {steps.map((s, i) => (
          <div key={s.label}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.14, duration: 0.5 }}
              className="flex items-center gap-4 rounded-2xl border border-line bg-cream-50 p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <s.icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-ink">{s.label}</div>
                <div className="truncate font-mono text-xs text-ink-faint">{s.sub}</div>
              </div>
              <motion.span
                className="ml-auto h-2 w-2 rounded-full bg-brand"
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            </motion.div>

            {i < steps.length - 1 && (
              <div className="relative ml-9 h-3">
                <div className="absolute left-0 top-0 h-full w-px bg-line" />
                <motion.div
                  className="absolute -left-[3px] h-1.5 w-1.5 rounded-full bg-brand"
                  animate={{ top: ["-10%", "110%"], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: i * 0.35,
                    ease: "easeInOut",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="font-mono text-xs text-ink-faint">runs on schedule</span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-medium text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          zero manual steps
        </span>
      </div>
    </div>
  );
}
