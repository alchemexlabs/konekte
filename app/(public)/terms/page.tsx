"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function TermsOfServicePage() {
  const { language, t } = useLanguage()

  const content = {
    en: {
      sections: [
        {
          title: "1. Acceptance of Terms",
          items: [
            "By accessing and using Konekte, you accept and agree to be bound by these Terms of Service",
            "If you do not agree to these terms, you may not use the platform",
            "We reserve the right to modify these terms at any time",
            "Continued use after changes constitutes acceptance of new terms",
          ],
        },
        {
          title: "2. User Obligations",
          items: [
            "You must be at least 18 years old to use this platform",
            "You agree to provide accurate and complete information",
            "You are responsible for maintaining the security of your account",
            "You must not use the platform for any illegal or unauthorized purpose",
            "You must not transmit any viruses, malware, or harmful code",
            "You must not attempt to gain unauthorized access to the platform",
          ],
        },
        {
          title: "3. Grant Applications",
          items: [
            "Submitting an application does not guarantee approval or funding",
            "You must meet all eligibility requirements for each grant",
            "All information provided in applications must be truthful and accurate",
            "False information may result in denial and account suspension",
            "Grant decisions are made by the respective funding organizations",
            "Konekte is not responsible for funding decisions",
          ],
        },
        {
          title: "4. Intellectual Property",
          items: [
            "Konekte and its content are protected by copyright, trademark, and other laws",
            "You may not copy, modify, distribute, or create derivative works without permission",
            "User-generated content remains the property of the user",
            "By submitting content, you grant us a license to use it for platform purposes",
            "You must not infringe on the intellectual property rights of others",
          ],
        },
        {
          title: "5. Third-Party Services",
          items: [
            "The platform may contain links to third-party websites and services",
            "We are not responsible for the content or practices of third-party sites",
            "Third-party relationships are governed by their own terms and policies",
            "SVB, Modern Treasury, and other partners have their own terms of service",
          ],
        },
        {
          title: "6. Disclaimers",
          items: [
            'The platform is provided "as is" without warranties of any kind',
            "We do not guarantee uninterrupted or error-free service",
            "We do not guarantee the accuracy or completeness of information",
            "Financial information and advice are for educational purposes only",
            "You should consult with qualified professionals for financial advice",
          ],
        },
        {
          title: "7. Limitation of Liability",
          items: [
            "Konekte is not liable for any indirect, incidental, or consequential damages",
            "Our total liability is limited to the amount you paid to use the platform (if any)",
            "We are not liable for losses resulting from unauthorized account access",
            "We are not liable for decisions made based on platform information",
            "Some jurisdictions do not allow liability limitations, so these may not apply to you",
          ],
        },
        {
          title: "8. Termination",
          items: [
            "We may suspend or terminate your account at any time for any reason",
            "You may delete your account at any time from the settings page",
            "Termination does not affect obligations incurred before termination",
            "Provisions regarding intellectual property and liability survive termination",
          ],
        },
        {
          title: "9. Governing Law",
          items: [
            "These terms are governed by the laws of the State of Florida",
            "Any disputes will be resolved in the courts of Miami-Dade County, Florida",
            "You agree to submit to the personal jurisdiction of these courts",
          ],
        },
      ],
    },
    ht: {
      sections: [
        {
          title: "1. Akseptasyon Tèm yo",
          items: [
            "Lè w aksede ak itilize Konekte, ou aksepte epi dakò pou w oblije pa Kondisyon Sèvis sa yo",
            "Si ou pa dakò ak tèm sa yo, ou pa ka itilize platfòm nan",
            "Nou rezève dwa pou modifye tèm sa yo nenpòt lè",
            "Kontinye itilize aprè chanjman yo konstitye akseptasyon nouvo tèm yo",
          ],
        },
        {
          title: "2. Obligasyon Itilizatè",
          items: [
            "Ou dwe gen omwen 18 ane pou itilize platfòm sa a",
            "Ou dakò pou bay enfòmasyon egzak ak konplè",
            "Ou responsab pou kenbe sekirite kont ou",
            "Ou pa dwe itilize platfòm nan pou okenn rezon ilegal oswa san otorizasyon",
            "Ou pa dwe transmèt okenn viris, malware, oswa kòd ki danjere",
            "Ou pa dwe eseye jwenn aksè san otorizasyon nan platfòm nan",
          ],
        },
        {
          title: "3. Aplikasyon Sibvansyon",
          items: [
            "Soumèt yon aplikasyon pa garanti apwobasyon oswa finans",
            "Ou dwe satisfè tout kondisyon elijibilite pou chak sibvansyon",
            "Tout enfòmasyon bay nan aplikasyon yo dwe veridik ak egzak",
            "Enfòmasyon fo ka lakòz refize ak sispansyon kont",
            "Desizyon sibvansyon yo fèt pa òganizasyon finansman respektif yo",
            "Konekte pa responsab pou desizyon finansman",
          ],
        },
        {
          title: "4. Pwopriyete Entelektyèl",
          items: [
            "Konekte ak kontni li yo pwoteje pa dwa dotè, mak komès, ak lòt lalwa",
            "Ou pa ka kopye, modifye, distribye, oswa kreye travay derive san pèmisyon",
            "Kontni itilizatè kreye rete pwopriyete itilizatè a",
            "Lè w soumèt kontni, ou ban nou yon lisans pou itilize li pou rezon platfòm",
            "Ou pa dwe vyole dwa pwopriyete entelektyèl lòt moun",
          ],
        },
        {
          title: "5. Sèvis Twazyèm Pati",
          items: [
            "Platfòm nan ka gen lyen nan sitwèb ak sèvis twazyèm pati",
            "Nou pa responsab pou kontni oswa pratik sit twazyèm pati",
            "Relasyon twazyèm pati gouvène pa pwòp tèm ak politik yo",
            "SVB, Modern Treasury, ak lòt patnè gen pwòp kondisyon sèvis yo",
          ],
        },
        {
          title: "6. Deklarerasyon",
          items: [
            'Platfòm nan bay "jan li ye" san okenn garanti',
            "Nou pa garanti sèvis san entèripsyon oswa san erè",
            "Nou pa garanti presizyon oswa konplètman enfòmasyon",
            "Enfòmasyon finansye ak konsèy se pou rezon edikatif sèlman",
            "Ou ta dwe konsiltasyon ak pwofesyonèl kalifye pou konsèy finansye",
          ],
        },
        {
          title: "7. Limit Responsablite",
          items: [
            "Konekte pa responsab pou okenn domaj endirèk, ensidantèl, oswa konsekansyèl",
            "Responsablite total nou limite a montan ou peye pou itilize platfòm nan (si genyen)",
            "Nou pa responsab pou pèt ki rezilta nan aksè kont san otorizasyon",
            "Nou pa responsab pou desizyon ki pran baze sou enfòmasyon platfòm",
            "Kèk jiridiksyon pa pèmèt limit responsablite, donk sa yo ka pa aplike pou ou",
          ],
        },
        {
          title: "8. Tèminasyon",
          items: [
            "Nou ka sispann oswa termine kont ou nenpòt lè pou nenpòt rezon",
            "Ou ka efase kont ou nenpòt lè nan paj paramèt la",
            "Tèminasyon pa afekte obligasyon ki fèt anvan tèminasyon",
            "Dispozisyon konsènan pwopriyete entelektyèl ak responsablite siviv tèminasyon",
          ],
        },
        {
          title: "9. Lalwa ki Gouvène",
          items: [
            "Tèm sa yo gouvène pa lalwa eta Florid",
            "Nenpòt konfli ap rezoud nan tribinal Konte Miami-Dade, Florid",
            "Ou dakò pou soumèt a jiridiksyon pèsonèl tribinal sa yo",
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
              {t("legal.terms.title")}
            </h1>
            <p className="mt-4 text-lg text-cream/90">
              {t("legal.terms.intro")}
            </p>
            <p className="mt-2 text-sm text-cream/70">
              {t("legal.terms.lastUpdated")}
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
              <CardTitle className="text-xl">Questions?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                If you have questions about these terms, please contact us:
              </p>
              <p className="font-medium">
                Email: legal@konekte.org<br />
                Phone: (305) 555-0100<br />
                Address: Little Haiti Revitalization Trust, Miami, FL
              </p>
              <p className="text-muted-foreground pt-4">
                For privacy information, see our{" "}
                <Link href="/privacy" className="text-navy underline hover:text-navy/80">
                  Privacy Policy
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
