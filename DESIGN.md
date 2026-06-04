# Design Review — sonagupta.com

**Site:** https://www.sonagupta.com/
**Subject:** Sona Gupta Deb Purkayastha — RCI Certified Audiologist & Speech Therapist, Valley Hospital, Silchar (Barak Valley, Assam)
**Type:** Single-page professional / clinical practice website
**Reviewed:** 2026-06-04
**Built with:** Next.js (App Router) · React · Tailwind CSS v4 · self-hosted fonts (next/font) · Google Maps embed · credited "Designed by Locallify"

---

## 1. Executive summary

This is a **well-designed, professionally art-directed site** — far above the typical local-practice template. It has a confident editorial typographic style, a calm and appropriate healthcare palette, a logical content flow, and strong trust signals (RCI certification, credential logos, testimonials, hospital affiliation). The metadata/SEO tagging is genuinely good.

The biggest opportunities are **technical, not aesthetic**: the page renders almost entirely on the client (the server HTML is an empty shell), there is **no structured data (JSON-LD)**, and there are **accessibility gaps** (image alt text and color contrast on the brand orange/teal). For a business that depends on **local Google search**, fixing the rendering + schema gaps is the single highest-leverage improvement available.

### Scorecard

| Dimension | Grade | Notes |
|---|---|---|
| Visual design / art direction | 8.5 / 10 | Distinctive, editorial, cohesive feel |
| Typography | 8.5 / 10 | Sophisticated 3-font system, clear hierarchy |
| Color system | 6.5 / 10 | Good core palette, but too many near-duplicate accents |
| Layout & information architecture | 8.5 / 10 | Logical, comprehensive single-page flow |
| UX & conversion | 8.0 / 10 | Multiple clear CTAs, phone/booking/forms |
| Content & trust | 8.0 / 10 | Strong credentials; a few content gaps |
| Accessibility | 5.5 / 10 | Alt text + contrast issues to fix |
| SEO | 6.0 / 10 | Excellent meta, but client-rendered + no schema |
| Performance (est.) | 6.5 / 10 | Fonts preloaded; CSR + map iframe are risks |
| Responsive / mobile | 7.5 / 10 | Appears solid; verify tap targets & reflow |
| **Overall** | **≈ 7.3 / 10** | Strong design, fixable technical debt |

---

## 2. What's working well (keep these)

- **Confident, editorial typography.** A 3-typeface system is used with intent:
  - **Outfit** — geometric sans for headings/eyebrows
  - **Inter** — highly readable body text
  - **Cormorant Garamond** — serif italic used as an *accent* (e.g., the word "better" in the hero), adding warmth and a premium feel.
  The hero headline ("Creating Comfort Through *better* **Speech & Hearing.**") mixes a colored keyword and a hand-drawn underline SVG — a polished, magazine-style touch.
- **Appropriate, calming palette.** Soft mint/sage background (`#F3F7F5`) + near-black slate text (`#0F172A`) + medical teal (`#0D9488`) reads as clean, clinical, and trustworthy — exactly right for healthcare.
- **Logical single-page narrative:** Hero → About → Clinical Offerings → Who Can Benefit (Conditions) → Why Choose → Credentials → Logistics (hours/location/map) → Consultation form + FAQ → Footer. This mirrors a patient's decision journey (who → what → does this apply to me → can I trust them → how do I reach them).
- **Strong trust & conversion architecture:** RCI certification badge, credential/affiliation logos (Oticon, RCI CRE, etc.), testimonials carousel with star ratings, "250+ patients" stat, hospital affiliation, and **multiple conversion paths** (header *Book Appointment* + *Call*, hero CTAs, logistics *Book Visit*, full consultation form).
- **Interactive engagement patterns done tastefully:** condition filter tabs (All / Hearing / Speech & Language), FAQ accordion, testimonial carousel.
- **Form has visible text labels** for every field (Full Name, Phone, Patient Age, Clinical Concern, Details) — an accessibility positive.
- **Excellent metadata / social tagging:** proper `<title>`, meta description, canonical URL, robots directives, Open Graph + Twitter cards (with 1200×630 OG image), `og:locale=en_IN`, `format-detection: telephone=yes`, and a correct responsive viewport meta. `<html lang="en">` is set.
- **Self-hosted fonts with `preload`** (woff2) and font fallbacks — good for layout stability and avoiding third-party font requests.

---

## 3. Design system (as built)

### Typography
| Role | Typeface | Observed usage |
|---|---|---|
| Headings (`--font-heading`) | **Outfit** | Section headings, eyebrows |
| Body (`--font-sans`) | **Inter** | Paragraphs, UI text |
| Serif accent (`--font-serif`) | **Cormorant Garamond** | Italic emphasis words |

Hierarchy pattern: small UPPERCASE eyebrow label → large display heading (with a colored keyword + optional serif italic word) → supporting paragraph. Consistent and effective.

### Color tokens (extracted from compiled CSS)
| Token | Hex | Role |
|---|---|---|
| Background | `#F3F7F5` | Soft mint canvas |
| Text | `#0F172A` (slate-900) | Primary copy — most-used color (≈53×) |
| Primary accent | `#0D9488` (teal-600) | Brand teal (≈32×) |
| Secondary accent | `#F26A36` (orange/coral) | Hero keywords, CTAs (≈15×) |
| Support teal | `#088395` | Secondary teal |
| Success green | `#10B981` / `#059669` | Checks, positives |
| Soft border | `#E2EBE7` | Hairlines / dividers |

---

## 4. Issues & opportunities

Severity: 🔴 High impact · 🟡 Medium · 🟢 Low / polish

### 🔴 4.1 Content is client-rendered (the #1 issue)
The server HTML (~18 KB) contains **only the `<head>` metadata** — no `<h1>`, no body copy, no images, no service/condition text. All visible content (including the H1) appears **only after JavaScript executes and React hydrates**.

- **Why it matters:** For a local medical practice, organic + local Google search is the primary acquisition channel. While Google *can* render JS, client-only rendering is slower to index, less reliable, and weaker than having real content in the initial HTML. Other crawlers, AI answer engines, and some link previewers see almost nothing.
- **Fix:** Use Next.js **SSR or static generation (SSG)** so the full page content ships in the initial HTML response. This is largely a build/config change in Next.js (Server Components / `generateStaticParams` / static export) and is the highest-ROI improvement on this list.

### 🔴 4.2 No structured data (JSON-LD)
No `application/ld+json` schema is present anywhere on the page.

- **Why it matters:** A local healthcare site is the *ideal* candidate for rich results. Missing schema is a large, easy-to-capture SEO win.
- **Fix — add JSON-LD for:**
  - `MedicalBusiness` / `Physician` + `LocalBusiness` (name, address, geo, phone, opening hours, `priceRange`, `medicalSpecialty`) — feeds Google's local pack & knowledge panel.
  - `FAQPage` — the existing FAQ accordion can earn FAQ rich snippets almost for free.
  - `AggregateRating` / `Review` — the testimonials + star ratings can surface as review stars in search.
  - `BreadcrumbList` and `WebSite` for completeness.

### 🔴 4.3 Color contrast (WCAG AA) on the brand accents
Measured against the mint background and as button fills (ratios computed from the extracted tokens):

| Combination | Ratio | AA normal (4.5) | AA large (3.0) |
|---|---|---|---|
| Orange `#F26A36` text on mint `#F3F7F5` | **≈ 2.7:1** | ❌ Fail | ❌ Fail |
| White text on orange `#F26A36` button | **≈ 2.9:1** | ❌ Fail | ❌ (borderline) |
| White text on teal `#0D9488` button | **≈ 3.8:1** | ❌ Fail | ✅ Pass |
| Slate-500 `#64748B` small text on mint | **≈ 3.9:1** | ❌ Fail | ✅ Pass |

- **Why it matters:** Orange is used for hero keywords and likely CTA buttons; white-on-teal is the primary button style. As-is, **normal-size text on both brand buttons fails AA**, and orange text/buttons fail even the large-text threshold.
- **Fix:**
  - For buttons, **darken the fills** — e.g., teal-700 `#0F766E` (~5:1 with white) and a deeper orange such as `#C2410C`/`#D85623` (already in your palette) for ~4.5:1+.
  - Reserve the bright orange `#F26A36` for **large display text only** (and even then, nudge it darker), not for small labels or body links.

### 🟡 4.4 Image alt text is inconsistent
Some images carry descriptive alt text (e.g., "Sona Gupta", "Oticon Authorised Fitting Centre"), but **many image elements have no descriptive alternative text** and would be announced generically or skipped by screen readers.

- **Fix:** Give every meaningful image concise, descriptive alt text (portraits, certificate logos, condition illustrations). Mark purely decorative images/SVGs as `alt=""` / `aria-hidden="true"` so they're cleanly ignored. Use `next/image` so this is enforced per image.

### 🟡 4.5 Accent-color sprawl dilutes the brand
The compiled CSS contains **6+ near-duplicate greens/teals** (`#0D9488`, `#088395`, `#10B981`, `#00BAA7`, `#00BB7F`, `#059669`) plus several oranges (`#F26A36`, `#D85623`, `#E26D5C`), reds, pinks, blues, and yellows — likely one tint per service/condition tag.

- **Why it matters:** Too many similar-but-not-identical accents read as slightly "off" and weaken the otherwise strong teal + orange identity (the "rainbow tag" effect).
- **Fix:** Define a **tight token set** — 1 primary teal, 1 secondary orange, 1 success green, plus a neutral ramp — and derive tints/shades programmatically (Tailwind v4 `@theme` tokens). Let category color-coding pull from that controlled scale rather than ad-hoc hexes.

### 🟡 4.6 Verify heading semantics & document outline
A single rendered `<h1>` exists (the hero) — good. Confirm that the UPPERCASE eyebrow labels ("CLINICAL OFFERINGS", "WHY CHOOSE SONA GUPTA", etc.) are **styled spans/`<p>`**, not heading tags, and that the outline goes `h1 → h2 → h3` without skipped levels. Clean hierarchy helps both screen readers and SEO.

### 🟡 4.7 Performance hygiene
Fonts are preloaded (good), but verify:
- **Lazy-load the Google Maps iframe** (`loading="lazy"`) or use a click-to-load "facade" — embedded Maps is heavy and can hurt LCP/CLS and Core Web Vitals.
- Ensure all images go through **`next/image`** (responsive `srcset`, lazy loading, AVIF/WebP) — especially the hero portrait, which is your **LCP element**.
- 3 font families × multiple weights add up — confirm only the weights actually used are shipped (next/font subsets by default; audit for unused weights).
- Run a **Lighthouse / PageSpeed Insights** pass (mobile) to get real Core Web Vitals; the CSR architecture (4.1) likely depresses Time-to-Interactive.

### 🟢 4.8 Content / trust enhancements
- Add a **link to Google Business reviews** (and embed/refresh real reviews) to reinforce the testimonials.
- State **languages spoken** (e.g., Bengali / Assamese / Hindi / English) — highly relevant for Barak Valley patients and for trust.
- Note **fees/consultation pricing or "insurance/▢ accepted"** if possible — a common pre-booking question.
- Consider a short **intro video or clinic photos** to humanize the practice.

### 🟢 4.9 Mobile & interaction polish
- Verify the 6-card offerings grid and condition filters **reflow cleanly** to 1 column on small screens, and that tap targets are **≥ 44×44px**.
- Add a **sticky "Call / Book" bar** on mobile — for a phone-driven local practice this typically lifts conversions.
- Ensure the **testimonial carousel** has accessible prev/next labels (appears to already use "Previous/Next patient testimonial" — good) and **pauses on hover/focus** if it auto-rotates.
- Add `theme-color` meta + a web app manifest for a more polished mobile/PWA presentation (minor).

---

## 5. Prioritized roadmap

### Do first (high impact, mostly one-time effort)
1. **Server-render / statically generate** the page content (Next.js SSR/SSG) so HTML ships with content. *(§4.1)*
2. **Add JSON-LD structured data** — MedicalBusiness/Physician, LocalBusiness, FAQPage, AggregateRating. *(§4.2)*
3. **Fix button & accent contrast** to pass WCAG AA (darken teal/orange fills, restrict bright orange to large display). *(§4.3)*

### Do next (medium effort, clear payoff)
4. **Audit & complete image alt text**; hide decorative images from AT. *(§4.4)*
5. **Consolidate the color palette** into a controlled token set. *(§4.5)*
6. **Lazy-load the map**, route images through `next/image`, run Lighthouse. *(§4.7)*
7. **Verify heading outline** (no skipped levels; eyebrows aren't headings). *(§4.6)*

### Polish (low effort / nice-to-have)
8. Google reviews link, languages spoken, fees/insurance note. *(§4.8)*
9. Mobile sticky call/book bar; confirm tap-target sizes & grid reflow. *(§4.9)*
10. `theme-color` + web app manifest. *(§4.9)*

---

## 6. Quick-win checklist

- [ ] Switch page to SSR/SSG so content is in the initial HTML
- [ ] Add `MedicalBusiness` + `LocalBusiness` JSON-LD
- [ ] Add `FAQPage` JSON-LD to the existing FAQ
- [ ] Add `AggregateRating`/`Review` JSON-LD to testimonials
- [ ] Darken teal button to ~`#0F766E`; darken orange for text/buttons
- [ ] Reserve bright `#F26A36` for large display text only
- [ ] Add descriptive `alt` to all meaningful images; `aria-hidden` on decorative ones
- [ ] Collapse duplicate teal/green/orange hexes into Tailwind theme tokens
- [ ] `loading="lazy"` on the Google Maps iframe (or click-to-load facade)
- [ ] Confirm hero portrait uses `next/image` (it's the LCP element)
- [ ] Run mobile Lighthouse; record Core Web Vitals
- [ ] Add sticky mobile Call/Book bar
- [ ] Verify single H1 + clean h1→h2→h3 outline

---

## 7. Methodology & caveats

- Analysis is based on the **live page source**, the **compiled CSS** (real color & font tokens), the **rendered DOM** (confirmed the hero `<h1>`), and an automated reading of the **rendered content & accessibility tree**.
- **Contrast ratios are computed** from the extracted hex tokens against the mint background / as button fills; they're accurate for those color pairs but should be re-checked in context for every specific component state (hover, disabled, etc.).
- Items marked "verify" (heading outline, mobile reflow, tap targets) could not be exhaustively confirmed without an interactive device/axe audit — they're flagged as checks, not confirmed defects.
- **Performance** is an estimate from architecture (client-rendered SPA + Maps iframe + 3 font families); a **Lighthouse/PageSpeed** run on mobile is recommended for hard numbers.
- No automated **axe/WAVE** scan or full WCAG audit was performed; the accessibility section covers the highest-confidence findings (alt text, contrast, labels, semantics).

---

*Prepared as a design & front-end audit of sonagupta.com. Aesthetics are already strong; the priority work is technical SEO (rendering + schema) and accessibility (contrast + alt text).*