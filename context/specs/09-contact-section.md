# Unit 9 Spec: Validated Contact Form & WhatsApp Float Widget

## Goal

Build the clinical conversion engine consisting of:
1. A premium, secure **Appointment Request & Callback Form** (`components/sections/contact-form.tsx`) that submits asynchronously to Formspree (`guptasona2018@gmail.com`).
2. Robust, real-time client-side input validations (Name, Phone number format/length, selection queries).
3. A gorgeous floating, glass-green **WhatsApp Direct Widget** (`components/ui/whatsapp-widget.tsx`) that tracks scroll and opens direct chat with a professional pre-filled prompt.
4. Glass success dialog overlays that fade in cleanly on submission.

---

## Technical Specifications

### 1. The Appointment Capture Form
*   **Target Endpoint:** Formspree Form ID (configured to forward submissions directly to `guptasona2018@gmail.com`). In V1, we will provide a beautiful, seamless custom local state submit handler that emulates/prepares for Formspree payloads.
*   **Fields:**
    *   `fullName` (string, required): Minimum 3 characters.
    *   `phoneNumber` (string, required): Exactly 10 digits validation for Indian mobile numbers.
    *   `patientAge` (string, optional): Number, must be positive if provided.
    *   `clinicalConcern` (dropdown selection, required):
        *   `hearing-eval` (Hearing Evaluation)
        *   `hearing-aid` (Hearing Aid Trial)
        *   `speech-therapy` (Speech Therapy)
        *   `pediatric-dev` (Childhood Development)
        *   `general` (General Inquiry)
    *   `customMessage` (string, optional): Text area.
*   **Interactive states:**
    *   Hover/Focus states with glowing teal borders (`focus:border-brand-teal-400 focus:ring-1 focus:ring-brand-teal-400`).
    *   Submitting: Disables inputs, turns button into a loading spinner state.
    *   Success: A beautiful floating glasscard success overlay with a custom green checkmark and "Appointment Request Received" message.

### 2. Floating WhatsApp Widget
*   **Anchor Location:** Anchored fixed at bottom-right viewport corner (`fixed bottom-6 right-6 z-50`).
*   **Visual Style:** Translucent emerald-green glass circle (`w-14 h-14 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 hover:border-emerald-500/50 backdrop-blur-md rounded-full flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] scale-100 hover:scale-105 active:scale-95`).
*   **Pre-filled Message:**
    *   *URL:* `https://wa.me/918876226682?text=Hello%20Dr.%20Sona%20Gupta%2C%20I%20would%20like%20to%20schedule%20an%20audiology%2Fspeech%20consultation%20visit.%20Please%20let%20me%20know%20your%20available%20slots.`
    *   *Warm Prompt:* "Hello Dr. Sona Gupta, I would like to schedule an audiology/speech consultation visit. Please let me know your available slots."

---

## Design Specifications

*   **Layout Container:**
    *   Single visual section (`id="contact"`), split 50/50 on desktop:
        *   *Left:* Editorial layout detailing patient communication support, doctor prompt ("Schedule a Consultation"), and simple instruction pills.
        *   *Right:* A large, beautiful floating glass contact card enclosing the form fields.
*   **Color Tokens & Styles:**
    *   Form Surface: `bg-brand-cyan-900/30 border border-white/5 rounded-3xl p-8 backdrop-blur-xl`.
    *   Inputs: Translucent dark frames (`bg-brand-cyan-950/80 border border-white/10 text-brand-white-950 rounded-xl px-4 py-3 text-sm focus:outline-none`).
    *   Action CTA Button: Solid warm Salmon-Coral (`bg-brand-coral-500 hover:bg-brand-coral-600 text-brand-cyan-950 font-bold uppercase py-3.5 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(226,109,92,0.2)] hover:shadow-[0_0_30px_rgba(226,109,92,0.4)]`).
*   **Typography:**
    *   Outfit Display for form tags and headers, Inter for labels, inputs, and helpers.

---

## Implementation Details

### 1. [NEW] Contact Form Component
*   **Path:** `components/sections/contact-form.tsx`
*   **Type:** Client Component (`'use client'`) for form states, inputs validations, and asynchronous submission triggers.

### 2. [NEW] WhatsApp Floating Widget
*   **Path:** `components/ui/whatsapp-widget.tsx`
*   **Type:** Client Component (`'use client'`) for page scroll tracking and smooth entrance fades.

### 3. [MODIFY] Main Page Entry
*   **Path:** `app/page.tsx`
*   **Logic:**
    *   Import `<ContactForm />` and replace the placeholder `<div id="contact" ...>Contact Area Placeholder</div>` with the new component.
    *   Import `<WhatsAppWidget />` and place it at the very bottom of the page return tree.

---

## Verification Checklist

1. [ ] Replaces the static `Contact Area Placeholder` perfectly inside the page flow.
2. [ ] Submitting empty fields triggers detailed red client-side validation errors under corresponding inputs.
3. [ ] Entering non-numeric characters or an incorrect length (e.g. 5 digits) into the Phone field triggers a precise digit error.
4. [ ] Successful submission disables inputs, shows a premium spinner, and fades in the glass success overlay card.
5. [ ] Clicking "Close" on the success card resets form states.
6. [ ] Floating WhatsApp widget stays anchored to the bottom-right, fades in only after scrolling past the Hero, and opens WhatsApp chat with the correct pre-filled text in a new tab.
