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
    stack: ["Unity HDRP", "C#"],
    description: "FPS photoréaliste immersif développé dans le cadre de la 3ème année à Créajeux, mettant l'accent sur les sensations de tir, la tension et l'optimisation graphique.",
    realizations: [
      "Programmation Gameplay : Conception et intégration d'un contrôleur de personnage fluide et réactif.",
      "Système de compétences : Développement complet d'un arbre de compétences modulaires.",
      "Performance & Debugging : Optimisation approfondie du code, gestion des draw calls et résolution des goulots d'étranglement."
    ],
    youtubeId: "8ZHNlsrWzFA", // Placeholder video ID
    screenshots: [
      "/images/Image1.png",
      "/images/Image4.png",
      "/images/Image9.png"
    ],
    downloadUrl: "https://www.creajeux.fr/projet/escape-moscow/",
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
    youtubeId: "",
    screenshots: [
      "/images/Pulsar1.jpg",
      "/images/Pulsar2.jpg",
      "/images/Pulsar3.jpg"
    ],
    downloadUrl: "",
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
      "Architecture : Conception des différents joueurs/personnages via polymorphisme et héritage.",
      "Programmation Gameplay : Implémation des capacités liées au personnage Witch et gestion de des inputs manettes.",
      "UI : Conception d’un menu immersif et interactible."
    ],
    youtubeId: "0cjZGvxaDnM",
    screenshots: [
      "/images/Capture9.png",
      "/images/Capture4.png",
      "/images/Capture11.png"
    ],
    downloadUrl: "https://www.creajeux.fr/projet/heavens-doom/",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  },
    {
    slug: "soulbound",
    title: "Soulbound",
    period: "Janvier - Mai 2024",
    year: "Projet 1ème année Créajeux",
    type: "Platformer 2D",
    stack: ["CSFML", "C"],
    description: "SoulBound est un jeu qui mélange exploration et combats à travers une grande carte faite pour donner au joueur une sensation de liberté, avec de nombreuses routes possibles, différentes et variées à emprunter",
    realizations: [
      "Programmation Gameplay : Conception murs destructibles et gestion des objets ramassables.",
      "Programmation IA : Développement des ennemis du jeu : IA de patrouille, poursuite et attaque.",
      "UI : Conception d’un menu d'inventaire et de pause.",
      "Optimisation : Gestion de la mémoire en ne chargeant que les objets que l'on voit."
    ],
    youtubeId: "51VyEXqlCKQ",
    screenshots: [
      "/images/soulbound1.png",
      "https://www.creajeux.fr/wp-content/uploads/2026/01/captures-4.webp",
      "/images/soulbound2.png"
    ],
    downloadUrl: "https://www.creajeux.fr/projet/soulbound/",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug)
}
