"use client"

import Link from "next/link"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Home, LayoutDashboard, SearchX } from "lucide-react"

function NotFoundContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-coral/20 blur-2xl rounded-full" />
            <div className="relative bg-gradient-to-br from-navy to-sage rounded-full p-8">
              <SearchX className="h-16 w-16 text-cream" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-navy/90 mb-2">
          {t("notFound.title")}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t("notFound.description")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-coral hover:bg-coral/90">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              {t("notFound.goHome")}
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              {t("notFound.goDashboard")}
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/grants" className="text-navy hover:underline">
              Grants
            </Link>
            <Link href="/academy" className="text-navy hover:underline">
              Academy
            </Link>
            <Link href="/events" className="text-navy hover:underline">
              Events
            </Link>
            <Link href="/resources" className="text-navy hover:underline">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  )
}
