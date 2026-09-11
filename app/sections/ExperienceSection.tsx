"use client"

import ScrollReveal from "@/app/components/ScrollReveal"
import { Briefcase, Award, Mail, Phone, UserCheck } from "lucide-react"

const experiences = [
  {
    title: "Global Game Jam",
    location: "Toulon",
    period: "Janvier 2026",
    role: "Développeur Gameplay (Événement)",
    description: "Création d’un jeu vidéo sur Unity en un week-end avec une équipe de programmeurs et graphistes.",
    bullet: "Développement des mécaniques de gameplay principales, dont une IA via le NavMesh d’Unity."
  },
  {
    title: "Agent d’accueil en station RATP",
    location: "Paris, CDG Étoile",
    period: "Juillet / Août 2024",
    role: "Agent d'accueil (Job d'été)",
    description: "Accueil et orientation des voyageurs étrangers et vente de titres de transport.",
    bullet: "Mission menée lors des Jeux Olympiques de Paris 2024."
  },
  {
    title: "Stage d’été de programmation jeux vidéo",
    location: "Créajeux, Nîmes",
    period: "Août 2022",
    role: "Stagiaire Programmeur",
    description: "Initiation intensive à la programmation de jeux vidéo.",
    bullet: "Premiers pas et découverte du développement sous Unity."
  },
]

export default function ExperienceSection() {
  return (
    <section className="relative py-32 px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Expériences & Événements</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">
            Implication dans la communauté, game jams et expériences professionnelles.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 0.1} direction="up">
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.period} — {exp.location}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium mb-3">{exp.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                  <p className="text-xs text-foreground/80 bg-muted/50 p-3 rounded-xl border border-border/40">
                    {exp.bullet}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Références */}
        <ScrollReveal delay={0.3}>
          <div className="p-8 rounded-3xl bg-card border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                  <UserCheck className="w-4 h-4" />
                  Référence académique
                </div>
                <h3 className="text-2xl font-bold mb-1">Chris Mabrier</h3>
                <p className="text-muted-foreground text-sm">
                  Enseignant à Créajeux (Architecture et Engine C++)
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:chris.mabrier@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border text-sm font-medium hover:border-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  chris.mabrier@gmail.com
                </a>
                <a
                  href="tel:+33673730685"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-background border border-border text-sm font-medium hover:border-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +33 6 73 73 06 85
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
