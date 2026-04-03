

## Add 3 Photos to Featured Projects Grid

The current 4-column masonry grid has 6 items (first one is 2x2), leaving 3 empty slots on the bottom row. The 3 uploaded photos will fill those gaps.

### Files Changed

**Copy 3 images to `src/assets/projects/`**
- `lava-rock-hardscape-san-jose.jpg`
- `Prefabricated_placebo-2.jpg` (rename to `Prefabricated_pergola.jpg` for consistency, or keep as-is)
- `Stamped_concrete.jpg`

**File: `src/components/sections/FeaturedProjects.tsx`**
- Import the 3 new images
- Add 3 new entries to the `projects` array:

| Photo | Title | Location |
|-------|-------|----------|
| `lava-rock-hardscape-san-jose.jpg` | Lava Rock Hardscape | San Jose, CA |
| `Prefabricated_placebo-2.jpg` | Prefabricated Pergola & Pavers | San Jose, CA |
| `Stamped_concrete.jpg` | Stamped Concrete Driveway | San Jose, CA |

No layout changes needed — 9 items fills the 4-column grid cleanly (2x2 hero + 8 standard = 4 rows).

