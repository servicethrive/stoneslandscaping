

## Homepage Refinements + Featured Projects Section

### Files Changed (4 files)

---

### 1. Smaller H1s Site-Wide
**File: `src/components/sections/HeroSection.tsx`**

Current H1: `text-4xl md:text-6xl lg:text-7xl xl:text-8xl`
New H1: `text-4xl md:text-5xl lg:text-5xl xl:text-6xl` — desktop gets the current tablet size, tablet/phone stay the same.

H2s across sections currently use `text-3xl md:text-4xl lg:text-5xl`. Change to `text-3xl md:text-4xl lg:text-4xl` in all section components (CTABanner, ProcessSteps, TestimonialBlock, ServiceAreaGrid, FAQAccordion, ComparisonTable, WarrantyBlock, TeamBlock, DesignProcessBlock, Index.tsx inline h2s).

### 2. Hero Phone Number — Text Only, Below CTA
**File: `src/components/sections/HeroSection.tsx`**

- Remove the phone button CTA entirely (the `showPhone` button block)
- Remove the `secondaryCTA` button block
- Below the primary CTA button, add a simple text line with phone icon:
  ```
  <a href="tel:..." className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mt-6">
    <Phone className="h-4 w-4" /> (408) 204-8418
  </a>
  ```
- Clean up the `showPhone` and `secondaryCTA` props (can keep for backward compat but remove the button rendering)

### 3. CTABanner — Lighter Overlays, Remove Phone Button
**File: `src/components/sections/CTABanner.tsx`**

- Change background image opacity from `opacity-20` to `opacity-40` and reduce the overlay from `bg-brand-charcoal/80` to `bg-brand-charcoal/50` so more photo detail shows through
- Remove the phone number button entirely
- Below the main CTA button, add the same phone text treatment: icon + number as plain text link (not a button)

### 4. Featured Projects Section + Index Layout
**File: `src/pages/Index.tsx`**

Add a new "Featured Projects" section after the services grid and before the first CTABanner. Layout:

- Section heading: "Featured Projects" with brand accent line
- Subtitle: "Recent transformations by Stones Landscaping"
- A visually rich grid layout:
  - 1 large hero image (spanning 2 columns, taller) + 2 stacked smaller images on the right
  - Below: 3 equal-width images
- Each image card has a subtle overlay on hover with project title and location (e.g., "Custom Paver Patio — Los Gatos, CA")
- Bottom CTA: "View Full Portfolio" linking to `/gallery`
- Use charcoal background section for contrast, white text
- Uses existing gallery images from IMAGES constants for now

The section will be a new component: **`src/components/sections/FeaturedProjects.tsx`**

---

### Section Order (updated)
Hero → Trust → Services → **Featured Projects** → CTA → Why Choose Us → Process → Design → CTA → Testimonials → Service Areas → Final CTA

