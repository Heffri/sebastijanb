import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-primary">04</span>
          <div className="w-8 h-px bg-primary" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Say hello.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="space-y-3">
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
                  className="group flex items-center justify-between py-3 border-b border-border hover:border-primary/30 transition-colors"
                >
                  <span className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{link.label}</span>
                  <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{link.display}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
