"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language, t } = useLanguage()

  const footerLinks = {
    resources: [
      { label: language === "en" ? "Community Directory" : "Anyè Kominotè", href: "/resources" },
      { label: language === "en" ? "Grant Programs" : "Pwogram Sibvansyon", href: "/grants" },
      { label: language === "en" ? "Financial Academy" : "Akademi Finansyè", href: "/academy" },
      { label: language === "en" ? "Events" : "Evènman", href: "/events" },
    ],
    about: [
      { label: language === "en" ? "Our Mission" : "Misyon Nou", href: "/about" },
      { label: language === "en" ? "Our Team" : "Ekip Nou", href: "/about#team" },
      { label: language === "en" ? "Partners" : "Patnè", href: "/about#partners" },
      { label: language === "en" ? "Contact" : "Kontak", href: "/contact" },
    ],
    legal: [
      { label: t("footer.privacy"), href: "/privacy" },
      { label: t("footer.terms"), href: "/terms" },
      { label: language === "en" ? "Accessibility" : "Aksesibilite", href: "/contact" },
    ],
  }

  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold">Konekte</span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              {language === "en" 
                ? "A community resource fabric for Little Haiti. Built on the Little Haiti Revitalization Trust."
                : "Yon rezo resous kominotè pou Little Haiti. Bati sou Little Haiti Revitalization Trust."
              }
            </p>
            <div className="text-sm text-cream/60">
              <p>7420 NE 2nd Ave</p>
              <p>Miami, FL 33138</p>
              <p className="mt-2">info@konekte.org</p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{language === "en" ? "Resources" : "Resous"}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/70 hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">{language === "en" ? "About" : "Apropo"}</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/70 hover:text-cream transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners stack */}
          <div>
            <h3 className="font-semibold mb-4">{language === "en" ? "Partners" : "Patnè"}</h3>
            <div className="space-y-3 text-sm text-cream/70">
              <p>Little Haiti Revitalization Trust</p>
              <p>Silicon Valley Bank</p>
              <p>Modern Treasury</p>
              <p>First Citizens Bank</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/60">
              © {new Date().getFullYear()} Konekte. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
