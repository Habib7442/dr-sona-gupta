# Architecture Context

This document outlines the architectural boundaries, tech stack mappings, file structures, and technical invariants that govern Dr. Sona Gupta's luxury portfolio web application.

---

## Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) + TypeScript | React server/client orchestration, routing, dynamic page generation, and pre-rendering. |
| **Styling** | Tailwind CSS v4 + PostCSS | Utility-first layout building, responsive frameworks, custom property transitions, and global themes. |
| **Motion/Animations** | Framer Motion | Fluid entrance loaders, scroll-linked viewport triggers, magnetic button controllers, and organic SVG morphs. |
| **UI Components** | Shadcn UI + Radix UI + Lucide | Reusable, highly accessible, keyboard-navigable interface components (buttons, inputs, cards). |
| **Conversions** | Formspree or EmailJS API | Secure serverless capture of appointment request payloads, forwarded directly to `guptasona2018@gmail.com`. |
| **Hosting** | Vercel | Production CDN deployment, edge routing, image optimization, and rapid caching. |

---

## System Boundaries

The application enforces strict directory-based separation of concerns:

- `app/` — Routing endpoints and layout trees. Serves as the primary entry point.
  - `app/layout.tsx` — Encompasses global HTML wrappers, SEO meta-injection, and global CSS import.
  - `app/page.tsx` — The main single-page aggregator. Orchestrates and stacks sections.
  - `app/providers.tsx` — Client-side state and animation wrappers (e.g., AnimatePresence, toast, theme wrappers).
- `components/` — UI blocks separated by reuse and scope.
  - `components/ui/` — Low-level, stateless design atomic components (e.g., `button.tsx`, `input.tsx`, `card.tsx`) managed and populated via Shadcn.
  - `components/sections/` — Large, section-level components representing the page stack (e.g., `preloader.tsx`, `hero.tsx`, `services.tsx`, `contact.tsx`, `map.tsx`).
  - `components/shared/` — Reusable multi-section items like headers, hamburger drawers, and footer blocks.
- `lib/` — Shared utility libraries and business logic.
  - `lib/utils.ts` — Tailwind merge helper classes.
- `public/` — Static assets (WebP graphics, SVG icons, robots.txt, sitemap.xml, favicon).

---

## Storage Model

As a lightweight V1, this site has **no active server database**. Instead:

- **Static Content Configuration:** Service details, bio copies, lists of conditions, and coordinates are structured in static configuration objects inside standard React code files.
- **Form Data Capture:** Transmitted immediately upon validation over SSL to the external Formspree/EmailJS API. No local storage, caching, or archiving of patient identifiers occurs on the client or server.
- **Static Assets:** Unsplash placeholders, SVGs, and brand banners reside under `public/` and are fully cached via Vercel's edge network.

---

## Auth and Access Model

*   **Public Access:** The portfolio is entirely public-facing with no authentication required to view bio pages, services, maps, or submit contact requests.
*   **Form Protection:** Spam filtering is delegated directly to the third-party endpoint (Formspree/EmailJS built-in Honeypot fields and recaptcha triggers).
*   **Third-Party Dashboard Access:** Access to the Formspree/EmailJS administrative console is controlled using Dr. Sona's secure Google credentials.

---

## Invariants

1. **RSC First:** All page sections MUST be implemented as React Server Components (RSC) by default. Use `'use client'` strictly at leaf nodes or wrap dynamic animation elements inside lightweight client components to ensure optimal SEO indexing and minimal Javascript payload size.
2. **No Hex Value Hardcoding:** No CSS or HTML element should utilize hardcoded hex or RGB colors. All colors, shadows, and radii MUST strictly resolve to the CSS custom variables defined in the global design token system in `ui-context.md` (or standard Tailwind semantic tokens).
3. **No Direct DOM Mutations:** Modifying scroll properties or window sizing must be performed using idiomatic React hooks (`useRef`, `useEffect`) rather than vanilla document queries (`document.getElementById`).
4. **Single H1 Rule:** The landing page MUST contain exactly one `<h1>` tag in the hero component for proper search engine semantics. All subsequent sub-sections must stack logically using standard `<h2>` through `<h6>` structures.
5. **No Placeholders in Production:** No standard gray visual placeholders should be shipped. Use beautiful, styled SVG patterns or professional Unsplash medical photography mapped to WebP formats.
6. **Layout Shift Prevention:** All Framer Motion animations must utilize explicit `initial`, `animate`, and `exit` parameters to prevent layout shifts (CLS) on load or during element transitions. Always set `layoutId` properly when morphing components.
