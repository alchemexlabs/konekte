"use client"

import { useLanguage } from "@/lib/language-context"
import { events } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, DollarSign, Building2, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const { language, t } = useLanguage()
  const { toast } = useToast()
  const event = events.find((e) => e.id === params.id)

  if (!event) {
    notFound()
  }

  // Get related events (same category, excluding current)
  const relatedEvents = events
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3)

  const categoryTranslationKey = `events.category.${event.category}` as const
  const categoryLabel = t(categoryTranslationKey)

  const eventDate = new Date(event.date)
  const endDate = event.endDate ? new Date(event.endDate) : null

  const formatEventDate = (date: Date) => {
    return date.toLocaleDateString(language === "en" ? "en-US" : "fr-HT", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatEventTime = (date: Date) => {
    return date.toLocaleTimeString(language === "en" ? "en-US" : "fr-HT", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const handleRegister = () => {
    if (event.spotsLeft === 0) {
      toast({
        title: t("events.soldOut"),
        description: "This event is currently full",
        variant: "destructive",
      })
    } else {
      toast({
        title: t("form.success"),
        description: "Registration confirmed! Check your email for details.",
      })
    }
  }

  const handleAddToCalendar = () => {
    toast({
      title: "Added to calendar",
      description: "Calendar file downloaded (demo mode)",
    })
  }

  const isSoldOut = event.spotsLeft === 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-sage py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-cream text-navy">
                {categoryLabel}
              </Badge>
              {event.featured && (
                <Badge className="bg-amber text-navy">
                  {t("events.featured")}
                </Badge>
              )}
              {event.isFree && (
                <Badge className="bg-sage text-white">
                  {t("events.free")}
                </Badge>
              )}
              {isSoldOut && (
                <Badge variant="destructive">
                  {t("events.soldOut")}
                </Badge>
              )}
            </div>
            <h1 className="font-playfair text-4xl font-bold tracking-tight text-white md:text-5xl">
              {event.title[language]}
            </h1>
            <div className="mt-6 grid gap-4 text-cream/90 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{formatEventDate(eventDate)}</p>
                  <p className="text-sm">
                    {formatEventTime(eventDate)}
                    {endDate && ` - ${formatEventTime(endDate)}`}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">{event.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About this event</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {event.description[language]}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Event details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{t("events.organizer")}</p>
                      <p className="text-sm text-muted-foreground">{event.organizer}</p>
                    </div>
                  </div>
                  {event.spotsLeft !== null && (
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Availability</p>
                        <p className="text-sm text-muted-foreground">
                          {event.spotsLeft > 0
                            ? `${event.spotsLeft} ${t("events.spotsLeft")} of ${event.totalSpots}`
                            : t("events.soldOut")}
                        </p>
                      </div>
                    </div>
                  )}
                  {!event.isFree && event.price && (
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Price</p>
                        <p className="text-sm text-muted-foreground">${event.price}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>{t("events.location")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">{event.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className={isSoldOut ? "border-2 border-muted" : "border-2 border-coral"}>
                <CardHeader>
                  <CardTitle className="text-center">
                    {isSoldOut ? "Event Full" : "Register now"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("events.date")}:</span>
                      <span className="font-semibold">{eventDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("events.time")}:</span>
                      <span className="font-semibold">{formatEventTime(eventDate)}</span>
                    </div>
                    {!event.isFree && event.price && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-semibold">${event.price}</span>
                      </div>
                    )}
                  </div>
                  <Button
                    onClick={handleRegister}
                    className="w-full bg-coral hover:bg-coral/90"
                    disabled={isSoldOut}
                  >
                    {isSoldOut ? t("events.soldOut") : t("events.register")}
                    {!isSoldOut && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                  <Button
                    onClick={handleAddToCalendar}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t("events.addToCalendar")}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">What to bring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    • Valid ID<br />
                    • Notepad and pen<br />
                    • Business documentation (if applicable)<br />
                    • Questions for the speakers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Events */}
          {relatedEvents.length > 0 && (
            <div className="mt-16">
              <h2 className="font-playfair text-2xl font-bold mb-6">
                {t("events.relatedEvents")}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedEvents.map((relatedEvent) => {
                  const relatedEventDate = new Date(relatedEvent.date)
                  return (
                    <Link
                      key={relatedEvent.id}
                      href={`/events/${relatedEvent.id}`}
                      className="group"
                    >
                      <Card className="h-full transition-all hover:shadow-lg">
                        <CardHeader>
                          <Badge variant="outline" className="w-fit mb-2">
                            {t(`events.category.${relatedEvent.category}` as const)}
                          </Badge>
                          <CardTitle className="text-lg group-hover:text-coral transition-colors">
                            {relatedEvent.title[language]}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{relatedEventDate.toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span className="line-clamp-1">{relatedEvent.location}</span>
                            </div>
                            {relatedEvent.isFree && (
                              <Badge className="bg-sage text-white">
                                {t("events.free")}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
