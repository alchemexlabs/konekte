"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  MapPin,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Filter,
} from "lucide-react"
import { matchedResources } from "@/lib/mock-data"

export default function DashboardMatching() {
  const { language } = useLanguage()
  const [expandedResource, setExpandedResource] = useState<string | null>(null)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const categories = [
    { id: "capital", label: language === "en" ? "Capital" : "Kapital" },
    { id: "education", label: language === "en" ? "Education" : "Edikasyon" },
    { id: "legal", label: language === "en" ? "Legal" : "Legal" },
    { id: "housing", label: language === "en" ? "Housing" : "Lojman" },
    { id: "childcare", label: language === "en" ? "Childcare" : "Gadri" },
    { id: "workforce", label: language === "en" ? "Workforce" : "Mendèv" },
  ]

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    )
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "bg-sage text-white"
    if (score >= 80) return "bg-amber text-white"
    return "bg-secondary text-secondary-foreground"
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "grants":
      case "micro-loans":
        return "bg-coral/10 text-coral"
      case "education":
        return "bg-sage/10 text-sage"
      case "legal":
        return "bg-navy/10 text-navy"
      case "housing":
        return "bg-amber/10 text-amber"
      case "workforce":
        return "bg-coral/10 text-coral"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl font-medium text-navy mb-2">
          {language === "en" ? "Resource Matches" : "Match Resous"}
        </h1>
        <p className="text-muted-foreground">
          {language === "en"
            ? "Personalized resources based on your profile and needs"
            : "Resous pèsonalize baze sou pwofil ou ak bezwen ou"
          }
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2 mr-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{language === "en" ? "Filter:" : "Filtre:"}</span>
        </div>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => toggleCategory(category.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategories.includes(category.id)
                ? "bg-navy text-cream"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="space-y-4">
        {matchedResources.map((resource) => (
          <Card
            key={resource.id}
            className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Match Score */}
                <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center flex-shrink-0 ${getMatchScoreColor(resource.matchScore)}`}>
                  <span className="text-lg font-bold">{resource.matchScore}</span>
                  <span className="text-[10px] uppercase">%</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-medium text-navy text-lg">{resource.title}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <Badge className={`${getCategoryColor(resource.category)} border-0 text-xs`}>
                          {resource.category}
                        </Badge>
                        {resource.distance !== "N/A" && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {resource.distance}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex-shrink-0">
                      {language === "en" ? "View details" : "Gade detay"}
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3">
                    {resource.description}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-navy">{language === "en" ? "Eligibility:" : "Kalifikasyon:"}</span>{" "}
                    {resource.eligibility}
                  </p>

                  {/* Why This Match - Expandable */}
                  <div className="mt-4">
                    <button
                      onClick={() => setExpandedResource(
                        expandedResource === resource.id ? null : resource.id
                      )}
                      className="flex items-center gap-2 text-sm font-medium text-coral hover:text-coral/80 transition-colors"
                    >
                      <Sparkles className="h-4 w-4" />
                      {language === "en" ? "Why this match?" : "Poukisa match sa a?"}
                      {expandedResource === resource.id ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {expandedResource === resource.id && (
                      <div className="mt-3 p-4 bg-secondary/30 rounded-xl">
                        <p className="text-sm text-muted-foreground mb-3">
                          {language === "en"
                            ? "This resource matched based on the following signals from your profile:"
                            : "Resous sa a match baze sou siyal sa yo nan pwofil ou:"
                          }
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {resource.signals.map((signal, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-white text-navy text-xs"
                            >
                              {signal}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {matchedResources.length === 0 && (
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="py-16 text-center">
            <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="font-medium text-navy mb-1">
              {language === "en" ? "No matches yet" : "Pa gen match pou kounye a"}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "en"
                ? "Tell us a bit more about your business to get started."
                : "Di nou plis sou biznis ou pou kòmanse."
              }
            </p>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              {language === "en" ? "Complete your profile" : "Konplete pwofil ou"}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
