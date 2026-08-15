import { profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col items-center justify-between gap-3 text-sm text-ink-muted sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-night text-xs font-bold text-brand">
            AF
          </span>
          <span className="font-medium text-ink">{profile.name}</span>
        </div>
        <span className="font-mono text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} · Designed and coded from scratch.
        </span>
      </div>
    </footer>
  );
}
