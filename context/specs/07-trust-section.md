# Unit 7 Spec: Trust Cards Section (Why Choose Dr. Sona)

## Goal

Build a premium **Trust Cards Section** (`components/sections/trust.tsx`) showcasing:
1. A 4-card grid highlighting the core professional credentials and therapeutic standards that establish medical credibility.
2. Sleek biotech-style cards styled with standard glassmorphic overlays (`glass-card`, `glass-card-hover`).
3. Staggered slide-in entries using Framer Motion.
4. Rich HSL accent lines, vector status details, and clean Lucide iconography in glowing teal and coral.

---

## Content & Value Propositions

The section details four core clinical pillars:

1. **RCI Certified Specialization**
   * *Badge:* National Registration
   * *Icon:* `Award`
   * *Title:* Certified Audiologist & Speech Therapist
   * *Description:* Fully registered under the Rehabilitation Council of India, guaranteeing adherence to national clinical practice guidelines.

2. **Lifespan Therapeutic Care**
   * *Badge:* Pediatric to Geriatric
   * *Icon:* `Users`
   * *Title:* Multi-Age Rehabilitation Focus
   * *Description:* Specialized play-based speech therapy for pediatric developmental delays, combined with expert digital hearing aid trials for adult and geriatric patients.

3. **Hospital-Based Practice Standards**
   * *Badge:* Valley Hospital Silchar
   * *Icon:* `Activity`
   * *Title:* Integrated Clinical Environment
   * *Description:* Located at Meherpur's premium facility, offering patients immediate access to state-of-the-art diagnostic audiometry, soundproof testing chambers, and direct OPD consultations.

4. **Dedicated Regional Leadership**
   * *Badge:* Silchar & Barak Valley
   * *Icon:* `Heart`
   * *Title:* Trust & Compassion Driven
   * *Description:* Over 8 years of clinical expertise, introducing evidence-based audiological diagnostic testing and modern speech rehabilitation across the Barak Valley.

---

## Design Specifications

*   **Layout Grid:**
    *   *Desktop:* 4-column row (`grid-cols-4`) or 2x2 grid (`grid-cols-2`) for elegant symmetry. Let's make it a **2x2 grid** on desktop (`lg:grid-cols-2 max-w-5xl mx-auto gap-6`) which is extremely balanced and allows each card to hold rich details with comfortable padding.
    *   *Tablet:* 2x2 grid (`md:grid-cols-2 gap-6`).
    *   *Mobile:* 1x4 stack (`grid-cols-1 gap-4`).
*   **Card Design:**
    *   Frosted dashboard panels (`p-8 bg-brand-cyan-900/30 border border-white/5 rounded-3xl hover:border-brand-teal-400/30 transition-all duration-500 relative overflow-hidden group flex flex-col justify-between`).
    *   Upper Row: A clean colored badge on the left, and a glowing glass icon circle (`w-11 h-11`) on the right.
    *   A glowing linear background streak: A micro HSL teal vertical indicator line at the card's left edge (`w-1 h-12 bg-brand-teal-400 absolute left-0 top-1/2 -translate-y-1/2 rounded-r-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`). This is a signature tech-dashboard visual!
*   **Typography:**
    *   Section Sub-header: "Why Choose Dr. Sona"
    *   Section Heading H2: "Clinical Excellence & Compassionate Standards"
    *   Card titles: Outfit Display, `text-xl font-bold text-brand-white-950 mt-6`.
    *   Card descriptions: Inter body text, `text-sm text-brand-white-950/65 leading-relaxed mt-3`.

---

## Implementation Details

### 1. [NEW] Trust Component
*   **Path:** `components/sections/trust.tsx`
*   **Type:** Client Component (`'use client'`) for scroll-linked staggered entry animations.
*   **Animations:**
    *   Staggered grid viewport reveals using Framer Motion variants.

### 2. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:** Import `<Trust />` and replace `<div id="location" ...>Location Area Placeholder</div>` (or rather, let's keep it under Conditions, adding it as a new section before Location block).
*   Wait! In `app/page.tsx` the structure is:
    ```tsx
    {/* Asymmetrical Professional About Biography */}
    <About />

    {/* Floating 3x2 Glassmorphic Services Grid */}
    <Services />

    {/* Segmented Interactive Conditions Treated Tag Cloud */}
    <Conditions />

    <div id="location" className="h-40 flex items-center justify-center text-brand-white-950/20 text-xs tracking-widest uppercase">Location Area Placeholder</div>
    ```
    We will insert `<Trust />` right after `<Conditions />` and before the Location placeholder.

---

## Verification Checklist

1. [ ] Replaces and renders perfectly inside the page flow.
2. [ ] Shows a perfectly symmetrical 2x2 grid on desktop and tablet, and a vertical stack on mobile.
3. [ ] Glow indicators on card hover function seamlessly (border glows cyan, left vertical HSL stripe lights up).
4. [ ] All icons import and compile without crashes.
5. [ ] Typography scales are exactly compliant with `ui-context.md` guidelines.
