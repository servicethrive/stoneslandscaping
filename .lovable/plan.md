

## Homepage Premium Overhaul — More Branding, Larger CTAs, Service Area Map

This plan addresses all requests: navbar tweaks, hero changes, larger service cards, a Bay Area map overlay, and additional CTA sections throughout the homepage (inspired by eliaslandscapinginc.com's approach of interspersing bold CTA banners between content sections).

### Files Changed (5 files)

---

### 1. Navbar Updates
**File: `src/components/layout/Navbar.tsx`**

- **Remove phone number** from desktop nav (lines 97–106)
- **Change CTA button** text from "Get A Free Estimate" → "Request a Consultation"
- **Logo 30% larger**: change `h-12 lg:h-16` → `h-16 lg:h-20`
- **Mobile: add Phone icon + Mail icon** next to hamburger, linked to `tel:` and `/contact` respectively
- Update mobile menu CTA text to match

### 2. Hero Banner Updates
**File: `src/pages/Index.tsx`**

- Change hero `title` to `"Landscape & Hardscape Design in San Jose, CA"`
- Change `primaryCTA` text to `"Request a Free Consultation"`
- **Remove `secondaryCTA`** (no "View Our Portfolio")
- **Add 2 mid-page CTA banners** between sections for more branding presence:
  - After Services section: CTA banner — "Transform Your Backyard Into an Outdoor Oasis" with consultation CTA
  - After Why Choose Us / before Process Steps: CTA banner — "See What's Possible — Schedule a Design Consultation"
- This mirrors the eliaslandscapinginc.com pattern of CTA sections interspersed throughout

### 3. Larger Service Cards
**File: `src/components/sections/ServiceCard.tsx`**

- Change aspect ratio from `aspect-[4/3]` → `aspect-[3/4]` (taller cards, more photo visible)
- Increase text padding

**File: `src/pages/Index.tsx`** (services grid)

- Change grid from `lg:grid-cols-3 xl:grid-cols-4` → `lg:grid-cols-3 xl:grid-cols-3` with larger gap
- This gives each card more room to breathe and show the photos

### 4. Service Area Section — Bay Area Map Overlay
**File: `src/components/sections/ServiceAreaGrid.tsx`**

- Add a two-column layout: left side = Bay Area map visual (SVG map outline of the Bay Area with service counties highlighted in brand brown), right side = city list
- Use an inline SVG of the Bay Area silhouette with highlighted counties (Santa Clara, San Mateo, Alameda, Santa Cruz) filled with the brand brown color
- Add a pin/marker on San Jose as home base
- Dark charcoal background section for contrast
- White text, brown accent highlights on the map
- CTA button at bottom: "View All Service Areas"

### 5. Additional Mid-Page CTA Component
**File: `src/pages/Index.tsx`**

Reuse existing `CTABanner` component with different copy at two insertion points:
1. After services grid, before "Why Choose Us"
2. After DesignProcessBlock, before TestimonialBlock

This creates the rhythm: Hero → Trust → Services → **CTA** → Why Choose Us → Process → Design → **CTA** → Testimonials → Service Areas → Final CTA

---

### Summary of All Text Changes
| Location | Old | New |
|---|---|---|
| Navbar CTA | Get A Free Estimate | Request a Consultation |
| Hero H1 | Outdoor Living, Built to Last | Landscape & Hardscape Design in San Jose, CA |
| Hero primary CTA | Request a Consultation | Request a Free Consultation |
| Hero secondary CTA | View Our Portfolio | (removed) |
| Navbar phone | Visible | Removed from desktop nav |

