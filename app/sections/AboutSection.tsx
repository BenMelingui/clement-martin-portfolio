"use client"

import ScrollReveal from "@/app/components/ScrollReveal"
import { Code2, Palette, Swords } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Développement",
    desc: "Unity, C#, Unreal Engine & outils de scripting",
  },
  {
    icon: Palette,
    title: "Game Design",
    desc: "Level design, mécaniques de jeu & équilibrage",
  },
  {
    icon: Swords,
    title: "Compétition",
    desc: "Top 500 Overwatch, analyse de méta & stratégie",
  },
]

export default function AboutSection() {
  return (
    <section className="relative py-32 px-8 lg:px-20 bg-muted/30">
      <div className="max-w-4xl">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Qui suis-je ?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Je suis étudiant en game development avec une appétence particulière 
            pour les jeux de compétition. Entre deux lignes de code, tu me trouveras 
            probablement en train de grind le ladder ou de théoriser sur la prochaine méta.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={0.2 + i * 0.1} direction="up">
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}