"use client"

import { useLanguage } from "@/lib/language-context"
import { events } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ArrowRight, CalendarPlus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const content = {
  en: {
    title: "Community Events",
    subtitle: "Connect, learn, and grow with your neighbors in Little Haiti",
    upcoming: "Upcoming",
    past: "Past Events",
    all: "All Events",
    workshop: "Workshop",
    networking: "Networking",
    community: "Community",
    training: "Training",
    register: "Register",
    viewDetails: "View Details",
    spotsLeft: "spots left",
    free: "Free",
    location: "Location",
    time: "Time",
    date: "Date",
    hostEvent: "Want to Host an Event?",
    hostText: "Partner with Konekte to organize workshops, networking events, or community gatherings.",
    hostButton: "Become a Host",
    addToCalendar: "Add to Calendar",
  },
  ht: {
    title: "Evènman Kominotè",
    subtitle: "Konekte, aprann, ak grandi ak vwazen ou nan Little Haiti",
    upcoming: "K ap Vini",
    past: "Evènman Pase",
    all: "Tout Evènman",
    workshop: "Atelye",
    networking: "Rezo",
    community: "Kominote",
    training: "Fòmasyon",
    register: "Enskri",
    viewDetails: "Wè Detay",
    spotsLeft: "plas ki rete",
    free: "Gratis",
    location: "Kote",
    time: "Lè",
    date: "Dat",
    hostEvent: "Ou Vle Òganize yon Evènman?",
    hostText: "Fè patenarya ak Konekte pou òganize atelye, evènman rezo, oswa rasanbleman kominotè.",
    hostButton: "Vin yon Òganizatè",
    addToCalendar: "Ajoute nan Kalandriye",
  },
}

export default function EventsPage() {
  const { language } = useLanguage()
  const t = content[language]
  const [filter, setFilter] = useState<"upcoming" | "past" | "all">("upcoming")

  const now = new Date()

  const filteredEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date)
      if (filter === "upcoming") return eventDate >= now
      if (filter === "past") return eventDate < now
      return true
    })
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return filter === "past" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
    })

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      workshop: t.workshop,
      networking: t.networking,
      community: t.community,
      training: t.training,
    }
    return labels[category] || category
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === "ht" ? "fr-HT" : "en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-accent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-foreground mb-4 text-balance">
              {t.title}
            </h1>
            <p className="text-xl text-accent-foreground/80">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 justify-center">
            <Button variant={filter === "upcoming" ? "default" : "outline"} onClick={() => setFilter("upcoming")}>
              {t.upcoming}
            </Button>
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              {t.all}
            </Button>
            <Button variant={filter === "past" ? "default" : "outline"} onClick={() => setFilter("past")}>
              {t.past}
            </Button>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredEvents.map((event) => {
              const eventDate = new Date(event.date)
              const isPast = eventDate < now

              return (
                <Card
                  key={event.id}
                  className={`group hover:shadow-lg transition-all ${isPast ? "opacity-75" : ""}`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Date Column */}
                    <div className="flex-shrink-0 p-6 bg-primary/5 md:w-32 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border">
                      <span className="text-3xl font-bold text-primary">{eventDate.getDate()}</span>
                      <span className="text-sm font-medium text-muted-foreground uppercase">
                        {eventDate.toLocaleDateString(language === "ht" ? "fr-HT" : "en-US", { month: "short" })}
                      </span>
                      <span className="text-xs text-muted-foreground">{eventDate.getFullYear()}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <Badge variant={isPast ? "secondary" : "default"}>{getCategoryLabel(event.category)}</Badge>
                        {event.isFree && (
                          <Badge variant="outline" className="border-accent text-accent">
                            {t.free}
                          </Badge>
                        )}
                      </div>

                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {event.title[language]}
                      </CardTitle>
                      <CardDescription className="mb-4">{event.description[language]}</CardDescription>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        {event.spotsLeft !== undefined && !isPast && (
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>
                              {event.spotsLeft} {t.spotsLeft}
                            </span>
                          </div>
                        )}
                      </div>

                      {!isPast && (
                        <div className="flex gap-2">
                          <Button asChild>
                            <Link href={`/events/${event.id}`}>
                              {t.register}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline">
                            <CalendarPlus className="mr-2 h-4 w-4" />
                            {t.addToCalendar}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No events found.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Host Event Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">{t.hostEvent}</CardTitle>
              <CardDescription className="text-base">{t.hostText}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link href="/contact">
                  {t.hostButton}
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
