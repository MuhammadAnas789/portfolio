# Muhammad Anas — Resume & Portfolio Project Summary

**Last Updated:** March 2026  
**Portfolio:** https://manas-engineer.vercel.app  
**Repo:** https://github.com/MuhammadAnas789/portfolio

---

## 1. Personal Information

| Field | Value |
|-------|-------|
| Name | Muhammad Anas |
| Email | manas2k00@gmail.com |
| Phone | +92 313 6260286 |
| LinkedIn | linkedin.com/in/muhammadanas2k00 |
| Location | Lahore, Pakistan |
| University | Namal University, Mianwali — BSc CS (Sep 2019 – Sep 2023) |

---

## 2. Work Experience

All three roles are at **SystemsD, Lahore, Pakistan**.

| Role | Period |
|------|--------|
| Software Engineer | Sep 2025 – Present |
| Associate Software Engineer | Aug 2024 – Aug 2025 |
| Software Engineer Intern | Jun 2024 – Aug 2024 |

### Software Engineer (Current)
- Owned full-stack delivery across multiple client projects, covering architecture, backend, and frontend.
- Integrated AI, voice, and payment APIs into production systems, handling service design and error resilience.
- Designed schemas, built async job pipelines, and resolved production issues across live environments.

### Associate Software Engineer
- Built and maintained full-stack features for a client-facing marketplace platform using Laravel and Vue.js.
- Implemented real-time messaging and integrated third-party services for payments and file storage.
- Translated client requirements into technical solutions, iterating based on direct feedback.

### Software Engineer Intern
- Refactored a CRUD application into a layered MVC architecture, separating frontend, backend, and database concerns.
- Contributed to API integration, relational database design, and backend development on live projects.

---

## 3. Projects

Projects are described by work only — no client names are used publicly.

### Project 1 — Expert Marketplace Platform
**Stack:** Laravel, Vue.js (2 & 3), MySQL, Redis, Docker, Stripe, AWS S3, Postmark  
**Scale:** 500–1,000 active clients

- Maintained and extended a versioned REST API across dual Vue 2/3 frontends.
- Resolved production DB bottleneck — measurable API response improvement.
- Implemented WebSocket real-time chat within a role-scoped domain architecture.

### Project 2 — AI Voice Receptionist Platform
**Stack:** Next.js, TypeScript, Twilio, ElevenLabs, WebSockets, Docker  
**Type:** Multi-tenant SaaS, sole developer on voice bridge

- Architected split-service design — Next.js serverless app + isolated voice bridge.
- Owned voice bridge end-to-end: AI calls, warm transfers, fault-tolerant transcripts.
- Built 35+ REST API handlers, durable job queue, post-call pipeline.

### Project 3 — Shipping Analytics Dashboard
**Stack:** Laravel, Vue 3, Pinia, Vue Router 4, MySQL, Redis, Ant Design Vue  
**Scale:** 100+ orders/day, sole developer

- Designed and built decoupled Laravel REST API + Vue 3 SPA from scratch.
- Automated order ingestion via scheduled jobs (Zenventory + ShipStation integration).
- Hourly alerts, per-order cost tracking, auth-guarded routing.

---

## 4. Skills

| Category | Skills |
|----------|--------|
| Languages | PHP, TypeScript, JavaScript, SQL |
| Frameworks | Laravel, Next.js, Vue.js, Tailwind CSS, Alpine.js |
| Databases | MySQL, Redis, Cloudflare D1 |
| Tools | Git, GitHub Actions, Docker, Vercel, Fly.io, AWS (S3) |
| Integrations | Stripe, Twilio, ElevenLabs, Clerk, Zenventory, Postmark |
| Other | REST APIs, WebSockets, CI/CD |

---

## 5. Resume Strategy

### Format
- LaTeX, single-column, minimal style matching friend's CV template
- Sections: Header → Experience → Skills → Projects → Education
- No achievements section, no GitHub link in header

### Four Variants (all in `/mnt/user-data/outputs/`)

| File | Target Role | Key Differences |
|------|-------------|-----------------|
| `muhammad_anas_resume.tex` | Generic / Master | Balanced, no summary |
| `resume_fullstack_engineer.tex` | Full-Stack Engineer | Summary added, projects show breadth |
| `resume_backend_engineer.tex` | Backend Engineer | Backend-first framing, frontend minimized |
| `resume_product_engineer.tex` | Product Engineer | User impact focus, Aethermuse leads |

### File Naming for Applications
- Generic: `Muhammad_Anas_Resume.pdf`
- Tailored: `Muhammad_Anas_Backend_Engineer.pdf`
- Company-specific: `Muhammad_Anas_Backend_Engineer_Stripe.pdf`

### Resume Rules Applied
- No fabricated metrics
- No buzzwords or filler phrases
- Strong ownership language ("Owned", "Sole developer", "Architected")
- Bullets are concise and high-impact
- No repeated verbs across bullets

---

## 6. LinkedIn Optimization

### Headline
```
Software Engineer · Full-Stack | Laravel · Vue.js · Next.js | Building Scalable Web Products
```

### About Section
Full-stack engineer paragraph covering SystemsD work, three project types, backend philosophy, and open-to-work signal.

### Skills (ordered by priority)
PHP, TypeScript, Laravel, Vue.js, Next.js, MySQL, REST APIs, JavaScript, WebSockets, Redis, Docker, AWS, GitHub Actions, Stripe, Twilio, Tailwind CSS, Git

### Skills → Experience Mapping
- **Intern:** PHP, JavaScript, Laravel, MySQL, Git, REST APIs
- **ASE:** Laravel, Vue.js, PHP, MySQL, Redis, WebSockets, Stripe, Tailwind CSS, REST APIs, Docker
- **SE:** TypeScript, Next.js, Laravel, Vue.js, MySQL, Redis, WebSockets, GitHub Actions, Twilio, AWS, Docker, REST APIs

### Featured Section
- Upload: `Muhammad_Anas_Resume.pdf`
- Title: "Muhammad Anas — Software Engineer"

### Cover Banner
- Template: Jonathan Patterson dark dual-monitor style (Canva)
- Text: `Muhammad Anas / Software Engineer / Software Engineer | Laravel | Vue.js | Next.js | TypeScript`
- Size: 1584 × 396px

---

## 7. Portfolio Website

### Tech Stack
Next.js 15, TypeScript, Tailwind CSS, Framer Motion

### Design System
| Token | Value |
|-------|-------|
| Background | #0f172a |
| Surface | #1e293b |
| Accent (teal) | #2dd4bf |
| Secondary (purple, hero only) | #7c3aed |
| Font | Geist |

### Sections
Hero → About → Experience → Projects → Skills → Education → Contact

### Key Design Decisions
- Projects have no names — described by work only
- No phone number displayed publicly
- SystemsD mentioned as employer (appropriate — not a client name)
- Contact form uses Formspree (ID: `mgolqgjd`)
- Resume PDF linked in navbar (`/public/resume.pdf`)

### UI/UX Features Implemented
- `<MA/>` SVG geometric logo in navbar with teal glow on hover
- Hero: dot grid background, teal + purple gradient orbs, animated name reveal, blinking cursor
- Section eyebrow labels: teal lines flanking uppercase mono text
- Stats cards: teal top border, hover lift effect
- "Current" badge on Software Engineer role
- Project cards: decorative 01/02/03 numbers, teal border hover glow
- Skills: 2-column grid, pill hover turns teal
- Scroll spy: active nav link highlighted in teal
- Contact: pill-style email + LinkedIn buttons with lucide-react icons
- Footer: dynamic year, teal name

### Deployment
| Item | Value |
|------|-------|
| Platform | Vercel (free Hobby plan) |
| Domain | manas-engineer.vercel.app |
| Repo | MuhammadAnas789/portfolio (main branch) |
| Auto-deploy | Yes — every push to main triggers redeploy |
| Git config | Local only — global config untouched |

---

## 8. Security Hardening Applied

- HTTP security headers in `next.config.ts` (CSP, X-Frame-Options, HSTS, etc.)
- `poweredByHeader: false`
- Contact form: input sanitization, max lengths, rate limiting, honeypot field
- Formspree ID moved to `.env.local` (not committed to git)
- `npm audit` run and vulnerabilities resolved
- `robots.txt` and `sitemap.ts` added
- All external links use `rel="noopener noreferrer"`
- No hardcoded secrets, no console.log leaks

---

## 9. Pending / Future Improvements

| Item | Priority | Notes |
|------|----------|-------|
| Upload real resume PDF | 🔴 High | Replace empty `/public/resume.pdf` with compiled Overleaf PDF |
| Create OG image | 🟡 Medium | 1200×630px dark banner for LinkedIn sharing previews |
| Buy custom domain | 🟡 Medium | `muhammadanas.dev` (~$12/yr on Cloudflare Registrar) |
| LinkedIn recommendations | 🟡 Medium | Request from a colleague at SystemsD |
| Enable Open to Work | 🟢 Low | If actively job searching |
| Add blog/posts section | 🟢 Low | Boosts LinkedIn algorithm visibility |

---

## 10. Role Fit Summary

| Role | Fit |
|------|-----|
| Full-Stack Engineer (Laravel/Vue/Next) | ✅ Strong |
| Backend Engineer (PHP/Laravel) | ✅ Strong |
| Software Engineer — Product | ✅ Strong |
| API / Integration Engineer | ✅ Good |
| Node.js / TypeScript Backend | 🟡 Good |
| DevOps / Platform Engineer | ❌ Too early |
| Solutions Architect | ❌ Too early |