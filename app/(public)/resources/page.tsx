"use client"

import { useLanguage } from "@/lib/language-context"
import { resources } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Building2,
  GraduationCap,
  Heart,
  Scale,
  Briefcase,
  Home,
  Search,
  MapPin,
  Phone,
  Globe,
  ArrowRight,
  Users,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const content = {
  en: {
    title: "Community Resources",
    subtitle: "Find trusted services and support in Little Haiti",
    search: "Search resources...",
    all: "All",
    legal: "Legal",
    healthcare: "Healthcare",
    education: "Education",
    housing: "Housing",
    employment: "Employment",
    social: "Social Services",
    viewDetails: "View Details",
    visitWebsite: "Visit Website",
    call: "Call",
    verified: "Verified Partner",
    categories: "Categories",
    location: "Location",
    contact: "Contact",
    submitResource: "Know a Resource?",
    submitText: "Help us expand our directory by submitting organizations that serve our community.",
    submitButton: "Submit a Resource",
  },
  ht: {
    title: "Resous Kominotè",
    subtitle: "Jwenn sèvis ak sipò ou ka fè konfyans nan Little Haiti",
    search: "Chèche resous...",
    all: "Tout",
    legal: "Legal",
    healthcare: "Sante",
    education: "Edikasyon",
    housing: "Lojman",
    employment: "Travay",
    social: "Sèvis Sosyal",
    viewDetails: "Wè Detay",
    visitWebsite: "Vizite Sit Entènèt",
    call: "Rele",
    verified: "Patnè Verifye",
    categories: "Kategori",
    location: "Kote",
    contact: "Kontak",
    submitResource: "Konnen yon Resous?",
    submitText: "Ede nou elaji direktwa nou an lè w soumèt òganizasyon ki sèvi kominote nou an.",
    submitButton: "Soumèt yon Resous",
  },
}

const categoryIcons: Record<string, any> = {
  legal: Scale,
  healthcare: Heart,
  education: GraduationCap,
  housing: Home,
  employment: Briefcase,
  social: Users,
}

export default function ResourcesPage() {
  const { language } = useLanguage()
  const t = content[language]
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: t.all },
    { id: "legal", label: t.legal },
    { id: "healthcare", label: t.healthcare },
    { id: "education", label: t.education },
    { id: "housing", label: t.housing },
    { id: "employment", label: t.employment },
  ]

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      legal: t.legal,
      healthcare: t.healthcare,
      education: t.education,
      housing: t.housing,
      employment: t.employment,
      social: t.social,
    }
    return labels[category] || category
  }

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.name.ht.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.ht.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === "all" || resource.category === activeFilter
    return matchesSearch && matchesFilter
  })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
              {t.title}
            </h1>
            <p className="text-xl text-secondary-foreground/80">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t.search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => {
              const IconComponent = categoryIcons[resource.category] || Building2
              return (
                <Card key={resource.id} className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {resource.verified && (
                        <Badge variant="outline" className="border-accent text-accent">
                          {t.verified}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {resource.name[language]}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {getCategoryLabel(resource.category)}
                    </Badge>
                    <CardDescription className="line-clamp-2 mt-2">{resource.description[language]}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{resource.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{resource.phone}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {resource.website && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={resource.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-4 w-4" />
                            {t.visitWebsite}
                          </a>
                        </Button>
                      )}
                      <Button size="sm" className="flex-1" asChild>
                        <a href={`tel:${resource.phone}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          {t.call}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Resource Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">{t.submitResource}</CardTitle>
              <CardDescription className="text-base">{t.submitText}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link href="/contact">
                  {t.submitButton}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
