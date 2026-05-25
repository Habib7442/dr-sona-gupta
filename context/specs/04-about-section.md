# Unit 4 Spec: Asymmetric "About" Biography Section

## Goal

Build the luxury **Asymmetric "About" Biography Section** (`components/sections/about.tsx`) featuring:
1. An asymmetric two-column grid layout (Left = detailed credentials card & clinical experience badges; Right = narrative biography and her compassionate therapeutic philosophy).
2. Glassmorphic metrics tiles displaying RCI registration codes, qualifications, and core healthcare standards.
3. Clean viewport-triggered stagger entrances powered by Framer Motion.
4. Editorial geometric display headlines: "Restoring the Harmony of Connecting & Hearing".

---

## Design Specifications

*   **Grid Layout:** 
    *   *Desktop:* 40/60 visual split. 
        *   *Left:* Frosted credentials card with thick translucent borders, overlapping experience badge, and details list (RCI Registration status, B.ASLP graduation, practicing center).
        *   *Right:* Meet the therapist tagline, editorial heading, storytelling biography paragraphs, and signature-font name.
    *   *Mobile:* 100% full-width stacked column with centered/left-aligned readable typography.
*   **Color Tokens:**
    *   Background: Deep Midnight base (`#06151C`).
    *   Accent Elements: Glowing Teal (`#00B4D8`) icons and Coral (`#E26D5C`) accents.
    *   Text: Soft Warm White (`#F8FAF9`) body text and muted slate-teal (`#8E9FA8`) subtexts.
*   **Credentials Card (Left Side):**
    *   Features a sleek, large, vertical card styled with `glass-card` and `glass-card-hover`.
    *   Includes a beautiful glowing circle backdrop.
    *   Presents a list of structured milestones:
        *   *Certification:* Rehabilitation Council of India (RCI) Certified
        *   *Qualifications:* Bachelor of Audiology & Speech-Language Pathology (B.ASLP)
        *   *Hospital OPD:* Valley Hospital, Silchar
        *   *Key Focus:* Evidence-Based Rehabilitation

---

## Implementation Details

### 1. [NEW] About Section Component
*   **Path:** `components/sections/about.tsx`
*   **Type:** Client Component (`'use client'`) for scroll-triggered viewport animations.
*   **Layout Structure:**
    *   Flex/Grid container wrapper styled with padding `py-20 lg:py-32 px-6`.
    *   Left column holds a visual credentials panel:
        *   Floating glass badge: "8+ Years of Clinical Practice".
        *   Detail rows showing checkmarks or Lucide icons for qualifications.
    *   Right column holds:
        *   Upper badge: "Meet Dr. Sona Gupta Deb Purkayastha".
        *   Display H2 title.
        *   Paragraphs wrapping the narrative biography detailing her diagnostic process, patient focus (all ages, from kids to the elderly), and regional leadership.
        *   Serif cursive signature `Dr. Sona Gupta Deb Purkayastha`.

### 2. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:** Replace the static `About Area Placeholder` div with `<About />`.

---

## Dependencies

*   `framer-motion`
*   `lucide-react`

---

## Verification Checklist

1. [ ] Correctly replaces the `About Area Placeholder` in the main page flow.
2. [ ] Renders perfectly on mobile (stacked, margins look beautiful and padded) and desktop (40/60 offset columns).
3. [ ] Viewport scroll slide-ups run smoothly without page jumps.
4. [ ] All credential list items align cleanly with matching Lucide icons in primary teal.
5. [ ] Font sizes map precisely to the typography scales defined in `ui-context.md` (Outfit display and Inter body).
