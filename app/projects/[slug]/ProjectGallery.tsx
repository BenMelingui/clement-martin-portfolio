"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"

interface ProjectGalleryProps {
  screenshots: string[]
  title: string
}

export default function ProjectGallery({ screenshots, title }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {screenshots.map((src, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(src)}
            className="group relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black"
          >
            <img
              src={activeImage}
              alt="Agrandissement capture d'écran"
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </>
  )
}
