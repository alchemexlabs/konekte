"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  ArrowRight, 
  Clock, 
  Award, 
  Play,
  CheckCircle2,
  Users,
  Building2,
  Sparkles
} from "lucide-react"
import { academyModules } from "@/lib/mock-data"

export default function AcademyPage() {
  const { language } = useLanguage()

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-sage/10 text-sage"
      case "Intermediate":
        return "bg-amber/10 text-amber"
      case "Advanced":
        return "bg-coral/10 text-coral"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  const faqs = [
    {
      question: language === "en" ? "Is the course really free?" : "Èske kou a vrèman gratis?",
      answer: language === "en" 
        ? "Yes, the SVB Financial Literacy Academy is completely free. It's funded through the First Citizens Community Benefits Plan as part of their commitment to LMI (Low and Moderate Income) community development."
        : "Wi, Akademi Edikasyon Finansyè SVB gratis nèt. Li finanse atravè Plan Benefis Kominotè First Citizens kòm pati nan angajman yo pou devlopman kominote LMI (Revni Ba ak Modere)."
    },
    {
      question: language === "en" ? "Do I need any prior financial knowledge?" : "Èske mwen bezwen okenn konesans finansyè avan?",
      answer: language === "en"
        ? "No prior knowledge is required. The course is designed for beginners and builds progressively. We start with foundational concepts and advance to more complex topics like venture debt and term sheets."
        : "Pa gen konesans avan ki nesesè. Kou a fèt pou moun ki fèk kòmanse epi li avanse piti piti. Nou kòmanse ak konsèp fondamantal epi avanse nan sijè pi konplèks tankou dèt antrepriz ak fèy tèm."
    },
    {
      question: language === "en" ? "What is alternative underwriting?" : "Kisa evalyasyon altènatif ye?",
      answer: language === "en"
        ? "Alternative underwriting considers factors beyond your FICO score, such as your history of utility payments, rent payments, and other regular bills. This can help people with limited credit history qualify for loans and banking services."
        : "Evalyasyon altènatif konsidere faktè pi lwen ke skor FICO ou, tankou istwa peman sèvis piblik ou, peman lwaye, ak lòt bòdwo regilye. Sa ka ede moun ki gen istwa kredi limite kalifye pou prè ak sèvis bank."
    },
    {
      question: language === "en" ? "How do I get the SVB certificate?" : "Kijan mwen ka jwenn sètifika SVB a?",
      answer: language === "en"
        ? "Complete all 8 modules and pass the end-of-module quizzes with a score of 70% or higher. Your SVB-cobranded certificate will be available for download in your dashboard and can be shared on LinkedIn."
        : "Konplete tout 8 modil yo epi pase egzamen fen modil ak yon nòt 70% oswa pi wo. Sètifika SVB ou a ap disponib pou telechaje nan tablo bò ou epi ou ka pataje li sou LinkedIn."
    },
    {
      question: language === "en" ? "Is the course available in Haitian Creole?" : "Èske kou a disponib an Kreyòl Ayisyen?",
      answer: language === "en"
        ? "Yes! All modules include bilingual instruction with Kreyòl subtitles and downloadable workbooks in both English and Kreyòl. You can switch languages at any time using the toggle in the navigation."
        : "Wi! Tout modil yo gen enstriksyon de lang ak soutit Kreyòl ak livret travay telechajab an Anglè ak Kreyòl. Ou ka chanje lang nenpòt lè lè w itilize baskil nan navigasyon an."
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Co-branding lockup */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-lg">
              <Building2 className="h-5 w-5 text-navy" />
              <span className="text-sm font-medium text-navy">Silicon Valley Bank</span>
            </div>
            <span className="text-muted-foreground">×</span>
            <div className="flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-lg">
              <span className="text-sm font-medium text-navy">Konekte</span>
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-navy leading-tight mb-6 text-balance">
              {language === "en"
                ? "Silicon Valley Bank Financial Literacy Academy"
                : "Akademi Edikasyon Finansyè Silicon Valley Bank"
              }
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {language === "en"
                ? "8 modules. Built for Little Haiti entrepreneurs and families. Free. Bilingual. Earn an SVB-cobranded certificate."
                : "8 modil. Bati pou antreprenè ak fanmi Little Haiti. Gratis. De lang. Jwenn yon sètifika SVB."
              }
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Badge className="bg-navy/10 text-navy border-0 py-1.5 px-3">
                <Clock className="h-4 w-4 mr-2" />
                8 {language === "en" ? "modules" : "modil"}
              </Badge>
              <Badge className="bg-navy/10 text-navy border-0 py-1.5 px-3">
                ~6 {language === "en" ? "hours" : "èdtan"}
              </Badge>
              <Badge className="bg-sage/10 text-sage border-0 py-1.5 px-3">
                {language === "en" ? "Free" : "Gratis"}
              </Badge>
              <Badge className="bg-coral/10 text-coral border-0 py-1.5 px-3">
                <Award className="h-4 w-4 mr-2" />
                {language === "en" ? "SVB Certificate" : "Sètifika SVB"}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-white w-full sm:w-auto shadow-lg">
                  {language === "en" ? "Start learning for free" : "Kòmanse aprann gratis"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" />
                {language === "en" ? "Watch preview" : "Gade apèsi"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Module Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-4">
              {language === "en" ? "Course curriculum" : "Pwogram kou"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "From building credit with alternative underwriting to pitching for venture capital — a complete financial education journey."
                : "Soti nan bati kredi ak evalyasyon altènatif rive nan prezante pou kapital risk — yon vwayaj edikasyon finansyè konplè."
              }
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyModules.map((module) => (
              <Card 
                key={module.id} 
                className="bg-card rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Thumbnail */}
                <div className="relative h-40 bg-secondary">
                  <Image
                    src={module.thumbnail}
                    alt={module.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center">
                      <Play className="h-5 w-5 text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getLevelColor(module.level)} border-0 text-xs`}>
                      {module.level}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-navy/80 text-cream border-0 text-xs">
                      {module.duration}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden">
                      <Image
                        src={module.instructor.avatar}
                        alt={module.instructor.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {module.instructor.name}
                    </div>
                  </div>

                  <div className="text-sm font-medium text-coral mb-1">
                    {language === "en" ? "Module" : "Modil"} {module.id}
                  </div>
                  <h3 className="font-medium text-navy mb-1 line-clamp-2">
                    {module.title}
                  </h3>
                  {module.subtitle && (
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {module.subtitle}
                    </p>
                  )}

                  <div className="mt-4">
                    <Link href="/sign-up">
                      <Button 
                        size="sm" 
                        className="w-full bg-navy hover:bg-navy/90 text-cream"
                      >
                        {language === "en" ? "Start" : "Kòmanse"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Earn */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-4">
              {language === "en" ? "What you'll earn" : "Sa w ap jwenn"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Certificate */}
            <Card className="bg-card rounded-2xl border-0 shadow-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-3">
                  {language === "en" ? "SVB-cobranded certificate" : "Sètifika SVB"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === "en"
                    ? "A digital certificate co-branded with Silicon Valley Bank that you can share on LinkedIn and add to your resume."
                    : "Yon sètifika dijital ko-brande ak Silicon Valley Bank ke ou ka pataje sou LinkedIn epi ajoute nan CV ou."
                  }
                </p>
              </CardContent>
            </Card>

            {/* Banking Eligibility */}
            <Card className="bg-card rounded-2xl border-0 shadow-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-sage" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-3">
                  {language === "en" ? "SVB Startup Banking eligibility" : "Kalifikasyon SVB Startup Banking"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === "en"
                    ? "Graduates become eligible for SVB's no-fee Startup Banking account, designed for early-stage founders and entrepreneurs."
                    : "Diplome yo vin kalifye pou kont SVB Startup Banking san frè, ki fèt pou fondatè ak antreprenè nan premye etap."
                  }
                </p>
              </CardContent>
            </Card>

            {/* Network Access */}
            <Card className="bg-card rounded-2xl border-0 shadow-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-3">
                  {language === "en" ? "SVB ecosystem network" : "Rezo ekosistèm SVB"}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {language === "en"
                    ? "Get invited to SVB events in Brickell and Wynwood, connect with mentors, and access the broader startup ecosystem."
                    : "Jwenn envitasyon nan evènman SVB nan Brickell ak Wynwood, konekte ak mentò, epi aksede nan ekosistèm startup pi laj la."
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Module 1 highlight */}
          <Card className="mt-12 bg-card rounded-2xl border shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <CardContent className="p-8 lg:p-12">
                <Badge className="bg-coral/10 text-coral border-0 mb-4">
                  {language === "en" ? "Featured in Module 1" : "Prezante nan Modil 1"}
                </Badge>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-navy mb-4">
                  {language === "en"
                    ? "Building Credit Beyond the FICO Score"
                    : "Bati Kredi Pi Lwen ke Skor FICO"
                  }
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {language === "en"
                    ? "Learn how alternative underwriting considers your utility and rental payment history. Many community members have been paying bills on time for years — that matters, and lenders are starting to recognize it."
                    : "Aprann kijan evalyasyon altènatif konsidere istwa peman sèvis piblik ak lwaye ou. Anpil manm kominote yo te peye fakti alè pandan plizyè ane — sa enpòtan, epi pretè yo kòmanse rekonèt li."
                  }
                </p>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-5 w-5 text-sage" />
                  <span className="text-sm text-muted-foreground">{language === "en" ? "Bilingual staff available" : "Pèsonèl de lang disponib"}</span>
                </div>
              </CardContent>
              <div className="relative h-64 lg:h-full lg:min-h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Alternative underwriting workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-4">
              {language === "en" ? "Frequently asked questions" : "Kesyon yo poze souvan"}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card rounded-2xl border-0 shadow-sm px-6"
              >
                <AccordionTrigger className="text-left font-medium text-navy hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Sponsor Disclosure */}
      <section className="py-12 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {language === "en"
              ? "The SVB Financial Literacy Academy is made possible through the First Citizens Community Benefits Plan, a $16 billion commitment to community development through 2025. Silicon Valley Bank is a division of First Citizens Bank. Financial education content is provided for informational purposes and does not constitute financial advice."
              : "Akademi Edikasyon Finansyè SVB posib gras a Plan Benefis Kominotè First Citizens, yon angajman $16 milya pou devlopman kominote jiska 2025. Silicon Valley Bank se yon divizyon First Citizens Bank. Kontni edikasyon finansyè bay pou rezon enfòmasyon epi li pa konstitye konsèy finansye."
            }
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-muted-foreground">
            <span>Silicon Valley Bank</span>
            <span>·</span>
            <span>First Citizens Bank</span>
            <span>·</span>
            <span>Little Haiti Revitalization Trust</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 text-coral mx-auto mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy mb-6">
            {language === "en"
              ? "Ready to start your financial education journey?"
              : "Pare pou kòmanse vwayaj edikasyon finansyè ou?"
            }
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Join thousands of Little Haiti residents who are building credit, understanding lending, and connecting to capital."
              : "Rantre nan milye rezidan Little Haiti k ap bati kredi, konprann prè, epi konekte ak kapital."
            }
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white shadow-lg">
              {language === "en" ? "Create your free account" : "Kreye kont gratis ou"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
