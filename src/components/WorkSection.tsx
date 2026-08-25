import { motion } from "framer-motion";
import { workSystems } from "@/data/work";

const WorkSection = () => {
  return (
    <section id="work" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-primary">02</span>
          <h2 className="font-body text-3xl font-bold text-foreground">Systems</h2>
        </div>
        <div className="w-full h-px bg-border mt-4" />
      </motion.div>

      <p className="font-body text-base text-muted-foreground italic mb-14 max-w-2xl">
        Things built to be used by someone other than me.
      </p>

      <div className="space-y-20">
        {workSystems.map((system, i) => (
          <motion.article
            key={system.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-12 gap-x-10 gap-y-6"
          >
            <div className="md:col-span-3">
              <div className="md:sticky md:top-24">
                <span className="font-display text-[11px] tracking-[0.3em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-body text-2xl font-bold text-foreground mt-2 leading-tight">
                  {system.name}
                </h3>
                <p className="font-display text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-3 leading-relaxed">
                  {system.context}
                </p>
                <div className="w-8 h-px bg-primary/30 my-4" />
                <p className="font-display text-[11px] tracking-wider text-muted-foreground">
                  {system.period}
                </p>
                <p className="font-display text-[11px] tracking-wider text-primary mt-1">
                  {system.status}
                </p>
                {system.link && (
                  <a
                    href={system.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-[11px] tracking-wider text-muted-foreground hover:text-primary transition-colors mt-4 inline-block break-all"
                  >
                    {system.link.label}
                  </a>
                )}
                {system.source === "private" && (
                  <p className="font-display text-[11px] tracking-wider text-muted-foreground mt-2">
                    Private repository
                  </p>
                )}
              </div>
            </div>

            <div className="md:col-span-9 min-w-0">
              <p className="font-body text-base text-foreground leading-[1.8] mb-8">
                {system.summary}
              </p>

              <ul className="space-y-4 mb-8">
                {system.highlights.map((highlight, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="font-display text-[11px] text-primary pt-[6px] shrink-0">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-base text-muted-foreground leading-[1.75]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-6 border-t border-border/50">
                {system.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-display text-[10px] px-2 py-1 border border-border/60 text-muted-foreground uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
