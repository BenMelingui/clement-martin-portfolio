"use client"

import ScrollReveal from "@/app/components/ScrollReveal"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Project Aether",
    category: "FPS Multijoueur",
    description: "Prototype de shooter arena en Unity avec système de mouvement avancé.",
    tags: ["Unity", "C#", "Photon"],
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Dungeon Crawler",
    category: "Roguelike",
    description: "Génération procédurale de donjons et système de loot complexe.",
    tags: ["Unreal", "Blueprints", "C++"],
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Overwatch Tracker",
    category: "Web App",
    description: "Dashboard d'analyse de stats pour suivre sa progression compétitive.",
    tags: ["React", "API", "Dataviz"],
    color: "bg-orange-500/10 text-orange-500",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-8 lg:px-20">
      <div className="max-w-5xl">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projets personnels</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">
            Une sélection de mes projets, du game jam au prototype ambitieux.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.15} direction="left">
              <div className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className={project.color}>
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}