

## Trust Bar Redesign + CTA Text Updates

### Changes

**1. Trust Bar — Platform badges with real logos (`src/components/sections/TrustBar.tsx`)**
- Replace all 4 generic Lucide icons with custom inline SVGs:
  - **Google**: Google "G" logo SVG + 5 gold stars + "5.0 Stars" + "56+ Reviews" → links to GBP
  - **Yelp**: Yelp burst logo SVG + 5 gold stars + "4.9 Stars" + "123+ Reviews" → links to Yelp page
  - **Verified License**: Shield/checkmark SVG + "Yelp Verified" + "Licensed Contractor" → links to Yelp
  - **Licensed & Insured**: Shield/lock SVG + "Licensed & Insured" + "CA Lic #1032828" → no link
- Icons increase to `w-14 h-14`, star rows in gold (#FBBF24)
- Google and Yelp items are `<a>` tags with `target="_blank"`

**2. Constants (`src/lib/constants.ts`)**
- Add `googleProfileUrl` and `yelpProfileUrl` to BUSINESS
- Fix Google rating: already 56 reviews, rating is 5.0 (not 4.9)

**3. CTA text → "Request a Free Quote" across all files:**
- `src/components/sections/CTABanner.tsx` line 42: "Request a Free Consultation" → "Request a Free Quote"
- `src/components/sections/HeroSection.tsx` line 19: default `"Get a Free Estimate"` → `"Request a Free Quote"`
- `src/components/layout/Navbar.tsx` lines 99, 168: "Request a Consultation" → "Request a Free Quote"
- `src/pages/Index.tsx` line 28: "Request a Free Consultation" → "Request a Free Quote"
- `src/pages/About.tsx` line 21: "Request a Consultation" → "Request a Free Quote"

### Files changed (7)
- `src/components/sections/TrustBar.tsx` — full rewrite
- `src/lib/constants.ts` — add profile URLs
- `src/components/sections/CTABanner.tsx` — CTA text
- `src/components/sections/HeroSection.tsx` — default CTA text
- `src/components/layout/Navbar.tsx` — CTA text (2 locations)
- `src/pages/Index.tsx` — CTA text
- `src/pages/About.tsx` — CTA text

