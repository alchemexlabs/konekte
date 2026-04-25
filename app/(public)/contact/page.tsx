"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"
import { useState } from "react"

const content = {
  en: {
    title: "Contact Us",
    subtitle: "We're here to help. Reach out in English or Kreyòl.",
    form: {
      title: "Send a Message",
      name: "Full Name",
      namePlaceholder: "Enter your name",
      email: "Email Address",
      emailPlaceholder: "Enter your email",
      phone: "Phone Number",
      phonePlaceholder: "(305) 555-0123",
      subject: "Subject",
      subjectPlaceholder: "Select a topic",
      subjects: {
        general: "General Inquiry",
        grants: "Grant Assistance",
        academy: "Academy Information",
        resources: "Resource Directory",
        partnership: "Partnership Opportunities",
        other: "Other",
      },
      message: "Message",
      messagePlaceholder: "How can we help you?",
      preferredLanguage: "Preferred Response Language",
      english: "English",
      kreyol: "Kreyòl",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! We'll respond within 24-48 hours.",
    },
    info: {
      title: "Get in Touch",
      subtitle: "Visit us or reach out through any of these channels",
      address: {
        label: "Address",
        value: "212 NE 59th Terrace\nMiami, FL 33137",
      },
      phone: {
        label: "Phone",
        value: "(305) 757-5423",
      },
      email: {
        label: "Email",
        value: "info@konekte.org",
      },
      hours: {
        label: "Office Hours",
        value: "Monday - Friday: 9am - 5pm\nSaturday: 10am - 2pm",
      },
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do you offer services in Kreyòl?",
          a: "Yes! All our services, resources, and support are available in both English and Haitian Kreyòl.",
        },
        {
          q: "Is the Academy free?",
          a: "Many of our Academy courses are free. Some specialized programs may have fees, but scholarships are available.",
        },
        {
          q: "How can I apply for a grant?",
          a: "Visit our Grants page to browse current opportunities. Our team can assist you with applications.",
        },
        {
          q: "Can I volunteer with Konekte?",
          a: "Absolutely! Contact us to learn about volunteer opportunities in mentoring, teaching, and community outreach.",
        },
      ],
    },
  },
  ht: {
    title: "Kontakte Nou",
    subtitle: "Nou la pou ede w. Kontakte nou an Angle oswa Kreyòl.",
    form: {
      title: "Voye yon Mesaj",
      name: "Non Konplè",
      namePlaceholder: "Antre non ou",
      email: "Adrès Imèl",
      emailPlaceholder: "Antre imèl ou",
      phone: "Nimewo Telefòn",
      phonePlaceholder: "(305) 555-0123",
      subject: "Sijè",
      subjectPlaceholder: "Chwazi yon sijè",
      subjects: {
        general: "Kesyon Jeneral",
        grants: "Asistans Sibvansyon",
        academy: "Enfòmasyon Akademi",
        resources: "Repètwa Resous",
        partnership: "Opòtinite Patenarya",
        other: "Lòt",
      },
      message: "Mesaj",
      messagePlaceholder: "Kijan nou ka ede w?",
      preferredLanguage: "Lang pou Repons Prefere",
      english: "Angle",
      kreyol: "Kreyòl",
      submit: "Voye Mesaj",
      sending: "Ap voye...",
      success: "Mesaj la voye avèk siksè! N ap reponn nan 24-48 èdtan.",
    },
    info: {
      title: "Kontakte Nou",
      subtitle: "Vizite nou oswa kontakte nou atravè nenpòt nan kanal sa yo",
      address: {
        label: "Adrès",
        value: "212 NE 59th Terrace\nMiami, FL 33137",
      },
      phone: {
        label: "Telefòn",
        value: "(305) 757-5423",
      },
      email: {
        label: "Imèl",
        value: "info@konekte.org",
      },
      hours: {
        label: "Lè Biwo",
        value: "Lendi - Vandredi: 9am - 5pm\nSamdi: 10am - 2pm",
      },
    },
    faq: {
      title: "Kesyon yo Poze Souvan",
      items: [
        {
          q: "Èske nou ofri sèvis an Kreyòl?",
          a: "Wi! Tout sèvis nou, resous, ak sipò disponib an Angle ak Kreyòl Ayisyen.",
        },
        {
          q: "Èske Akademi an gratis?",
          a: "Anpil nan kou Akademi nou yo gratis. Gen kèk pwogram espesyalize ki ka gen frè, men bous disponib.",
        },
        {
          q: "Kijan mwen ka aplike pou yon sibvansyon?",
          a: "Vizite paj Sibvansyon nou pou wè opòtinite aktyèl yo. Ekip nou ka ede w ak aplikasyon yo.",
        },
        {
          q: "Èske mwen ka fè volontè ak Konekte?",
          a: "Absoliman! Kontakte nou pou aprann sou opòtinite volontè nan mentora, ansèyman, ak sansibilizasyon kominotè.",
        },
      ],
    },
  },
}

export default function ContactPage() {
  const { language } = useLanguage()
  const t = content[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
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

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  {t.form.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-accent" />
                    </div>
                    <p className="text-lg text-foreground">{t.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.form.name}</Label>
                        <Input id="name" placeholder={t.form.namePlaceholder} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.form.email}</Label>
                        <Input id="email" type="email" placeholder={t.form.emailPlaceholder} required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.form.phone}</Label>
                        <Input id="phone" type="tel" placeholder={t.form.phonePlaceholder} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">{t.form.subject}</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.subjectPlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">{t.form.subjects.general}</SelectItem>
                            <SelectItem value="grants">{t.form.subjects.grants}</SelectItem>
                            <SelectItem value="academy">{t.form.subjects.academy}</SelectItem>
                            <SelectItem value="resources">{t.form.subjects.resources}</SelectItem>
                            <SelectItem value="partnership">{t.form.subjects.partnership}</SelectItem>
                            <SelectItem value="other">{t.form.subjects.other}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.form.message}</Label>
                      <Textarea
                        id="message"
                        placeholder={t.form.messagePlaceholder}
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>{t.form.preferredLanguage}</Label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="language" value="en" defaultChecked className="w-4 h-4" />
                          <span>{t.form.english}</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="language" value="ht" className="w-4 h-4" />
                          <span>{t.form.kreyol}</span>
                        </label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? t.form.sending : t.form.submit}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-2">{t.info.title}</h2>
                <p className="text-muted-foreground">{t.info.subtitle}</p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.info.address.label}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{t.info.address.value}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.info.phone.label}</h3>
                      <a href="tel:+13057575423" className="text-muted-foreground hover:text-primary transition-colors">
                        {t.info.phone.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.info.email.label}</h3>
                      <a href="mailto:info@konekte.org" className="text-muted-foreground hover:text-primary transition-colors">
                        {t.info.email.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.info.hours.label}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{t.info.hours.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">{t.faq.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.faq.items.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
