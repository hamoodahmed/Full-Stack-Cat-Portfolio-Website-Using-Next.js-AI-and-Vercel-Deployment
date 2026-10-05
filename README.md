# 🐾 Whiskers — Enterprise Full-Stack Cat Portfolio & Showcase Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16.3-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript_5.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Turbopack-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Turbopack" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  A state-of-the-art, production-grade full-stack web application showcasing advanced frontend architecture, serverless backend microservices, resilient database integration, and modern glassmorphic design engineering.
</p>

<p align="center">
  <a href="#-live-demo--preview"><strong>Live Demo</strong></a> •
  <a href="#-architectural-overview"><strong>Architecture</strong></a> •
  <a href="#-features-in-depth"><strong>Key Features</strong></a> •
  <a href="#-rest-api-documentation"><strong>API Specs</strong></a> •
  <a href="#-database-schema--supabase"><strong>Database</strong></a> •
  <a href="#-getting-started"><strong>Quick Start</strong></a> •
  <a href="#-deployment-guide"><strong>Deployment</strong></a>
</p>

---

## 🌐 Live Demo & Preview

- **🚀 Live Production URL:** [https://cat-portfolio.vercel.app](https://cat-portfolio.vercel.app) *(Deploy link)*
- **📦 GitHub Repository:** [https://github.com/your-username/cat-portfolio](https://github.com/your-username/cat-portfolio)
- **⚡ Status:** Production Ready (Next.js 16 App Router + Turbopack)

---

## 📖 Executive Summary & Engineering Vision

**Whiskers** was architected to serve as a real-world benchmark of modern, high-performance web engineering. Rather than building a conventional static portfolio, this project implements a complete **Full-Stack Application lifecycle** utilizing the bleeding edge of the React ecosystem (**Next.js 16 App Router**, **React 19**, and **TypeScript 5**).

### Core Engineering Principles
1. **Performance First:** Leverages Static Site Generation (SSG) with `generateStaticParams` for sub-100ms response times.
2. **Defensive Backend Architecture:** Serverless REST API endpoints with complete input validation, strict sanitization, and graceful database failover mechanisms.
3. **Bespoke Visual Craftsmanship:** Custom glassmorphism, responsive CSS token systems, and zero layout shift (zero CLS) across all screen sizes.
4. **Enterprise Security Standards:** Zero credentials in version control, security-hardened `.gitignore` policies, and strict typed API contracts.

---

## ✨ Features In-Depth

### 🖥️ Frontend & UI/UX Excellence
- **Next.js 16 App Router & Server Components:** Maximizes server-side rendering efficiency, drastically reducing client-side JavaScript execution payload.
- **Glassmorphic Aesthetic & Micro-Interactions:** Custom modern design system with dynamic blur backdrops (`backdrop-filter`), smooth cubic-bezier transitions, and interactive hover feedback.
- **Dynamic SSG Blog Engine:** Pre-compiled static article routes (`/blog/[slug]`) generated during build-time for lightning-fast delivery and maximum SEO indexing.
- **Interactive Lightbox Photo Gallery:** Client-side category filtering with modal lightbox viewports and responsive touch gestures.
- **Form Interactivity & Real-Time Feedback:** Fully managed contact form featuring client-side format checks, dropdown category selection, and instant notification toasts via `react-hot-toast`.
- **Custom 404 Experience:** Delightful, cat-themed error boundary directing lost visitors back to valid application pathways.

### ⚙️ Serverless Backend & Data Layer
- **RESTful Endpoints:** Complete API suite located under `/api/*` serving contact inquiries, blog articles, and gallery collections.
- **Hybrid Data Pipeline (Supabase + In-Memory Fallback):** Connects to cloud-hosted PostgreSQL on Supabase while maintaining zero-crash fallback data stores for local development and offline environments.
- **Strict Server-Side Validation:** Validates required fields, checks email syntax using regular expressions, and sanitizes payload bodies before database persistence.
- **Standardized Response Envelopes:** All endpoints return consistent JSON contracts (`{ success, data, error }`) with correct HTTP status codes (`200 OK`, `400 Bad Request`, `500 Internal Error`).

---

## 🏛️ Architectural Overview

```
┌────────────────────────────────────────────────────────┐
│                   CLIENT BROWSER                       │
│  (React 19 Server & Client Components, Lightbox UI)    │
└───────────────────────────┬────────────────────────────┘
                            │ HTTP / Fetch Requests
                            ▼
┌────────────────────────────────────────────────────────┐
│               NEXT.JS 16 APP ROUTER                    │
│   ┌────────────────────┐      ┌────────────────────┐   │
│   │   Static Routes    │      │  Serverless APIs   │   │
│   │ (SSG: /blog/[slug])│      │ (/api/contact etc) │   │
│   └────────────────────┘      └─────────┬──────────┘   │
└─────────────────────────────────────────┼──────────────┘
                                          │
                  ┌───────────────────────┴───────────────────────┐
                  ▼                                               ▼
     ┌────────────────────────┐                      ┌────────────────────────┐
     │   Supabase Cloud DB    │                      │  In-Memory Dev Buffer  │
     │ (PostgreSQL Database)  │                      │   (Graceful Fallback)  │
     └────────────────────────┘                      └────────────────────────┘
```

---

## 🛠️ Technology Stack Matrix

| Domain | Technology | Version | Purpose & Strategic Choice |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `16.3.8` | Modern App Router, Turbopack compiler, SSG/SSR optimization |
| **UI Library** | React | `19.2.8` | Latest React primitives, optimized reconciliation & concurrent features |
| **Language** | TypeScript | `5.x` | Strict type safety, interface contracts, zero `any` policy |
| **Database** | Supabase | `2.117.2` | Cloud-hosted PostgreSQL, row-level security, instant REST SDK |
| **Styling** | Vanilla CSS3 | Standard | Custom design tokens, glassmorphism, responsive grid & flexbox |
| **Icons** | Lucide React | `1.52.0` | Clean, lightweight SVG icon package |
| **Toasts** | React Hot Toast | `2.6.1` | Accessible, micro-animated user notifications |
| **Animations** | Framer Motion & CSS | `14.0.0` | Fluid scroll reveals, spring transitions, and interactive states |
| **Tooling** | Turbopack | Latest | High-speed compilation engine replacing Webpack |
| **Deployment** | Vercel Edge | Cloud | Global low-latency CDN distribution and automated CI/CD |

---

## 📡 REST API Documentation

### 1. Submit Contact Message
`POST /api/contact`

Validates user inquiry and records it in Supabase `contact_messages` table.

#### Request Headers
```http
Content-Type: application/json
```

#### Request Payload
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Cat Photography Session",
  "interest": "Photography",
  "message": "Hi, I would love to book a portrait session for my two British Shorthairs!"
}
```

#### Response (`200 OK`)
```json
{
  "success": true,
  "message": "Message received! We'll get back to you within 24 hours. 🐾"
}
```

#### Error Response (`400 Bad Request`)
```json
{
  "error": "Name, email, and message are required."
}
```

---

### 2. Fetch Blog Articles
`GET /api/blog`

Returns all published cat lifestyle and care articles formatted with read time and excerpts.

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Why do cats sleep so much?",
      "excerpt": "Ever wondered why your furry friend spends most of the day sleeping?",
      "slug": "why-cats-sleep-so-much",
      "category": "Cat Life",
      "date": "October 2, 2026",
      "readTime": 4,
      "emoji": "😴"
    }
  ],
  "total": 6
}
```

---

### 3. Fetch Gallery Media
`GET /api/gallery`

Returns gallery collection containing photo metadata, labels, and display emojis.

#### Response (`200 OK`)
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Luna in Sunlight",
      "image": "/images/cat1.jpg",
      "emoji": "✨"
    }
  ],
  "total": 9
}
```

---

## 🗄️ Database Schema & Supabase Setup

When connecting your live Supabase project, execute the following SQL script inside the **Supabase SQL Editor**:

```sql
-- Create table for contact submissions
CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    interest VARCHAR(100),
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous submissions (INSERT only)
CREATE POLICY "Allow public insert on contact_messages"
ON contact_messages
FOR INSERT
TO anon
WITH CHECK (true);
```

---

## 📂 Project Architecture Tree

```plaintext
cat-portfolio/
├── public/                       # Static public assets
│   ├── images/                   # Optimized photography assets
│   ├── cat1.jpg ... cat9.jpg     # High-resolution feline gallery images
│   ├── blog-cat1.jpg ...         # Curated blog post cover images
│   └── favicon.ico               # Application favicon
├── src/
│   ├── app/                      # Next.js 16 App Router
│   │   ├── api/                  # Serverless REST API Handlers
│   │   │   ├── blog/route.ts     # Blog GET endpoint
│   │   │   ├── contact/route.ts  # Contact POST & GET endpoints
│   │   │   └── gallery/route.ts  # Gallery GET endpoint
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing page with search/filter
│   │   │   └── [slug]/page.tsx   # Dynamic SSG blog post pre-renderer
│   │   ├── contact/
│   │   │   └── page.tsx          # Dedicated contact portal page
│   │   ├── globals.css           # Global CSS variables & token system
│   │   ├── layout.tsx            # Root HTML shell, fonts & meta tags
│   │   ├── page.tsx              # Main high-converting landing page
│   │   └── not-found.tsx         # Custom 404 cat-themed error page
│   ├── components/               # Reusable UI component library
│   │   ├── ContactSection.tsx    # Interactive contact form & status display
│   │   ├── Footer.tsx            # Global site footer with links & credits
│   │   ├── Navbar.tsx            # Sticky navigation bar with mobile drawer
│   │   └── ScrollReveal.tsx      # IntersectionObserver animation wrapper
│   ├── data/
│   │   └── index.ts              # Data contracts, static datasets & TypeScript interfaces
│   └── lib/
│       └── supabase.ts           # Supabase client instantiation & config checks
├── .env.example                  # Safe public environment variable template
├── .gitignore                    # Security-hardened exclusion patterns
├── next.config.ts                # Next.js configuration & image domains
├── package.json                  # Dependencies & execution scripts
└── tsconfig.json                 # Strict TypeScript configuration
```

---

## 🚀 Getting Started

Follow these steps to clone, configure, and run the project locally.

### Prerequisites
- **Node.js**: `v18.17.0` or later
- **npm** (v9+), **yarn**, or **pnpm**
- **Git** installed on your workstation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/cat-portfolio.git
cd cat-portfolio
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create your local environment file:
```bash
cp .env.example .env.local
```

Inside `.env.local`, specify your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```
*(Note: If you do not have Supabase credentials yet, the app runs smoothly in development fallback mode).*

### 4. Launch the Development Server
```bash
npm run dev
```

Navigate to **[http://localhost:3000](http://localhost:3000)** in your browser.

### 5. Validate Production Build
To test the optimized production build locally:
```bash
npm run build
npm run start
```

---

## 🚢 Deployment Guide

### Option 1: Automatic Deployment with Vercel (Recommended)
1. Push your local repository to your **GitHub** account.
2. Sign in to [Vercel](https://vercel.com) using your GitHub profile.
3. Click **Add New...** > **Project** and select `cat-portfolio`.
4. Next.js 16 will be automatically detected.
5. In the **Environment Variables** panel, input:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click **Deploy**. Your site will be built and distributed on Vercel's global Edge Network in under 60 seconds.

### Option 2: Deployment via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

---

## 🔒 Security & Performance Engineering

- 🛡️ **Zero Secret Leakage:** `.env*` and credential keys are excluded from git tracking via production-grade `.gitignore`.
- ⚡ **Image Optimization:** All images utilize Next.js `Image` with automatic WebP conversion, lazy-loading, and responsive dimensions.
- 🎯 **Sub-Millisecond Routing:** SSG pre-computes dynamic blog pages, minimizing server computations during user navigation.
- 🧹 **Defensive Coding:** Validates all incoming payloads server-side before execution, preventing injection attacks.

---

## 🗺️ Roadmap & Planned Enhancements

- [x] Next.js 16 App Router Migration with Turbopack support.
- [x] Dynamic SSG Blog Engine with `generateStaticParams`.
- [x] Serverless REST APIs with Supabase PostgreSQL fallback.
- [ ] Admin Dashboard for instant blog article publishing without code redeployment.
- [ ] Light / Dark Theme toggle with persistent `localStorage` preference.
- [ ] Multi-language Internationalization (i18n) support (English, Urdu, Spanish).
- [ ] Integration with Stripe for charitable cat rescue donations.

---

## 💼 Author & Contact

Developed with pride and craftsmanship by **A Full-Stack Software Engineer**. Open for **Full-Stack / Frontend Engineering roles** (Remote / On-site).

- 🌐 **Portfolio:** [https://lnkd.in/dUBUQGST](https://lnkd.in/dtC-sGbE)
- 💼 **LinkedIn:** [https://www.linkedin.com/in/hamood-ahmed-a34748213/](https://www.linkedin.com/in/hamood-ahmed-a34748213/)
- 🐙 **GitHub:** [https://github.com/hamoodahmed/Full-Stack-Cat-Portfolio-Website-Using-Next.js-AI-and-Vercel-Deployment]
- 📧 **Email:** [hamoodahmed75a@gmail.com](mailto: hamoodahmed75a@gmail.com)

---

## 📄 License
This project is open-source and distributed under the **[MIT License](LICENSE)**.
