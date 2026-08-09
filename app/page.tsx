import ParticleField from "@/app/components/ParticleField"
import HeroSection from "@/app/sections/HeroSection"
import AboutSection from "@/app/sections/AboutSection"
import ProjectsSection from "@/app/sections/ProjectsSection"
import ClipsSection from "@/app/sections/ClipsSection"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <ParticleField />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ClipsSection />
        <footer className="py-12 px-8 lg:px-20 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Clément Martin — Made with passion & caffeine
          </p>
        </footer>
      </div>
    </main>
  )
}