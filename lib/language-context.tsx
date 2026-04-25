"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "en" | "kr"

interface Translations {
  [key: string]: {
    en: string
    kr: string
  }
}

const translations: Translations = {
  // Navigation
  "nav.resources": { en: "Resources", kr: "Resous" },
  "nav.grants": { en: "Grants", kr: "Sibvansyon" },
  "nav.academy": { en: "Academy", kr: "Akademi" },
  "nav.events": { en: "Events", kr: "Evènman" },
  "nav.about": { en: "About", kr: "Apropo" },
  "nav.signIn": { en: "Sign in", kr: "Konekte" },
  "nav.getMatched": { en: "Get matched", kr: "Jwenn match" },
  
  // Hero
  "hero.headline": { 
    en: "A community resource fabric for Little Haiti.", 
    kr: "Yon rezo resous kominotè pou Little Haiti." 
  },
  "hero.subheadline": { 
    en: "Grants, capital, and financial literacy — connected.", 
    kr: "Sibvansyon, kapital, ak edikasyon finansyè — konekte." 
  },
  "hero.cta.explore": { en: "Explore resources", kr: "Eksplore resous" },
  "hero.cta.course": { en: "Start the SVB course (free)", kr: "Kòmanse kou SVB (gratis)" },
  
  // Trust bar
  "trust.lhrt": { en: "Built with the Little Haiti Revitalization Trust", kr: "Bati avèk Little Haiti Revitalization Trust" },
  "trust.svb": { en: "Financial literacy powered by Silicon Valley Bank", kr: "Edikasyon finansyè pouvwa pa Silicon Valley Bank" },
  "trust.mt": { en: "Treasury infrastructure by Modern Treasury", kr: "Enfrastrikti trezoreri pa Modern Treasury" },
  "trust.fcb": { en: "A First Citizens Bank company", kr: "Yon konpayi First Citizens Bank" },
  
  // Pillars
  "pillar.reinvestment.title": { en: "Reinvestment", kr: "Reinvestisman" },
  "pillar.reinvestment.stat": { 
    en: "$16B Community Benefits Plan deploying capital through 2025, including $5.9B for small business lending and $50M in CRA-qualified philanthropy.", 
    kr: "$16B Plan Benefis Kominotè k ap deplwaye kapital jiska 2025, enkli $5.9B pou prè ti biznis ak $50M nan filantropik kalifikasyon CRA." 
  },
  "pillar.treasury.title": { en: "Treasury", kr: "Trezoreri" },
  "pillar.treasury.stat": { 
    en: "Same-day ACH disbursements up to $1M, automated reconciliation, virtual accounts, double-entry bookkeeping.", 
    kr: "Debousman ACH menm jou jiska $1M, rekonsilyasyon otomatik, kont vityèl, kontabilite doub-antre." 
  },
  "pillar.acceleration.title": { en: "Acceleration", kr: "Akselerasyon" },
  "pillar.acceleration.stat": { 
    en: "No-fee SVB Startup Banking, venture debt for fast-growing teams, and warm intros into the Brickell/Wynwood ecosystem.", 
    kr: "SVB Startup Banking san frè, dèt antrepriz pou ekip k ap grandi vit, ak entwodiksyon nan ekosistèm Brickell/Wynwood." 
  },
  
  // How it works
  "howItWorks.title": { en: "How Konekte works", kr: "Kijan Konekte travay" },
  "howItWorks.step1": { en: "Apply", kr: "Aplike" },
  "howItWorks.step2": { en: "Verify", kr: "Verifye" },
  "howItWorks.step3": { en: "Match", kr: "Match" },
  "howItWorks.step4": { en: "Disburse", kr: "Debouse" },
  
  // Academy
  "academy.title": { en: "Silicon Valley Bank Financial Literacy Academy", kr: "Akademi Edikasyon Finansyè Silicon Valley Bank" },
  "academy.subtitle": { 
    en: "8 modules. Built for Little Haiti entrepreneurs and families. Free. Bilingual. Earn an SVB-cobranded certificate.", 
    kr: "8 modil. Bati pou antreprenè ak fanmi Little Haiti. Gratis. De lang. Jwenn yon sètifika SVB." 
  },
  "academy.badge": { en: "8 modules · ~6 hrs · Free · SVB-cobranded certificate", kr: "8 modil · ~6 è · Gratis · Sètifika SVB" },
  "academy.cta": { en: "Start learning", kr: "Kòmanse aprann" },
  
  // Dashboard
  "dashboard.greeting": { en: "Good morning", kr: "Bonjou" },
  "dashboard.overview": { en: "Overview", kr: "Apèsi" },
  "dashboard.academy": { en: "Academy", kr: "Akademi" },
  "dashboard.grants": { en: "Grants", kr: "Sibvansyon" },
  "dashboard.matches": { en: "Matches", kr: "Match" },
  "dashboard.treasury": { en: "Treasury", kr: "Trezoreri" },
  "dashboard.profile": { en: "Profile", kr: "Pwofil" },
  "dashboard.settings": { en: "Settings", kr: "Paramèt" },
  
  // KPI Cards
  "kpi.courseProgress": { en: "Course progress", kr: "Pwogrè kou" },
  "kpi.openApplications": { en: "Open grant applications", kr: "Aplikasyon sibvansyon ouvè" },
  "kpi.matchedResources": { en: "Matched resources", kr: "Resous match" },
  "kpi.fundsDisbursed": { en: "Funds disbursed YTD", kr: "Fon debouse YTD" },
  
  // Empty states
  "empty.matches": { en: "No matches yet — tell us a bit more about your business to get started.", kr: "Pa gen match pou kounye a — di nou plis sou biznis ou pou kòmanse." },
  
  // Modules
  "module.1.title": { en: "Money Foundations", kr: "Fondasyon Lajan" },
  "module.1.subtitle": { en: "Building Credit Beyond the FICO Score", kr: "Bati Kredi Pi Lwen ke FICO Score" },
  "module.2.title": { en: "Banking Without Fees", kr: "Bank San Frè" },
  "module.2.subtitle": { en: "Choosing the Right Account", kr: "Chwazi Bon Kont la" },
  "module.3.title": { en: "Borrowing Smart", kr: "Prete Entilijamman" },
  "module.3.subtitle": { en: "CDFIs vs Predatory Lenders", kr: "CDFI kont Pretè Abizif" },
  "module.4.title": { en: "Cash Flow for Small Business Owners", kr: "Koule Lajan pou Pwopriyetè Ti Biznis" },
  "module.5.title": { en: "From Side Hustle to Startup", kr: "Soti nan Ti Travay pou Rive nan Startup" },
  "module.5.subtitle": { en: "Legal & Tax Basics", kr: "Baz Legal ak Taks" },
  "module.6.title": { en: "Reading Your Term Sheet", kr: "Li Fèy Tèm Ou" },
  "module.6.subtitle": { en: "Equity, Debt, and Venture Debt", kr: "Ekite, Dèt, ak Dèt Antrepriz" },
  "module.7.title": { en: "Treasury 101", kr: "Trezoreri 101" },
  "module.7.subtitle": { en: "Same-Day ACH, Wires, and Reconciliation", kr: "ACH Menm Jou, Fil, ak Rekonsilyasyon" },
  "module.8.title": { en: "Pitching for Capital", kr: "Prezante pou Kapital" },
  "module.8.subtitle": { en: "Connecting to the SVB Ecosystem", kr: "Konekte ak Ekosistèm SVB" },

  // Footer
  "footer.rights": { en: "All rights reserved.", kr: "Tout dwa rezève." },
  "footer.privacy": { en: "Privacy Policy", kr: "Politik Konfidansyalite" },
  "footer.terms": { en: "Terms of Service", kr: "Kondisyon Sèvis" },

  // Authentication
  "auth.signUp": { en: "Sign up", kr: "Enskri" },
  "auth.login": { en: "Log in", kr: "Konekte" },
  "auth.logout": { en: "Log out", kr: "Dekonekte" },
  "auth.email": { en: "Email", kr: "Imel" },
  "auth.password": { en: "Password", kr: "Modpas" },
  "auth.confirmPassword": { en: "Confirm password", kr: "Konfime modpas" },
  "auth.businessName": { en: "Business name", kr: "Non biznis" },
  "auth.phone": { en: "Phone number", kr: "Nimewo telefòn" },
  "auth.forgotPassword": { en: "Forgot password?", kr: "Bliye modpas?" },
  "auth.alreadyHaveAccount": { en: "Already have an account?", kr: "Ou gen yon kont deja?" },
  "auth.dontHaveAccount": { en: "Don't have an account?", kr: "Ou pa gen kont?" },
  "auth.createAccount": { en: "Create your account", kr: "Kreye kont ou" },
  "auth.welcomeBack": { en: "Welcome back", kr: "Byenveni ankò" },
  "auth.getStarted": { en: "Get started with Konekte", kr: "Kòmanse avèk Konekte" },
  "auth.signInToDashboard": { en: "Sign in to your dashboard", kr: "Konekte nan tablo bò ou" },
  "auth.demoCredentials": { en: "Demo credentials: marie.joseph@email.com", kr: "Enfòmasyon demo: marie.joseph@email.com" },

  // Settings
  "settings.title": { en: "Settings", kr: "Paramèt" },
  "settings.profile": { en: "Profile", kr: "Pwofil" },
  "settings.notifications": { en: "Notifications", kr: "Notifikasyon" },
  "settings.language": { en: "Language", kr: "Lang" },
  "settings.account": { en: "Account", kr: "Kont" },
  "settings.firstName": { en: "First name", kr: "Prenon" },
  "settings.lastName": { en: "Last name", kr: "Siyati" },
  "settings.emailNotifications": { en: "Email notifications", kr: "Notifikasyon imel" },
  "settings.smsNotifications": { en: "SMS notifications", kr: "Notifikasyon SMS" },
  "settings.receiveUpdates": { en: "Receive updates about grants and events", kr: "Resevwa mizajou sou sibvansyon ak evènman" },
  "settings.receiveReminders": { en: "Receive application reminders", kr: "Resevwa rapèl aplikasyon" },
  "settings.selectLanguage": { en: "Select your preferred language", kr: "Chwazi lang ou prefere" },
  "settings.english": { en: "English", kr: "Anglè" },
  "settings.haitian": { en: "Haitian Creole", kr: "Kreyòl Ayisyen" },
  "settings.deleteAccount": { en: "Delete account", kr: "Efase kont" },
  "settings.deleteWarning": { en: "This action cannot be undone. All your data will be permanently deleted.", kr: "Aksyon sa a pa ka defèt. Tout done w ap efase pou tout tan." },
  "settings.saveChanges": { en: "Save changes", kr: "Anrejistre chanjman" },

  // Legal
  "legal.privacy.title": { en: "Privacy Policy", kr: "Politik Konfidansyalite" },
  "legal.privacy.lastUpdated": { en: "Last updated: January 2024", kr: "Dènye mizajou: Janvye 2024" },
  "legal.privacy.intro": { en: "Your privacy is important to us. This policy explains how we collect, use, and protect your information.", kr: "Konfidansyalite w enpòtan pou nou. Politik sa a eksplike kijan nou kolekte, itilize, ak pwoteje enfòmasyon w." },
  "legal.terms.title": { en: "Terms of Service", kr: "Kondisyon Sèvis" },
  "legal.terms.lastUpdated": { en: "Last updated: January 2024", kr: "Dènye mizajou: Janvye 2024" },
  "legal.terms.intro": { en: "By using Konekte, you agree to these terms of service.", kr: "Lè w itilize Konekte, ou dakò ak kondisyon sèvis sa yo." },

  // 404
  "notFound.title": { en: "Page not found", kr: "Paj pa jwenn" },
  "notFound.description": { en: "Sorry, we couldn't find the page you're looking for.", kr: "Padon, nou pa t ka jwenn paj w ap chèche a." },
  "notFound.goHome": { en: "Go to homepage", kr: "Ale nan paj dakèy" },
  "notFound.goDashboard": { en: "Go to dashboard", kr: "Ale nan tablo bò" },

  // Forms
  "form.submit": { en: "Submit", kr: "Soumèt" },
  "form.submitting": { en: "Submitting...", kr: "Ap soumèt..." },
  "form.loading": { en: "Loading...", kr: "Ap chaje..." },
  "form.save": { en: "Save", kr: "Anrejistre" },
  "form.saving": { en: "Saving...", kr: "Ap anrejistre..." },
  "form.cancel": { en: "Cancel", kr: "Anile" },
  "form.success": { en: "Success!", kr: "Siksè!" },
  "form.error": { en: "An error occurred", kr: "Yon erè rive" },

  // Grants
  "grants.title": { en: "Available Grants", kr: "Sibvansyon Disponib" },
  "grants.featured": { en: "Featured", kr: "An vedèt" },
  "grants.deadline": { en: "Deadline", kr: "Delè" },
  "grants.amount": { en: "Amount", kr: "Montan" },
  "grants.eligibility": { en: "Eligibility", kr: "Elijibilite" },
  "grants.applyNow": { en: "Apply now", kr: "Aplike kounye a" },
  "grants.learnMore": { en: "Learn more", kr: "Aprann plis" },
  "grants.relatedGrants": { en: "Related grants", kr: "Sibvansyon similè" },
  "grants.category.business": { en: "Business", kr: "Biznis" },
  "grants.category.education": { en: "Education", kr: "Edikasyon" },
  "grants.category.housing": { en: "Housing", kr: "Lojman" },
  "grants.category.workforce": { en: "Workforce", kr: "Fòs travay" },

  // Events
  "events.title": { en: "Community Events", kr: "Evènman Kominotè" },
  "events.featured": { en: "Featured", kr: "An vedèt" },
  "events.date": { en: "Date", kr: "Dat" },
  "events.time": { en: "Time", kr: "Lè" },
  "events.location": { en: "Location", kr: "Kote" },
  "events.organizer": { en: "Organizer", kr: "Òganizatè" },
  "events.spotsLeft": { en: "spots left", kr: "plas ki rete" },
  "events.soldOut": { en: "Sold out", kr: "Tout biye vann" },
  "events.free": { en: "Free", kr: "Gratis" },
  "events.register": { en: "Register", kr: "Enskri" },
  "events.addToCalendar": { en: "Add to calendar", kr: "Ajoute nan kalandriye" },
  "events.relatedEvents": { en: "Related events", kr: "Evènman similè" },
  "events.category.workshop": { en: "Workshop", kr: "Atelye" },
  "events.category.networking": { en: "Networking", kr: "Rezotaj" },
  "events.category.cultural": { en: "Cultural", kr: "Kiltirèl" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === "en" ? "kr" : "en")
  }, [])

  const t = useCallback((key: string): string => {
    const translation = translations[key]
    if (!translation) {
      return key
    }
    return translation[language]
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
