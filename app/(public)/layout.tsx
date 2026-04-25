"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
