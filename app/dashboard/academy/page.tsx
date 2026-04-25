"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Play,
  CheckCircle2,
  Clock,
  Download,
  MessageCircle,
  FileText,
  BookOpen,
  Award,
  ChevronRight,
} from "lucide-react"
import { academyModules, mockUser } from "@/lib/mock-data"

export default function DashboardAcademy() {
  const { language } = useLanguage()
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  const currentModule = academyModules.find(m => m.id === mockUser.courseProgress.currentModule)

  const getModuleStatus = (moduleId: number) => {
    if (mockUser.courseProgress.completedModules.includes(moduleId)) {
      return "completed"
    }
    if (moduleId === mockUser.courseProgress.currentModule) {
      return "in-progress"
    }
    return "locked"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-sage text-white"
      case "in-progress":
        return "bg-coral text-white"
      default:
        return "bg-secondary text-muted-foreground"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-2xl lg:text-3xl font-medium text-navy mb-2">
          {language === "en" ? "SVB Financial Literacy Academy" : "Akademi Edikasyon Finansyè SVB"}
        </h1>
        <p className="text-muted-foreground">
          {language === "en"
            ? "Continue your journey to financial empowerment"
            : "Kontinye vwayaj ou nan pouvwa finansyè"
          }
        </p>
      </div>

      {/* Continue Watching Banner */}
      {currentModule && (
        <Card className="bg-navy text-cream border-0 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-48 md:h-64">
              <Image
                src={currentModule.thumbnail}
                alt={currentModule.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-coral flex items-center justify-center hover:scale-105 transition-transform">
                  <Play className="h-7 w-7 text-white ml-1" />
                </button>
              </div>
            </div>
            <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-3 bg-coral text-white border-0">
                {language === "en" ? "Continue watching" : "Kontinye gade"}
              </Badge>
              <h2 className="font-serif text-xl lg:text-2xl font-medium mb-2">
                Module {currentModule.id}: {currentModule.title}
              </h2>
              <p className="text-cream/70 mb-4">{currentModule.subtitle}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cream/70">{language === "en" ? "Progress" : "Pwogrè"}</span>
                  <span className="font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2 bg-cream/20" />
              </div>
              <Button className="w-fit bg-cream text-navy hover:bg-cream/90">
                {language === "en" ? "Resume watching" : "Kontinye gade"}
              </Button>
            </CardContent>
          </div>
        </Card>
      )}

      {/* Module List */}
      <div>
        <h2 className="font-medium text-lg text-navy mb-4">
          {language === "en" ? "All modules" : "Tout modil"}
        </h2>
        <div className="space-y-3">
          {academyModules.map((module) => {
            const status = getModuleStatus(module.id)
            const isCompleted = status === "completed"
            const isInProgress = status === "in-progress"

            return (
              <Card
                key={module.id}
                className={`rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                  isInProgress ? "ring-2 ring-coral" : ""
                }`}
                onClick={() => setSelectedModule(module.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Progress Ring / Check */}
                    <div className="relative flex-shrink-0">
                      {isCompleted ? (
                        <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center">
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        </div>
                      ) : isInProgress ? (
                        <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center relative">
                          <svg className="w-12 h-12 transform -rotate-90">
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              className="text-coral/20"
                            />
                            <circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray={`${65 * 1.256} 126`}
                              className="text-coral"
                            />
                          </svg>
                          <span className="absolute text-xs font-medium text-coral">65%</span>
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                          <span className="text-sm font-medium text-muted-foreground">{module.id}</span>
                        </div>
                      )}
                    </div>

                    {/* Module Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-coral">
                          {language === "en" ? "Module" : "Modil"} {module.id}
                        </span>
                        <Badge variant="secondary" className="text-xs bg-secondary text-muted-foreground">
                          {module.level}
                        </Badge>
                      </div>
                      <h3 className="font-medium text-navy truncate">{module.title}</h3>
                      <p className="text-sm text-muted-foreground truncate">{module.subtitle}</p>
                    </div>

                    {/* Duration & Action */}
                    <div className="hidden sm:flex items-center gap-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {module.duration}
                      </div>
                      <Badge className={getStatusColor(status)}>
                        {status === "completed" && (language === "en" ? "Completed" : "Konplete")}
                        {status === "in-progress" && (language === "en" ? "In Progress" : "An kou")}
                        {status === "locked" && (language === "en" ? "Start" : "Kòmanse")}
                      </Badge>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Module Detail Dialog */}
      <Dialog open={selectedModule !== null} onOpenChange={() => setSelectedModule(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedModule && (() => {
            const module = academyModules.find(m => m.id === selectedModule)
            if (!module) return null
            const status = getModuleStatus(module.id)

            return (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-coral text-white border-0">
                      {language === "en" ? "Module" : "Modil"} {module.id}
                    </Badge>
                    <Badge variant="secondary">{module.level}</Badge>
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      {module.duration}
                    </Badge>
                  </div>
                  <DialogTitle className="font-serif text-2xl text-navy">
                    {module.title}
                  </DialogTitle>
                  <p className="text-muted-foreground">{module.subtitle}</p>
                </DialogHeader>

                <div className="grid lg:grid-cols-3 gap-6 mt-6">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Video Placeholder */}
                    <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden">
                      <Image
                        src={module.thumbnail}
                        alt={module.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
                        <button className="w-16 h-16 rounded-full bg-coral flex items-center justify-center hover:scale-105 transition-transform">
                          <Play className="h-7 w-7 text-white ml-1" />
                        </button>
                      </div>
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="transcript">
                      <TabsList className="w-full justify-start bg-secondary/50">
                        <TabsTrigger value="transcript">
                          <FileText className="h-4 w-4 mr-2" />
                          Transcript
                        </TabsTrigger>
                        <TabsTrigger value="notes">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Notes
                        </TabsTrigger>
                        <TabsTrigger value="workbook">
                          <Download className="h-4 w-4 mr-2" />
                          Workbook
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="transcript" className="mt-4">
                        <div className="bg-secondary/30 rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
                          <p className="mb-4">
                            {language === "en"
                              ? `Welcome to Module ${module.id} of the SVB Financial Literacy Academy. In this module, we'll explore ${module.title.toLowerCase()} and how it applies to your financial journey.`
                              : `Byenveni nan Modil ${module.id} Akademi Edikasyon Finansyè SVB. Nan modil sa a, n ap eksplore ${module.title.toLowerCase()} ak kijan li aplike nan vwayaj finansye ou.`
                            }
                          </p>
                          <p>
                            {module.description}
                          </p>
                        </div>
                      </TabsContent>
                      <TabsContent value="notes" className="mt-4">
                        <div className="bg-secondary/30 rounded-xl p-4 text-sm text-muted-foreground">
                          <p>{language === "en" ? "Your notes will appear here as you watch the module." : "Nòt ou yo ap parèt isit la pandan w ap gade modil la."}</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="workbook" className="mt-4">
                        <div className="bg-secondary/30 rounded-xl p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-navy">Module {module.id} Workbook</p>
                              <p className="text-sm text-muted-foreground">PDF · 12 pages</p>
                            </div>
                            <Button variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-navy hover:bg-navy/90 text-cream">
                        {status === "completed"
                          ? (language === "en" ? "Review module" : "Revize modil")
                          : status === "in-progress"
                          ? (language === "en" ? "Continue watching" : "Kontinye gade")
                          : (language === "en" ? "Start module" : "Kòmanse modil")
                        }
                      </Button>
                      {status !== "completed" && (
                        <Button variant="outline">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          {language === "en" ? "Mark complete" : "Make konplete"}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Instructor */}
                    <Card className="rounded-xl border-0 shadow-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {language === "en" ? "Instructor" : "Enstriktè"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={module.instructor.avatar} alt={module.instructor.name} />
                            <AvatarFallback>{module.instructor.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-navy">{module.instructor.name}</p>
                            <p className="text-sm text-muted-foreground">{module.instructor.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Ask a Coach */}
                    <Card className="rounded-xl border-0 shadow-sm">
                      <CardContent className="p-4">
                        <Button variant="outline" className="w-full">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {language === "en" ? "Ask a coach" : "Mande yon antrenè"}
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Certificate Progress */}
                    <Card className="rounded-xl border-0 shadow-sm bg-sage/10">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Award className="h-5 w-5 text-sage" />
                          <span className="font-medium text-navy">
                            {language === "en" ? "Certificate Progress" : "Pwogrè Sètifika"}
                          </span>
                        </div>
                        <Progress value={mockUser.courseProgress.percentComplete} className="h-2 mb-2" />
                        <p className="text-xs text-muted-foreground">
                          {mockUser.courseProgress.completedModules.length} of 8 {language === "en" ? "modules completed" : "modil konplete"}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>
            )
          })()}
        </DialogContent>
      </Dialog>
    </div>
  )
}
