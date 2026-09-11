"use client"

import ScrollReveal from "@/app/components/ScrollReveal"
import { Code, Cpu, Wrench, Layers, Eye, Users } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Langages",
    items: ["C", "C++", "C#"],
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    icon: Cpu,
    title: "Moteurs & Frameworks",
    items: ["Unity", "SFML"],
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
  {
    icon: Wrench,
    title: "Outils & Versioning",
    items: ["TortoiseSVN", "Visual Studio"],
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
  {
    icon: Layers,
    title: "Architectures & Patterns",
    items: ["Visitor", "Singleton", "Architecture ECS"],
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
  {
    icon: Eye,
    title: "Programmation Graphique",
    items: ["Bases du rendu", "Création de shaders personnalisés"],
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Travail en équipe", "Rigueur", "Ponctualité"],
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
  },
]

export default function SkillsSection() {
  return (
    <section className="relative py-32 px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Compétences</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">
            Maîtrise technique et méthodologique en programmation de jeux vidéo.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1} direction="up">
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${cat.color} group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
