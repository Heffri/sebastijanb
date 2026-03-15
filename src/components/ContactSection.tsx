import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-primary">04</span>
          <div className="w-8 h-px bg-primary" />
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Contact</span>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              Let's work<br />
              <span className="text-gradient">together.</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed font-light max-w-sm">
              Open to internships, research collaborations, and conversations about statistics, 
              data science, and scientific computing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 flex flex-col justify-end"
          >
            <div className="space-y-5">
              {[
                { label: "GitHub", href: "https://github.com/Heffri", display: "github.com/Heffri" },
                { label: "LinkedIn", href: "https://linkedin.com/in/sebastijanbabic", display: "in/sebastijanbabic" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-border hover:border-primary/30 transition-colors"
                >
                  <span className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
                    {link.display}
                  </span>
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
