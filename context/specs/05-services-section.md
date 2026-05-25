# Unit 5 Spec: Clinical Services Glass Grid

## Goal

Build a stunning, premium **Clinical Services Glass Grid** (`components/sections/services.tsx`) featuring:
1. A highly responsive, asymmetric grid showing Dr. Sona's 6 core clinical services.
2. Premium glassmorphic card designs (`glass-card`, `glass-card-hover`) with thin borders, backdrops, and subtle teal glowing backgrounds.
3. Clean glowing Lucide icons representing audiological and speech therapy domains.
4. Seamless scroll-triggered staggered reveal animations powered by Framer Motion.
5. Micro-interactions: Cards lift (`scale(1.02)`), borders glow in cyan-teal HSL, and backing mesh spots glow on hover.

---

## Service Specifications

Dr. Sona Gupta's 6 core professional offerings:

1. **Hearing Evaluation & Diagnosis**
   * *Icon:* `Ear` (glowing teal)
   * *Tag:* Diagnostic
   * *Description:* Comprehensive audiological tests for pediatric & adult cases using advanced diagnostic audiometry.
   * *Bullet points:* Pure Tone Audiometry (PTA), Tympanometry & Reflexometry, Pediatric Hearing Assessments.

2. **Hearing Aid Fitting & Trials**
   * *Icon:* `Volume2` (glowing teal)
   * *Tag:* Rehabilitation
   * *Description:* Personalized selection, digital programming, and live trials of cutting-edge, invisible hearing aids.
   * *Bullet points:* Digital Programming & Tuning, Custom Ear Molds, Multi-brand Live Trials.

3. **Speech-Language Therapy**
   * *Icon:* `Mic` (glowing teal)
   * *Tag:* Intervention
   * *Description:* Clinical therapy for communication disorders including fluency (stuttering), voice, and articulation.
   * *Bullet points:* Fluency/Stuttering Therapy, Articulation Correction, Voice & Resonance Therapy.

4. **Pediatric Language Development**
   * *Icon:* `Baby` (glowing teal)
   * *Tag:* Pediatric
   * *Description:* Specialized therapy for developmental delays, autism spectrum (ASD), ADHD, and childhood speech delay.
   * *Bullet points:* Developmental Delay Support, ASD & ADHD Speech Care, Early Language Stimulation.

5. **Tinnitus Evaluation & Management**
   * *Icon:* `Waves` (glowing teal)
   * *Tag:* Specialized
   * *Description:* Targeted clinical protocols and sound therapy to alleviate persistent ringing or buzzing in the ears.
   * *Bullet points:* Tinnitus Masking Therapy, Counseling & Retraining, Acoustic Sound Stimulation.

6. **Swallowing Disorders (Dysphagia) Care**
   * *Icon:* `Activity` (glowing teal)
   * *Tag:* Clinical Care
   * *Description:* Professional assessment and therapeutic exercises for neurogenic swallowing and feeding difficulties.
   * *Bullet points:* Clinical Swallowing Exams, Oromotor Exercises, Customized Feeding Plans.

---

## Design Specifications

*   **Grid Layout:**
    *   *Desktop:* 3x2 grid layout (`grid-cols-3` inside a container) with asymmetric staggering.
    *   *Tablet:* 2x3 grid layout (`grid-cols-2`).
    *   *Mobile:* 1x6 stacked cards (`grid-cols-1`).
*   **Color Tokens & Styling:**
    *   Card background: `var(--bg-glass-base)` (`rgba(10, 36, 48, 0.4)`)
    *   Hover border: `var(--border-glass-hover)` (`rgba(0, 180, 216, 0.25)`)
    *   Icon color: Vibrant cyan-teal (`text-brand-teal-400`) inside a soft glowing glass ring.
    *   Tags: Soft glowing rounded-full pills in dark teal background (`bg-brand-teal-500/10 text-brand-teal-400`).
*   **Typography:**
    *   Section Sub-header badge: "Clinical Offerings"
    *   Section Heading H2: "Specialized Care for Speech, Language & Hearing"
    *   Card Headings H3: Outfit display font, size `text-xl font-semibold`.
    *   Card descriptions & bullets: Inter font, size `text-sm text-brand-white-950/70`.

---

## Implementation Details

### 1. [NEW] Services Component
*   **Path:** `components/sections/services.tsx`
*   **Type:** Client Component (`'use client'`) for scroll-linked Framer Motion viewport entries.
*   **Animations:**
    *   Container: Viewport stagger reveal.
    *   Cards: Slide up + fade in (`initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}`).
    *   Hover: Hover scale (`scale: 1.02`), box-shadow teal glow, and border transition.

### 2. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:** Import `<Services />` and replace the placeholder `<div id="services" ...>Services Area Placeholder</div>` with the new component.

---

## Verification Checklist

1. [ ] Replaces the static `Services Area Placeholder` in the main page flow perfectly.
2. [ ] Renders as a beautiful 3-column layout on desktop, 2-column on tablets, and 1-column stack on mobile.
3. [ ] Hovering over cards triggers a smooth `scale(1.02)` transform, changes the border to glowing cyan, and applies a soft teal box-shadow.
4. [ ] All 6 cards correctly import and display their respective Lucide icons with no missing reference crashes.
5. [ ] Bullet points in cards render as a clean list with glowing teal-colored custom markers/dots.
