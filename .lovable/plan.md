

## Restart Trust Bar — Fresh Layout with New Images

### Problems with current implementation
1. Old image files (JPEG for Yelp, PNG for 2025) are causing pixelation and white background issues
2. Layout order is wrong — user wants awards centered/prominent, not tacked on at the end
3. `mix-blend-multiply` hack isn't working reliably
4. Mobile layout needs awards on top, reviews below

### New image assets
The user uploaded fresh WebP files with transparent backgrounds. These replace the old problematic files:
- `yelp_icon.webp` — circular red Yelp icon, transparent background
- `best_of_2025_landscaper_in_San_Jose.webp` — gold badge, transparent background
- `best_of_2026_landscaper_in_Willow_Glen.webp` — award badge, transparent background

### Layout (desktop)
```text
┌─────────────────────────────────────────────────────────────┐
│  [G] 5.0 Stars  │  [🏆 2026]    [🏆 2025]  │  [Y] 4.9 Stars │
│  Google (left)   │  Awards (center, large)   │  Yelp (right)   │
└─────────────────────────────────────────────────────────────┘
```

### Layout (mobile)
```text
┌─────────────────────┐
│  [🏆 2026]  [🏆 2025] │  ← awards row on top
│  [G] Google  [Y] Yelp │  ← reviews row below
└─────────────────────┘
```

### Changes

**Step 1: Replace image assets**
- Copy `user-uploads://yelp_icon.webp` → `src/assets/yelp-icon.webp`
- Copy `user-uploads://best_of_2025_landscaper_in_San_Jose.webp` → `src/assets/best-of-2025.webp`
- Copy `user-uploads://best_of_2026_landscaper_in_Willow_Glen.webp` → `src/assets/best-of-2026-new.webp`
- Delete old files (jpeg, png) or simply update imports

**Step 2: Rewrite `src/components/sections/TrustBar.tsx`**
- Update imports to new `.webp` files
- Remove `mix-blend-multiply` and all `bg-white` wrappers — the new WebP files have real transparency
- Award badges: `w-24 h-24` (large, prominent) with text below
- Google SVG: `w-12 h-12`, Yelp icon: `w-12 h-12` — compact review items with text beside
- Desktop: `flex items-center justify-center gap-12` with order: Google | divider | 2026 Award | 2025 Award | divider | Yelp
- Mobile: two rows using `flex-col` — awards row on top (`flex justify-center gap-8`), reviews row below (`flex justify-center gap-8`)
- No background wrappers, no blend modes, no filters — just clean `<img>` tags with `object-contain`

### Files changed
1. **3 asset files** — copy new WebPs into `src/assets/`
2. **`src/components/sections/TrustBar.tsx`** — full rewrite with new layout, imports, and sizing

