

## Replace 2026 Award Image on About Page Only

**Problem**: Both the About page and home page TrustBar reference the same file (`/images/best-of-2026-business-rate.webp`). Replacing that file would change both. We need a separate file for the About page.

### Changes

**1. Copy new image to project**
- `user-uploads://best_of_2026_landscaper_in_willow_glenn-3.webp` → `public/images/best-of-2026-about.webp`

**2. Update `src/pages/About.tsx`** (line 36)
- Change badge path from `/images/best-of-2026-business-rate.webp` to `/images/best-of-2026-about.webp`

Home page `TrustBar.tsx` remains untouched — it keeps using the original file.

### Files changed
- `public/images/best-of-2026-about.webp` — new file
- `src/pages/About.tsx` — updated badge path

