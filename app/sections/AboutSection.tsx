"use client"

import ScrollReveal from "@/app/components/ScrollReveal"
import { GraduationCap, Languages, Heart, BookOpen } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative py-32 px-8 lg:px-20 bg-muted/30">
      <div className="max-w-5xl">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Formation & Profil
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            Étudiant passionné en programmation de jeux vidéo à Créajeux, avec une forte appétence
            pour le développement sous Unity et la conception de systèmes de gameplay robustes.
            Rigoureux, ponctuel et doté d'un solide esprit d'équipe forgé en game jam et en milieu professionnel.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Formation */}
          <ScrollReveal delay={0.2} direction="up">
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <GraduationCap className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4">Formation</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Créajeux</strong> <br />
                    Programmeur jeux vidéo (De 2023 à aujourd’hui)
                  </li>
                  <li className="pt-2 border-t border-border">
                    <strong className="text-foreground">Baccalauréat</strong> <br />
                    Spécialités Mathématiques et NSI (2023)
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Langues */}
          <ScrollReveal delay={0.3} direction="up">
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <Languages className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4">Langues</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Français :</strong> Langue maternelle
                  </li>
                  <li>
                    <strong className="text-foreground">Anglais :</strong> Niveau B2
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Centres d'intérêt */}
          <ScrollReveal delay={0.4} direction="up">
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between">
              <div>
                <Heart className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4">Centres d'intérêt</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Jeux vidéo en compétition</li>
                  <li>Cinéma</li>
                  <li>Jeux de société</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
