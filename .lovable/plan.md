

## Premium Design Overhaul — High-End Landscape Firm Look & Feel

The client's current site has a clean but generic template feel. Their existing site (stoneslandscapinginc.com) uses a grey top utility bar, transparent-to-white navbar, and a more branded color scheme. We need to elevate beyond both — a premium, high-end design that feels like a luxury design firm, not a basic contractor site.

### Color Scheme Update

Align with the logo colors: **grey, white, black, brown (accent)**

```text
Current               →  New
--background (cream)  →  Pure white (#FFFFFF)
--brand-dark (brown)  →  Charcoal black (#1A1A1A)
--primary (brown)     →  Keep brown as accent (#9a5e37)
New additions:
  --brand-charcoal: #2D2D2D (dark sections)
  --brand-grey: #4A4A4A (text, utility bar)
  --brand-light-grey: #F5F5F5 (section alternation)
```

### Files Changed (13 files)

---

### 1. Top Utility Bar (new component)
**File: `src/components/layout/TopBar.tsx`** (new)

A slim grey bar above the navbar matching stoneslandscapinginc.com style but cleaner:
- Dark grey background (`#4A4A4A`)
- Left: "Serving the Bay Area" with map pin icon
- Center: Email address
- Right: License number + phone number with click-to-call
- Hidden on mobile (shown in mobile menu instead)

### 2. Transparent → White Navbar on Scroll
**File: `src/components/layout/Navbar.tsx`**

- Default state: `bg-transparent`, white text/logo, no border
- On scroll (past ~80px): `bg-white`, dark text, subtle shadow, smooth transition
- Use `useEffect` with scroll listener + state toggle
- Logo: use white version at top, dark version on scroll (or use CSS filters)
- Services dropdown: always white background
- Mobile menu: always white background

### 3. Layout Adjustments
**File: `src/components/layout/Layout.tsx`**

- Add `<TopBar />` above `<Navbar />`
- Adjust `pt-` to account for TopBar + Navbar combined height

### 4. Updated CSS Variables
**File: `src/index.css`**

- `--background`: pure white `0 0% 100%`
- `--card`: very light grey `0 0% 98%`
- Add new brand tokens for charcoal, medium grey, light grey
- Add new utility classes: `.section-dark` (charcoal bg), `.section-light` (light grey bg)

### 5. Hero Section Upgrade
**File: `src/components/sections/HeroSection.tsx`**

- Taller hero: `min-h-screen` instead of `min-h-[85vh]`
- Add subtle parallax-like effect with CSS
- More dramatic gradient overlay
- Larger, bolder typography with text shadow
- Add a subtle animated scroll indicator arrow at bottom
- Left-aligned text layout option for more editorial feel

### 6. Trust Bar Refinement
**File: `src/components/sections/TrustBar.tsx`**

- Change from dark background to charcoal black
- Add a subtle gold/brown separator line between items on desktop
- Slightly larger icons with refined styling

### 7. Service Cards Premium Upgrade
**File: `src/components/sections/ServiceCard.tsx`**

- Darker overlay on images by default (not just on hover)
- Title overlaid on image at bottom with gradient
- Subtle border-bottom accent line in brand brown on hover
- Remove the separate text area below — make it a full image card with overlay text (like the reference site's service cards)

### 8. Process Steps Visual Upgrade
**File: `src/components/sections/ProcessSteps.tsx`**

- Change from cream background to light grey
- Add connecting lines between step circles on desktop
- Step numbers: filled brown circles instead of outlined

### 9. Testimonial Block Upgrade
**File: `src/components/sections/TestimonialBlock.tsx`**

- Change from brand-dark to charcoal black
- Add subtle left border accent (brown) on each card
- Larger quote marks as decorative element

### 10. CTA Banner Polish
**File: `src/components/sections/CTABanner.tsx`**

- Use charcoal black background
- Add a background image with heavy dark overlay for depth

### 11. Design Process Block Polish
**File: `src/components/sections/DesignProcessBlock.tsx`**

- Add subtle light grey background
- Image: add a thin brown border/frame effect

### 12. Footer Upgrade
**File: `src/components/layout/Footer.tsx`**

- Use true black/charcoal instead of warm brown-dark
- Add a brown accent line at the very top of footer
- Cleaner grid spacing

### 13. Tailwind Config
**File: `tailwind.config.ts`**

- Add new color tokens for charcoal, grey, light-grey

---

### Design Principles Applied
- **White space**: More generous padding, cleaner sections
- **Color discipline**: Grey/white/black foundations, brown only as accent
- **Typography contrast**: Bigger headings, lighter body text weight
- **Depth**: Subtle shadows, overlays, and layering instead of flat cards
- **Professional**: Transparent header creates an immersive hero, utility bar adds credibility

