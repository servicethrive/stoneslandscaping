

## Restart Trust Bar — Mixed Treatment with Blend Fix

### Root cause
The Yelp file is a **JPEG** (no transparency possible). The 2025 PNG likely also has a white background baked in. Previous attempts either wrapped them in white boxes (ugly) or displayed them raw (white rectangles on dark). The fix is CSS `mix-blend-mode: multiply`, which makes white pixels transparent against the dark background — no image editing needed.

### What's changing

**`src/components/sections/TrustBar.tsx`** — full rework of icon sizing and styling:

1. **Google icon** — keep as SVG, size `w-14 h-14` (compact review icon)
2. **Yelp icon** — `w-14 h-14 object-contain rounded mix-blend-multiply` plus a subtle light background circle/pill so multiply mode has something to blend against cleanly. Actually simpler: **invert approach** — give Yelp a small `bg-white/90 rounded-lg p-0.5` container at `w-14 h-14` so it looks like a deliberate badge chip (not a raw image). This is different from before because it's compact and intentional, matching Google's footprint.
3. **Best of 2026 badge** — increase to `w-28 h-28` so the award text inside the artwork is legible. Add `mix-blend-multiply` if it has white background, or display raw if truly transparent.
4. **Best of 2025 badge** — same `w-28 h-28 mix-blend-multiply` treatment.
5. **Layout shift** — change from uniform `grid-cols-4` to a flex layout where Google and Yelp are compact (icon + text), and the two award badges are larger visual elements. Use `flex items-center justify-around` so spacing adapts.

### Revised layout structure
```text
┌──────────────────────────────────────────────────────────┐
│  [G] 5.0 Stars  │  [Y] 4.9 Stars  │  [🏆 2026]  │  [🏆 2025]  │
│  (w-14)          │  (w-14)          │  (w-28)      │  (w-28)      │
│  + text right    │  + text right    │  + text below │  + text below │
└──────────────────────────────────────────────────────────┘
```

- Award items switch to a **stacked layout** (image on top, text below) so the bigger badge has room
- Review items keep the **side-by-side layout** (icon left, text right) as they are now

### Key CSS trick
`mix-blend-multiply` on the award images makes any white background disappear against the dark charcoal bar. This works because multiply blending treats white as transparent. No image editing required.

### Files changed (1)
**`src/components/sections/TrustBar.tsx`**

