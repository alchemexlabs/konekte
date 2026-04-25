"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { mockUser } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"
import { User, Bell, Globe, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const { language, setLanguage, t } = useLanguage()
  const { toast } = useToast()

  // Profile state
  const [firstName, setFirstName] = useState(mockUser.firstName)
  const [lastName, setLastName] = useState(mockUser.lastName)
  const [email, setEmail] = useState(mockUser.email)
  const [phone, setPhone] = useState("(305) 555-0123")

  // Notification state
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [grantUpdates, setGrantUpdates] = useState(true)
  const [applicationReminders, setApplicationReminders] = useState(true)

  const handleSaveProfile = () => {
    toast({
      title: t("form.success"),
      description: "Profile updated successfully",
    })
  }

  const handleSaveNotifications = () => {
    toast({
      title: t("form.success"),
      description: "Notification preferences updated",
    })
  }

  const handleSaveLanguage = () => {
    toast({
      title: t("form.success"),
      description: "Language preference updated",
    })
  }

  const handleDeleteAccount = () => {
    toast({
      title: "Account deleted",
      description: "Your account has been deleted (demo mode)",
      variant: "destructive",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t("settings.title")}</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">{t("settings.profile")}</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">{t("settings.notifications")}</span>
          </TabsTrigger>
          <TabsTrigger value="language" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{t("settings.language")}</span>
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">{t("settings.account")}</span>
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings.profile")}</CardTitle>
              <CardDescription>
                Update your personal information and business details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t("settings.firstName")}</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t("settings.lastName")}</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t("auth.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessName">{t("auth.businessName")}</Label>
                <Input
                  id="businessName"
                  defaultValue={mockUser.business.name}
                  disabled
                />
                <p className="text-xs text-muted-foreground">
                  Contact support to update your business name
                </p>
              </div>

              <Button onClick={handleSaveProfile} className="bg-coral hover:bg-coral/90">
                {t("settings.saveChanges")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings.notifications")}</CardTitle>
              <CardDescription>
                Manage how you receive updates and reminders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications" className="text-base">
                      {t("settings.emailNotifications")}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-notifications" className="text-base">
                      {t("settings.smsNotifications")}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via text message
                    </p>
                  </div>
                  <Switch
                    id="sms-notifications"
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                </div>

                <div className="border-t pt-4 space-y-4">
                  <h3 className="font-medium">Notification preferences</h3>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="grant-updates" className="text-base">
                        {t("settings.receiveUpdates")}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        New grants and events matching your profile
                      </p>
                    </div>
                    <Switch
                      id="grant-updates"
                      checked={grantUpdates}
                      onCheckedChange={setGrantUpdates}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="application-reminders" className="text-base">
                        {t("settings.receiveReminders")}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Deadlines and incomplete applications
                      </p>
                    </div>
                    <Switch
                      id="application-reminders"
                      checked={applicationReminders}
                      onCheckedChange={setApplicationReminders}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleSaveNotifications} className="bg-coral hover:bg-coral/90">
                {t("settings.saveChanges")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Language Tab */}
        <TabsContent value="language">
          <Card>
            <CardHeader>
              <CardTitle>{t("settings.language")}</CardTitle>
              <CardDescription>
                {t("settings.selectLanguage")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={language} onValueChange={(value) => setLanguage(value as "en" | "kr")}>
                <div className="flex items-center space-x-3 rounded-lg border p-4">
                  <RadioGroupItem value="en" id="language-en" />
                  <Label htmlFor="language-en" className="flex-1 cursor-pointer">
                    <div className="font-medium">{t("settings.english")}</div>
                    <div className="text-sm text-muted-foreground">
                      English
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border p-4">
                  <RadioGroupItem value="kr" id="language-kr" />
                  <Label htmlFor="language-kr" className="flex-1 cursor-pointer">
                    <div className="font-medium">{t("settings.haitian")}</div>
                    <div className="text-sm text-muted-foreground">
                      Kreyòl Ayisyen
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              <Button onClick={handleSaveLanguage} className="bg-coral hover:bg-coral/90">
                {t("settings.saveChanges")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account">
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">{t("settings.account")}</CardTitle>
              <CardDescription>
                Permanently delete your account and all associated data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                <h3 className="font-medium text-destructive mb-2">Warning</h3>
                <p className="text-sm text-muted-foreground">
                  {t("settings.deleteWarning")}
                </p>
              </div>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    {t("settings.deleteAccount")}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      {t("settings.deleteWarning")}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>{t("form.cancel")}</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteAccount}
                      className="bg-destructive hover:bg-destructive/90"
                    >
                      Delete account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
