"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  FileCheck, 
  ShieldCheck, 
  Sparkles, 
  Banknote,
  GraduationCap,
  Building2,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award
} from "lucide-react"
import { useState } from "react"
import { testimonials } from "@/lib/mock-data"

export default function LandingPage() {
  const { t, language } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="max-w-xl">
              <Badge variant="secondary" className="mb-6 bg-sage/10 text-sage border-sage/20 hover:bg-sage/20">
                {language === "en" ? "Little Haiti, Miami" : "Little Haiti, Miami"}
              </Badge>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-tight mb-6 text-balance">
                {t("hero.headline")}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("hero.subheadline")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/resources">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-navy text-navy hover:bg-navy hover:text-cream">
                    {t("hero.cta.explore")}
                  </Button>
                </Link>
                <Link href="/academy">
                  <Button size="lg" className="w-full sm:w-auto bg-coral hover:bg-coral/90 text-white shadow-lg">
                    {t("hero.cta.course")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Photo collage placeholder */}
            <div className="relative hidden lg:block">
              <div className="relative h-[500px]">
                {/* Main image */}
                <div className="absolute top-0 right-0 w-[320px] h-[380px] rounded-2xl bg-secondary overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=380&width=320"
                    alt="Warm portrait of a Little Haiti shopkeeper at her storefront"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Overlay image */}
                <div className="absolute bottom-0 left-0 w-[280px] h-[320px] rounded-2xl bg-secondary overflow-hidden shadow-xl border-4 border-background">
                  <Image
                    src="/placeholder.svg?height=320&width=280"
                    alt="Community members at a financial literacy workshop"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Stats card */}
                <Card className="absolute bottom-16 right-8 shadow-xl bg-card border-0">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold text-navy">$16B</div>
                    <div className="text-sm text-muted-foreground">Community investment</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-secondary/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-navy" />
              <span>{language === "en" ? "Little Haiti Revitalization Trust" : "Little Haiti Revitalization Trust"}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-navy" />
              <span>Silicon Valley Bank</span>
            </div>
            <div className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-navy" />
              <span>Modern Treasury</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-navy" />
              <span>First Citizens Bank</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-4">
              {language === "en" ? "Three pillars of community wealth" : "Twa pilye richès kominotè"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reinvestment */}
            <Card className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-4">
                  {t("pillar.reinvestment.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("pillar.reinvestment.stat")}
                </p>
              </CardContent>
            </Card>

            {/* Treasury */}
            <Card className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-6">
                  <Banknote className="h-6 w-6 text-sage" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-4">
                  {t("pillar.treasury.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("pillar.treasury.stat")}
                </p>
              </CardContent>
            </Card>

            {/* Acceleration */}
            <Card className="bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-4">
                  {t("pillar.acceleration.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("pillar.acceleration.stat")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Konekte Works */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-4">
              {t("howItWorks.title")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Apply */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-8 w-8 text-coral" />
              </div>
              <div className="text-sm text-coral font-medium mb-2">01</div>
              <h3 className="text-xl font-medium text-navy mb-3">{t("howItWorks.step1")}</h3>
              <p className="text-muted-foreground text-sm">
                {language === "en"
                  ? "Tell us about your business or household needs"
                  : "Di nou sou biznis ou oswa bezwen kay ou"}
              </p>
            </div>

            {/* Step 2: Verify */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-coral" />
              </div>
              <div className="text-sm text-coral font-medium mb-2">02</div>
              <h3 className="text-xl font-medium text-navy mb-3">{t("howItWorks.step2")}</h3>
              <p className="text-muted-foreground text-sm">
                {language === "en"
                  ? "We confirm eligibility using alternative underwriting"
                  : "Nou konfime kalifikasyon ak evalyasyon altènatif"}
              </p>
            </div>

            {/* Step 3: Match */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-coral" />
              </div>
              <div className="text-sm text-coral font-medium mb-2">03</div>
              <h3 className="text-xl font-medium text-navy mb-3">{t("howItWorks.step3")}</h3>
              <p className="text-muted-foreground text-sm">
                {language === "en"
                  ? "Get matched to grants, loans, and resources"
                  : "Jwenn match ak sibvansyon, prè, ak resous"}
              </p>
            </div>

            {/* Step 4: Disburse */}
            <div className="text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Banknote className="h-8 w-8 text-coral" />
              </div>
              <div className="text-sm text-coral font-medium mb-2">04</div>
              <h3 className="text-xl font-medium text-navy mb-3">{t("howItWorks.step4")}</h3>
              <p className="text-muted-foreground text-sm">
                {language === "en"
                  ? "Receive funds via Same-Day ACH through Modern Treasury"
                  : "Resevwa fon atravè ACH Menm Jou via Modern Treasury"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Card className="bg-card rounded-2xl border-0 shadow-lg">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-navy">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                  <blockquote className="font-serif text-xl lg:text-2xl text-navy leading-relaxed">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-coral" : "bg-border"
                      }`}
                    >
                      <span className="sr-only">Go to testimonial {index + 1}</span>
                    </button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVB Academy Spotlight */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card rounded-2xl border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left - Image */}
              <div className="relative h-64 lg:h-auto bg-navy">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="SVB Financial Literacy Academy course preview"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="bg-coral text-white border-0 mb-4">
                    {language === "en" ? "Featured Course" : "Kou Prezante"}
                  </Badge>
                  <h3 className="font-serif text-2xl lg:text-3xl text-cream font-medium">
                    Silicon Valley Bank
                    <br />
                    Financial Literacy Academy
                  </h3>
                </div>
              </div>

              {/* Right - Content */}
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="secondary" className="bg-navy/10 text-navy">
                    <Clock className="h-3 w-3 mr-1" />
                    8 modules
                  </Badge>
                  <Badge variant="secondary" className="bg-navy/10 text-navy">
                    ~6 hours
                  </Badge>
                  <Badge variant="secondary" className="bg-sage/10 text-sage">
                    Free
                  </Badge>
                  <Badge variant="secondary" className="bg-coral/10 text-coral">
                    <Award className="h-3 w-3 mr-1" />
                    SVB Certificate
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {language === "en" 
                    ? "Built for Little Haiti entrepreneurs and families. Learn to build credit beyond FICO, navigate CDFI lending, master cash flow, and connect to the SVB startup ecosystem. Bilingual instruction available."
                    : "Bati pou antreprenè ak fanmi Little Haiti. Aprann bati kredi pi lwen ke FICO, navige prè CDFI, metrize koule lajan, ak konekte ak ekosistèm startup SVB. Enstriksyon de lang disponib."
                  }
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center">
                      <span className="text-sage text-xs">✓</span>
                    </div>
                    <span>{language === "en" ? "Alternative underwriting education" : "Edikasyon evalyasyon altènatif"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center">
                      <span className="text-sage text-xs">✓</span>
                    </div>
                    <span>{language === "en" ? "SVB-cobranded certificate" : "Sètifika SVB"}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center">
                      <span className="text-sage text-xs">✓</span>
                    </div>
                    <span>{language === "en" ? "Eligibility for SVB Startup Banking" : "Kalifikasyon pou SVB Startup Banking"}</span>
                  </div>
                </div>

                <Link href="/academy">
                  <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                    {t("academy.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-6">
            {language === "en" 
              ? "Ready to get connected?" 
              : "Pare pou konekte?"}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "en" 
              ? "Tell us about your needs and we'll match you with the right grants, loans, and resources for your situation."
              : "Di nou sou bezwen ou epi n ap match ou ak sibvansyon, prè, ak resous ki bon pou sitiyasyon ou."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                {t("nav.getMatched")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream">
                {t("hero.cta.explore")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
