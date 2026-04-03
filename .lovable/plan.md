

## Fix Trust Bar — Remove White Backgrounds, Unify Sizes

### Problems visible in screenshot
1. Yelp icon has a white rectangular background clashing with the dark bar
2. Best of 2026 and Best of 2025 badges both show white rounded containers behind them
3. The user stated these are transparent-background files — the `bg-white rounded-lg p-1` wrappers we added are causing the problem
4. Icon sizes are visually inconsistent — Google "G" looks bigger than the badges

### What's changing

**`src/components/sections/TrustBar.tsx`** — one file, targeted fixes:

1. **Remove all `bg-white rounded-lg p-1` wrapper divs** from the Yelp, 2026, and 2025 items — render the `<img>` tags directly without any background container
2. **Standardize all image/icon sizes to `w-20 h-20`** — the Google SVG and all three `<img>` tags get the same dimensions so they're visually equal
3. **Keep `object-contain`** on all images so they scale proportionally within the box
4. The Google SVG already renders at `w-20 h-20` — no change needed there

### Result
All four trust items will show their icons/badges at the same size directly on the dark charcoal background with no wrapper, no white box, no background interference. The transparent PNGs/WebPs will blend cleanly.

