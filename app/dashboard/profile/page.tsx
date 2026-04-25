"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  Building2,
  Globe,
  Bell,
  Link as LinkIcon,
  Camera,
  CheckCircle2,
} from "lucide-react"
import { mockUser } from "@/lib/mock-data"

export default function DashboardProfile() {
  const { language } = useLanguage()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl font-medium text-navy mb-2">
          {language === "en" ? "Profile" : "Pwofil"}
        </h1>
        <p className="text-muted-foreground">
          {language === "en"
            ? "Manage your account settings and preferences"
            : "Jere paramèt kont ou ak preferans"
          }
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-navy" />
                <CardTitle className="text-lg font-medium">
                  {language === "en" ? "Personal Information" : "Enfòmasyon Pèsonèl"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt={mockUser.firstName} />
                    <AvatarFallback className="bg-coral text-white text-xl">
                      {mockUser.firstName[0]}{mockUser.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-navy rounded-full flex items-center justify-center text-cream hover:bg-navy/90 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <p className="font-medium text-navy">{mockUser.firstName} {mockUser.lastName}</p>
                  <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                </div>
              </div>

              <Separator />

              {/* Form fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{language === "en" ? "First Name" : "Premye Non"}</Label>
                  <Input id="firstName" defaultValue={mockUser.firstName} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{language === "en" ? "Last Name" : "Non Fanmi"}</Label>
                  <Input id="lastName" defaultValue={mockUser.lastName} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">{language === "en" ? "Email" : "Imèl"}</Label>
                  <Input id="email" type="email" defaultValue={mockUser.email} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="phone">{language === "en" ? "Phone" : "Telefòn"}</Label>
                  <Input id="phone" type="tel" placeholder="(305) 555-0123" />
                </div>
              </div>

              <Button className="bg-navy hover:bg-navy/90 text-cream">
                {language === "en" ? "Save changes" : "Anrejistre chanjman"}
              </Button>
            </CardContent>
          </Card>

          {/* Business Info */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-navy" />
                <CardTitle className="text-lg font-medium">
                  {language === "en" ? "Business Information" : "Enfòmasyon Biznis"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="businessName">{language === "en" ? "Business Name" : "Non Biznis"}</Label>
                  <Input id="businessName" defaultValue={mockUser.business.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessType">{language === "en" ? "Business Type" : "Tip Biznis"}</Label>
                  <Input id="businessType" defaultValue={mockUser.business.type} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees">{language === "en" ? "Employees" : "Anplwaye"}</Label>
                  <Input id="employees" type="number" defaultValue={mockUser.business.employees} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">{language === "en" ? "Address" : "Adrès"}</Label>
                  <Input id="address" defaultValue={mockUser.business.address} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yearFounded">{language === "en" ? "Year Founded" : "Ane Fondal"}</Label>
                  <Input id="yearFounded" type="number" defaultValue={mockUser.business.yearFounded} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">{language === "en" ? "ZIP Code" : "Kòd Postal"}</Label>
                  <Input id="zipCode" defaultValue={mockUser.business.zipCode} />
                </div>
              </div>

              <Button className="bg-navy hover:bg-navy/90 text-cream">
                {language === "en" ? "Save changes" : "Anrejistre chanjman"}
              </Button>
            </CardContent>
          </Card>

          {/* Language Preference */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-navy" />
                <CardTitle className="text-lg font-medium">
                  {language === "en" ? "Language Preference" : "Preferans Lang"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-navy">
                    {language === "en" ? "Display Language" : "Lang Afichaj"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Choose your preferred language for the interface"
                      : "Chwazi lang ou prefere pou entèfas la"
                    }
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={language === "en" ? "default" : "outline"}
                    size="sm"
                    className={language === "en" ? "bg-navy text-cream" : ""}
                  >
                    English
                  </Button>
                  <Button
                    variant={language === "kr" ? "default" : "outline"}
                    size="sm"
                    className={language === "kr" ? "bg-navy text-cream" : ""}
                  >
                    Kreyòl
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-navy" />
                <CardTitle className="text-lg font-medium">
                  {language === "en" ? "Notification Preferences" : "Preferans Notifikasyon"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-navy">
                    {language === "en" ? "Email notifications" : "Notifikasyon imèl"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Receive updates about your applications and matches"
                      : "Resevwa mizajou sou aplikasyon ou ak match"
                    }
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-navy">
                    {language === "en" ? "Course reminders" : "Rapèl kou"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Get reminders to continue your learning"
                      : "Jwenn rapèl pou kontinye aprann"
                    }
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-navy">
                    {language === "en" ? "Event invitations" : "Envitasyon evènman"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "SVB networking events and workshops"
                      : "Evènman koneksyon SVB ak atelye"
                    }
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-navy">
                    {language === "en" ? "Treasury alerts" : "Alèt trezoreri"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Disbursement confirmations and balance updates"
                      : "Konfimasyon debousman ak mizajou balans"
                    }
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Connected Accounts */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardHeader>
              <div className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5 text-navy" />
                <CardTitle className="text-lg font-medium">
                  {language === "en" ? "Connected Accounts" : "Kont Konekte"}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                    <span className="text-cream font-bold text-sm">SVB</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Silicon Valley Bank</p>
                    <p className="text-xs text-muted-foreground">Startup Banking</p>
                  </div>
                </div>
                <Badge className="bg-sage/10 text-sage border-0 text-xs">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  {language === "en" ? "Connected" : "Konekte"}
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
                    <span className="text-cream font-bold text-xs">MT</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy text-sm">Modern Treasury</p>
                    <p className="text-xs text-muted-foreground">Payment Infrastructure</p>
                  </div>
                </div>
                <Badge className="bg-sage/10 text-sage border-0 text-xs">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  {language === "en" ? "Connected" : "Konekte"}
                </Badge>
              </div>

              <Button variant="outline" className="w-full">
                {language === "en" ? "Connect another account" : "Konekte yon lòt kont"}
              </Button>
            </CardContent>
          </Card>

          {/* Academy Progress */}
          <Card className="rounded-2xl border-0 shadow-sm bg-sage/10">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-sage">37%</span>
                </div>
                <p className="font-medium text-navy mb-1">
                  {language === "en" ? "Academy Progress" : "Pwogrè Akademi"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "en"
                    ? "2 of 8 modules completed"
                    : "2 nan 8 modil konplete"
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Member Since */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">
                {language === "en" ? "Member since" : "Manm depi"}
              </p>
              <p className="font-medium text-navy">January 2024</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
