# Product Requirements Document (PRD)
## Personal Website — Dr. Sona Gupta Deb Purkayastha
**Audiologist & Speech Therapist | Valley Hospital & Research Centre (P) Ltd.**

---

## 1. Project Overview

### 1.1 Background
Dr. Sona Gupta Deb Purkayastha is a registered Audiologist and Speech Therapist (RCI certified) practicing at Valley Hospital & Research Centre (P) Ltd., located in Meherpur, Silchar, Assam. Currently, she has no dedicated web presence. Her contact information exists only on a physical business card.

This project is to build a clean, professional, trust-first personal website that establishes her digital identity, helps patients find and contact her, and positions her as a credible specialist in audiology and speech therapy in the Northeast India region.

### 1.2 Goals
- Establish a professional online identity for Dr. Sona
- Make it easy for prospective patients or parents to understand what she does
- Enable direct appointment booking or inquiry via WhatsApp/phone/email
- Build trust through credentials, services, and professional presentation
- Be easily discoverable on Google for local searches

### 1.3 Non-Goals (Out of Scope for V1)
- Online payment integration
- Patient portal or health records
- Blog or article publishing CMS
- Telemedicine or video consultation feature
- Multi-language (Hindi/Bengali) — can be a V2 addition

---

## 2. Target Audience

| Audience | Description |
|---|---|
| **Parents of children** | Children with speech delay, stuttering, hearing issues |
| **Adults with hearing loss** | Elderly patients, post-accident hearing impairment |
| **Referring doctors** | ENT specialists and pediatricians seeking to refer patients |
| **Corporate/institutional** | Schools and NGOs needing speech therapy programs |
| **Local Silchar population** | General public searching for specialists in Assam |

---

## 3. Design Direction

### 3.1 Aesthetic
- **Tone:** Calm, warm, professional, trustworthy — not clinical or cold
- **Color Palette (suggested):**
  - Primary: Deep navy blue `#1A3A5C` (trust, medicine)
  - Accent: Soft teal `#3AAFA9` (health, calm)
  - Background: Off-white / light cream `#F8F6F2`
  - Text: Dark slate `#2D2D2D`
  - CTA buttons: Warm coral `#E07B54` or teal
- **Typography:**
  - Display/Name: Elegant serif (e.g., Playfair Display, Cormorant Garamond)
  - Body: Readable humanist sans (e.g., DM Sans, Nunito)
- **Imagery style:** Clean, soft medical illustrations or abstract wave/sound-wave graphics. Placeholder stock images (no real photos available yet)
- **Overall feel:** Similar to a boutique specialist clinic — warm, not corporate

### 3.2 Layout
- Single-page scrollable design (all sections on one page)
- Sticky navigation header
- Mobile-first, fully responsive
- No heavy animations — subtle fade-ins on scroll only

---

## 4. Site Architecture & Pages

### V1: Single-Page Website (Recommended)
All content on one scrollable page with anchor links in the nav.

```
/ (Home — Single Page)
  ├── Hero Section
  ├── About / Who Is She
  ├── Services
  ├── Why Choose Her (Credentials / Trust Signals)
  ├── Conditions Treated
  ├── Location & Clinic Details
  └── Contact / Appointment CTA
```

---

## 5. Section-by-Section Requirements

---

### 5.1 Header / Navbar

**Content:**
- Doctor's name: `Dr. Sona Gupta Deb Purkayastha`
- Tagline: `Audiologist & Speech Therapist`
- Nav links: Home | About | Services | Conditions | Contact
- CTA button: `Book Appointment` → scrolls to contact section

**Behavior:**
- Sticky on scroll (stays at top)
- Hamburger menu on mobile
- Smooth scroll to anchors

---

### 5.2 Hero Section

**Purpose:** First impression — immediate trust + clarity on what she does.

**Content:**
- Headline: `Helping You Hear Better & Speak Clearly`
- Sub-headline: `Expert Audiologist & Speech Therapist in Silchar, Assam`
- Supporting text: `Registered with RCI (Rehabilitation Council of India) | Practicing at Valley Hospital & Research Centre`
- CTA Button 1: `Book an Appointment` (primary)
- CTA Button 2: `Call Now: 8876226682` (secondary)
- Visual: Abstract sound-wave or ear/speech illustration (SVG or royalty-free stock)

**Design notes:**
- Full-width section, vertically centered
- Subtle background: soft gradient or abstract wave pattern
- Doctor's photo slot: Add a placeholder box labeled `[Photo of Dr. Sona — to be provided]`

---

### 5.3 About Section

**Purpose:** Humanize the doctor, build personal trust.

**Content (to be populated; placeholder copy below):**

> *Dr. Sona Gupta Deb Purkayastha is a qualified Audiologist and Speech Therapist registered with the Rehabilitation Council of India (RCI). She practices at Valley Hospital & Research Centre (P) Ltd. in Meherpur, Silchar, bringing compassionate, evidence-based care to patients of all ages — from children with speech delays to adults managing hearing loss.*

> *Her approach centers on patient comfort and family involvement, ensuring every individual receives personalized attention and a clear path to better communication.*

**Fields (placeholders where data is missing):**
- `[Insert: Degree / Qualification — e.g., M.Sc. Audiology & Speech-Language Pathology]`
- `[Insert: University / Institution]`
- `[Insert: Years of experience]`
- RCI Registration: ✅ Registered with Rehabilitation Council of India
- Hospital: Valley Hospital & Research Centre (P) Ltd., Silchar

**Design notes:**
- Two-column layout: Left = photo, Right = bio text + credential badges
- Credential badges: small pill/chip components showing: `RCI Registered`, `Audiologist`, `Speech Therapist`

---

### 5.4 Services Section

**Purpose:** Tell visitors exactly what she offers.

**Note:** The business card says "Audiologist & Speech Therapist" — expand into logical services typical of this specialty. Client to verify and edit.

**Proposed Services (6 cards):**

| Service | Description |
|---|---|
| **Hearing Evaluation** | Comprehensive audiometric testing to assess hearing sensitivity across all frequencies |
| **Hearing Aid Fitting & Trial** | Selection, fitting, and calibration of hearing aids suited to individual hearing loss profiles |
| **Speech Therapy** | Structured therapy sessions to improve articulation, fluency, and expressive language |
| **Language Development** | Assessment and treatment of delayed speech and language in children |
| **Tinnitus Management** | Counseling and therapy plans for patients experiencing ringing or buzzing in the ears |
| **Swallowing Disorders (Dysphagia)** | Evaluation and therapy for difficulties related to swallowing and feeding |

**Design notes:**
- 6 cards in a 3×2 grid (desktop) / 1 column (mobile)
- Each card: icon (SVG or Lucide icon) + title + 1-line description
- Soft card shadow, hover lift animation
- Icons in teal accent color

---

### 5.5 Conditions Treated Section

**Purpose:** Help patients self-identify — "does she treat MY problem?"

**Content (expandable tags / pill list):**

- Hearing Loss (Sensorineural / Conductive)
- Speech Delay in Children
- Stuttering & Fluency Disorders
- Articulation Problems
- Autism & Communication Disorders
- Tinnitus (Ear Ringing)
- Auditory Processing Disorder
- Voice Disorders
- Swallowing Difficulties
- Language Disorders
- Cleft Palate Speech Issues
- Post-Cochlear Implant Rehabilitation

**Design notes:**
- Displayed as a tag cloud or pill grid
- Soft teal filled pills on light background
- Section heading: `Who Can Benefit?`

---

### 5.6 Why Choose Dr. Sona (Trust Signals)

**Purpose:** Differentiate and build credibility.

**Content (3–4 highlight boxes):**

| Icon | Title | Body |
|---|---|---|
| 🎓 | **RCI Certified Specialist** | Registered with the Rehabilitation Council of India — ensuring nationally recognized, qualified care |
| 🏥 | **Hospital-Based Practice** | Practicing at Valley Hospital & Research Centre, a trusted facility in Silchar |
| 👶 | **All Age Groups** | From newborns and children to elderly adults — comprehensive care for every stage of life |
| 📍 | **Serving Silchar & Barak Valley** | Accessible location in Meherpur, Silchar, serving patients across Assam and the Northeast |

**Design notes:**
- 4-column horizontal row (desktop) / 2×2 grid (tablet) / stacked (mobile)
- Each block: icon + bold title + body text
- Light teal background tint on cards

---

### 5.7 Location & Clinic Info Section

**Purpose:** Practical info to help patients visit.

**Content:**

```
Valley Hospital & Research Centre (P) Ltd.
Meherpur, Silchar — 788015
Assam, India

Phone: 9101108077 / 8876226682
Email: guptasona2018@gmail.com

[Placeholder: Clinic hours — to be provided by client]
Example: Mon–Sat: 10:00 AM – 5:00 PM | Sunday: Closed
```

**Design notes:**
- Two-column layout: Left = contact details + clinic hours, Right = embedded Google Maps iframe
  - Map centered on: `Meherpur, Silchar, Assam 788015`
  - Fallback if no embed: Static map image + "Get Directions" link to Google Maps
- Icons for phone, email, location pin, clock

---

### 5.8 Contact / Appointment Section

**Purpose:** Primary conversion point — make it trivially easy to get in touch.

**Content:**

**Option A — Simple Form (Preferred)**
Fields:
- Full Name (text)
- Phone Number (tel)
- Age / Patient Age (text — optional)
- Concern / Reason (dropdown: Hearing Issue, Speech Problem, Child Evaluation, Other)
- Message (textarea — optional)
- Submit Button: `Send Appointment Request`

Form action: Send to `guptasona2018@gmail.com` via EmailJS / Formspree (no backend needed)

**Option B — WhatsApp CTA (Simpler, No Backend)**
- Big WhatsApp button: `Chat on WhatsApp` → `https://wa.me/918876226682?text=Hello%20Dr.%20Sona%2C%20I%20would%20like%20to%20book%20an%20appointment`

**Recommended:** Implement BOTH — form + WhatsApp button below it.

**Design notes:**
- Section background: deep navy or dark teal
- Light text on dark background for contrast
- WhatsApp button: green with WhatsApp icon
- Trust line below form: `🔒 Your information is private and secure`

---

### 5.9 Footer

**Content:**
- Doctor name + tagline
- Quick links: About | Services | Contact
- Hospital name: Valley Hospital & Research Centre (P) Ltd.
- Email: guptasona2018@gmail.com
- Phone: 8876226682
- Copyright: `© 2025 Dr. Sona Gupta Deb Purkayastha. All rights reserved.`
- `[Optional: Powered by Locallify]` — if client approves

---

## 6. Technical Requirements

### 6.1 Tech Stack (Recommended)
- **Framework:** Next.js (React) — for SEO + performance
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (free tier — deploy in minutes)
- **Domain:** To be decided by client (suggested: `drsonagupta.in` or `sonagupta.in`)
- **Form handling:** Formspree (free tier) or EmailJS
- **Analytics:** Google Analytics 4 (basic page view tracking)

### 6.2 Alternatively (Simpler Stack)
- Pure HTML/CSS/JS — single `index.html` file
- No build step, easy to hand off
- Hosted on GitHub Pages or Netlify (free)

### 6.3 Performance Requirements
- Lighthouse score: 90+ (Performance, Accessibility, SEO, Best Practices)
- First Contentful Paint: < 2.0 seconds
- Mobile-first design (majority of patients will visit from Android phones)
- Images: WebP format, lazy loaded

### 6.4 SEO Requirements
- Meta title: `Dr. Sona Gupta | Audiologist & Speech Therapist in Silchar, Assam`
- Meta description: `Book an appointment with Dr. Sona Gupta Deb Purkayastha, RCI-registered Audiologist and Speech Therapist at Valley Hospital, Silchar. Call 8876226682.`
- H1 tag in hero section
- Schema markup: `MedicalBusiness` + `Physician` structured data (JSON-LD)
- Google Business Profile: Recommend creating alongside the website
- Open Graph tags for WhatsApp/social sharing preview

---

## 7. Content Gaps (Client Must Provide)

The following information is NOT available from the business card and must be collected from the client before launch:

| # | Item | Priority |
|---|---|---|
| 1 | Professional photograph of Dr. Sona | **High** — hero + about section |
| 2 | Academic qualification (degree name, university) | **High** — about section |
| 3 | Year of graduation / years of experience | **Medium** |
| 4 | RCI registration number (optional — for display) | **Medium** |
| 5 | Clinic hours / OPD schedule | **High** — contact section |
| 6 | List of services actually offered (verify against Section 5.4) | **High** |
| 7 | Any patient testimonials (anonymized) | **Low** — V1 optional |
| 8 | Any awards, publications, or special training | **Low** |
| 9 | Social media handles (if any) | **Low** |
| 10 | Preferred domain name | **High** — needed before launch |

---

## 8. V1 Deliverables

| Deliverable | Description |
|---|---|
| Responsive website | Single-page, all 8 sections built and deployed |
| SEO setup | Meta tags, schema markup, sitemap.xml, robots.txt |
| Contact form | Functional email form via Formspree |
| WhatsApp CTA | Click-to-chat button with pre-filled message |
| Google Maps embed | Location map in clinic section |
| Deployment | Live on Vercel with custom domain (if provided) |
| Basic analytics | Google Analytics 4 installed |

---

## 9. Future Enhancements (V2+)

- **Testimonials section** — video or text reviews from patients (with consent)
- **Hindi / Bengali language toggle** — for wider local reach
- **Blog / Articles** — educational posts on hearing health, speech development
- **Online appointment calendar** — Calendly or custom booking
- **WhatsApp chatbot** — automated appointment confirmation
- **Gallery** — photos of clinic, equipment
- **FAQ section** — common patient questions

---

## 10. Project Timeline (Estimated)

| Phase | Tasks | Duration |
|---|---|---|
| Phase 1 — Content Collection | Collect photo, qualifications, clinic hours, domain name | 2–3 days |
| Phase 2 — Design & Build | Build full single-page site with all sections | 3–5 days |
| Phase 3 — Review & Revise | Client feedback, copy changes, image swap | 1–2 days |
| Phase 4 — Launch | Deploy to Vercel, DNS setup, Google Analytics | 1 day |
| **Total** | | **~7–11 days** |

---

## 11. Budget Estimate (for reference)

| Item | Cost |
|---|---|
| Domain (e.g., `.in` domain for 1 year) | ₹500 – ₹800 |
| Hosting (Vercel free tier) | ₹0 |
| Form handling (Formspree free) | ₹0 |
| Professional stock photos (optional) | ₹0 (free via Unsplash/Pexels) |
| Development (if billed as Locallify service) | ₹4,999 – ₹7,999 |

---

*Document prepared by: Locallify*
*Version: 1.0*
*Date: May 2025*
*Status: Draft — Pending client content collection*