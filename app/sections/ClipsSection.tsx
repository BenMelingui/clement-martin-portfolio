"use client"

import ScrollReveal from "@/app/components/ScrollReveal"
import { Play, Eye } from "lucide-react"

const clips = [
  { title: "6K Genji Blade", map: "King's Row", views: "12.4k", duration: "0:32" },
  { title: "Clutch 1v3 Tank", map: "Lijiang Tower", views: "8.2k", duration: "0:45" },
  { title: "Perfect Zarya Grav", map: "Nepal", views: "24.1k", duration: "0:18" },
  { title: "Speedrun Any%", map: "Workshop", views: "5.6k", duration: "1:12" },
]

export default function ClipsSection() {
  return (
    <section className="relative py-32 px-8 lg:px-20 bg-muted/30">
      <div className="max-w-5xl">
        <ScrollReveal>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Mes clips OW</h2>
          <p className="text-muted-foreground mb-16 max-w-xl">
            Moments forts, clutch et plays stylés. Top 500 tank/support.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clips.map((clip, i) => (
            <ScrollReveal key={clip.title} delay={i * 0.1} direction="up">
              <div className="group relative aspect-video rounded-2xl bg-card border border-border overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300">
                {/* Thumbnail placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-xs text-white font-mono">
                  {clip.duration}
                </div>

                {/* Overlay info */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white font-semibold mb-1">{clip.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <span>{clip.map}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {clip.views}
                    </span>
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