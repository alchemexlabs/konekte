"use client"

import { useLanguage } from "@/lib/language-context"
import { grants } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, DollarSign, Clock, ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const content = {
  en: {
    title: "Grant Opportunities",
    subtitle: "Find funding for your business, education, and community projects",
    search: "Search grants...",
    filter: "Filter",
    all: "All",
    business: "Business",
    education: "Education",
    housing: "Housing",
    deadline: "Deadline",
    amount: "Up to",
    apply: "Apply Now",
    viewDetails: "View Details",
    featured: "Featured",
    closingSoon: "Closing Soon",
    needHelp: "Need Help Applying?",
    helpText: "Our team can assist you with grant applications in both English and Kreyòl.",
    getHelp: "Get Application Help",
  },
  ht: {
    title: "Opòtinite Sibvansyon",
    subtitle: "Jwenn finansman pou biznis ou, edikasyon, ak pwojè kominotè",
    search: "Chèche sibvansyon...",
    filter: "Filtre",
    all: "Tout",
    business: "Biznis",
    education: "Edikasyon",
    housing: "Lojman",
    deadline: "Dat limit",
    amount: "Jiska",
    apply: "Aplike Kounye a",
    viewDetails: "Wè Detay",
    featured: "Enpòtan",
    closingSoon: "Ap Fèmen Byento",
    needHelp: "Ou Bezwen Èd pou Aplike?",
    helpText: "Ekip nou an ka ede w ak aplikasyon sibvansyon an Angle ak Kreyòl.",
    getHelp: "Jwenn Èd pou Aplikasyon",
  },
}

export default function GrantsPage() {
  const { language } = useLanguage()
  const t = content[language]
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: t.all },
    { id: "business", label: t.business },
    { id: "education", label: t.education },
    { id: "housing", label: t.housing },
  ]

  const filteredGrants = grants.filter((grant) => {
    const matchesSearch =
      grant.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grant.title.ht.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = activeFilter === "all" || grant.category === activeFilter
    return matchesSearch && matchesFilter
  })

  const isClosingSoon = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const today = new Date()
    const daysUntil = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return daysUntil <= 14 && daysUntil > 0
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              {t.title}
            </h1>
            <p className="text-xl text-primary-foreground/90">{t.subtitle}</p>
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

      {/* Grants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGrants.map((grant) => (
              <Card
                key={grant.id}
                className={`group hover:shadow-lg transition-all ${grant.featured ? "ring-2 ring-accent" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant={grant.category === "business" ? "default" : "secondary"}>
                      {grant.category === "business"
                        ? t.business
                        : grant.category === "education"
                          ? t.education
                          : t.housing}
                    </Badge>
                    <div className="flex gap-1">
                      {grant.featured && (
                        <Badge variant="outline" className="border-accent text-accent">
                          {t.featured}
                        </Badge>
                      )}
                      {isClosingSoon(grant.deadline) && (
                        <Badge variant="destructive" className="text-xs">
                          {t.closingSoon}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {grant.title[language]}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{grant.description[language]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>
                        {t.amount} ${grant.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {t.deadline}: {new Date(grant.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link href={`/grants/${grant.id}`}>
                        {t.apply}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGrants.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No grants found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">{t.needHelp}</CardTitle>
              <CardDescription className="text-base">{t.helpText}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link href="/contact">{t.getHelp}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
