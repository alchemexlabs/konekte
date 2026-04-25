"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Redirect to dashboard
    router.push("/dashboard")
  }

  const handleForgotPassword = () => {
    toast({
      title: "Password reset",
      description: "Password reset link sent to your email (demo mode)",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-sage py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-playfair text-4xl font-bold tracking-tight text-white md:text-5xl">
              {t("auth.welcomeBack")}
            </h1>
            <p className="mt-4 text-lg text-cream/90">
              {t("auth.signInToDashboard")}
            </p>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>{t("auth.login")}</CardTitle>
              <CardDescription>
                {t("auth.dontHaveAccount")}{" "}
                <Link href="/sign-up" className="text-navy underline hover:text-navy/80">
                  {t("auth.signUp")}
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t("auth.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="marie.joseph@email.com"
                    {...register("email")}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-sm text-coral">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">{t("auth.password")}</Label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-navy underline hover:text-navy/80"
                    >
                      {t("auth.forgotPassword")}
                    </button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    disabled={isSubmitting}
                  />
                  {errors.password && (
                    <p className="text-sm text-coral">{errors.password.message}</p>
                  )}
                </div>

                <div className="rounded-md bg-sage/10 p-3 text-sm text-sage">
                  <strong>Demo:</strong> {t("auth.demoCredentials")}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-coral hover:bg-coral/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("form.loading")}
                    </>
                  ) : (
                    t("auth.login")
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
