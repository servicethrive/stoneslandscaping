

## Homepage Enhancements — TopBar, Service Card, CTA Images, Image Styling

### Files Changed (6 files)

---

### 1. TopBar — Replace Email with Address
**File: `src/components/layout/TopBar.tsx`**

- Replace the email `mailto:` link (line 11-14) with the business address linking to their GBP: `https://maps.app.goo.gl/7yK6MFsXNHYJw1AB9`
- Use `MapPin` icon + "3150 Almaden Expy Suite 130, San Jose, CA 95118"
- Link opens in new tab (`target="_blank" rel="noopener noreferrer"`)

### 2. "See All Services" Card
**File: `src/pages/Index.tsx`**

- After the `SERVICES.map()` loop, add one more grid item — a styled card linking to `/service-areas` or a services overview
- Dark charcoal background with brown accent, "See All Services →" text, matching the `aspect-[3/4]` of other service cards
- This fills the last slot on the 3-column grid

### 3. Generate 2 AI Images for CTA Backgrounds
**Using AI image generation**, create:

1. **Pavers/hardscape image** for "Transform Your Backyard" CTA — eye-catching, luxury paver patio with dramatic composition
2. **Artificial turf image** for "See What's Possible" CTA — lush artificial turf backyard, modern Silicon Valley home

Save to `public/images/cta-hardscape.jpg` and `public/images/cta-turf.jpg`

### 4. CTABanner — Use Per-Section Background Images
**File: `src/components/sections/CTABanner.tsx`**

- Add optional `backgroundImage` prop to CTABanner
- Use it instead of the default `IMAGES.hero` when provided

**File: `src/pages/Index.tsx`**

- Pass `backgroundImage="/images/cta-hardscape.jpg"` to the first CTA
- Pass `backgroundImage="/images/cta-turf.jpg"` to the second CTA

### 5. Larger + Styled Images for "Why Choose Us" and "Design Process"
**File: `src/pages/Index.tsx`** (Why Choose Us section, lines 91-98)

- Remove `aspect-[4/3]`, make the image container larger (no fixed aspect, let it fill more space)
- Add rotation styling: `transform rotate-2 hover:rotate-0 transition-transform duration-500`
- Add a decorative shadow and a subtle brown border offset effect (like a polaroid/editorial tilt)

**File: `src/components/sections/DesignProcessBlock.tsx`** (line 24-31)

- Same treatment: remove `aspect-[4/3]`, make larger
- Add `-rotate-2 hover:rotate-0` with shadow and border accent
- Both images get ~30% more visual real estate by removing the constrained aspect ratio and letting them be taller

### 6. Constants Update
**File: `src/lib/constants.ts`**

- Add `ctaHardscape` and `ctaTurf` to IMAGES object

---

### Summary
- TopBar: address replaces email, links to Google Maps
- Services grid gets a "See All Services" card at the end
- Two new AI-generated CTA background images (hardscape + turf)
- CTABanner accepts custom background images
- "Why Choose Us" and "Design Process" images are 30% larger with editorial rotation styling

