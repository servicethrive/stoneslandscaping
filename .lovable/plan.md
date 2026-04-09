

## Replace 2026 Award Badge (White Font Version) on Home Page

### Changes

**1. Copy new image to `public/images/`**
- `user-uploads://best_of_2026_landscaper_in_Willow_Glen-2.webp` → `public/images/best-of-2026-business-rate.webp` (overwrite existing)

That's it — since `TrustBar.tsx` and `About.tsx` both reference `/images/best-of-2026-business-rate.webp`, replacing the file in place updates both locations automatically.

### Files changed
- `public/images/best-of-2026-business-rate.webp` — replaced with white-font version

