

## Standardize Card Grid to 2-Column Layout

### Problem
Three service pages have inconsistent card grid layouts:
- **Landscaping** "What We Build" — 3 columns (3 items)
- **Concrete Driveways** "Concrete Driveway Options" — 3 columns (3 items)
- **Artificial Turf** — missing the card grid section entirely

The reference pages (Pavers, Outdoor Kitchens, Hardscape, Retaining Walls) all use a **2-column** grid (`md:grid-cols-2`) inside a `max-w-5xl` container with `bg-brand-cream` background.

### Standard Pattern
```text
section.py-20.lg:py-28.bg-brand-cream
  container.max-w-5xl
    centered heading + accent bar
    grid.grid-cols-1.md:grid-cols-2.gap-6
      cards (4–6 items)
```

### Changes per page

**1. `src/pages/Landscaping.tsx`** — "What We Build"
- Change `md:grid-cols-3` → `md:grid-cols-2`
- Expand `landscapeTypes` from 3 → 4 items by adding one more category (e.g. "Estate-Scale Property Landscapes" — large-lot full-property design for Atherton/Hillsborough estates)

**2. `src/pages/ConcreteDriveways.tsx`** — "Concrete Driveway Options"
- Change `md:grid-cols-3` → `md:grid-cols-2`
- Expand `concreteTypes` from 3 → 4 items by adding one more finish (e.g. "Exposed Aggregate" — pebble-finish concrete for a textured, slip-resistant surface popular for driveways and pool decks)

**3. `src/pages/ArtificialTurf.tsx`** — add a new card grid section
- Insert a new `bg-brand-cream` section titled "Artificial Turf Options" between the ZigZag and the existing "Where Artificial Turf Works Best" checklist
- Use `md:grid-cols-2` with 4 cards:
  - **Landscape Turf** — natural-looking residential lawns, soft pile, 1.5"–2"
  - **Pet Turf** — antimicrobial infill, faster drainage, durable backing
  - **Putting Green Turf** — short-pile, true ball roll, custom contours
  - **Playground Turf** — IPEMA-certified safety-rated turf with shock pad

### Background rhythm impact
Adding the new section on Artificial Turf shifts the next section. Update the following "Where Artificial Turf Works Best" section from `bg-brand-cream` → `bg-background`, and the "Benefits of Professional Turf Installation" stays as `bg-brand-cream`-or-`bg-background` to maintain the cream/background alternation through the rest of the page.

### Files changed
- `src/pages/Landscaping.tsx`
- `src/pages/ConcreteDriveways.tsx`
- `src/pages/ArtificialTurf.tsx`

### Result
All 7 service pages will share the identical "Options/Materials/Types" section: 2-column grid, cream background, max-w-5xl, centered heading — visually unified across the entire service set.

