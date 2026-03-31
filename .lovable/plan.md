

## Remove Display Font from All CTA Buttons — Use Body Font (DM Sans)

The issue: Playfair Display (serif) doesn't look good as uppercase button text. The previous hero buttons used the default body font (DM Sans) which was cleaner and more readable. All CTAs should match that style.

### Changes

Remove `font-display` from every CTA button across 3 files, replacing with `font-body` (DM Sans):

- **`src/components/sections/HeroSection.tsx`** — lines 44, 48, 53: change `font-display` → `font-body` on all three buttons
- **`src/components/sections/CTABanner.tsx`** — lines 32, 39: change `font-display` → `font-body` on both buttons
- **`src/components/layout/Navbar.tsx`** — line 95: change `font-display` → `font-body` on the Free Estimate button

All buttons keep `tracking-widest uppercase font-semibold text-sm` — only the font family changes.

### Files Changed
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/CTABanner.tsx`
- `src/components/layout/Navbar.tsx`

