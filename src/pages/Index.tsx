import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-dot-grid scroll-smooth">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr_180px] gap-0">
          {/* Left margin column */}
          <aside className="hidden lg:block border-r border-border/40 pr-5">
            <div className="sticky top-28 space-y-12 pt-[40vh]">
              <div className="margin-note">
                <p className="mb-2 text-primary font-bold">§ nav</p>
                <div className="w-6 h-px bg-primary/30 mb-2" />
                <a href="#about" className="block py-0.5 hover:text-primary transition-colors">About</a>
                <a href="#projects" className="block py-0.5 hover:text-primary transition-colors">Projects</a>
                <a href="#experience" className="block py-0.5 hover:text-primary transition-colors">Experience</a>
                <a href="#contact" className="block py-0.5 hover:text-primary transition-colors">Contact</a>
              </div>
              <div className="margin-note">
                <p className="text-primary font-bold mb-2">§ ref</p>
                <div className="w-6 h-px bg-primary/30 mb-2" />
                <p>Stockholm Univ.</p>
                <p>2023–2026</p>
              </div>
            </div>
          </aside>

          {/* Main content column */}
          <main className="md:px-12 lg:px-16 min-w-0">
            <HeroSection />
            <div className="w-full flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-border" />
              <span className="font-display text-[10px] text-muted-foreground/40">✦</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <AboutSection />
            <div className="w-full flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-border" />
              <span className="font-display text-[10px] text-muted-foreground/40">✦</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <ProjectsSection />
            <div className="w-full flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-border" />
              <span className="font-display text-[10px] text-muted-foreground/40">✦</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <ExperienceSection />
            <div className="w-full flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-border" />
              <span className="font-display text-[10px] text-muted-foreground/40">✦</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <ContactSection />
          </main>

          {/* Right margin column */}
          <aside className="hidden lg:block border-l border-border/40 pl-5">
            <div className="sticky top-28 space-y-12 pt-[40vh]">
              <div className="margin-note">
                <p className="text-primary font-bold mb-2">§ status</p>
                <div className="w-6 h-px bg-primary/30 mb-2" />
                <p>Looking for</p>
                <p>internships in</p>
                <p>data science &</p>
                <p>analytics</p>
              </div>
              <div className="margin-note">
                <p className="text-primary font-bold mb-2">§ tools</p>
                <div className="w-6 h-px bg-primary/30 mb-2" />
                <p>Python, R, SQL</p>
                <p>FEniCSx, MPI</p>
                <p>LaTeX, Git</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="mt-12 py-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
          <p className="font-display text-[11px] tracking-wider text-muted-foreground/50">
            © 2026 Sebastijan Babić
          </p>
          <p className="font-display text-[11px] tracking-wider text-muted-foreground/30">
            Stockholm, Sweden
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
