"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      sections: [
        {
          title: "Information We Collect",
          items: [
            "Personal identification information (name, email, phone number)",
            "Business information (business name, type, address)",
            "Financial information (grant applications, disbursements)",
            "Usage data (pages visited, features used, time spent)",
            "Device information (browser type, operating system)",
          ],
        },
        {
          title: "How We Use Your Information",
          items: [
            "To provide and improve our services",
            "To match you with relevant grants and resources",
            "To communicate about your applications and account",
            "To send educational content and updates",
            "To analyze usage patterns and improve user experience",
            "To comply with legal obligations",
          ],
        },
        {
          title: "Information Sharing",
          items: [
            "We share information with grant providers and community partners only with your consent",
            "We may share aggregated, anonymized data for research and reporting",
            "We share information with service providers who help us operate the platform",
            "We may disclose information if required by law or to protect rights and safety",
            "We never sell your personal information to third parties",
          ],
        },
        {
          title: "Cookies and Tracking",
          items: [
            "We use cookies to remember your preferences and improve functionality",
            "Analytics cookies help us understand how users interact with the platform",
            "You can control cookie settings in your browser",
            "Some features may not work properly if cookies are disabled",
          ],
        },
        {
          title: "Your Rights",
          items: [
            "Access: You can request a copy of your personal data",
            "Correction: You can update inaccurate information",
            "Deletion: You can request deletion of your account and data",
            "Portability: You can request your data in a machine-readable format",
            "Opt-out: You can unsubscribe from marketing communications",
          ],
        },
        {
          title: "Data Security",
          items: [
            "We use industry-standard encryption to protect your data",
            "Access to personal information is restricted to authorized personnel",
            "We regularly review and update our security practices",
            "No method of transmission is 100% secure, but we strive to protect your information",
          ],
        },
        {
          title: "Children's Privacy",
          items: [
            "Our services are not intended for children under 13",
            "We do not knowingly collect information from children",
            "If we learn we have collected information from a child, we will delete it",
          ],
        },
        {
          title: "Changes to This Policy",
          items: [
            "We may update this policy from time to time",
            "We will notify you of significant changes",
            "Continued use of the platform constitutes acceptance of changes",
          ],
        },
      ],
    },
    ht: {
      sections: [
        {
          title: "Enfòmasyon Nou Kolekte",
          items: [
            "Enfòmasyon idantifikasyon pèsonèl (non, imel, nimewo telefòn)",
            "Enfòmasyon biznis (non biznis, tip, adrès)",
            "Enfòmasyon finansye (aplikasyon sibvansyon, debousman)",
            "Done itilizasyon (paj vizite, karakteristik itilize, tan pase)",
            "Enfòmasyon aparèy (tip navigatè, sistèm eksplwatasyon)",
          ],
        },
        {
          title: "Kijan Nou Itilize Enfòmasyon W",
          items: [
            "Pou bay ak amelyore sèvis nou yo",
            "Pou matche w ak sibvansyon ak resous ki enpòtan",
            "Pou kominike sou aplikasyon w ak kont ou",
            "Pou voye kontni edikatif ak mizajou",
            "Pou analize modèl itilizasyon ak amelyore eksperyans itilizatè",
            "Pou konfoме ak obligasyon legal",
          ],
        },
        {
          title: "Pataj Enfòmasyon",
          items: [
            "Nou pataje enfòmasyon ak founisè sibvansyon ak patnè kominotè sèlman avèk konsantman w",
            "Nou ka pataje done agreje, anonim pou rechèch ak rapò",
            "Nou pataje enfòmasyon ak founisè sèvis ki ede nou opere platfòm nan",
            "Nou ka devwale enfòmasyon si lalwa mande oswa pou pwoteje dwa ak sekirite",
            "Nou pa janm vann enfòmasyon pèsonèl ou bay twazyèm pati",
          ],
        },
        {
          title: "Cookies ak Swivi",
          items: [
            "Nou itilize cookies pou sonje preferans ou ak amelyore fonksyonalite",
            "Cookies analytics ede nou konprann kijan itilizatè yo aji ak platfòm nan",
            "Ou ka kontwole paramèt cookies nan navigatè w",
            "Kèk karakteristik ka pa fonksyone kòrèkteman si cookies dezaktive",
          ],
        },
        {
          title: "Dwa W",
          items: [
            "Aksè: Ou ka mande yon kopi done pèsonèl ou",
            "Koreksyon: Ou ka mizajou enfòmasyon ki pa egzak",
            "Efisman: Ou ka mande efase kont ou ak done w",
            "Pòtabilite: Ou ka mande done w nan yon fòma ki ka li pa machin",
            "Sòti: Ou ka dezabòne nan kominikasyon maketing",
          ],
        },
        {
          title: "Sekirite Done",
          items: [
            "Nou itilize chifreman estanda endistri pou pwoteje done w",
            "Aksè a enfòmasyon pèsonèl limite a pèsonèl otorize",
            "Nou regilèman revize ak mizajou pratik sekirite nou yo",
            "Pa gen okenn metòd transmisyon ki 100% an sekirite, men nou eseye pwoteje enfòmasyon w",
          ],
        },
        {
          title: "Konfidansyalite Timoun",
          items: [
            "Sèvis nou yo pa pou timoun ki gen mwens pase 13 ane",
            "Nou pa kolekte enfòmasyon nan men timoun avèk konesans",
            "Si nou aprann nou kolekte enfòmasyon nan men yon timoun, n ap efase li",
          ],
        },
        {
          title: "Chanjman nan Politik Sa a",
          items: [
            "Nou ka mizajou politik sa a de tan zan tan",
            "N ap avèti w sou chanjman enpòtan",
            "Kontinye itilize platfòm nan konstitye akseptasyon chanjman yo",
          ],
        },
      ],
    },
  }

  const sections = content[language].sections

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-sage py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-4xl font-bold tracking-tight text-white md:text-5xl">
              {t("legal.privacy.title")}
            </h1>
            <p className="mt-4 text-lg text-cream/90">
              {t("legal.privacy.intro")}
            </p>
            <p className="mt-2 text-sm text-cream/70">
              {t("legal.privacy.lastUpdated")}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 border-navy">
            <CardHeader>
              <CardTitle className="text-xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                If you have questions about this privacy policy or your data, please contact us:
              </p>
              <p className="font-medium">
                Email: privacy@konekte.org<br />
                Phone: (305) 555-0100<br />
                Address: Little Haiti Revitalization Trust, Miami, FL
              </p>
              <p className="text-muted-foreground pt-4">
                For terms of service, see our{" "}
                <Link href="/terms" className="text-navy underline hover:text-navy/80">
                  Terms of Service
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
