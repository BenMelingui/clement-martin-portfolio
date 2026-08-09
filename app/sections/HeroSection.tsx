"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Gamepad2 } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-8 lg:px-20">
      <div className="max-w-2xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Gamepad2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
              Game Developer Student
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">Clément</span>
            <span className="block text-primary">Martin</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Étudiant en école de jeu vidéo. Passionné par le game design, 
            le développement et la compétition sur Overwatch.
          </p>

          <div className="flex gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8"
                onClick={() => {
                  const el = document.getElementById("projects")
                  if (el) {
                    window.scrollTo({
                      top: el.offsetTop - 20,
                      behavior: "smooth"
                    })
                  }
                }}
              >
                Voir mes projets
              </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}