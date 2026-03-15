import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border/60" : ""}`}>
      <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xs font-bold text-primary tracking-[0.2em]">
          S.B
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <span key={l.href} className="flex items-center">
              <a href={l.href} className="font-display text-[11px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 px-4 py-1">
                {l.label}
              </a>
              {i < links.length - 1 && (
                <span className="text-border text-[8px]">·</span>
              )}
            </span>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden font-display text-lg text-muted-foreground">
          {open ? "×" : "≡"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="px-10 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
