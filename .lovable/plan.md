

## Trust Bar — Update Icons and Badges

### What's changing
- Replace the **Yelp SVG icon** with the uploaded Yelp image (`yelp_icon.jpeg`)
- Replace **"Yelp Verified" item** (3rd) with **"Best of 2026 — Landscaper in Willow Glen"** using the uploaded badge image
- Replace **"Licensed & Insured" item** (4th) with **"Best of 2025 — Landscaper in San Jose"** using the uploaded badge image
- Increase all icon/badge sizes uniformly to `w-16 h-16` (currently `w-10 h-10` inside `w-14 h-14` containers) — remove the circular `bg-white/10` container and let the images breathe at a consistent larger size

### Files changed (2)

**Asset copies (3 images → `src/assets/`)**
- `user-uploads://yelp_icon.jpeg` → `src/assets/yelp-icon.jpeg`
- `user-uploads://best_of_2026_landscaper_in_willow_glenn.webp` → `src/assets/best-of-2026.webp`
- `user-uploads://best_of_2025_landscaper_in_willow_glenn.png` → `src/assets/best-of-2025.png`

**`src/components/sections/TrustBar.tsx`** — full rewrite
- Remove `YelpIcon` and `ShieldCheck` SVG components
- Import the 3 images from `@/assets/`
- All 4 items use `<img>` tags at `w-16 h-16 object-contain` (no circular background wrapper)
- Google SVG icon also scales to `w-16 h-16`
- Item 1: Google — 5.0 Stars, 56+ Reviews (unchanged text, bigger icon)
- Item 2: Yelp — 4.9 Stars, 123+ Reviews (use uploaded yelp image instead of SVG)
- Item 3: Best of 2026 badge image — "Award Winner" / "Landscaper in Willow Glen"
- Item 4: Best of 2025 badge image — "Best of 2025" / "Landscaper in San Jose"
- Items 3 & 4 have no links and no star rows

