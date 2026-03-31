

## Revert to Playfair Display + Unify CTA Button Styles

### 1. Revert Display Font to Playfair Display

The previous font (Playfair Display) was preferred over Rokkitt. Changes:

- **`index.html`** — Replace `Rokkitt` with `Playfair+Display` in the Google Fonts link
- **`tailwind.config.ts`** — Change `fontFamily.display` from `"Rokkitt"` to `"Playfair Display"`

### 2. Unify All CTA Buttons (Header → Body → Footer)

Standardize every CTA button to use the same font and color treatment:

**Shared CTA style:** `font-display tracking-widest uppercase font-semibold` with primary brown bg (default variant).

Files to update:

- **`src/components/layout/Navbar.tsx`** (line 95) — Already has `font-display`. Confirm `tracking-widest uppercase font-semibold` matches.
- **`src/components/sections/HeroSection.tsx`** (lines 44, 48, 53) — Add `font-display tracking-widest` to both primary and outline buttons.
- **`src/components/sections/CTABanner.tsx`** (lines 32, 39) — Add `font-display tracking-widest` to both buttons.
- **`src/components/layout/Footer.tsx`** — Check for any CTA buttons and add matching classes.
- **Any page-level inline buttons** — Search for `<Button` across pages and ensure they carry `font-display tracking-widest uppercase font-semibold`.

### 3. Update Memory

Update `mem://design/direction` to reflect Playfair Display (not Rokkitt) as the display font.

### Files Changed
- `index.html`
- `tailwind.config.ts`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/CTABanner.tsx`
- `src/components/layout/Navbar.tsx` (minor confirm)
- `mem://design/direction`

