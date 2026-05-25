# Code Standards

This document establishes the official coding standards, design principles, TypeScript expectations, and folder structures that govern Dr. Sona Gupta's portfolio codebase.

---

## General

- **Modular Components:** Keep React components small, single-purpose, and focused. If a section grows past 200 lines of code, break out its child sub-components (e.g., separating the Service Card from the Services Section component).
- **No Direct DOM Manipulation:** Access DOM boundaries strictly through React abstractions (`useRef`, state boundaries) — never use document queries.
- **Maintain Clean Interfaces:** Do not mix styling logic or complex data objects inline with JSX. Store configuration data arrays (e.g., service listings, diagnostic tags) outside the component return tree or in dedicated JSON/TS configs.

---

## TypeScript

- **Strict Typing:** Strict Mode is active in `tsconfig.json`. Explicitly type all function signatures, return values, and component props.
- **No Any type:** The use of `any` is strictly prohibited. Use narrow interfaces, unions, generics, or standard HTML element extensions where appropriate.
- **Data Schemas:** Maintain typed interfaces for all custom configurations, such as the `Service` item interface, the `Condition` tags array, and the contact form data inputs.

---

## Next.js (16+ / React 19)

- **React Server Components (RSC) First:** By default, all layout components and static informational pages MUST be written as Server Components to leverage rapid edge delivery and optimal search indexing.
- **Client Component Leaf Boundaries:** Only apply `'use client'` at the absolute outer leaf edges of the component tree. Keep client-side state localized. Specifically:
  *   `components/sections/contact-form.tsx` is Client-side for input management and fetch requests.
  *   `components/shared/navbar.tsx` is Client-side strictly for toggling responsive toggles and smooth scrolling tracking.
- **Image Optimization:** Load all graphical resources through the standard Next.js `Image` component. Supply explicit dimensions or clean aspect ratios. Prefer WebP and SVG file formats.

---

## Styling

- **Semantic Tailwind Config:** Use Tailwind's utility class mapping to link structural classes to the design system CSS variables in `ui-context.md`.
- **CSS Custom Property Driven:** Dynamic styling changes (e.g., active states) must toggle semantic classes, which interact with CSS custom variables, rather than injecting dynamic inline styles.
- **Transitions and Motion:** Standardize transition curves with `transition-all duration-300 ease-out` for all micro-animations (e.g., card hovers, button click scaling).

---

## API Routes & Form Integrations

- **Client-Side Form validation:** Clean, responsive validation on forms prior to submit triggers (Name, Phone length, Email syntax).
- **Spam Control:** Leverage direct honey-pot variables in Formspree/EmailJS to discard automatic bot requests silently.
- **Semantic Payload Handling:** Structure payload keys clearly so received emails arrive readable and formatted:
  ```typescript
  interface AppointmentRequest {
    fullName: string;
    phoneNumber: string;
    patientAge?: string;
    clinicalConcern: 'hearing-issue' | 'speech-problem' | 'child-evaluation' | 'other';
    customMessage?: string;
  }
  ```

---

## File Organization

Map file directories to their structural responsibilities:

- `app/` — Root pages and global layouts.
- `components/ui/` — Stateless atomic Shadcn components (Buttons, inputs, form shells).
- `components/sections/` — Full page section modules (Hero, Bio, Services grid, Map, Contact shell).
- `components/shared/` — Global shell frames (Sticky Header navigation, Footer metadata).
- `lib/` — General utility abstractions and form submit endpoints.
- `public/` — Static assets (logo patterns, WebP illustrations).
