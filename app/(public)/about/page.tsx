"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart, Lightbulb, ArrowRight, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const content = {
  en: {
    title: "About Konekte",
    subtitle: "Building bridges, empowering communities, and fostering economic growth in Little Haiti",
    mission: {
      title: "Our Mission",
      text: "Konekte serves as a digital bridge connecting Little Haiti's vibrant community with essential resources, educational opportunities, and economic empowerment tools. We believe in the power of connection and the strength of community-driven growth.",
    },
    vision: {
      title: "Our Vision",
      text: "A thriving Little Haiti where every resident has access to the tools, knowledge, and resources they need to build prosperous businesses and achieve their dreams.",
    },
    values: {
      title: "Our Values",
      items: [
        {
          icon: Heart,
          title: "Community First",
          description: "Every decision we make prioritizes the wellbeing and growth of Little Haiti residents.",
        },
        {
          icon: Users,
          title: "Cultural Pride",
          description: "We celebrate and preserve Haitian heritage while building bridges to new opportunities.",
        },
        {
          icon: Target,
          title: "Accessibility",
          description: "All resources are available in both English and Kreyòl, ensuring no one is left behind.",
        },
        {
          icon: Lightbulb,
          title: "Innovation",
          description: "We leverage technology to create modern solutions for traditional community needs.",
        },
      ],
    },
    impact: {
      title: "Our Impact",
      stats: [
        { number: "500+", label: "Businesses Supported" },
        { number: "$2.5M", label: "Grants Facilitated" },
        { number: "1,200+", label: "Academy Graduates" },
        { number: "50+", label: "Community Partners" },
      ],
    },
    team: {
      title: "Our Team",
      subtitle: "Dedicated professionals serving the Little Haiti community",
      members: [
        {
          name: "Marie-Claire Joseph",
          role: "Executive Director",
          bio: "20+ years of community development experience",
        },
        {
          name: "Jean-Baptiste Pierre",
          role: "Program Director",
          bio: "Former small business owner and mentor",
        },
        {
          name: "Claudine Belizaire",
          role: "Community Outreach",
          bio: "Born and raised in Little Haiti",
        },
        {
          name: "David Toussaint",
          role: "Technology Lead",
          bio: "Building digital bridges for our community",
        },
      ],
    },
    partners: {
      title: "Our Partners",
      subtitle: "Working together to strengthen Little Haiti",
    },
    cta: {
      title: "Join Our Mission",
      text: "Whether you're a community member, business owner, or potential partner, there's a place for you at Konekte.",
      button: "Get Involved",
    },
    contact: {
      title: "Visit Us",
      address: "212 NE 59th Terrace, Miami, FL 33137",
      email: "info@konekte.org",
    },
  },
  ht: {
    title: "Konsènan Konekte",
    subtitle: "Bati pon, bay kominote pouvwa, ak ankouraje kwasans ekonomik nan Little Haiti",
    mission: {
      title: "Misyon Nou",
      text: "Konekte sèvi kòm yon pon dijital ki konekte kominote vibran Little Haiti ak resous esansyèl, opòtinite edikatif, ak zouti pou ranfòsman ekonomik. Nou kwè nan pouvwa koneksyon ak fòs kwasans ki kondwi pa kominote a.",
    },
    vision: {
      title: "Vizyon Nou",
      text: "Yon Little Haiti ki pwospere kote chak rezidan gen aksè a zouti, konesans, ak resous yo bezwen pou konstwi biznis ki reyisi epi reyalize rèv yo.",
    },
    values: {
      title: "Valè Nou",
      items: [
        {
          icon: Heart,
          title: "Kominote an Premye",
          description: "Chak desizyon nou pran priyorize byennèt ak kwasans rezidan Little Haiti.",
        },
        {
          icon: Users,
          title: "Fyète Kiltirèl",
          description: "Nou selebre ak prezève eritaj Ayisyen pandan n ap bati pon vè nouvo opòtinite.",
        },
        {
          icon: Target,
          title: "Aksesibilite",
          description: "Tout resous disponib an Angle ak Kreyòl, pou asire pèsonn pa rete dèyè.",
        },
        {
          icon: Lightbulb,
          title: "Inovasyon",
          description: "Nou itilize teknoloji pou kreye solisyon modèn pou bezwen kominotè tradisyonèl.",
        },
      ],
    },
    impact: {
      title: "Enpak Nou",
      stats: [
        { number: "500+", label: "Biznis Ki Sipòte" },
        { number: "$2.5M", label: "Sibvansyon Fasilite" },
        { number: "1,200+", label: "Gradye Akademi" },
        { number: "50+", label: "Patnè Kominote" },
      ],
    },
    team: {
      title: "Ekip Nou",
      subtitle: "Pwofesyonèl dedye k ap sèvi kominote Little Haiti",
      members: [
        {
          name: "Marie-Claire Joseph",
          role: "Direktè Egzekitif",
          bio: "Plis pase 20 ane eksperyans nan devlopman kominotè",
        },
        {
          name: "Jean-Baptiste Pierre",
          role: "Direktè Pwogram",
          bio: "Ansyen pwopriyetè ti biznis ak mentò",
        },
        {
          name: "Claudine Belizaire",
          role: "Relasyon Kominotè",
          bio: "Fèt e grandi nan Little Haiti",
        },
        {
          name: "David Toussaint",
          role: "Direktè Teknoloji",
          bio: "Konstwi pon dijital pou kominote nou an",
        },
      ],
    },
    partners: {
      title: "Patnè Nou",
      subtitle: "Travay ansanm pou ranfòse Little Haiti",
    },
    cta: {
      title: "Rejwenn Misyon Nou",
      text: "Kit ou se yon manm kominote a, pwopriyetè biznis, oswa patnè potansyèl, gen yon plas pou ou nan Konekte.",
      button: "Enplike w",
    },
    contact: {
      title: "Vizite Nou",
      address: "212 NE 59th Terrace, Miami, FL 33137",
      email: "info@konekte.org",
    },
  },
}

export default function AboutPage() {
  const { language } = useLanguage()
  const t = content[language]

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

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{t.mission.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t.mission.text}</p>
              </CardContent>
            </Card>
            <Card className="bg-accent/10">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">{t.vision.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t.vision.text}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">{t.values.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.values.items.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-secondary-foreground">{t.impact.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {t.impact.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-secondary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-2">{t.team.title}</h2>
            <p className="text-muted-foreground">{t.team.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.team.members.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-full bg-muted mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">{t.cta.title}</h2>
            <p className="text-muted-foreground mb-8">{t.cta.text}</p>
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white shadow-lg" asChild>
              <Link href="/contact">
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <h3 className="font-serif text-xl font-semibold">{t.contact.title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{t.contact.address}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${t.contact.email}`} className="hover:text-primary transition-colors">
                {t.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
