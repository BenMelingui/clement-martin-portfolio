import { projectsData, getProjectBySlug } from "@/lib/projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Download, Video, Calendar, Layers, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Navigation retour */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au portfolio
          </Link>
        </div>

        {/* En-tête du projet */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary" className={project.color}>
              {project.type}
            </Badge>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {project.year}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="rounded-full gap-2 px-8 font-semibold">
                <Download className="w-4 h-4" />
                Télécharger le jeu (Créajeux)
              </Button>
            </a>
          </div>
        </div>

        {/* Vidéo YouTube / Trailer */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Video className="w-6 h-6 text-red-500" />
            Trailer & Gameplay
          </h2>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-card shadow-lg">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
              title={`${project.title} Trailer`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Rôle & Contributions / Réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 p-8 rounded-3xl bg-card border border-border">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Rôle et Contributions de Clément
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              {project.realizations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Technologies
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded-xl bg-muted font-semibold text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="w-full rounded-xl gap-2">
                <Download className="w-4 h-4" />
                Lien officiel Créajeux
              </Button>
            </a>
          </div>
        </div>

        {/* Galerie de Screenshots */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Galerie du jeu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.screenshots.map((src, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © 2026 Clément Martin — Projet développé à Créajeux
        </div>
      </div>
    </div>
  )
}
