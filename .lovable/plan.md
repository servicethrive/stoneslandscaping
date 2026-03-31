

## UI Fixes: Hero, Footer, Navbar, and Site-wide Consistency

### 1. Remove "Luxury" from Homepage Hero
**`src/pages/Index.tsx`** line 24 — Change `"Luxury Outdoor Living, Built to Last"` to `"Outdoor Living, Built to Last"`

### 2. Fix Footer CTA (White Outline Button Readability)
**`src/components/sections/CTABanner.tsx`** line 39 — The outline phone button on dark backgrounds has white text on a transparent bg which is hard to read. Add a visible white background with dark text, similar to the hero's secondary CTA style:
- Change `border-white/20 text-white hover:bg-white/10 hover:text-white` → `border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm`

### 3. Navbar CTA Button — Match Brown Hero Style
**`src/components/layout/Navbar.tsx`** line 95 — The "Free Estimate" button currently uses the default primary (brown) style but may not match the font. Update:
- Add `font-display` class so the button text uses Rokkitt like the rest of the site
- Ensure button uses primary brown color (already does via default Button variant)

### 4. Navbar Font Consistency
**`src/components/layout/Navbar.tsx`** — Add `font-body` to nav link text so it explicitly uses DM Sans (body font) consistently. The button CTA should use `font-display` for emphasis.

### 5. Footer Widget Titles — Use Accent Color
**`src/components/layout/Footer.tsx`** lines 49, 73, 87 — Change `text-white/40` to `text-primary` (the brown accent color) on the three h4 widget titles: "Services", "Service Areas", "Quick Links".

### 6. Text Size Consistency Across Footer Sections
All footer link text is already `text-sm` — this is consistent. The widget titles are `text-xs uppercase` — also consistent. No change needed here, just the color fix above.

### Files Changed
- `src/pages/Index.tsx` — Remove "Luxury" from hero title
- `src/components/sections/CTABanner.tsx` — Fix outline button visibility on dark bg
- `src/components/layout/Navbar.tsx` — Match CTA button style, font consistency
- `src/components/layout/Footer.tsx` — Accent color on widget titles

