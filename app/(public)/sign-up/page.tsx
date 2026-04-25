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
import { Loader2 } from "lucide-react"

const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignUpFormData = z.infer<typeof signUpSchema>

export default function SignUpPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Redirect to dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-sage py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-playfair text-4xl font-bold tracking-tight text-white md:text-5xl">
              {t("auth.getStarted")}
            </h1>
            <p className="mt-4 text-lg text-cream/90">
              {t("hero.subheadline")}
            </p>
          </div>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>{t("auth.createAccount")}</CardTitle>
              <CardDescription>
                {t("auth.alreadyHaveAccount")}{" "}
                <Link href="/login" className="text-navy underline hover:text-navy/80">
                  {t("auth.login")}
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
                  <Label htmlFor="businessName">{t("auth.businessName")}</Label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Marie's Haitian Bakery"
                    {...register("businessName")}
                    disabled={isSubmitting}
                  />
                  {errors.businessName && (
                    <p className="text-sm text-coral">{errors.businessName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("auth.phone")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(305) 555-0123"
                    {...register("phone")}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-sm text-coral">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t("auth.password")}</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t("auth.confirmPassword")}</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    disabled={isSubmitting}
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-coral">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-coral hover:bg-coral/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("form.submitting")}
                    </>
                  ) : (
                    t("auth.signUp")
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
