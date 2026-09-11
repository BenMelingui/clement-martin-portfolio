export interface Project {
  slug: string
  title: string
  period: string
  year: string
  type: string
  stack: string[]
  description: string
  realizations: string[]
  youtubeId: string // YouTube video ID for embed
  screenshots: string[]
  downloadUrl: string
  color: string
}

export const projectsData: Project[] = [
  {
    slug: "escape-moscow",
    title: "Escape Moscow",
    period: "Janvier - Mai 2026",
    year: "Projet 3ème année Créajeux",
    type: "FPS Photoréaliste",
    stack: ["Unity", "C#"],
    description: "FPS photoréaliste immersif développé dans le cadre de la 3ème année à Créajeux, mettant l'accent sur les sensations de tir, la tension et l'optimisation graphique.",
    realizations: [
      "Programmation Gameplay : Conception et intégration d'un contrôleur de personnage fluide et réactif.",
      "Système de compétences : Développement complet d'un arbre de compétences modulaires.",
      "Performance & Debugging : Optimisation approfondie du code, gestion des draw calls et résolution des goulots d'étranglement."
    ],
    youtubeId: "dQw4w9WgXcQ", // Placeholder video ID
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop"
    ],
    downloadUrl: "https://creajeux.fr",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    slug: "pulsar",
    title: "Pulsar",
    period: "Octobre - Décembre 2025",
    year: "Projet 3ème année Créajeux",
    type: "Tower Defense Mobile",
    stack: ["Unity", "C#"],
    description: "Tower Defense tactique et dynamique optimisé pour les plateformes mobiles, combinant gestion de ressources et stratégie en temps réel.",
    realizations: [
      "Programmation Gameplay : Création de feedbacks visuels percutants pour dynamiser les actions du joueur.",
      "Interface Mobile : Implémentation d’un contrôleur tactile intuitif et ergonomique adapté aux écrans mobiles.",
      "Équilibrage et fluidité : Suivi des performances sur divers devices mobiles."
    ],
    youtubeId: "dQw4w9WgXcQ",
    screenshots: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612287233002-ef1d016f5c88?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
    ],
    downloadUrl: "https://creajeux.fr",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
  {
    slug: "heavens-doom",
    title: "Heaven’s Doom",
    period: "Janvier - Mai 2025",
    year: "Projet 2ème année Créajeux",
    type: "Fighter Game",
    stack: ["SFML", "C++"],
    description: "Jeu de combat 2D nerveux et compétitif développé from scratch en C++ avec la bibliothèque SFML.",
    realizations: [
      "Architecture logicielle : Conception modulaire des systèmes de combat et des hitbox/hurtbox.",
      "Support Manette : Développement et intégration des entrées manette pour un gameplay fluide et réactif.",
      "UI & Immersion : Conception d’un menu immersif et gestion des états de jeu (Game Loop)."
    ],
    youtubeId: "0cjZGvxaDnM",
    screenshots: [
      "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
    ],
    downloadUrl: "https://creajeux.fr",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug)
}
