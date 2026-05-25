# UI Context

This document defines the comprehensive visual language, design token system, and layout guidelines for Dr. Sona Gupta's ultra-premium $10,000 personal portfolio.

---

## Theme

The design language is inspired by **high-end, modern medical diagnostics (e.g., Symptom, Apple Health, modern biotech interfaces)**. 
*   **Vibe:** Sophisticated, sleek, futuristic, and trust-evoking. 
*   **Key Visual Elements:** Deep teal-to-dark-slate gradients, rich glassmorphic overlays (`backdrop-blur-xl`), fine high-contrast borders, glowing circular mesh details, and smooth cinematic animations.
*   **Animations:** Power-driven by `framer-motion` for fluid entrances, scroll-linked parallax, organic morphing soundwaves (symbolizing audiology), and elegant page transitions.

---

## Colors

All styling tokens are mapped to custom CSS properties. Hardcoded values are strictly prohibited.

```css
:root {
  /* Brand Palettes - Futuristic "Teal Lux" */
  --color-cyan-950: #06151C;      /* Deep midnight dark slate for base background */
  --color-cyan-900: #0A2430;      /* Dark teal slate for cards/section overlays */
  --color-cyan-800: #0B3A4F;      /* Navy Teal for cards and deep accents */
  --color-teal-500: #008B9E;      /* Rich glowing Teal - main interactive brand */
  --color-teal-400: #00B4D8;      /* Bright vibrant Cyan - accents and highlights */
  --color-coral-500: #E26D5C;     /* Sexy Salmon Coral for CTA conversions */
  --color-coral-600: #C95646;     /* Coral hover/interactive focus */
  --color-white-950: #F8FAF9;     /* Soft warm white for text and clean sections */
  
  /* Glassmorphism & Overlays */
  --bg-glass-base: rgba(10, 36, 48, 0.4);
  --bg-glass-accent: rgba(0, 139, 158, 0.15);
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-glass-hover: rgba(0, 180, 216, 0.25);
  
  /* Semantic Tokens Mapping */
  --bg-base: var(--color-cyan-950);
  --bg-surface: var(--color-cyan-900);
  --bg-surface-glass: var(--bg-glass-base);
  --bg-brand: var(--color-cyan-900);
  
  /* Typography */
  --text-primary: var(--color-white-950);
  --text-muted: #8E9FA8;
  --text-brand: var(--color-teal-400);
  --text-inverse: var(--color-cyan-950);
  
  /* Interactive Accent States */
  --accent-primary: var(--color-teal-500);
  --accent-primary-hover: var(--color-teal-400);
  --accent-cta: var(--color-coral-500);
  --accent-cta-hover: var(--color-coral-600);
  
  /* Borders and States */
  --border-default: var(--border-glass);
  --border-active: var(--color-teal-400);
  
  /* Status Colors */
  --state-error: #EF4444;
  --state-success: #10B981;
}
```

---

## Typography

Modern, premium geometric and humanist typography to achieve the clean editorial design seen in biotech platforms:

*   **Display Font (Headings):** Plus Jakarta Sans or Outfit (Futuristic, high-end geometric sans-serif)
    *   *Weight:* `Bold (700)`, `Medium (500)`
    *   *Usage:* Global landing taglines, section headers (`h1`, `h2`, `h3`).
*   **Body Font (Content/UI):** Inter or Plus Jakarta Sans (Clean, high-legibility sans-serif)
    *   *Weight:* `Regular (400)`, `Medium (500)`
    *   *Usage:* Body paragraphs, cards description, input forms.

| Scale | Class / Size | Tag / Context | Font Family |
| :--- | :--- | :--- | :--- |
| **H1** | `text-5xl md:text-7xl font-bold tracking-tight` | Main Hero Tagline | Plus Jakarta Sans / Outfit |
| **H2** | `text-3xl md:text-5xl font-bold tracking-tight` | Section Titles | Plus Jakarta Sans / Outfit |
| **H3** | `text-xl md:text-2xl font-medium tracking-tight` | Card Headings | Plus Jakarta Sans / Outfit |
| **Body** | `text-base leading-relaxed` | Descriptions / Bio copy | Inter / Plus Jakarta Sans |
| **Subtext** | `text-sm text-muted uppercase tracking-wider` | Credentials, badge tags | Inter / Plus Jakarta Sans |

---

## Border Radius & Shadows

*   **Pill Rounded (`rounded-full`):** Category tags, credential pills, small action buttons.
*   **Sleek Cards (`rounded-3xl` / `24px`):** Main clinical services grid, interactive maps, contact cards.
*   **Panel Modals (`rounded-[32px]`):** Large sections, interactive overlay dialogs.
*   **Glow Effects (`shadow-glow`):** Subtle backlighting behind main CTA widgets to simulate floating premium medical equipment screens.
    ```css
    box-shadow: 0 0 30px rgba(0, 180, 216, 0.15);
    ```

---

## Layout Patterns

*   **Global Grid:** Desktop grids featuring responsive layouts with 60/40 visual weight distributions.
*   **Soundwave Backdrop:** Custom background overlay showing abstract medical audio soundwave traces (reflecting Audiology and speech therapy) in the hero and footer sections.
*   **Asymmetric Cards:** Elegant offsets and overlapping layers (like the Vitamin/Serum cards in the Symptom reference) to give a custom high-end developer touch.

---

## Animations (Framer Motion Guidelines)

To deliver a $10,000 user experience:
1.  **Entrance Preloader:** A beautiful 2-second abstract animation sequence mapping soundwaves loading in, introducing "Dr. Sona Gupta Deb Purkayastha" with sleek opacity sweeps.
2.  **Scroll-linked Triggers:** Fades and gentle 3D rotations on grids as they enter the viewport.
3.  **Glass Hover Scaling:** Hovering cards will scale subtly (`scale(1.02)`), brighten their glass borders (`var(--border-glass-hover)`), and soft-glow in teal.
4.  **Cinematic Transitions:** Layout toggles and accordion expandables animate their heights organically.
