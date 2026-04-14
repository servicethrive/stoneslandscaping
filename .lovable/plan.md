

## Standardize Service Page Layouts

### Problem
The 5 service pages were built at different times and drifted into different section orders, background alternations, and process components. This creates an inconsistent user experience.

### Standard Template
Every service page will follow this exact section order:

```text
1. Hero
2. TrustBar
3. Intro text block          (bg-background)
4. ZigZag image/text         (auto-alternating bg)
5. Card grid (types/styles)  (bg-brand-cream)
6. Checklist (applications)  (bg-background)
7. ProcessSteps              (bg-brand-cream)
8. FAQAccordion              (bg-background)
9. CTABanner                 (dark)
```

Pages with extra content (Hardscape's service links, Outdoor Kitchens' pergola section, Landscaping's warranty block) keep those sections — they just slot into the correct position in the alternation pattern so backgrounds never repeat.

### Changes per page

**Pavers** — Already closest to the template. Minor background alternation fix if needed. No structural changes.

**Landscaping** — Replace `DesignProcessBlock` with `ProcessSteps` (using the same 4-step content). Move the warranty text into the intro or after the checklist, maintaining background alternation.

**Outdoor Kitchens** — Already has ProcessSteps. Fix background alternation so the two card-grid sections (kitchen styles + pergola types) alternate cream/bg correctly instead of both being cream.

**Hardscape** — Add a `ProcessSteps` section (4 steps: consultation, design, construction, walkthrough). Fix background alternation on the "Why Invest" and service links sections.

**Retaining Walls** — Already matches the template. Confirm background alternation is correct.

### Files changed
- `src/pages/Landscaping.tsx` — swap DesignProcessBlock → ProcessSteps, reorder warranty block
- `src/pages/Hardscape.tsx` — add ProcessSteps section
- `src/pages/OutdoorKitchens.tsx` — fix background alternation on doubled cream sections
- `src/pages/Pavers.tsx` — minor bg alternation check (likely no change)
- `src/pages/RetainingWalls.tsx` — minor bg alternation check (likely no change)

### Result
All 5 service pages will feel like a cohesive set — same rhythm, same visual cadence, same component usage — while keeping their unique content.

