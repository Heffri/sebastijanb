import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-primary">05</span>
          <h2 className="font-body text-3xl font-bold text-foreground">Contact</h2>
        </div>
        <div className="w-full h-px bg-border mt-4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xl text-foreground italic mb-10">
          Happy to talk about statistics, systems, or anything at the seam between them.
        </p>

        <div className="space-y-0 max-w-lg">
          {[
            { label: "Email", href: "mailto:sebastijan.sthlm@gmail.com", display: "sebastijan.sthlm@gmail.com" },
            { label: "GitHub", href: "https://github.com/Heffri", display: "github.com/Heffri" },
            { label: "LinkedIn", href: "https://linkedin.com/in/sebastijanbabic", display: "in/sebastijanbabic" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-primary/40 transition-colors"
            >
              <span className="font-display text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                {link.label}
              </span>
              <span className="font-body text-base text-foreground group-hover:text-primary transition-colors">
                {link.display}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
