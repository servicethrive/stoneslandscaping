

## Replace Bay Area Map with Accurate Coastal SVG

### What's changing
Replace the current crude polygon SVG map with a geographically accurate SVG showing the California coastline from Santa Cruz County up through San Mateo County, including the San Francisco Bay shoreline. The four service counties (Santa Clara, San Mateo, Alameda, Santa Cruz) will be clearly delineated with proper shapes, the Bay water rendered in a subtle blue, and the Pacific coastline visible on the west side.

### Approach
Use real GeoJSON-derived SVG path data for the four counties. The current paths are random polygons that don't resemble actual county shapes — that's why it looks unclear. I'll replace the `BayAreaMap` component with accurate outlines that show:

- **Pacific coastline** on the west (Santa Cruz → San Mateo) — recognizable California coast
- **San Francisco Bay** water body between counties
- **County fills** with varying opacity (Santa Clara highlighted as primary)
- **San Jose HQ pin** in the correct geographic position
- **County labels** placed at centroids
- Subtle water fill for the Bay and ocean for geographic context

### File Changed (1 file)

**`src/components/sections/ServiceAreaGrid.tsx`**
- Replace the entire `BayAreaMap` component with geographically accurate SVG paths
- Add Pacific Ocean and Bay water shapes for context
- Keep the same color scheme (primary brown tones) but with proper geography
- Add a subtle glow/pulse animation on the San Jose HQ pin

