# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Konekte is a bilingual (English/Haitian Creole) community resource platform for Little Haiti, Miami. It provides grants, capital, and financial literacy resources. The platform features a public-facing site and a user dashboard with educational academy, grant matching, and treasury management.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS 4.2 with custom brand colors
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Forms**: React Hook Form + Zod validation
- **Package Manager**: pnpm

### File Structure

```
app/
├── (public)/          # Public-facing routes (marketing pages)
│   ├── layout.tsx     # Wraps with Navigation + Footer + LanguageProvider
│   └── page.tsx       # Landing page
├── dashboard/         # Protected dashboard routes
│   ├── layout.tsx     # Sidebar navigation + top bar + LanguageProvider
│   ├── page.tsx       # Dashboard overview
│   ├── academy/       # Financial literacy modules
│   ├── grants/        # Grant applications
│   ├── matching/      # Resource matching
│   ├── treasury/      # Treasury management
│   └── profile/       # User profile
├── layout.tsx         # Root layout (fonts, Analytics)
└── globals.css        # Tailwind imports + brand CSS variables

components/
├── ui/                # shadcn/ui components (57 components)
├── navigation.tsx     # Public site header
├── footer.tsx         # Public site footer
└── theme-provider.tsx # Theme context

lib/
├── language-context.tsx  # Bilingual translation system (EN/KR)
├── mock-data.ts         # Mock user and academy data
└── utils.ts             # cn() helper (tailwind-merge + clsx)

hooks/
├── use-mobile.ts     # Responsive breakpoint hook
└── use-toast.ts      # Toast notification hook
```

### Route Groups
- `(public)`: Marketing pages with Navigation + Footer layout
- `dashboard`: Authenticated pages with sidebar navigation layout

Both route groups wrap their children with `LanguageProvider` independently.

### Bilingual System

The app supports English (EN) and Haitian Creole (KR) via a custom context-based translation system:

- **Translation keys**: Stored in `lib/language-context.tsx` as `translations` object
- **Usage**: Import `useLanguage()` hook to access `t()` function and `language` state
- **Toggle**: EN/KR toggle button in navigation and dashboard header
- **Convention**: Translation keys use dot notation (e.g., `"nav.resources"`, `"dashboard.overview"`)

When adding new UI text:
1. Add translation keys to `lib/language-context.tsx`
2. Use `t("key.name")` in components
3. Wrap component trees with `LanguageProvider` if not already wrapped

### Design System

**Brand Colors** (defined in `app/globals.css`):
- `--navy: #0E2A47` (primary)
- `--coral: #E94B3C` (accent/CTA)
- `--cream: #FAF6F0` (background)
- `--sage: #4A7C59` (success)
- `--amber: #D4A03A` (warning)

**Typography**:
- Sans: Inter (var `--font-inter`)
- Serif: Playfair Display (var `--font-playfair`)

**Path Aliases**:
- `@/components` → `/components`
- `@/lib` → `/lib`
- `@/hooks` → `/hooks`
- `@/components/ui` → `/components/ui`

### Component Patterns

**shadcn/ui components**: All UI primitives are in `components/ui/`. Use the configured style (`new-york`) and import from `@/components/ui/*`.

**Forms**: Use React Hook Form with `@hookform/resolvers/zod` for validation.

**Mock Data**: The app uses `mockUser` from `lib/mock-data.ts` for development. User persona is "Marie Joseph" with a Haitian bakery business.

**Sidebar Navigation**: Dashboard sidebar collapses on desktop and becomes a sheet drawer on mobile. State managed in `app/dashboard/layout.tsx`.

## Important Notes

- TypeScript build errors are ignored via `next.config.mjs` (`ignoreBuildErrors: true`)
- Images are unoptimized (`unoptimized: true`)
- No authentication is currently implemented (mock user only)
- No test framework configured
- Vercel Analytics enabled in production only
- Generated with v0.app (see metadata in `app/layout.tsx`)
