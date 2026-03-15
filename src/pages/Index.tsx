import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-dot-grid">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_180px] gap-0">
          {/* Left margin column */}
          <aside className="hidden lg:block border-r border-border/40 pr-5 pt-[85vh]">
            <div className="sticky top-28 space-y-14">
              <div className="margin-note">
                <p className="mb-1.5 text-primary">§ nav</p>
                <a href="#about" className="block py-0.5 hover:text-primary transition-colors">About</a>
                <a href="#projects" className="block py-0.5 hover:text-primary transition-colors">Projects</a>
                <a href="#experience" className="block py-0.5 hover:text-primary transition-colors">Experience</a>
                <a href="#contact" className="block py-0.5 hover:text-primary transition-colors">Contact</a>
              </div>
              <div className="margin-note">
                <p className="text-primary mb-1.5">§ ref</p>
                <p>Stockholm Univ.</p>
                <p>2023–2026</p>
              </div>
            </div>
          </aside>

          {/* Main content column */}
          <main className="md:px-12 lg:px-16 min-w-0">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          {/* Right margin column */}
          <aside className="hidden lg:block border-l border-border/40 pl-5 pt-[85vh]">
            <div className="sticky top-28 space-y-14">
              <div className="margin-note">
                <p className="text-primary mb-1.5">§ status</p>
                <p>Looking for</p>
                <p>internships in</p>
                <p>data science &</p>
                <p>analytics</p>
              </div>
              <div className="margin-note">
                <p className="text-primary mb-1.5">§ tools</p>
                <p>Python, R, SQL</p>
                <p>FEniCSx, MPI</p>
                <p>LaTeX, Git</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="py-8 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
          <p className="font-display text-[11px] tracking-wider text-muted-foreground/60">
            © 2026 Sebastijan Babić
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
