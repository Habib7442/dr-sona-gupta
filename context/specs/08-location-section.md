# Unit 8 Spec: Clinical Logistics & Google Maps

## Goal

Build an elegant, high-contrast **Clinical Logistics & Google Maps Section** (`components/sections/location.tsx`) featuring:
1. An asymmetric split grid layout (Left = detailed OPD hours & clinical logistics cards; Right = embedded dark-themed interactive Google Map).
2. Glassmorphic details panels (`glass-card`) mapping exact timing schedules, consulting rooms, phone hotlines, and hospital addresses.
3. Custom-styled dark map filter mapping Google Maps into a dark-teal luxury base.
4. Seamless slide-in scroll triggers powered by Framer Motion.

---

## Logistical Specifications

The section lists all clinical parameters of her Valley Hospital practice:

### 1. Direct Location
*   **Hospital:** Valley Hospital & Research Centre Pvt. Ltd.
*   **Address:** Meherpur, Silchar, Assam 788015 (Near Silchar Meherpur Old P.O.)
*   **Room:** OPD Room No. 6, Consultant Block, Ground Floor

### 2. Operational Hours
*   **Monday to Saturday:**
    *   *Morning Session:* 10:00 AM - 1:00 PM
    *   *Evening Session:* 4:00 PM - 7:00 PM
*   **Sunday:** Closed (Emergency Consults only)

### 3. Contact Methods
*   **Hotline:** +91 8876226682
*   **Official Email:** guptasona2018@gmail.com

---

## Design Specifications

*   **Grid Layout:**
    *   *Desktop:* 50/50 visual split (`grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto`).
    *   *Tablet/Mobile:* Vertical stacked single-column.
*   **Color Tokens & Styles:**
    *   Card Surface: `bg-brand-cyan-900/30 border border-white/5 p-8 rounded-3xl`.
    *   Interactive items: glowing teal custom icons (`MapPin`, `Clock`, `Phone`, `Mail`) with transparent circle borders.
*   **Dark Iframe Filter:**
    *   Custom inline styling applied to Google Maps Iframe:
        `filter: contrast(1.1) brightness(0.9) grayscale(0.2) invert(0.9) hue-rotate(180deg)`
    *   Prevents standard bright yellow/blue maps from clashing with the luxury dark-teal HSL colors.
*   **Typography:**
    *   Section Sub-header: "Clinical Logistics"
    *   Section Heading H2: "Consultation Hours & Location"
    *   Card Headers H3: Outfit bold display fonts.

---

## Implementation Details

### 1. [NEW] Location Component
*   **Path:** `components/sections/location.tsx`
*   **Type:** Client Component (`'use client'`) for scroll reveals and interactive timing displays.
*   **Animations:** Smooth viewport staggered reveal.

### 2. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:** Import `<Location />` and replace `<div id="location" ...>Location Area Placeholder</div>` with the new component.

---

## Verification Checklist

1. [ ] Replaces the static placeholder `Location Area Placeholder` perfectly inside the page flow.
2. [ ] Shows a perfectly balanced 50/50 split layout on desktop and stacked column on mobile.
3. [ ] Iframe displays the exact location of Valley Hospital & Research Centre, Meherpur, Silchar.
4. [ ] The dark iframe filter operates correctly, displaying a cohesive dark midnight-teal map matching the global layout.
5. [ ] Phone click-to-call actions work (`tel:8876226682`).
6. [ ] Email click-to-write actions work (`mailto:guptasona2018@gmail.com`).
