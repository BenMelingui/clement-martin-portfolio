import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/app/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Clément Martin — Programmeur Jeux Vidéo",
  description: "Portfolio de Clément Martin, étudiant en programmation de jeux vidéo à Créajeux. Découvrez mes projets, compétences et expériences.",
  metadataBase: new URL("https://clement-martin.net"),
  openGraph: {
    title: "Clément Martin — Programmeur Jeux Vidéo",
    description: "Portfolio de Clément Martin, étudiant en programmation de jeux vidéo à Créajeux.",
    url: "https://clement-martin.net",
    siteName: "Clément Martin Portfolio",
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
