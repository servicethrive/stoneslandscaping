

## Fix Trust Bar Icon Quality and Sizing

### Problems identified
1. **Yelp icon** — white/light background clashing with the dark charcoal bar
2. **Best of 2026 badge** — too small at `w-16 h-16`, text unreadable
3. **Best of 2025 badge** — white background visible, also too small
4. All badge images look cramped and unprofessional next to the crisp Google SVG

### What's changing

**`src/components/sections/TrustBar.tsx`** — styling overhaul for all 4 items:

- **Increase badge sizes**: Award badges go from `w-16 h-16` to `w-20 h-20` (or larger) so the text on them is legible
- **Yelp icon**: Add `rounded-lg` and a subtle dark background wrapper (`bg-white rounded-lg p-1`) so the icon looks intentional rather than clashing — OR crop/style it to blend. Since the JPEG has a white background baked in, the cleanest fix is to give it a small white rounded container so it looks like a polished badge rather than a raw image on dark
- **Award badges (2025 & 2026)**: Same treatment — wrap in a subtle rounded container with white/light background so the badge artwork pops cleanly. Increase to `w-20 h-20` minimum
- **Google icon**: Keep as SVG, bump to `w-20 h-20` to match the new badge sizes
- **Consistent layout**: All icons same size, uniform spacing

### Files changed (1)

**`src/components/sections/TrustBar.tsx`**
- All icons/images: `w-20 h-20` (up from `w-16 h-16`)
- Google SVG viewBox stays the same, outer container `w-20 h-20`
- Yelp image: wrap in `bg-white rounded-lg p-1` container, image stays `object-contain`
- Best of 2026 image: wrap in `bg-white rounded-lg p-1` container at `w-20 h-20`
- Best of 2025 image: same white rounded container treatment
- This gives all badges a clean, sharp card-like appearance on the dark bar — consistent and professional

