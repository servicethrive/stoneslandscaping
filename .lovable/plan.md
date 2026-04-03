

## Remove Lazy Loading from Homepage Images

### What's changing
Remove `loading="lazy"` from image components used on the homepage so all images load immediately. This fixes full-page screenshot captures and also improves perceived performance for above-the-fold and near-fold content.

### Files changed (3)

**`src/components/sections/ServiceCard.tsx`**
- Remove `loading="lazy"` from the `<img>` tag

**`src/components/sections/FeaturedProjects.tsx`**
- Remove `loading="lazy"` from all project `<img>` tags

**`src/components/sections/ServiceAreaGrid.tsx`**
- Remove `loading="lazy"` if present on any images

Pages like Gallery, Blog, and service detail pages can keep `loading="lazy"` since those are content-heavy pages where lazy loading actually helps.

