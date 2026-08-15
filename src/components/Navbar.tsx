import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 z-50 transition-[top] duration-300 ${scrolled ? "top-2" : "top-0"}`}
    >
      <nav className={`container-x flex h-20 items-center justify-between transition-all duration-300 ${scrolled ? "md:justify-center" : ""}`}>
        {/* logo */}
        <a href="#top" className={`flex items-center gap-2.5 ${scrolled ? "md:hidden" : ""}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-night text-sm font-bold text-brand">
            AF
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-ink">
            Arslan Faisal
          </span>
        </a>

        {/* desktop pill */}
        <div className={`hidden items-center rounded-full bg-night p-1.5 transition-all duration-300 md:flex ${scrolled ? "gap-1 px-2 shadow-card ring-1 ring-white/10" : "shadow-soft"}`}>
          {scrolled && (
            <a
              href="#top"
              aria-label="Back to top"
              className="mr-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white"
            >
              AF
            </a>
          )}
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className={`ml-1 rounded-full bg-brand text-sm font-semibold text-white transition-all hover:bg-brand-600 ${scrolled ? "px-7 py-3" : "px-5 py-2"}`}
          >
            Contact me
          </a>
        </div>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-night text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="container-x md:hidden"
          >
            <div className="rounded-3xl border border-line bg-paper p-3 shadow-card">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink-soft hover:bg-cream-50 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-2xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
