

## Replace All Placeholder Images Across Service, Service Area & About Pages

### Scope
Three tasks:
1. **About page**: Move the "stones landscaping storage yard" image into the "How We Got Here" section as a zig-zag layout (left text / right image), and remove the standalone image break section below it.
2. **8 Service pages**: Replace all `IMAGES.zigzag*` placeholder Unsplash images in ZigZag sections with real gallery photos, matched by category.
3. **Service Area hub + 3 city pages**: Replace all `IMAGES.zigzag*` placeholder images with real gallery photos, using unique images per city page (no duplicates across cities).

### Available real images (21 total)

| # | Import var | Category | File |
|---|---|---|---|
| 1 | catalinaPavers | Pavers | Catalina_Grana_pavers.jpg |
| 2 | woodFinishWalkway | Pavers | Wood_finish_Porcelain_walkway.jpg |
| 3 | prefabPergola | Pavers | Prefabricated_placebo-2.jpg |
| 4 | frontYardPavers | Pavers | front_yard_pavers.jpg |
| 5 | paverWalkways | Pavers | paver_walkways.jpg |
| 6 | hollandstoneDriveway | Pavers | Hollandstone_driveway_paver.jpg |
| 7 | sealedWetLook | Pavers | sealed_wet_look_pavers.jpg |
| 8 | landscapingSanJose | Landscaping | landscaping-san-jose-ca.jpg |
| 9 | lavaRockLandscaping | Landscaping | lava-rock-landscaping-san-jose.jpg |
| 10 | sodLandscape | Landscaping | sod_landscape_with_circle_accent.jpg |
| 11 | lowMaintenanceLandscape | Landscaping | Low_maintenance_Landscape.jpg |
| 12 | pebbleStonesLandscape | Landscaping | pebble-stones-landscape-2.jpg |
| 13 | outdoorKitchenFirepit | Outdoor Kitchens | outdoor_kitchen_and_firepit.jpg |
| 14 | outdoorKitchenPergola | Outdoor Kitchens | outdoor_kitchen_with_a_pergola.jpg |
| 15 | turfLargeYard | Artificial Turf | articifical_turf_in_large_yard.jpg |
| 16 | turfFrontYard | Artificial Turf | artifical_turf_in_front_yard.jpg |
| 17 | stampedConcrete | Concrete | Stamped_concrete.jpg |
| 18 | concreteWork | Concrete | concrete_work_in_san_jose.jpg |
| 19 | lavaRockHardscape | Hardscape | lava-rock-hardscape-san-jose.jpg |
| 20 | seatedRetainingWalls | Retaining Walls | seated_retaining_walls.jpg |
| 21 | (public path) | Pavers | /images/california-gold-tile-walkway.jpg |

### Image Assignment Plan

**About page** — "How We Got Here" zig-zag:
- Convert the text-only section + standalone image break into a zig-zag with text on left, storage yard image on right. Remove the separate `<section>` image break (lines 112-124).

**Pavers.tsx** (3 zigzag images):
- zigzag1 → catalinaPavers
- zigzag2 → sealedWetLook
- zigzag3 → frontYardPavers

**Landscaping.tsx** (2 zigzag images):
- zigzag8 → sodLandscape
- zigzag6 → lowMaintenanceLandscape

**OutdoorKitchens.tsx** (2 zigzag images):
- zigzag4 → outdoorKitchenFirepit
- zigzag1 → outdoorKitchenPergola

**ArtificialTurf.tsx** (2 zigzag images):
- zigzag6 → turfLargeYard
- zigzag8 → turfFrontYard

**ConcreteDriveways.tsx** (2 zigzag images):
- zigzag7 → stampedConcrete
- zigzag2 → concreteWork

**Hardscape.tsx** (3 zigzag images):
- zigzag2 → lavaRockHardscape
- zigzag3 → paverWalkways
- zigzag1 → hollandstoneDriveway

**RetainingWalls.tsx** (2 zigzag images):
- zigzag5 → seatedRetainingWalls
- zigzag3 → woodFinishWalkway

**ServiceAreas.tsx** (2 zigzag images):
- zigzag1 → landscapingSanJose
- zigzag2 → pebbleStonesLandscape

**Atherton.tsx** (3 zigzag images) — unique set:
- zigzag1 → prefabPergola
- zigzag4 → outdoorKitchenPergola
- zigzag5 → `/images/california-gold-tile-walkway.jpg`

**LosGatos.tsx** (2 zigzag images) — unique set:
- zigzag3 → lavaRockLandscaping
- zigzag5 → catalinaPavers

**Saratoga.tsx** (2 zigzag images) — unique set:
- zigzag2 → woodFinishWalkway
- zigzag4 → outdoorKitchenFirepit

### Technical approach

Each page file will:
1. Import the needed images from `@/assets/projects/...`
2. Replace `IMAGES.zigzag*` references with the imported variables (or public path strings)
3. No changes to hero banners or full-width CTA sections

For the **About page**, the "How We Got Here" section (lines 92-110) will be restructured into a 2-column grid: text paragraphs on the left, the storage yard image on the right. The standalone image break section (lines 112-124) will be removed.

### Files changed (12 total)
- `src/pages/About.tsx`
- `src/pages/Pavers.tsx`
- `src/pages/Landscaping.tsx`
- `src/pages/OutdoorKitchens.tsx`
- `src/pages/ArtificialTurf.tsx`
- `src/pages/ConcreteDriveways.tsx`
- `src/pages/Hardscape.tsx`
- `src/pages/RetainingWalls.tsx`
- `src/pages/ServiceAreas.tsx`
- `src/pages/Atherton.tsx`
- `src/pages/LosGatos.tsx`
- `src/pages/Saratoga.tsx`

