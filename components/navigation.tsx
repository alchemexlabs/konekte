"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  const { language, toggleLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/resources", label: t("nav.resources") },
    { href: "/grants", label: t("nav.grants") },
    { href: "/academy", label: t("nav.academy") },
    { href: "/events", label: t("nav.events") },
    { href: "/about", label: t("nav.about") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-card/80 backdrop-blur-sm border-b border-border/50"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-cream font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-semibold text-navy">Konekte</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-secondary"
            >
              <span className={language === "en" ? "text-foreground font-semibold" : ""}>EN</span>
              <span className="text-foreground/40">|</span>
              <span className={language === "kr" ? "text-foreground font-semibold" : ""}>KR</span>
            </button>

            {/* Sign In */}
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-sm">
                {t("nav.signIn")}
              </Button>
            </Link>

            {/* Primary CTA */}
            <Link href="/sign-up" className="hidden sm:block">
              <Button size="sm" className="bg-coral hover:bg-coral/90 text-white shadow-sm">
                {t("nav.getMatched")}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-card">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Language Toggle Mobile */}
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <span className={language === "en" ? "text-coral font-semibold" : "text-foreground/70"}>English</span>
                    <span className="text-foreground/40">/</span>
                    <span className={language === "kr" ? "text-coral font-semibold" : "text-foreground/70"}>Kreyòl</span>
                  </button>

                  {/* Mobile Nav Links */}
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-coral transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTAs */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-border">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        {t("nav.signIn")}
                      </Button>
                    </Link>
                    <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-coral hover:bg-coral/90 text-white">
                        {t("nav.getMatched")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
