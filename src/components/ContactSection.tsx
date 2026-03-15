import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h2 className="font-body text-3xl font-bold text-foreground">4. Contact</h2>
        <div className="w-full h-px bg-border mt-3" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xl text-foreground/70 italic mb-8">Say hello.</p>

        <div className="space-y-3 max-w-lg">
          {[
            { label: "Email", href: "mailto:sebastijan.babic@proton.me", display: "sebastijan.babic@proton.me" },
            { label: "GitHub", href: "https://github.com/Heffri", display: "github.com/Heffri" },
            { label: "LinkedIn", href: "https://linkedin.com/in/sebastijanbabic", display: "in/sebastijanbabic" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between py-3 border-b border-border hover:border-primary/40 transition-colors"
            >
              <span className="font-display text-[11px] tracking-[0.2em] uppercase text-muted-foreground">{link.label}</span>
              <span className="font-body text-base text-foreground group-hover:text-primary transition-colors">{link.display}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
