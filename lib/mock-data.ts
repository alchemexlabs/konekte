// Mock user persona: Marie Joseph
export const mockUser = {
  id: "1",
  firstName: "Marie",
  lastName: "Joseph",
  email: "marie.joseph@email.com",
  business: {
    name: "Marie's Haitian Bakery",
    type: "Food & Beverage",
    stage: "Established",
    employees: 4,
    yearFounded: 2019,
    address: "7420 NE 2nd Ave, Miami, FL 33138",
    zipCode: "33138",
  },
  courseProgress: {
    currentModule: 3,
    totalModules: 8,
    percentComplete: 37,
    completedModules: [1, 2],
    lastWatched: "2024-01-15T14:30:00Z",
  },
  language: "en" as const,
}

// Academy modules
export const academyModules = [
  {
    id: 1,
    title: "Money Foundations",
    subtitle: "Building Credit Beyond the FICO Score",
    description: "Learn how alternative underwriting considers utility and rental payment history to build your credit profile.",
    duration: "45 min",
    level: "Beginner",
    instructor: {
      name: "Dr. Claudette Pierre",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "Financial Educator",
    },
    completed: true,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 2,
    title: "Banking Without Fees",
    subtitle: "Choosing the Right Account",
    description: "Navigate the banking landscape to find accounts that work for your financial situation.",
    duration: "40 min",
    level: "Beginner",
    instructor: {
      name: "Marcus Williams",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "SVB Banking Specialist",
    },
    completed: true,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 3,
    title: "Borrowing Smart",
    subtitle: "CDFIs vs Predatory Lenders",
    description: "Understand the difference between community-focused lenders and those who may not have your best interests at heart.",
    duration: "50 min",
    level: "Beginner",
    instructor: {
      name: "Jean-Baptiste Louis",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "CDFI Partnership Director",
    },
    completed: false,
    inProgress: true,
    progressPercent: 65,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 4,
    title: "Cash Flow for Small Business Owners",
    subtitle: "Managing Your Money Flow",
    description: "Master the art of tracking money in and out of your business for sustainable growth.",
    duration: "55 min",
    level: "Intermediate",
    instructor: {
      name: "Angela Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "Small Business Advisor",
    },
    completed: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 5,
    title: "From Side Hustle to Startup",
    subtitle: "Legal & Tax Basics",
    description: "Transform your side business into a legitimate startup with proper legal and tax foundations.",
    duration: "60 min",
    level: "Intermediate",
    instructor: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "Startup Attorney",
    },
    completed: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 6,
    title: "Reading Your Term Sheet",
    subtitle: "Equity, Debt, and Venture Debt",
    description: "Decode investment documents and understand what you're signing when accepting capital.",
    duration: "50 min",
    level: "Advanced",
    instructor: {
      name: "Sarah Kim",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "Venture Partner",
    },
    completed: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 7,
    title: "Treasury 101",
    subtitle: "Same-Day ACH, Wires, and Reconciliation",
    description: "Learn the mechanics of modern treasury management and payment processing.",
    duration: "45 min",
    level: "Intermediate",
    instructor: {
      name: "Michael Torres",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "Modern Treasury Specialist",
    },
    completed: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    id: 8,
    title: "Pitching for Capital",
    subtitle: "Connecting to the SVB Ecosystem",
    description: "Craft your pitch and learn how to access the SVB network of investors and mentors.",
    duration: "55 min",
    level: "Advanced",
    instructor: {
      name: "Rachel Green",
      avatar: "/placeholder.svg?height=80&width=80",
      title: "SVB Ecosystem Lead",
    },
    completed: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
]

// Available grants
export const grants = [
  {
    id: "GR-2024-001",
    title: {
      en: "Commercial Improvement Grant",
      ht: "Sibvansyon pou Amelyorasyon Komèsyal"
    },
    description: {
      en: "Funding for commercial property improvements including storefront renovations, equipment upgrades, and accessibility enhancements. Priority given to businesses in Little Haiti.",
      ht: "Finans pou amelyorasyon pwopriyete komèsyal tankou renovasyon devan boutik, amelyorasyon ekipman, ak aksesibilite. Priyorite bay biznis nan ti Ayiti."
    },
    category: "business",
    amount: 25000,
    deadline: "2024-06-30",
    eligibility: {
      en: [
        "Business located in Little Haiti",
        "Operating for 2+ years",
        "Valid business license",
        "Property owner or long-term lease"
      ],
      ht: [
        "Biznis nan zòn ti Ayiti",
        "Ap opere pou 2+ ane",
        "Lisans biznis valid",
        "Pwopriyetè pwopriyete oswa lwaye long-tèm"
      ]
    },
    featured: true
  },
  {
    id: "GR-2024-002",
    title: {
      en: "Innovation & Technology Grant",
      ht: "Sibvansyon Inovasyon ak Teknoloji"
    },
    description: {
      en: "Support for small businesses adopting new technologies, including e-commerce platforms, point-of-sale systems, and digital marketing tools.",
      ht: "Sipò pou ti biznis ki adopte nouvo teknoloji, tankou platfòm komès elektwonik, sistèm pwen-lavant, ak zouti maketing dijital."
    },
    category: "business",
    amount: 10000,
    deadline: "2024-05-15",
    eligibility: {
      en: [
        "Miami-Dade small business",
        "Less than 10 employees",
        "Technology upgrade plan required",
        "Match 25% of grant amount"
      ],
      ht: [
        "Ti biznis Miami-Dade",
        "Mwens pase 10 anplwaye",
        "Plan amelyorasyon teknoloji obligatwa",
        "Matche 25% montan sibvansyon an"
      ]
    },
    featured: true
  },
  {
    id: "GR-2024-003",
    title: {
      en: "Workforce Development Grant",
      ht: "Sibvansyon Devlopman Fòs Travay"
    },
    description: {
      en: "Funding to support employee training, skills development, and workforce expansion for growing businesses in underserved communities.",
      ht: "Finans pou sipòte fòmasyon anplwaye, devlopman konpetans, ak ekspansyon fòs travay pou biznis k ap grandi nan kominote ki pa gen ase sèvis."
    },
    category: "workforce",
    amount: 15000,
    deadline: "2024-07-31",
    eligibility: {
      en: [
        "Hiring plan for 3+ employees",
        "Training program outline",
        "Located in qualified census tract",
        "First-time applicants preferred"
      ],
      ht: [
        "Plan anplwaye pou 3+ anplwaye",
        "Plan pwogram fòmasyon",
        "Nan zòn resansman kalifye",
        "Premye fwa aplikasyon prefere"
      ]
    },
    featured: false
  },
  {
    id: "GR-2024-004",
    title: {
      en: "Housing Rehabilitation Grant",
      ht: "Sibvansyon Reyabilitasyon Lojman"
    },
    description: {
      en: "Assistance for homeowners to make critical repairs, improve energy efficiency, and address code violations in their primary residence.",
      ht: "Asistans pou pwopriyetè kay yo fè reparasyon kritik, amelyore efikasite enèji, ak rezoud pwoblèm règleman nan rezidans prensipal yo."
    },
    category: "housing",
    amount: 12000,
    deadline: "2024-08-15",
    eligibility: {
      en: [
        "Primary residence in Miami-Dade",
        "Income below 80% AMI",
        "Home built before 2000",
        "Must obtain repair quotes"
      ],
      ht: [
        "Rezidans prensipal nan Miami-Dade",
        "Revni anba 80% AMI",
        "Kay konstwi anvan 2000",
        "Dwe jwenn devis reparasyon"
      ]
    },
    featured: false
  },
  {
    id: "GR-2024-005",
    title: {
      en: "Education & Training Scholarship",
      ht: "Bous Edikasyon ak Fòmasyon"
    },
    description: {
      en: "Scholarships for vocational training, professional certifications, and continuing education programs at accredited institutions.",
      ht: "Bous pou fòmasyon pwofesyonèl, sètifikasyon pwofesyonèl, ak pwogram edikasyon kontinyèl nan enstitisyon akredite."
    },
    category: "education",
    amount: 5000,
    deadline: "2024-09-01",
    eligibility: {
      en: [
        "Miami-Dade resident",
        "High school diploma or GED",
        "Enrolled in accredited program",
        "Essay required"
      ],
      ht: [
        "Rezidan Miami-Dade",
        "Diplòm lekòl segondè oswa GED",
        "Enskri nan pwogram akredite",
        "Konpozisyon obligatwa"
      ]
    },
    featured: false
  },
  {
    id: "GR-2024-006",
    title: {
      en: "Small Business Recovery Fund",
      ht: "Fon Rekiperasyon Ti Biznis"
    },
    description: {
      en: "Emergency funding for small businesses recovering from natural disasters, economic hardship, or unexpected business interruptions.",
      ht: "Finans ijans pou ti biznis k ap rekipere apre katastwòf natirèl, difikilte ekonomik, oswa entèripsyon biznis inatandi."
    },
    category: "business",
    amount: 8000,
    deadline: "2024-12-31",
    eligibility: {
      en: [
        "Demonstrated financial hardship",
        "Operating for 1+ year",
        "Valid business documentation",
        "Recovery plan required"
      ],
      ht: [
        "Prèv difikilte finansye",
        "Ap opere pou 1+ ane",
        "Dokiman biznis valid",
        "Plan rekiperasyon obligatwa"
      ]
    },
    featured: true
  },
  {
    id: "GR-2024-007",
    title: {
      en: "Green Energy Upgrade Grant",
      ht: "Sibvansyon Amelyorasyon Enèji Vèt"
    },
    description: {
      en: "Funding for commercial and residential properties to install solar panels, LED lighting, energy-efficient HVAC, and other sustainable upgrades.",
      ht: "Finans pou pwopriyete komèsyal ak rezidansyèl pou enstale panno solè, limyè LED, HVAC efikas, ak lòt amelyorasyon dirab."
    },
    category: "business",
    amount: 20000,
    deadline: "2024-10-30",
    eligibility: {
      en: [
        "Property in Miami-Dade County",
        "Energy audit required",
        "Licensed contractor quotes",
        "Match 20% of project cost"
      ],
      ht: [
        "Pwopriyete nan Konte Miami-Dade",
        "Verite enèji obligatwa",
        "Devis kontraktè lisansye",
        "Matche 20% pri pwojè a"
      ]
    },
    featured: false
  },
  {
    id: "GR-2024-008",
    title: {
      en: "Arts & Culture Community Grant",
      ht: "Sibvansyon Kominotè Lazi ak Kilti"
    },
    description: {
      en: "Support for community arts projects, cultural festivals, public art installations, and creative programs that celebrate Little Haiti's heritage.",
      ht: "Sipò pou pwojè atizay kominotè, festival kiltirèl, enstalasyon lazi piblik, ak pwogram kreyatif ki selebre eritaj ti Ayiti."
    },
    category: "education",
    amount: 7500,
    deadline: "2024-05-30",
    eligibility: {
      en: [
        "Community-focused project",
        "Little Haiti connection required",
        "Public event or display",
        "Detailed project proposal"
      ],
      ht: [
        "Pwojè ki konsantre sou kominote",
        "Koneksyon ti Ayiti obligatwa",
        "Evènman piblik oswa ekspozisyon",
        "Pwopozisyon pwojè detaye"
      ]
    },
    featured: false
  }
]

// Grant applications
export const grantApplications = [
  {
    id: "GA-2024-001",
    grantName: "Commercial Improvement Grant",
    amount: 18500,
    stage: "Under review",
    lastUpdated: "2024-01-12T10:00:00Z",
    submittedDate: "2024-01-05T09:30:00Z",
    type: "active",
    description: "Kitchen equipment upgrade and storefront improvements",
  },
  {
    id: "GA-2024-002",
    grantName: "Innovation Grant",
    amount: 7500,
    stage: "Submitted",
    lastUpdated: "2024-01-14T16:45:00Z",
    submittedDate: "2024-01-14T16:45:00Z",
    type: "active",
    description: "Online ordering system and delivery infrastructure",
  },
  {
    id: "GA-2023-015",
    grantName: "Commercial Improvement Grant",
    amount: 12000,
    stage: "Disbursed",
    lastUpdated: "2023-08-20T11:00:00Z",
    submittedDate: "2023-06-15T14:00:00Z",
    type: "past",
    description: "HVAC system replacement",
  },
]

// Matched resources
export const matchedResources = [
  {
    id: "MR-001",
    title: "Miami-Dade Small Business Development Center",
    category: "Education",
    matchScore: 96,
    description: "Free business consulting and training programs",
    distance: "0.8 mi",
    eligibility: "All small business owners in Miami-Dade",
    signals: ["Business stage: Established", "ZIP: 33138", "Industry: Food & Beverage"],
  },
  {
    id: "MR-002",
    title: "Prospera - Miami CDFI",
    category: "Micro-loans",
    matchScore: 92,
    description: "Micro-loans up to $50,000 with alternative underwriting",
    distance: "1.2 mi",
    eligibility: "Businesses with 2+ years operating history",
    signals: ["Years in business: 5", "Loan need indicated", "Alternative credit profile"],
  },
  {
    id: "MR-003",
    title: "City of Miami PACE Program",
    category: "Grants",
    matchScore: 88,
    description: "Energy efficiency improvement grants for commercial properties",
    distance: "N/A",
    eligibility: "Commercial property owners in Little Haiti",
    signals: ["Location: Little Haiti", "Property owner", "Equipment upgrade interest"],
  },
  {
    id: "MR-004",
    title: "Legal Services of Greater Miami",
    category: "Legal",
    matchScore: 85,
    description: "Free legal assistance for small business matters",
    distance: "2.1 mi",
    eligibility: "Income-qualified small business owners",
    signals: ["Business type: Sole Proprietor", "Grant recipient"],
  },
  {
    id: "MR-005",
    title: "Haitian American Chamber of Commerce",
    category: "Workforce",
    matchScore: 82,
    description: "Networking events and workforce development resources",
    distance: "0.5 mi",
    eligibility: "Haitian-American business owners",
    signals: ["Location: Little Haiti", "Business stage: Growth"],
  },
]

// Disbursements history (12 months)
export const disbursements = [
  { id: "DIS-024", date: "2024-01-10", recipient: "Miami Equipment Supply Co.", amount: 4500, method: "Same-Day ACH", status: "Completed", reference: "INV-2024-0042" },
  { id: "DIS-023", date: "2024-01-03", recipient: "Miami-Dade Water & Sewer", amount: 285, method: "Standard ACH", status: "Completed", reference: "UTIL-JAN-2024" },
  { id: "DIS-022", date: "2023-12-28", recipient: "Sysco Food Services", amount: 3200, method: "Same-Day ACH", status: "Completed", reference: "PO-2023-1245" },
  { id: "DIS-021", date: "2023-12-15", recipient: "Employee Payroll", amount: 8500, method: "Same-Day ACH", status: "Completed", reference: "PAY-DEC-2023-2" },
  { id: "DIS-020", date: "2023-12-01", recipient: "Employee Payroll", amount: 8500, method: "Same-Day ACH", status: "Completed", reference: "PAY-DEC-2023-1" },
  { id: "DIS-019", date: "2023-11-20", recipient: "Little Haiti Commercial Lease", amount: 3500, method: "Wire", status: "Completed", reference: "RENT-NOV-2023" },
  { id: "DIS-018", date: "2023-11-15", recipient: "Employee Payroll", amount: 8200, method: "Same-Day ACH", status: "Completed", reference: "PAY-NOV-2023-2" },
  { id: "DIS-017", date: "2023-11-01", recipient: "Employee Payroll", amount: 8200, method: "Same-Day ACH", status: "Completed", reference: "PAY-NOV-2023-1" },
  { id: "DIS-016", date: "2023-10-25", recipient: "FPL Commercial", amount: 420, method: "Standard ACH", status: "Completed", reference: "UTIL-OCT-2023" },
  { id: "DIS-015", date: "2023-10-20", recipient: "Little Haiti Commercial Lease", amount: 3500, method: "Wire", status: "Completed", reference: "RENT-OCT-2023" },
  { id: "DIS-014", date: "2023-10-15", recipient: "Employee Payroll", amount: 8000, method: "Same-Day ACH", status: "Completed", reference: "PAY-OCT-2023-2" },
  { id: "DIS-013", date: "2023-10-01", recipient: "Employee Payroll", amount: 8000, method: "Same-Day ACH", status: "Completed", reference: "PAY-OCT-2023-1" },
]

// Community capital chart data (12 months)
export const communityCapitalData = [
  { month: "Feb", amount: 125000 },
  { month: "Mar", amount: 145000 },
  { month: "Apr", amount: 180000 },
  { month: "May", amount: 165000 },
  { month: "Jun", amount: 210000 },
  { month: "Jul", amount: 195000 },
  { month: "Aug", amount: 240000 },
  { month: "Sep", amount: 285000 },
  { month: "Oct", amount: 320000 },
  { month: "Nov", amount: 295000 },
  { month: "Dec", amount: 350000 },
  { month: "Jan", amount: 380000 },
]

// Activity timeline
export const activityTimeline = [
  { id: 1, type: "grant", title: "Grant application submitted", description: "Innovation Grant - $7,500", date: "2024-01-14T16:45:00Z" },
  { id: 2, type: "course", title: "Completed Module 2", description: "Banking Without Fees", date: "2024-01-12T11:30:00Z" },
  { id: 3, type: "match", title: "New resource match", description: "Miami-Dade SBDC (96% match)", date: "2024-01-10T09:00:00Z" },
  { id: 4, type: "disbursement", title: "Disbursement completed", description: "$4,500 via Same-Day ACH", date: "2024-01-10T14:00:00Z" },
  { id: 5, type: "grant", title: "Application under review", description: "Commercial Improvement Grant", date: "2024-01-08T10:00:00Z" },
]

// Community events
export const events = [
  {
    id: "EV-2024-001",
    title: {
      en: "Financial Literacy Workshop",
      ht: "Atelye Alfabetizasyon Finansye"
    },
    description: {
      en: "Learn the basics of budgeting, saving, and building credit. Free workshop with bilingual instructors and refreshments provided. Perfect for small business owners and individuals looking to improve their financial health.",
      ht: "Aprann baz bidjè, ekonomi, ak konstwi kredi. Atelye gratis ak enstriktè bileng ak rafrechisman. Pafè pou ti pwopriyetè biznis ak moun k ap chèche amelyore sante finansye yo."
    },
    category: "workshop",
    date: "2024-05-10T18:00:00-04:00",
    endDate: "2024-05-10T20:00:00-04:00",
    location: "Little Haiti Cultural Center, 212 NE 59th Terrace, Miami, FL 33137",
    spotsLeft: 15,
    totalSpots: 30,
    isFree: true,
    organizer: "Konekte & Miami-Dade SBDC",
    featured: true
  },
  {
    id: "EV-2024-002",
    title: {
      en: "SVB Founders Breakfast",
      ht: "Dejne Fondatè SVB"
    },
    description: {
      en: "Network with startup founders, investors, and SVB ecosystem partners. Hear from successful entrepreneurs about their fundraising journeys and get tips on pitching to VCs. Continental breakfast included.",
      ht: "Fè rezò ak fondatè startup, envestisè, ak patnè ekosistèm SVB. Tande founisè siksè pale sou vwayaj finansman yo epi jwenn konsèy sou kijan pou prezante pwojè bay VC. Ti dejne enkli."
    },
    category: "networking",
    date: "2024-04-30T08:00:00-04:00",
    endDate: "2024-04-30T10:00:00-04:00",
    location: "Wynwood Innovation Hub, 2900 NW 2nd Ave, Miami, FL 33127",
    spotsLeft: 5,
    totalSpots: 40,
    isFree: false,
    price: 25,
    organizer: "SVB Miami",
    featured: true
  },
  {
    id: "EV-2024-003",
    title: {
      en: "Haitian Heritage Month Celebration",
      ht: "Selebrasyon Mwa Eritaj Ayisyen"
    },
    description: {
      en: "Celebrate Haitian culture with traditional music, dance performances, food vendors, and community resources. Family-friendly event featuring local artists and cultural organizations.",
      ht: "Selebre kilti ayisyen ak mizik tradisyonèl, pèfòmans danse, vann manje, ak resous kominotè. Evènman pou tout fanmi ak atis lokal ak òganizasyon kiltirèl."
    },
    category: "cultural",
    date: "2024-05-18T12:00:00-04:00",
    endDate: "2024-05-18T18:00:00-04:00",
    location: "Little Haiti Soccer Park, 6301 NE 2nd Ave, Miami, FL 33138",
    spotsLeft: null,
    totalSpots: null,
    isFree: true,
    organizer: "Little Haiti Cultural Complex",
    featured: true
  },
  {
    id: "EV-2024-004",
    title: {
      en: "CDFI Lending 101 Workshop",
      ht: "Atelye Prè CDFI 101"
    },
    description: {
      en: "Understand how Community Development Financial Institutions work and how they can help you access capital with alternative underwriting. Learn about micro-loans, business credit, and application processes.",
      ht: "Konprann kijan Enstitisyon Finansyè Devlopman Kominotè fonksyone epi kijan yo ka ede w jwenn kapital ak souskri altènatif. Aprann sou mikwo-prè, kredi biznis, ak pwosesis aplikasyon."
    },
    category: "workshop",
    date: "2024-05-05T14:00:00-04:00",
    endDate: "2024-05-05T16:00:00-04:00",
    location: "Little Haiti Cultural Center, 212 NE 59th Terrace, Miami, FL 33137",
    spotsLeft: 22,
    totalSpots: 35,
    isFree: true,
    organizer: "Prospera & Konekte",
    featured: false
  },
  {
    id: "EV-2024-005",
    title: {
      en: "Miami Tech Week Mixer",
      ht: "Melanje Semèn Teknoloji Miami"
    },
    description: {
      en: "Connect with Miami's tech community during Tech Week. Meet developers, designers, investors, and entrepreneurs building the future of South Florida's innovation economy.",
      ht: "Konekte ak kominote teknoloji Miami pandan Semèn Teknoloji. Rankontre devlopè, dezayinè, envestisè, ak antreprenè k ap konstwi avni ekonomi inovasyon Sid Florid."
    },
    category: "networking",
    date: "2024-05-12T18:00:00-04:00",
    endDate: "2024-05-12T21:00:00-04:00",
    location: "Brickell City Centre, 701 S Miami Ave, Miami, FL 33131",
    spotsLeft: 0,
    totalSpots: 100,
    isFree: false,
    price: 15,
    organizer: "Miami Tech Coalition",
    featured: false
  },
  {
    id: "EV-2024-006",
    title: {
      en: "Small Business Tax Planning Seminar",
      ht: "Seminè Planifikasyon Taks Ti Biznis"
    },
    description: {
      en: "Tax preparation strategies for small business owners. Topics include deductions, quarterly payments, 1099 contractors, and year-end planning. Bring your questions for our CPA panel.",
      ht: "Estrateji preparasyon taks pou pwopriyetè ti biznis. Sijè enkli dedjiksyon, peman tou le twa mwa, kontraktè 1099, ak planifikasyon fen ane. Pote kesyon w yo pou panèl CPA nou an."
    },
    category: "workshop",
    date: "2024-06-15T10:00:00-04:00",
    endDate: "2024-06-15T13:00:00-04:00",
    location: "Miami-Dade College, North Campus, 11380 NW 27th Ave, Miami, FL 33167",
    spotsLeft: 40,
    totalSpots: 50,
    isFree: true,
    organizer: "Miami-Dade SBDC",
    featured: false
  },
  {
    id: "EV-2024-007",
    title: {
      en: "Women in Business Networking Lunch",
      ht: "Lunch Rezotaj Fanm nan Biznis"
    },
    description: {
      en: "Monthly networking lunch for women entrepreneurs and business leaders. Share challenges, celebrate wins, and build lasting connections with fellow women in business. Guest speaker TBA.",
      ht: "Lunch rezotaj chak mwa pou fanm antreprenè ak lidè biznis. Pataje defi, selebre viktwa, ak konstwi koneksyon dirab ak lòt fanm nan biznis. Envite espesyal pou anonse."
    },
    category: "networking",
    date: "2024-05-20T12:00:00-04:00",
    endDate: "2024-05-20T14:00:00-04:00",
    location: "Versailles Restaurant, 3555 SW 8th St, Miami, FL 33135",
    spotsLeft: 8,
    totalSpots: 25,
    isFree: false,
    price: 30,
    organizer: "South Florida Women in Business",
    featured: false
  },
  {
    id: "EV-2024-008",
    title: {
      en: "Grant Writing Masterclass",
      ht: "Klas Siperyè Ekri Sibvansyon"
    },
    description: {
      en: "Learn how to write compelling grant applications that get funded. Cover letter strategies, budget narratives, eligibility requirements, and common mistakes to avoid. Includes grant application template.",
      ht: "Aprann kijan pou ekri aplikasyon sibvansyon konvenkan ki jwenn finans. Estrateji lèt kouvèti, naratif bidjè, kondisyon elijibilite, ak erè komen pou evite. Enkli modèl aplikasyon sibvansyon."
    },
    category: "workshop",
    date: "2024-06-01T09:00:00-04:00",
    endDate: "2024-06-01T12:00:00-04:00",
    location: "Virtual Event (Zoom link provided upon registration)",
    spotsLeft: 75,
    totalSpots: 100,
    isFree: true,
    organizer: "Konekte",
    featured: true
  }
]

// Upcoming SVB events
export const upcomingEvents = [
  { id: 1, title: "SVB Founders Breakfast", location: "Wynwood", date: "2024-04-30T08:00:00Z", type: "Networking" },
  { id: 2, title: "CDFI Lending Workshop", location: "Little Haiti Cultural Center", date: "2024-05-05T14:00:00Z", type: "Education" },
  { id: 3, title: "Miami Tech Week Mixer", location: "Brickell", date: "2024-05-12T18:00:00Z", type: "Networking" },
]

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "Konekte helped me understand that my years of paying rent on time actually mattered. I got approved for a loan that I thought was impossible.",
    name: "Marie Joseph",
    role: "Owner, Marie's Haitian Bakery",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    quote: "The SVB Academy gave our organization the financial tools to scale our impact. The treasury training alone saved us thousands in fees.",
    name: "Rev. Jean-Claude Duval",
    role: "Executive Director, Little Haiti Community Foundation",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    quote: "From a food truck idea to a funded startup — Konekte connected me to the right people at the right time. The SVB ecosystem is real.",
    name: "Stephanie Charles",
    role: "Founder, KreyolTech",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

// Resources for directory
export const resources = [
  {
    id: 1,
    name: { en: "Legal Aid Society of Miami", ht: "Sosyete Asistans Legal Miami" },
    category: "legal",
    description: {
      en: "Free legal assistance for income-qualified residents including immigration, housing, and family law services.",
      ht: "Asistans legal gratis pou rezidan ki kalifye enkli imigrasyon, lojman, ak sèvis lalwa fanmi."
    },
    address: "123 NE 2nd Ave, Miami, FL 33132",
    phone: "(305) 555-0101",
    website: "https://legalaid.org",
    verified: true,
  },
  {
    id: 2,
    name: { en: "Community Health of South Florida", ht: "Sante Kominotè Sid Florid" },
    category: "healthcare",
    description: {
      en: "Comprehensive healthcare services including primary care, dental, mental health, and pharmacy services for all residents.",
      ht: "Sèvis sante konplè enkli swen prensipal, dantis, sante mantal, ak sèvis famasi pou tout rezidan."
    },
    address: "6800 NE 2nd Ave, Miami, FL 33138",
    phone: "(305) 555-0102",
    website: "https://chisouthfl.org",
    verified: true,
  },
  {
    id: 3,
    name: { en: "Miami Dade College - Little Haiti Campus", ht: "Kolèj Miami Dade - Kanpis ti Ayiti" },
    category: "education",
    description: {
      en: "Community college offering associate degrees, certificates, and workforce training programs with bilingual support.",
      ht: "Kolèj kominotè ki ofri diplòm asosye, sètifika, ak pwogram fòmasyon travay ak sipò bileng."
    },
    address: "7200 NW 2nd Ave, Miami, FL 33150",
    phone: "(305) 555-0103",
    website: "https://mdc.edu",
    verified: true,
  },
  {
    id: 4,
    name: { en: "Miami-Dade Housing Authority", ht: "Otorite Lojman Miami-Dade" },
    category: "housing",
    description: {
      en: "Affordable housing programs including Section 8, public housing, and rental assistance for eligible families.",
      ht: "Pwogram lojman abòdab enkli Seksyon 8, lojman piblik, ak asistans lwaye pou fanmi ki kalifye."
    },
    address: "701 NW 1st Court, Miami, FL 33136",
    phone: "(305) 555-0104",
    website: "https://mdha.org",
    verified: true,
  },
  {
    id: 5,
    name: { en: "CareerSource South Florida", ht: "CareerSource Sid Florid" },
    category: "employment",
    description: {
      en: "Job search assistance, career counseling, skills training, and employment services for all job seekers.",
      ht: "Asistans rechèch travay, konsèy karyè, fòmasyon konpetans, ak sèvis travay pou tout moun k ap chèche travay."
    },
    address: "7300 Corporate Center Dr, Miami, FL 33126",
    phone: "(305) 555-0105",
    website: "https://careersourcesfl.com",
    verified: true,
  },
  {
    id: 6,
    name: { en: "Early Learning Coalition of Miami-Dade", ht: "Kowalisyon Aprann Bonè Miami-Dade" },
    category: "social",
    description: {
      en: "Childcare subsidies and early education programs for families with children ages 0-5.",
      ht: "Sibvansyon gad timoun ak pwogram edikasyon bonè pou fanmi ak timoun laj 0-5 an."
    },
    address: "2555 Ponce de Leon Blvd, Coral Gables, FL 33134",
    phone: "(305) 555-0106",
    website: "https://elcmdm.org",
    verified: false,
  },
  {
    id: 7,
    name: { en: "Prospera Miami CDFI", ht: "Prospera Miami CDFI" },
    category: "legal",
    description: {
      en: "Micro-loans and business development services using alternative underwriting for small business owners.",
      ht: "Mikwo-prè ak sèvis devlopman biznis ki itilize souskri altènatif pou pwopriyetè ti biznis."
    },
    address: "1200 NW 78th Ave, Miami, FL 33126",
    phone: "(305) 555-0107",
    website: "https://prosperausa.org",
    verified: true,
  },
  {
    id: 8,
    name: { en: "Sant La Haitian Neighborhood Center", ht: "Sant La Sant Katye Ayisyen" },
    category: "social",
    description: {
      en: "Community center providing family services, youth programs, senior care, and cultural preservation activities.",
      ht: "Sant kominotè ki bay sèvis fanmi, pwogram jèn, swen pou granmoun, ak aktivite konsèvasyon kiltirèl."
    },
    address: "5700 NE 2nd Ave, Miami, FL 33137",
    phone: "(305) 555-0108",
    website: "https://santla.org",
    verified: true,
  },
]

// Format currency helper
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount)
}

// Format date helper
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

// Format relative time
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return "Today"
  if (diffInDays === 1) return "Yesterday"
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  return formatDate(dateString)
}
