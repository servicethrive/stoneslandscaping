

## Batch 4 — Area Pages Content Expansion

You're right — with one GBP in San Jose, the **homepage IS the San Jose page**. No separate `/service-areas/san-jose` needed. That route and page will be removed.

### Changes

**Remove San Jose city page:**
- Delete `src/pages/SanJose.tsx`
- Remove the route `/service-areas/san-jose` from `App.tsx`
- Remove the SanJose import from `App.tsx`
- Update `ServiceAreaGrid` component to remove San Jose from the city grid (or link it to `/` instead)

**Expand 5 satellite city pages to ~1000 words each** with E-E-A-T, luxury positioning, and local SEO:
1. `Atherton.tsx` — $5M–$20M estates, executive clientele, large estate hardscape
2. `LosGatos.tsx` — hillside properties, luxury downtown adjacent homes
3. `Saratoga.tsx` — premium foothill estates, wine country adjacent feel
4. `Campbell.tsx` — established neighborhoods, upscale suburban renovations
5. `SantaClara.tsx` — tech corridor, modern outdoor living

Each page gets: Hero, TrustBar, 3-4 intro paragraphs with neighborhood-specific references, services list, FAQ accordion (4-6 Qs), CTA banner. Keywords tied to `[service] contractor [city]` patterns.

**Also expand `ServiceAreas.tsx`** to ~1000 words with regional overview content.

### Technical Detail
- Check `ServiceAreaGrid.tsx` for the city list to update San Jose link
- All pages follow the same component structure as Pavers template

