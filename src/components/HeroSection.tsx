import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Floating math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["∑", "∫", "∂", "σ", "μ", "π", "∇", "λ"].map((symbol, i) => (
          <motion.span
            key={i}
            className="absolute font-display text-muted-foreground/20 select-none"
            style={{
              fontSize: `${20 + Math.random() * 40}px`,
              left: `${10 + (i * 11)}%`,
              top: `${10 + (i * 9)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Data Science & Mathematical Statistics
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Turning </span>
            <span className="text-gradient-primary">data</span>
            <br />
            <span className="text-foreground">into </span>
            <span className="text-gradient-accent">insight</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            Student researcher exploring the intersection of statistical theory, 
            machine learning, and real-world problem solving.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-medium tracking-wide hover:opacity-90 transition-opacity glow-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md border border-border text-foreground font-display text-sm font-medium tracking-wide hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl"
        >
          {[
            { value: "12+", label: "Projects" },
            { value: "4.0", label: "GPA" },
            { value: "3", label: "Publications" },
            { value: "Python", label: "Primary Lang" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
