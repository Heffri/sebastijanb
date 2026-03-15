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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : ""}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xs font-bold text-primary tracking-[0.2em]">
          S.B
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden font-display text-xs text-muted-foreground">
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
            <div className="px-8 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
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
