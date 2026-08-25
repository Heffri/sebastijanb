import { motion } from "framer-motion";
import { researchCategories, type ResearchProject } from "@/data/research";

const CARD_CLASS = "group block bg-background/60 border border-border/50 p-3 transition-all";

const ProjectBody = ({ project }: { project: ResearchProject }) => (
  <>
    <div className="flex items-start justify-between gap-2 mb-1.5">
      <h4 className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
        {project.title}
      </h4>
      {project.link && (
        <span className="font-display text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          &#8599;
        </span>
      )}
    </div>
    <p className="font-body text-[13px] text-muted-foreground leading-relaxed mb-2">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-1">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="font-display text-[10px] px-1.5 py-0.5 border border-border/60 text-muted-foreground uppercase tracking-wider"
        >
          {tag}
        </span>
      ))}
    </div>
  </>
);

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-primary">03</span>
          <h2 className="font-body text-3xl font-bold text-foreground">Research &amp; coursework</h2>
        </div>
        <div className="w-full h-px bg-border mt-4" />
      </motion.div>

      <p className="font-body text-base text-muted-foreground italic mb-10 max-w-2xl">
        University work and competition entries, where the deliverable is a method or a result
        rather than a running service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {researchCategories.map((category, ci) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.04 }}
            className="border border-border/60 bg-card/30 p-3 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-2 px-1 pb-2 border-b border-border/40">
              <span className="font-display text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {category.name}
              </span>
              <span className="font-display text-[11px] text-primary shrink-0">
                {category.projects.length}
              </span>
            </div>

            {category.note && (
              <p className="font-display text-[10px] uppercase tracking-[0.15em] text-primary px-1">
                {category.note}
              </p>
            )}

            {category.projects.map((project) =>
              project.link ? (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CARD_CLASS + " hover:border-primary/60 hover:bg-card/60"}
                >
                  <ProjectBody project={project} />
                </a>
              ) : (
                <div key={project.title} className={CARD_CLASS}>
                  <ProjectBody project={project} />
                </div>
              )
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <a
          href="https://github.com/Heffri"
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          All repos on GitHub &#8594;
        </a>
      </motion.div>
    </section>
  );
};

export default ResearchSection;
