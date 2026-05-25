# Unit 6 Spec: Conditions Treated Pill Cloud

## Goal

Build an interactive, premium **Conditions Treated Pill Cloud** (`components/sections/conditions.tsx`) featuring:
1. An editorial segmented filter control (All, Hearing Concerns, Speech & Language) with a glowing, sliding backdrop indicator using Framer Motion.
2. An interactive cloud of glassmorphic pills mapping the primary symptoms and medical conditions Dr. Sona Gupta treats.
3. Smooth filtering transitions powered by Framer Motion's `layout` and `AnimatePresence` properties.
4. Micro-interactions: Pills scale up subtly (`scale-105`) and highlight their borders and background colors on hover.
5. Structured semantic categorization to help prospective patients immediately identify their needs.

---

## Content Categories & Tags

We will structure the tags into three active filtering states:

### 1. Hearing Concerns (`hearing`)
- Sensorineural Hearing Loss
- Conductive Hearing Loss
- Tinnitus (Ringing in Ears)
- Age-Related Hearing Loss (Presbycusis)
- Auditory Processing Disorder (APD)
- Noise-Induced Hearing Damage

### 2. Speech & Language (`speech`)
- Childhood Speech Delays
- Stuttering & Stammering (Fluency)
- Misarticulation & Pronunciation Issues
- Autism (ASD) Communication Delays
- ADHD Communication Challenges
- Voice & Resonance Disorders
- Swallowing Difficulties (Dysphagia)
- Post-Stroke Aphasia & Dysarthria

---

## Design Specifications

*   **Filter Controls:**
    *   Sleek glass segmented container (`rounded-full bg-brand-cyan-900/50 border border-white/5 p-1 flex gap-1 max-w-md mx-auto mb-12`).
    *   Active sliding tab: Framer Motion `<motion.span layoutId="activeTab" ...>` styled in glowing brand teal (`bg-brand-teal-500 text-brand-white-950`).
*   **Pills Layout:**
    *   A flex wrapping container (`flex flex-wrap gap-3 sm:gap-4 justify-center max-w-4xl mx-auto`).
    *   Pill styling: Frosted glass pill (`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm bg-brand-cyan-900/25 border border-white/5 text-brand-white-950/80 font-sans tracking-wide hover:border-brand-teal-400/40 hover:text-brand-white-950 transition-all duration-300 shadow-sm cursor-pointer select-none flex items-center gap-2`).
    *   Hover effect: Micro-scale up (`scale: 1.05`), glowing teal text accent, and custom box-shadow backlight.
*   **Icon Details:**
    *   Pills include a tiny glowing dot (`w-1.5 h-1.5 rounded-full bg-brand-teal-400/80 shrink-0 group-hover:bg-brand-coral-500 transition-colors`).
*   **Typography:**
    *   Section Sub-header badge: "Who Can Benefit"
    *   Section Heading H2: "Clinical Conditions We Treat & Support"
    *   Category text sizes map to standard UI guidelines.

---

## Implementation Details

### 1. [NEW] Conditions Component
*   **Path:** `components/sections/conditions.tsx`
*   **Type:** Client Component (`'use client'`) for state-based filtering, AnimatePresence transitions, and layout morphs.
*   **Animations:**
    *   Segment slider: Smooth sliding layout transition.
    *   Pills Grid: Layout animations (`layout`) with exit/enter transitions (`initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}`).

### 2. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:** Import `<Conditions />` and replace `<div id="conditions" ...>Conditions Area Placeholder</div>` with the new component.

---

## Verification Checklist

1. [ ] Replaces the static placeholder `Conditions Area Placeholder` cleanly.
2. [ ] Shows all 14 condition tags by default under the "All" tab.
3. [ ] Clicking "Hearing Concerns" filters the cloud instantly to show only the 6 hearing-related tags.
4. [ ] Clicking "Speech & Language" filters to show only the 8 speech-related tags.
5. [ ] Segmented tab background slides smoothly between active filter options with no layout shifts.
6. [ ] Hovering over pills applies a subtle lift, changes text highlight to pure white, and animates the dot marker.
