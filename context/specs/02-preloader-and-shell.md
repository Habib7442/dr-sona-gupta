# Unit 2 Spec: Cinematic Preloader & layout Shell

## Goal

Create a luxury entrance user experience consisting of:
1.  A **Cinematic Preloader** that plays a 2-second abstract audiology frequency soundwave animation using `framer-motion`, fading in Dr. Sona's identity before revealing the landing layout.
2.  A **Sticky Navigation Header** with high-end glassmorphic backdrop blurs, custom scroll-state triggers, active page anchor links, and an organic slide-in mobile hamburger drawer menu.
3.  A **Premium Brand Footer** listing operational details, clinic licensing coordinates, social pins, and credits.

---

## Design Specifications

*   **Preloader Background:** Pure Midnight solid background `#06151C` with z-index `z-50` to overlay all layout boundaries.
*   **Soundwave Lines:** Traced SVG path strokes in glowing Cyan `#00B4D8` transitioning from thin lines into dynamic waves.
*   **Sticky Navbar:** 
    *   *Default (Top):* Transparent background, no borders, height `h-24` with smooth scaling.
    *   *Scrolled (ScrollY > 50):* Blurs backdrop (`backdrop-blur-md`), overlays translucent slate-teal `rgba(10,36,48,0.7)`, height compiles to `h-20`, introduces fine bottom border `var(--border-default)`.
*   **Navbar Actions:** Hovering over links scales their text slightly and slides a small glowing teal dot underneath. The "Book Appointment" CTA button is styled in high-contrast Salmon-Coral `#E26D5C`.

---

## Implementation Details

### 1. [NEW] Preloader Component
*   **Path:** `components/sections/preloader.tsx`
*   **Type:** `'use client'`
*   **Logic:**
    *   Create a local state `isComplete` to notify parent when animation completes.
    *   Use Framer Motion's `<motion.div>` to animate frequency lines inside an SVG container:
        *   Staggered path stroke offsets using transitions (`duration: 1.5, ease: "easeInOut"`).
        *   Animate overall preloader block to fade out on completion (`opacity: 0, transitionEnd: { display: "none" }`).

### 2. [NEW] Sticky Navbar Component
*   **Path:** `components/shared/navbar.tsx`
*   **Type:** `'use client'`
*   **Logic:**
    *   Track viewport scrolls using standard React `useEffect` scroll event listeners.
    *   Render a glass-overlay container featuring:
        *   *Left:* Brand Typography displaying `Dr. Sona Gupta` with `Audiologist` tags.
        *   *Center:* Navigation anchors (Home, About, Services, Conditions, Contact).
        *   *Right:* Coral "Book Appointment" button.
        *   *Mobile Menu:* Hamburger button that triggers an `<AnimatePresence>` animated sliding drawer menu.

### 3. [NEW] Luxury Footer Component
*   **Path:** `components/shared/footer.tsx`
*   **Type:** Server Component (RSC)
*   **Logic:**
    *   Render a 3-column layout showcasing:
        *   *Col 1:* Identity summaries, licensing tags (RCI certified), and brand markers.
        *   *Col 2:* Address markers (Valley Hospital, Meherpur, Silchar), timing guidelines, and direct booking links.
        *   *Col 3:* Secure contact shortcuts (email, emergency telephone) and copyright credentials.

### 4. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:**
    *   Introduce state variables tracking the preloader sequence (`isLoading`).
    *   Wrap layout in `<AnimatePresence>` to orchestrate the smooth entrance transition.

---

## Dependencies

*   `framer-motion` (installed)
*   `lucide-react` (installed)

---

## Verification Checklist

1. [ ] Preloader renders full screen overlay on page refresh, blocking scroll actions.
2. [ ] Soundwave paths animate organic entry, followed by name display, completing in 2 seconds.
3. [ ] Page layout fades in smoothly after preloader disappears.
4. [ ] Navbar stays stickied at viewport top during scrolls.
5. [ ] Scrolled state changes navbar sizing and triggers backdrop blur/borders.
6. [ ] Mobile hamburger toggle opens sliding drawer menu containing all anchor links.
7. [ ] Clicking anchor links performs smooth animated viewport scrolling.
