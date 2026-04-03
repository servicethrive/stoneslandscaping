

## Replace Featured Projects with Real Client Photos

### What's changing
Replace all 6 placeholder images in the Featured Projects section with the uploaded real Stones Landscaping photos. Update project titles to match each photo's content based on filename.

### Files Changed (1 file + 7 asset copies)

**Copy 7 of 8 uploaded images to `src/assets/projects/`** (one spare — 6 grid slots plus one extra we can skip or pick the best 6+1 for the large hero slot)

Photo-to-project mapping (based on filenames):

| Slot | Photo | Title | Location |
|------|-------|-------|----------|
| 1 (large, 2x2) | `Catalina_Grana_pavers.jpg` | Catalina Grana Pavers & Gazebo | San Jose, CA |
| 2 | `outdoor_kitchen_and_firepit.jpg` | Outdoor Kitchen & Fire Pit | San Jose, CA |
| 3 | `outdoor_kitchen_with_a_pergola.jpg` | Outdoor Kitchen & Pergola | San Jose, CA |
| 4 | `landscaping-san-jose-ca.jpg` | Modern Landscaping Design | San Jose, CA |
| 5 | `lava-rock-landscaping-san-jose.jpg` | Lava Rock Landscaping | San Jose, CA |
| 6 | `Wood_finish_Porcelain_walkway.jpg` | Wood Finish Porcelain Walkway | San Jose, CA |

The 7th photo (`pebble-stones-landscape.jpg`) and 8th (`Prefabricated_placebo.jpg`) can be added if we expand the grid, or we pick the best 6. I'll use 7 by adding one more grid item (keeping 6 small + 1 large = 7 total matches the 4-column masonry well), or keep at 6. Keeping 6 for the current grid layout.

**File: `src/components/sections/FeaturedProjects.tsx`**
- Import all 6 images from `@/assets/projects/`
- Replace `IMAGES.gallery*` references with the real imported images
- Update titles and locations to match each photo

