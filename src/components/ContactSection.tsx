import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            Open to research collaborations, internship opportunities, and interesting conversations 
            about statistics and data science.
          </p>
          <div className="space-y-4 font-display text-sm">
            <a href="https://github.com/Heffri" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-primary transition-colors">
              → GitHub
            </a>
            <a href="https://linkedin.com/in/sebastijanbabic" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-primary transition-colors">
              → LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
