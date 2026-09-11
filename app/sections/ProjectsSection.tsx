"use client"

import ScrollReveal from "@/app/components/ScrollReveal"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"
import { projectsData } from "@/lib/projects"
import Link from "next/link"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-8 lg:px-20 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projets académiques</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">
            Réalisations majeures issues de mon parcours à Créajeux, alliant gameplay, architecture et performance. Cliquez sur un projet pour voir les détails.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {projectsData.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.15} direction="left">
              <Link
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className={project.color}>
                          {project.type}
                        </Badge>
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.period}
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2 bg-muted/50 p-4 rounded-xl border border-border/50">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Réalisations principales</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.realizations.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-background border border-border font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
