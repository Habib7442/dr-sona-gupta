# Unit 3 Spec: "Symptom"-Inspired Hero Section

## Goal

Build the luxury **Symptom-inspired Hero Section** (`components/sections/hero.tsx`) featuring:
1.  A bold display grid (asymmetric desktop layout with left-hand typography and right-hand multi-panel floating graphic blocks).
2.  A large, high-contrast headline using the Outfit geometric typeface: `Transforming Speech & Hearing Experience` or `Helping You Hear Better & Speak Clearly`.
3.  Translucent glass credentials badges ("RCI Certified", "Valley HospitalAffiliation").
4.  Dual premium conversion CTAs (Primary Salmon-Coral button, Secondary glowing border button).
5.  An asymmetrical floating card stack (mimicking the "Vitamin/Serum" panels in the reference screenshots) displaying audiology metrics (e.g., "Sound Frequency: 20Hz - 20kHz", "Speech Fluency: 98% Correct") layered over dynamic soundwave SVG backdrops.

---

## Design Specifications

*   **Grid Layout:** 
    *   *Desktop:* 60/40 visual split. Left = Large headline, subtext, badges, CTAs. Right = Floating multi-card stack with fine translucent borders, glass blurs, and circular mesh glows.
    *   *Mobile:* Single column, stacked vertically, centered text alignment.
*   **Color Tokens:**
    *   Headline: Crisp White `#F8FAF9` with primary accent gradients (`from-brand-teal-400 to-brand-teal-500`).
    *   CTAs: Salmon-Coral `#E26D5C` (`hover:bg-brand-coral-600`) and border-white/10 (`hover:bg-brand-teal-500/5`).
*   **Floating Cards (Right Side):**
    *   Card 1 (Top Left): "Frequency Response" card. Shows custom simulated audiology graph.
    *   Card 2 (Bottom Right): "Patient Care" card. Displays high-end vector profiles and `10+ Years Affiliated` badge.
    *   Mesh Glows: Absolute-positioned absolute background elements projecting a soft radial teal blur underneath the cards.

---

## Implementation Details

### 1. [NEW] Hero Section Component
*   **Path:** `components/sections/hero.tsx`
*   **Type:** Client Component (`'use client'`) for motion tracking.
*   **Sub-components:**
    *   *Audiology Graphic:* A self-contained visual component containing the asymmetrical overlapping panels and SVGs.
*   **Motion Framework:**
    *   Use `<motion.div>` to animate elements with stagger delays:
        *   RCI Badge: Slide down on load.
        *   Headline: Reveal line-by-line with mask transitions.
        *   CTAs: Hover scale transformations.
        *   Right Cards: Gentle floating motion loops (`y: [0, -10, 0]`, transitions repeat infinitely).

### 2. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:** Replace the static Hero placeholder with `<Hero />`.

---

## Dependencies

*   `framer-motion` (installed)
*   `lucide-react` (installed)

---

## Verification Checklist

1. [ ] Single `<h1>` tag matches exactly "Helping You Hear Better & Speak Clearly" or "Transforming Speech & Hearing Experience" for SEO compliance.
2. [ ] Outfit display font applies cleanly to headings, showing high-contrast white text.
3. [ ] Mobile responsive layout correctly collapses from 60/40 grid into a stacked single column.
4. [ ] Right-side cards hover scale (`scale(1.03)`) and reveal glowing teal highlights.
5. [ ] Core CTA triggers navigation down to the contact block smoothly.
6. [ ] Infinite floating animation cycles smoothly without frame drops.
