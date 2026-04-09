

## Normalize Body Text Sizes Across All Pages

**Problem**: Throughout the site, the first paragraph in each section uses `text-lg` while subsequent paragraphs default to `text-base` (~16px). This creates a visible size jump between stacked paragraphs within the same section. You're right — consistent sizing across body paragraphs is better design practice.

**Decision**: Standardize all body paragraphs to `text-lg` (18px). This matches the premium/luxury feel and keeps readability high. List item text and card descriptions can stay at `text-sm` or `text-base` since those are distinct content types.

**What changes**: Every `<p>` with class `text-muted-foreground ... leading-relaxed font-light"` (without `text-lg`) gets `text-lg` added. This affects ~13 page files and a few section components.

### Files to update

1. `src/pages/About.tsx` — ~6 paragraphs missing `text-lg`
2. `src/pages/ServiceAreas.tsx` — ~3 paragraphs
3. `src/pages/Saratoga.tsx` — ~3 paragraphs
4. `src/pages/LosGatos.tsx` — ~2 paragraphs
5. `src/pages/Atherton.tsx` — ~2 paragraphs
6. `src/pages/Pavers.tsx` — ~4 paragraphs
7. `src/pages/ConcreteDriveways.tsx` — ~3 paragraphs
8. `src/pages/RetainingWalls.tsx` — ~3 paragraphs
9. `src/pages/ArtificialTurf.tsx` — ~4 paragraphs
10. `src/pages/Landscaping.tsx` — ~3 paragraphs
11. `src/pages/OutdoorKitchens.tsx` — ~3 paragraphs
12. `src/pages/Hardscape.tsx` — ~3 paragraphs
13. `src/pages/Warranties.tsx` — body paragraphs
14. `src/pages/OurProcess.tsx` — body paragraphs
15. `src/components/sections/TeamBlock.tsx` — paragraph text

**Not changed**: Card descriptions (`text-sm`), list items, hero subtitles, and other intentionally differentiated text elements stay as-is.

**Pattern**: Find all `text-muted-foreground ... leading-relaxed font-light"` (no `text-lg`) body paragraphs and add `text-lg`. Simple search-and-replace across files.

