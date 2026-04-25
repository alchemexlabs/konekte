"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  GraduationCap,
  FileText,
  Sparkles,
  Wallet,
  Play,
  Calendar,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
import {
  mockUser,
  academyModules,
  activityTimeline,
  upcomingEvents,
  communityCapitalData,
  formatCurrency,
  formatRelativeTime,
} from "@/lib/mock-data"

export default function DashboardOverview() {
  const { language, t } = useLanguage()

  const currentModule = academyModules.find(m => m.id === mockUser.courseProgress.currentModule)

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "grant":
        return FileText
      case "course":
        return GraduationCap
      case "match":
        return Sparkles
      case "disbursement":
        return Wallet
      default:
        return CheckCircle2
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "grant":
        return "text-navy bg-navy/10"
      case "course":
        return "text-sage bg-sage/10"
      case "match":
        return "text-coral bg-coral/10"
      case "disbursement":
        return "text-amber bg-amber/10"
      default:
        return "text-muted-foreground bg-secondary"
    }
  }

  return (
    <div className="space-y-8">
      {/* Greeting Card */}
      <Card className="bg-navy text-cream border-0 rounded-2xl overflow-hidden">
        <CardContent className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl lg:text-3xl font-medium mb-2">
                {t("dashboard.greeting")}, {mockUser.firstName} · Good morning, {mockUser.firstName}
              </h1>
              <p className="text-cream/70">
                {language === "en"
                  ? `Welcome back to Konekte. You're making progress!`
                  : `Byenveni tounen nan Konekte. W ap fè pwogrè!`
                }
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/dashboard/academy">
                <Button className="bg-coral hover:bg-coral/90 text-white">
                  {language === "en" ? "Continue learning" : "Kontinye aprann"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* Course Progress */}
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-sage" />
              </div>
              <Badge variant="secondary" className="bg-sage/10 text-sage border-0">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12%
              </Badge>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">
              {mockUser.courseProgress.percentComplete}%
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {t("kpi.courseProgress")}
            </p>
            <div className="space-y-2">
              <Progress value={mockUser.courseProgress.percentComplete} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Module {mockUser.courseProgress.currentModule} of {mockUser.courseProgress.totalModules}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Open Applications */}
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-navy" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">2</div>
            <p className="text-sm text-muted-foreground mb-3">
              {t("kpi.openApplications")}
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-amber/10 text-amber border-0 text-xs">
                1 under review
              </Badge>
              <Badge variant="secondary" className="bg-navy/10 text-navy border-0 text-xs">
                1 submitted
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Matched Resources */}
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-coral" />
              </div>
              <Badge variant="secondary" className="bg-coral/10 text-coral border-0">
                +5 new
              </Badge>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">5</div>
            <p className="text-sm text-muted-foreground mb-3">
              {t("kpi.matchedResources")}
            </p>
            <p className="text-xs text-muted-foreground">
              {language === "en" ? "New matches this week" : "Nouvo match semèn sa a"}
            </p>
          </CardContent>
        </Card>

        {/* Funds Disbursed */}
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-amber" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy mb-1">{formatCurrency(12400)}</div>
            <p className="text-sm text-muted-foreground mb-3">
              {t("kpi.fundsDisbursed")}
            </p>
            <p className="text-xs text-muted-foreground">
              {language === "en" ? "via SVB / Modern Treasury" : "atravè SVB / Modern Treasury"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Body */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          {currentModule && (
            <Card className="rounded-2xl border-0 shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-48 md:h-auto bg-secondary">
                  <Image
                    src={currentModule.thumbnail}
                    alt={currentModule.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-coral flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-sage/10 text-sage border-0">
                    {language === "en" ? "Continue watching" : "Kontinye gade"}
                  </Badge>
                  <h3 className="font-medium text-navy text-lg mb-1">
                    Module {currentModule.id}: {currentModule.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {currentModule.subtitle}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === "en" ? "Progress" : "Pwogrè"}
                      </span>
                      <span className="font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <Link href="/dashboard/academy" className="block mt-4">
                    <Button className="w-full bg-navy hover:bg-navy/90 text-cream">
                      {language === "en" ? "Resume module" : "Kontinye modil"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Recommended Next Steps */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium">
                {language === "en" ? "Recommended next steps" : "Pwochen etap rekòmande"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-sage/20 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-sage" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {language === "en" ? "Complete Module 3 quiz" : "Konplete egzamen Modil 3"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === "en" ? "15 minutes remaining" : "15 minit ki rete"}
                  </p>
                </div>
                <Button size="sm" variant="outline">
                  {language === "en" ? "Start" : "Kòmanse"}
                </Button>
              </div>
              <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-navy/20 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-navy" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {language === "en" ? "Upload financial documents" : "Telechaje dokiman finansye"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === "en" ? "For Commercial Improvement Grant" : "Pou Sibvansyon Amelyorasyon Komèsyal"}
                  </p>
                </div>
                <Button size="sm" variant="outline">
                  {language === "en" ? "Upload" : "Telechaje"}
                </Button>
              </div>
              <div className="flex items-center gap-4 p-3 bg-secondary/50 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-coral/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-coral" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {language === "en" ? "Review new resource matches" : "Revize nouvo match resous"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === "en" ? "5 new matches available" : "5 nouvo match disponib"}
                  </p>
                </div>
                <Link href="/dashboard/matching">
                  <Button size="sm" variant="outline">
                    {language === "en" ? "View" : "Gade"}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6">
          {/* Activity Timeline */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium">
                {language === "en" ? "Recent activity" : "Aktivite resan"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityTimeline.slice(0, 4).map((activity) => {
                  const Icon = getActivityIcon(activity.type)
                  return (
                    <div key={activity.id} className="flex gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getActivityColor(activity.type)}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.title}</p>
                        <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatRelativeTime(activity.date)}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-medium">
                {language === "en" ? "Upcoming SVB events" : "Evènman SVB k ap vini"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-secondary/50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-navy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.location}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs bg-sage/10 text-sage border-0">
                            {event.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Community Capital Chart */}
      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-medium">
            {language === "en" 
              ? "Community capital deployed in your ZIP code · last 12 months"
              : "Kapital kominotè deplwaye nan kòd postal ou · 12 dènye mwa"
            }
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={communityCapitalData}>
                <defs>
                  <linearGradient id="capitalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0E2A47" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0E2A47" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#5A6A7A', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#5A6A7A', fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
                          <p className="text-sm font-medium">{formatCurrency(payload[0].value as number)}</p>
                          <p className="text-xs text-muted-foreground">{payload[0].payload.month} 2024</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#0E2A47"
                  strokeWidth={2}
                  fill="url(#capitalGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
