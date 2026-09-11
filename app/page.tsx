import ParticleField from "@/app/components/ParticleField"
import HeroSection from "@/app/sections/HeroSection"
import AboutSection from "@/app/sections/AboutSection"
import SkillsSection from "@/app/sections/SkillsSection"
import ProjectsSection from "@/app/sections/ProjectsSection"
import ExperienceSection from "@/app/sections/ExperienceSection"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <ParticleField />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <footer className="py-12 px-8 lg:px-20 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2026 Clément Martin — Programmeur Junior Jeux Vidéo
          </p>
        </footer>
      </div>
    </main>
  )
}
