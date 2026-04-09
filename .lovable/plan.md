

## Add 2018 Fleet Photo + Replace Award Icons with Real Badge Images

### Changes

**1. Copy 3 new images to `public/images/`**
- `stones_landscaping_in_2018.jpg` → `public/images/stones-landscaping-2018.jpg`
- `best_of_2025_landscaper_in_San_Jose-2.webp` → `public/images/best-of-2025-business-rate.webp`
- `best_of_2026_landscaper_in_willow_glenn-2.webp` → `public/images/best-of-2026-business-rate.webp`

**2. Add 2018 photo to Fleet & Equipment grid** (`src/pages/About.tsx` line ~189)
- Add `{ src: "/images/stones-landscaping-2018.jpg", alt: "Stones Landscaping fleet vehicles on job site in 2018" }` to the fleet images array
- Grid will now have 6 images (perfect 2×3 / 3×2 layout)

**3. Replace Awards Banner icons with real badge images** (`src/pages/About.tsx` lines 34-47)
- Remove the `Award` lucide icon from each award card
- Replace with `<img>` tags showing the actual Business Rate badge images
- 2026 badge goes first (far left), 2025 badge second
- Both images rendered at the same fixed size (e.g., `w-32 h-32 object-contain mx-auto`) so they appear equal regardless of source image dimensions
- Remove the `Award` import from lucide-react if no longer used elsewhere

### Files changed
- `src/pages/About.tsx` — reorder awards array (2026 first), replace icon with `<img>`, add fleet image, clean up unused import

