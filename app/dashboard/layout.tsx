"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutDashboard,
  GraduationCap,
  FileText,
  Sparkles,
  Wallet,
  User,
  Settings,
  Bell,
  Menu,
  Search,
  LogOut,
  ChevronLeft,
} from "lucide-react"
import { mockUser } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage, t } = useLanguage()

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: t("dashboard.overview") },
    { href: "/dashboard/academy", icon: GraduationCap, label: t("dashboard.academy") },
    { href: "/dashboard/grants", icon: FileText, label: t("dashboard.grants") },
    { href: "/dashboard/matching", icon: Sparkles, label: t("dashboard.matches") },
    { href: "/dashboard/treasury", icon: Wallet, label: t("dashboard.treasury") },
    { href: "/dashboard/profile", icon: User, label: t("dashboard.profile") },
  ]

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard"
    }
    return pathname.startsWith(href)
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center">
            <span className="text-navy font-bold text-lg">K</span>
          </div>
          {!sidebarCollapsed && (
            <span className="text-lg font-semibold text-sidebar-foreground">Konekte</span>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
              isActive(item.href)
                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!sidebarCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Settings link */}
      <div className="p-4 border-t border-sidebar-border">
        <Link
          href="/dashboard/settings"
          onClick={() => setMobileOpen(false)}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
            "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          )}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!sidebarCollapsed && <span>{t("dashboard.settings")}</span>}
        </Link>
      </div>

      {/* User card */}
      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center gap-3",
          sidebarCollapsed && "justify-center"
        )}>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt={mockUser.firstName} />
            <AvatarFallback className="bg-coral text-white">
              {mockUser.firstName[0]}{mockUser.lastName[0]}
            </AvatarFallback>
          </Avatar>
          {!sidebarCollapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-sidebar-foreground truncate">
                {mockUser.firstName} {mockUser.lastName}
              </div>
              <div className="text-xs text-sidebar-foreground/60 truncate">
                {mockUser.business.name}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Collapse button (desktop only) */}
      <div className="hidden lg:block p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="w-full text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform",
            sidebarCollapsed && "rotate-180"
          )} />
          {!sidebarCollapsed && <span className="ml-2">Collapse</span>}
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
          sidebarCollapsed ? "w-[72px]" : "w-64"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-64 p-0 bg-sidebar border-sidebar-border">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 lg:px-8">
          {/* Left side */}
          <div className="flex items-center gap-4">
            {/* Mobile menu trigger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
            </Sheet>

            {/* Search (desktop) */}
            <div className="hidden md:flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={language === "en" ? "Search..." : "Rechèch..."}
                className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-secondary"
            >
              <span className={language === "en" ? "text-foreground font-semibold" : ""}>EN</span>
              <span className="text-foreground/40">|</span>
              <span className={language === "kr" ? "text-foreground font-semibold" : ""}>KR</span>
            </button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-coral rounded-full" />
              <span className="sr-only">Notifications</span>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder.svg?height=36&width=36" alt={mockUser.firstName} />
                    <AvatarFallback className="bg-coral text-white">
                      {mockUser.firstName[0]}{mockUser.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{mockUser.firstName} {mockUser.lastName}</p>
                  <p className="text-xs text-muted-foreground">{mockUser.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile">
                    <User className="mr-2 h-4 w-4" />
                    {t("dashboard.profile")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    {t("dashboard.settings")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/" className="text-coral">
                    <LogOut className="mr-2 h-4 w-4" />
                    {language === "en" ? "Sign out" : "Dekonekte"}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </LanguageProvider>
  )
}
