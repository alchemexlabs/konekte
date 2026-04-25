"use client"

import { useLanguage } from "@/lib/language-context"
import { grants, formatCurrency, formatDate } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function GrantDetailPage({ params }: { params: { id: string } }) {
  const { language, t } = useLanguage()
  const grant = grants.find((g) => g.id === params.id)

  if (!grant) {
    notFound()
  }

  // Get related grants (same category, excluding current)
  const relatedGrants = grants
    .filter((g) => g.category === grant.category && g.id !== grant.id)
    .slice(0, 3)

  const categoryTranslationKey = `grants.category.${grant.category}` as const
  const categoryLabel = t(categoryTranslationKey)

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
              {grant.featured && (
                <Badge className="bg-amber text-navy">
                  {t("grants.featured")}
                </Badge>
              )}
            </div>
            <h1 className="font-playfair text-4xl font-bold tracking-tight text-white md:text-5xl">
              {grant.title[language]}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-cream/90">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <span className="text-xl font-semibold">{formatCurrency(grant.amount)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{t("grants.deadline")}: {formatDate(grant.deadline)}</span>
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
                  <CardTitle>About this grant</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {grant.description[language]}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("grants.eligibility")}</CardTitle>
                  <CardDescription>Requirements to apply for this grant</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {grant.eligibility[language].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-sage mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-2 border-coral">
                <CardHeader>
                  <CardTitle className="text-center">Ready to apply?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("grants.amount")}:</span>
                      <span className="font-semibold">{formatCurrency(grant.amount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("grants.deadline")}:</span>
                      <span className="font-semibold">{formatDate(grant.deadline)}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-coral hover:bg-coral/90">
                    <Link href="/dashboard/grants">
                      {t("grants.applyNow")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Sign in to start your application
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Application timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/10 text-sage">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Review eligibility</p>
                      <p className="text-xs text-muted-foreground">5 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/10 text-sage">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Complete application</p>
                      <p className="text-xs text-muted-foreground">15-20 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/10 text-sage">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Submit documents</p>
                      <p className="text-xs text-muted-foreground">Varies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/10 text-sage">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Review & decision</p>
                      <p className="text-xs text-muted-foreground">2-4 weeks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Grants */}
          {relatedGrants.length > 0 && (
            <div className="mt-16">
              <h2 className="font-playfair text-2xl font-bold mb-6">
                {t("grants.relatedGrants")}
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedGrants.map((relatedGrant) => (
                  <Link
                    key={relatedGrant.id}
                    href={`/grants/${relatedGrant.id}`}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:shadow-lg">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit mb-2">
                          {t(`grants.category.${relatedGrant.category}` as const)}
                        </Badge>
                        <CardTitle className="text-lg group-hover:text-coral transition-colors">
                          {relatedGrant.title[language]}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t("grants.amount")}:</span>
                            <span className="font-semibold">{formatCurrency(relatedGrant.amount)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">{t("grants.deadline")}:</span>
                            <span className="font-semibold">{formatDate(relatedGrant.deadline)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
