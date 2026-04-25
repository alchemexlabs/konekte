"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Plus,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { grantApplications, formatCurrency, formatDate } from "@/lib/mock-data"

export default function DashboardGrants() {
  const { language } = useLanguage()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const activeApplications = grantApplications.filter(app => app.type === "active")
  const pastApplications = grantApplications.filter(app => app.type === "past")

  const getStatusBadge = (stage: string) => {
    switch (stage) {
      case "Submitted":
        return <Badge className="bg-navy text-white border-0">Submitted</Badge>
      case "Under review":
        return <Badge className="bg-amber text-white border-0">Under review</Badge>
      case "Approved":
        return <Badge className="bg-sage text-white border-0">Approved</Badge>
      case "Disbursed":
        return <Badge className="bg-sage text-white border-0">Disbursed</Badge>
      default:
        return <Badge variant="secondary">{stage}</Badge>
    }
  }

  const steps = [
    { id: 1, name: language === "en" ? "Eligibility" : "Kalifikasyon" },
    { id: 2, name: language === "en" ? "Business info" : "Enfò biznis" },
    { id: 3, name: language === "en" ? "Financials" : "Finansyè" },
    { id: 4, name: language === "en" ? "Documents" : "Dokiman" },
    { id: 5, name: language === "en" ? "Review" : "Revize" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-medium text-navy mb-2">
            {language === "en" ? "Grant Applications" : "Aplikasyon Sibvansyon"}
          </h1>
          <p className="text-muted-foreground">
            {language === "en"
              ? "Track your applications and start new ones"
              : "Swiv aplikasyon ou yo epi kòmanse nouvo"
            }
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              {language === "en" ? "Start new application" : "Kòmanse nouvo aplikasyon"}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">
                {language === "en" ? "New Grant Application" : "Nouvo Aplikasyon Sibvansyon"}
              </DialogTitle>
              <DialogDescription>
                {language === "en"
                  ? "Complete all steps to submit your application"
                  : "Konplete tout etap yo pou soumèt aplikasyon ou"
                }
              </DialogDescription>
            </DialogHeader>

            {/* Stepper */}
            <div className="my-6">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step.id < currentStep
                            ? "bg-sage text-white"
                            : step.id === currentStep
                            ? "bg-coral text-white"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {step.id < currentStep ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          step.id
                        )}
                      </div>
                      <span className="text-xs mt-1 text-muted-foreground hidden sm:block">
                        {step.name}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-0.5 w-8 sm:w-12 mx-2 ${
                          step.id < currentStep ? "bg-sage" : "bg-secondary"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="space-y-4">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <h4 className="font-medium mb-2">
                      {language === "en" ? "Commercial Improvement Grant" : "Sibvansyon Amelyorasyon Komèsyal"}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === "en"
                        ? "Up to $20,000 for storefront improvements, equipment, and accessibility upgrades."
                        : "Jiska $20,000 pou amelyorasyon devantyè, ekipman, ak amelyorasyon aksesibilite."
                      }
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-sage" />
                        <span>{language === "en" ? "Business located in Little Haiti" : "Biznis nan Little Haiti"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-sage" />
                        <span>{language === "en" ? "Operating for 2+ years" : "Opere pou 2+ ane"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-sage" />
                        <span>{language === "en" ? "Under 50 employees" : "Mwens pase 50 anplwaye"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="businessName">{language === "en" ? "Business Name" : "Non Biznis"}</Label>
                      <Input id="businessName" placeholder="Marie's Haitian Bakery" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="ein">{language === "en" ? "EIN / Tax ID" : "EIN / ID Taks"}</Label>
                        <Input id="ein" placeholder="XX-XXXXXXX" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="yearFounded">{language === "en" ? "Year Founded" : "Ane Fondal"}</Label>
                        <Input id="yearFounded" placeholder="2019" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">{language === "en" ? "Business Address" : "Adrès Biznis"}</Label>
                      <Input id="address" placeholder="7420 NE 2nd Ave, Miami, FL 33138" />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="revenue">{language === "en" ? "Annual Revenue" : "Revni Anyèl"}</Label>
                        <Input id="revenue" placeholder="$150,000" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="employees">{language === "en" ? "Number of Employees" : "Kantite Anplwaye"}</Label>
                        <Input id="employees" placeholder="4" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="amount">{language === "en" ? "Requested Amount" : "Montan Mande"}</Label>
                      <Input id="amount" placeholder="$18,500" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="use">{language === "en" ? "How will you use these funds?" : "Kijan w ap itilize fon sa yo?"}</Label>
                      <Textarea 
                        id="use" 
                        placeholder={language === "en" 
                          ? "Kitchen equipment upgrade and storefront improvements..."
                          : "Amelyorasyon ekipman kwizin ak amelyorasyon devantyè..."
                        }
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                    <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                    <p className="font-medium mb-1">{language === "en" ? "Upload documents" : "Telechaje dokiman"}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {language === "en" 
                        ? "Tax returns, bank statements, business license"
                        : "Deklarasyon taks, relve bank, lisans biznis"
                      }
                    </p>
                    <Button variant="outline">
                      {language === "en" ? "Choose files" : "Chwazi fichye"}
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="p-4 bg-sage/10 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-sage" />
                      <span className="font-medium text-navy">
                        {language === "en" ? "Ready to submit" : "Pare pou soumèt"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "en"
                        ? "Review your application details before submitting."
                        : "Revize detay aplikasyon ou anvan ou soumèt."
                      }
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{language === "en" ? "Grant Type" : "Tip Sibvansyon"}</span>
                      <span className="font-medium">Commercial Improvement Grant</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{language === "en" ? "Requested Amount" : "Montan Mande"}</span>
                      <span className="font-medium">$18,500</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{language === "en" ? "Documents" : "Dokiman"}</span>
                      <span className="font-medium">3 files uploaded</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                {language === "en" ? "Previous" : "Anvan"}
              </Button>
              {currentStep < 5 ? (
                <Button
                  className="bg-navy hover:bg-navy/90 text-cream"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  {language === "en" ? "Next" : "Swivan"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  className="bg-coral hover:bg-coral/90 text-white"
                  onClick={() => {
                    setIsDialogOpen(false)
                    setCurrentStep(1)
                  }}
                >
                  {language === "en" ? "Submit application" : "Soumèt aplikasyon"}
                </Button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Applications Tabs */}
      <Tabs defaultValue="active">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="active">
            {language === "en" ? "Active" : "Aktif"} ({activeApplications.length})
          </TabsTrigger>
          <TabsTrigger value="drafts">
            {language === "en" ? "Drafts" : "Bouyon"} (0)
          </TabsTrigger>
          <TabsTrigger value="past">
            {language === "en" ? "Past" : "Pase"} ({pastApplications.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          <Card className="rounded-2xl border-0 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{language === "en" ? "Grant Name" : "Non Sibvansyon"}</TableHead>
                  <TableHead>{language === "en" ? "Amount" : "Montan"}</TableHead>
                  <TableHead>{language === "en" ? "Stage" : "Etap"}</TableHead>
                  <TableHead>{language === "en" ? "Last Updated" : "Dènye Mizajou"}</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-navy">{app.grantName}</p>
                        <p className="text-xs text-muted-foreground">{app.id}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{formatCurrency(app.amount)}</TableCell>
                    <TableCell>{getStatusBadge(app.stage)}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(app.lastUpdated)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        {language === "en" ? "View" : "Gade"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="drafts" className="mt-6">
          <Card className="rounded-2xl border-0 shadow-sm">
            <CardContent className="py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="font-medium text-navy mb-1">
                {language === "en" ? "No drafts" : "Pa gen bouyon"}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === "en"
                  ? "Saved applications will appear here"
                  : "Aplikasyon anrejistre yo ap parèt isit la"
                }
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          <Card className="rounded-2xl border-0 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{language === "en" ? "Grant Name" : "Non Sibvansyon"}</TableHead>
                  <TableHead>{language === "en" ? "Amount" : "Montan"}</TableHead>
                  <TableHead>{language === "en" ? "Stage" : "Etap"}</TableHead>
                  <TableHead>{language === "en" ? "Date" : "Dat"}</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pastApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-navy">{app.grantName}</p>
                        <p className="text-xs text-muted-foreground">{app.id}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{formatCurrency(app.amount)}</TableCell>
                    <TableCell>{getStatusBadge(app.stage)}</TableCell>
                    <TableCell className="text-muted-foreground">{formatDate(app.submittedDate)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        {language === "en" ? "View" : "Gade"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>

      {/* CDFI Callout */}
      <Card className="rounded-2xl border-0 shadow-sm bg-navy/5">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-6 w-6 text-coral" />
            </div>
            <div>
              <h3 className="font-medium text-navy mb-2">
                {language === "en"
                  ? "Need more capital than a grant covers?"
                  : "Bezwen plis kapital pase sa yon sibvansyon kouvri?"
                }
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {language === "en"
                  ? "Konekte will route you to an SVB-backed CDFI micro-loan partner that uses alternative underwriting (utility & rental history)."
                  : "Konekte ap dirije ou nan yon patnè mikro-prè CDFI sipòte pa SVB ki itilize evalyasyon altènatif (istwa sèvis piblik ak lwaye)."
                }
              </p>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-cream">
                {language === "en" ? "Learn about CDFI loans" : "Aprann sou prè CDFI"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
