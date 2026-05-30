# English Landing Page — Design Spec

**Date:** 2026-05-30  
**Status:** Approved  
**Goal:** Single focused English landing page at `/en/` targeting English-speaking expats in Prague who need a mobile vet.

---

## Context

Ducktorka (ducktorka.cz) is a Czech mobile vet service run by MVDr. Kateřina Měchurová. The Czech site is a full React + Vite SSG site with 19 location pages, 11 service pages, and articles. The English version is intentionally a single landing page — the audience (expats in Prague) is niche and concentrated, and a focused page will convert better than a translated version of the full site.

Dr. Měchurová communicates in English and completed two internships in Tennessee, USA (Animal Wellness and Rehabilitation Center; Blackford Veterinary Referral Hospital).

---

## Architecture

**Approach:** Self-contained single-file page (Option A). No changes to any existing Czech component or data file.

**New files:**
- `src/pages/EnglishPage.tsx` — all sections as inline sub-components, English content hardcoded
- Route entry added to `src/routes.tsx`: `path: "en"` → lazy-loaded `EnglishPage`, static path `/en/`

**Modified files:**
- `src/pages/Index.tsx` — add `hreflang` alternate links (`cs` → `/`, `en` → `/en/`)
- `src/pages/EnglishPage.tsx` — add matching `hreflang` alternate links

**Shared from existing codebase:**
- Tailwind CSS config and design tokens (colors, fonts, spacing)
- `DuckLogo` component
- `src/assets/` images (hero, about photos)
- `src/data/constants.ts` (FIXED_FEE, KILOMETER_FEE) for pricing section

---

## Page Sections (top to bottom)

### 1. Navbar
Minimal sticky navbar: Ducktorka logo (left) + "Book via WhatsApp" CTA button (right). No full navigation menu — this is a landing page, not a multi-page site.

### 2. Hero
- **H1:** "Mobile Vet in Prague — We Come to You"
- **Subheading:** "Professional home-visit veterinary care, in English."
- **Body:** One sentence on the value prop (no waiting room, no stressful car ride for your pet).
- **CTAs:** "Book via WhatsApp" (primary, accent button) + "See our services" (secondary, scroll anchor)
- **Background:** Same hero image as Czech site (`hero-v11-md.webp`) with existing gradient overlay

### 3. Why Home Visit (Benefits Strip)
Three benefit chips/cards in a row:
1. "No waiting room" — your pet stays calm in their own home
2. "Communication in English" — full consultation in English
3. "Less stress for your pet" — familiar environment, better diagnostics

### 4. About Dr. Měchurová
- Photo (`about-photo-1-md.webp`)
- Name and title: MVDr. Kateřina Měchurová
- Bio paragraph: Graduated from Veterinary University of Brno. Realized during clinical work that vet visits are a major source of stress for animals — that insight led to founding Ducktorka.
- Two credential badges prominently displayed:
  - "Trained in Tennessee, USA" — Animal Wellness and Rehabilitation Center + Blackford Veterinary Referral Hospital
  - "English-speaking" — consultations fully in English
- Note: The Tennessee detail is a strong trust signal specifically for English-speaking (especially American) expats.

### 5. Services
Icon grid of all 11 services with English names and one-line descriptions:

| Slug | English name | One-line description |
|---|---|---|
| preventivni-prohlidky | Wellness Exams | Routine health checks for dogs and cats |
| vakcinace | Vaccinations | Up-to-date vaccines following current protocols |
| odcerveni | Parasite Prevention | Internal and external antiparasitic treatment |
| cipovani | Microchipping | Chip implantation + EU pet passport |
| odbery-krve | Blood Tests | Lab diagnostics with same-day results (Veteo / Laboklin) |
| sono-vysetreni | Ultrasound (Sono) | Portable ultrasound diagnostics at your home |
| osetreni-poraneni | Wound Care | Treatment of minor injuries and wounds |
| konzultace | Consultations | Health, nutrition, and prevention advice |
| paliativni-pece | Palliative Care | Compassionate support for sick and aging animals |
| eutanazie-doma | Home Euthanasia | Peaceful, dignified farewell in familiar surroundings |
| kastrace | Neutering/Spaying | Preventive procedure — performed at the Benešov clinic only |

### 6. Coverage
Prague districts served (with notable neighbourhoods in parentheses):
- **Praha 2** — Vinohrady, Vyšehrad, Nové Město
- **Praha 3** — Žižkov, Vinohrady
- **Praha 7** — Holešovice, Letná
- **Praha 8** — Karlín, Libeň, Kobylisy, Bohnice

Plus a note: "We also cover areas around Prague — Jesenice, Říčany, Průhonice and more."

No map component (adds complexity, not needed for a focused page).

### 7. Pricing
Simple card layout:
- **Base visit fee:** 350 CZK (~14 EUR)
- **Travel:** 18 CZK/km from Benešov
- **Prague note:** Prague districts have a minimal travel surcharge (Praha 7: ~126 CZK, Praha 2: ~162 CZK)
- Call to action: "Exact travel fee confirmed at booking"

### 8. Contact / Book
- **Primary CTA:** Large WhatsApp button ("Message us on WhatsApp") linking to `https://wa.me/420734231444`
- **Secondary:** Phone number + email
- **Note:** "We respond in English"
- No complex booking form on this page — WhatsApp is the primary channel for expat bookings

### 9. Footer
- Ducktorka name + duck logo
- "MVDr. Kateřina Měchurová"
- Link: "Česká verze" → `/` (Czech site)
- Copyright

---

## SEO

| Tag | Value |
|---|---|
| `<title>` | Mobile Vet Prague \| Home Visit Veterinary Care \| Ducktorka |
| `<meta name="description">` | English-speaking mobile vet in Prague. Dr. Měchurová visits your home in Praha 2, 3, 7, 8 and surrounding areas. Professional care for dogs & cats. Book via WhatsApp. |
| H1 | Contains "mobile vet Prague" |
| `hreflang` (on `/en/`) | `cs` → `https://ducktorka.cz/`, `en` → `https://ducktorka.cz/en/` |
| `hreflang` (on `/`) | same pair, added to Czech Index page |

Prague district names mentioned naturally in the coverage section provide local search signals without needing separate location pages.

---

## Out of Scope

- Translated versions of service detail pages (`/en/services/:slug/`)
- Translated location detail pages
- English articles
- Language switcher toggle on the Czech site
- Contact form (WhatsApp is the primary channel; form adds complexity for minimal gain)
