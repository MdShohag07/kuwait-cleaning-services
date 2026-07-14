<div align="center">

# Clean Home Kuwait

**Premium cleaning services website — Kuwait**

A modern, fully responsive marketing and booking site for a Kuwait-based home, office, and commercial cleaning company. Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-kuwait--cleaning--services.vercel.app-0e6e4e?style=for-the-badge&logo=vercel&logoColor=white)](https://kuwait-cleaning-services.vercel.app/)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

<br />

<img src="docs/hero-screenshot.jpg" alt="Clean Home Kuwait — homepage hero section" width="100%" />

**[🌐 View Live Site →](https://kuwait-cleaning-services.vercel.app/)**

</div>

---

## Overview

Clean Home Kuwait is a conversion-focused landing page and micro-site for a residential and commercial cleaning business. It covers the full customer journey — discovering services, understanding pricing, reading trust signals, browsing content, and booking — with a polished, editorial design system and a bilingual (English / Arabic, RTL-aware) experience.

## Features

**Marketing & content**
- Animated hero with trust badges, ratings, and key stats
- Five service categories (House, Restaurant, Office, Mosque, Single Services) with detailed scope checklists
- "Why us" trust grid, 4-step "how it works" process timeline
- Before/after gallery showcasing real transformations
- Embedded video section ("See us in action")
- Auto-rotating client testimonials carousel with hover-to-pause
- FAQ accordion
- Full blog system — homepage coverflow carousel, a `/blog` index, and individual article pages with author bylines and related-articles

**Booking & conversion**
- Live instant-quote calculator (service × property size × frequency)
- One-tap Call and WhatsApp booking, with a persistent mobile call/WhatsApp bar
- Embedded location map and full contact details

**Engineering**
- Fully responsive from 320px phones through large desktops, with a dedicated mobile navigation menu
- Bilingual English/Arabic support with automatic RTL layout switching
- Smooth, consistent scroll and hover micro-animations throughout (Framer Motion)
- Centralized content model — all copy, pricing, services, and media driven from a single typed data file
- SEO metadata and structured data (`LocalBusiness` JSON-LD) out of the box

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (design tokens via `@theme`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Inter, Fraunces, Cairo — via `next/font/google` |
| Database | SQLite via [Prisma](https://www.prisma.io/) (services, blog posts, videos, before/after cases, reviews) |
| Auth | Custom session auth — `bcryptjs` + `jose` (signed JWT cookie) |
| Hosting | VPS (Node.js + PM2 + Nginx) — see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) |

## Getting Started

### Prerequisites

- Node.js 18.18+ (`node -v` to check)
- npm

### Installation

```bash
git clone https://github.com/MdShohag07/kuwait-cleaning-services.git
cd kuwait-cleaning-services
npm install
cp .env.example .env   # then fill in AUTH_SECRET + seed admin credentials
npx prisma migrate dev
npm run db:seed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), and sign in to the admin panel at [http://localhost:3000/admin/login](http://localhost:3000/admin/login) with the `SEED_OWNER_EMAIL`/`SEED_OWNER_PASSWORD` you set in `.env`.

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
kuwait-cleaning-services/
├── app/
│   ├── page.tsx              # Homepage — composes all sections
│   ├── layout.tsx            # Root layout, fonts, SEO metadata, JSON-LD
│   ├── globals.css           # Tailwind v4 theme tokens & base styles
│   ├── blog/
│   │   ├── page.tsx          # Blog index
│   │   └── [slug]/page.tsx   # Individual blog post
│   └── admin/                 # Password-protected admin panel (owner/admin roles)
│       ├── (auth)/login/      # Login page
│       └── (dashboard)/       # Sidebar shell + Services/Blogs/Videos/
│                               # Before-After/Reviews/Settings CRUD screens
├── components/                # One component per section (Hero, Services,
│                               # Why, Process, Video, BeforeAfter, Stats,
│                               # Testimonials, Blog, FAQ, BookingContact,
│                               # Navbar, Footer, MobileHookBar, LangSwitch…)
│   └── admin/                 # Shared admin form widgets
├── lib/
│   ├── site.ts                 # Static content that isn't admin-managed (phone,
│   │                            # nav, FAQs, booking config, stats…)
│   ├── i18n.tsx                 # English/Arabic language context + RTL handling
│   ├── prisma.ts                # Prisma client singleton
│   ├── auth.ts                  # Session/JWT helpers
│   ├── uploads.ts               # Image upload handling for admin forms
│   ├── data/                    # Read helpers (DB → typed data for public pages)
│   └── actions/                 # Server Actions — all admin CRUD + review submission
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # One-time bootstrap seed (run via `npm run db:seed`)
├── proxy.ts                     # Route protection for /admin/**
├── public/images/                # Service, hero, and before/after photography
├── public/uploads/                # Images uploaded through the admin panel (gitignored)
└── docs/                          # README assets + deployment guide
```

## Content & Configuration

- **Services, blog posts, videos, before/after cases, and customer reviews** are managed through the **admin panel** at `/admin` (see below) — they're stored in the database, not in source files.
- **Everything else** — brand name, phone/WhatsApp numbers, nav links, FAQs, "why us" points, booking form options, stats — stays in [`lib/site.ts`](lib/site.ts).
- **Colors, fonts, and radii** are design tokens in the `@theme` block of [`app/globals.css`](app/globals.css).
- **Translations** for the language switcher and static section headings live in [`lib/i18n.tsx`](lib/i18n.tsx).
- **Images** uploaded via the admin panel go to `public/uploads/`; static images ship from `public/images/`. External image hosts must be allow-listed in [`next.config.ts`](next.config.ts).

## Admin Panel

Sign in at `/admin/login` with either the seeded Owner or Admin account (both have identical full access — create/edit/delete everything). From there you can manage:

- **Services** — name, description, features, pricing note, cover image, "most booked" flag, display order
- **Blogs** — full posts with bilingual title/excerpt/body, author byline, cover image
- **Videos** — the YouTube video gallery
- **Before / After** — transformation case studies with paired images
- **Reviews** — customer-submitted reviews land here as **Pending**; approve, reject, edit, or delete them. Only Approved reviews show on the public site.
- **Settings** — change your own password

## Deployment

This site now includes a database (SQLite) and locally-stored uploaded images, so it needs a host with a persistent filesystem and a long-running Node process — a **VPS**, not shared/cPanel hosting or a serverless platform like Vercel. See **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)** for the full step-by-step guide (Hostinger/GoDaddy VPS, PM2, Nginx, first-time setup, and subsequent deploys).

## License

This is a private, client-owned project. All rights reserved.
