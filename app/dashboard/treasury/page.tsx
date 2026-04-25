"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Wallet,
  Clock,
  Building2,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
} from "lucide-react"
import { disbursements, formatCurrency, formatDate } from "@/lib/mock-data"

export default function DashboardTreasury() {
  const { language } = useLanguage()
  const [countdown, setCountdown] = useState({ hours: 3, minutes: 24, seconds: 0 })

  // Mock countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getMethodBadge = (method: string) => {
    switch (method) {
      case "Same-Day ACH":
        return <Badge className="bg-sage text-white border-0 text-xs">{method}</Badge>
      case "Wire":
        return <Badge className="bg-navy text-white border-0 text-xs">{method}</Badge>
      case "Standard ACH":
        return <Badge variant="secondary" className="text-xs">{method}</Badge>
      default:
        return <Badge variant="secondary" className="text-xs">{method}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-sage/10 text-sage border-0 text-xs">{status}</Badge>
      case "Pending":
        return <Badge className="bg-amber/10 text-amber border-0 text-xs">{status}</Badge>
      default:
        return <Badge variant="secondary" className="text-xs">{status}</Badge>
    }
  }

  // Mock ledger entries
  const ledgerEntries = [
    { account: "Operating Account", debit: 4500, credit: 0, description: "Equipment purchase" },
    { account: "Vendor Payables", debit: 0, credit: 4500, description: "Miami Equipment Supply" },
    { account: "Operating Account", debit: 285, credit: 0, description: "Utility payment" },
    { account: "Utilities Expense", debit: 0, credit: 285, description: "Water & Sewer" },
  ]

  return (
    <div className="space-y-8">
      {/* Header with branding */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl lg:text-3xl font-medium text-navy mb-2">
            {language === "en" ? "Treasury" : "Trezoreri"}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{language === "en" ? "Powered by" : "Pouvwa pa"}</span>
            <Badge variant="secondary" className="font-medium">Modern Treasury</Badge>
            <span>{language === "en" ? "on" : "sou"}</span>
            <Badge variant="secondary" className="font-medium">Silicon Valley Bank</Badge>
          </div>
        </div>

        {/* Same-day ACH countdown */}
        <Card className="bg-coral/10 border-0 rounded-xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-coral" />
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">
                  {language === "en" ? "Same-day ACH cutoff: 12:00 PM PT" : "Limit ACH menm jou: 12:00 PM PT"}
                </p>
                <p className="font-mono font-medium text-navy">
                  {language === "en" ? "Next window in" : "Pwochen fenèt nan"}{" "}
                  <span className="text-coral">
                    {String(countdown.hours).padStart(2, '0')}h{' '}
                    {String(countdown.minutes).padStart(2, '0')}m{' '}
                    {String(countdown.seconds).padStart(2, '0')}s
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Balance Summary */}
      <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-navy" />
              </div>
              <span className="text-sm text-muted-foreground">
                {language === "en" ? "Available Balance" : "Balans Disponib"}
              </span>
            </div>
            <p className="text-3xl font-bold text-navy">{formatCurrency(24850)}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center">
                <ArrowDownLeft className="h-5 w-5 text-sage" />
              </div>
              <span className="text-sm text-muted-foreground">
                {language === "en" ? "Received (30 days)" : "Resevwa (30 jou)"}
              </span>
            </div>
            <p className="text-3xl font-bold text-sage">{formatCurrency(12400)}</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                <ArrowUpRight className="h-5 w-5 text-coral" />
              </div>
              <span className="text-sm text-muted-foreground">
                {language === "en" ? "Sent (30 days)" : "Voye (30 jou)"}
              </span>
            </div>
            <p className="text-3xl font-bold text-coral">{formatCurrency(8785)}</p>
          </CardContent>
        </Card>
      </div>

      {/* Disbursements Table */}
      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-medium">
              {language === "en" ? "Recent Disbursements" : "Debousman Resan"}
            </CardTitle>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              {language === "en" ? "Refresh" : "Rafrechi"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{language === "en" ? "Date" : "Dat"}</TableHead>
                <TableHead>{language === "en" ? "Recipient" : "Benefisyè"}</TableHead>
                <TableHead>{language === "en" ? "Amount" : "Montan"}</TableHead>
                <TableHead>{language === "en" ? "Method" : "Metòd"}</TableHead>
                <TableHead>{language === "en" ? "Status" : "Estati"}</TableHead>
                <TableHead>{language === "en" ? "Reference" : "Referans"}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disbursements.slice(0, 8).map((disbursement) => (
                <TableRow key={disbursement.id}>
                  <TableCell className="text-muted-foreground">
                    {formatDate(disbursement.date)}
                  </TableCell>
                  <TableCell className="font-medium text-navy">
                    {disbursement.recipient}
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatCurrency(disbursement.amount)}
                  </TableCell>
                  <TableCell>{getMethodBadge(disbursement.method)}</TableCell>
                  <TableCell>{getStatusBadge(disbursement.status)}</TableCell>
                  <TableCell className="text-xs text-muted-foreground font-mono">
                    {disbursement.reference}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Reconciliation Panel */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Virtual Accounts */}
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              {language === "en" ? "Virtual Accounts" : "Kont Vityèl"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-navy" />
                  <div>
                    <p className="font-medium text-navy">Operating Account</p>
                    <p className="text-xs text-muted-foreground font-mono">...4521</p>
                  </div>
                </div>
                <p className="font-bold text-navy">{formatCurrency(24850)}</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-navy">Grant Reserves</p>
                    <p className="text-xs text-muted-foreground font-mono">...7832</p>
                  </div>
                </div>
                <p className="font-bold text-navy">{formatCurrency(12000)}</p>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-navy">Payroll Account</p>
                    <p className="text-xs text-muted-foreground font-mono">...2156</p>
                  </div>
                </div>
                <p className="font-bold text-navy">{formatCurrency(8500)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Double-Entry Ledger Preview */}
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">
                {language === "en" ? "Ledger Preview" : "Apèsi Liv"} 
              </CardTitle>
              <Badge variant="secondary" className="text-xs">
                {language === "en" ? "Double-entry" : "Doub-antre"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">{language === "en" ? "Account" : "Kont"}</TableHead>
                  <TableHead className="text-xs text-right">{language === "en" ? "Debit" : "Debi"}</TableHead>
                  <TableHead className="text-xs text-right">{language === "en" ? "Credit" : "Kredi"}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ledgerEntries.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div>
                        <p className="text-sm font-medium text-navy">{entry.account}</p>
                        <p className="text-xs text-muted-foreground">{entry.description}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {entry.debit > 0 ? formatCurrency(entry.debit) : "—"}
                    </TableCell>
                    <TableCell className="text-right font-mono text-sm">
                      {entry.credit > 0 ? formatCurrency(entry.credit) : "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{language === "en" ? "Total" : "Total"}</span>
                <div className="flex gap-8 font-mono font-medium">
                  <span>{formatCurrency(4785)}</span>
                  <span>{formatCurrency(4785)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
