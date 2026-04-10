

## Add All Real Photos to Gallery Page

Replace all placeholder images with the 9 existing project photos from `src/assets/projects/` plus the 10 newly uploaded photos, properly categorized.

### Image inventory and categories

**Existing in `src/assets/projects/` (from Featured Projects):**

| File | Category |
|---|---|
| `Catalina_Grana_pavers.jpg` | Pavers |
| `Wood_finish_Porcelain_walkway.jpg` | Pavers |
| `Prefabricated_placebo-2.jpg` | Pavers |
| `outdoor_kitchen_and_firepit.jpg` | Outdoor Kitchens |
| `outdoor_kitchen_with_a_pergola.jpg` | Outdoor Kitchens |
| `landscaping-san-jose-ca.jpg` | Landscaping |
| `lava-rock-landscaping-san-jose.jpg` | Landscaping |
| `lava-rock-hardscape-san-jose.jpg` | Hardscape |
| `Stamped_concrete.jpg` | Concrete |

**New uploads (copy to `src/assets/projects/`):**

| Upload | Category |
|---|---|
| `articifical_turf_in_large_yard.jpg` | Artificial Turf |
| `artifical_turf_in_front_yard.jpg` | Artificial Turf |
| `front_yard_pavers.jpg` | Pavers |
| `paver_walkways.jpg` | Pavers |
| `Hollandstone_driveway_paver.jpg` | Pavers |
| `seated_retaining_walls.jpg` | Retaining Walls |
| `sod_landscape_with_circle_accent.jpg` | Landscaping |
| `Low_maintenance_Landscape.jpg` | Landscaping |
| `concrete_work_in_san_jose.jpg` | Concrete |
| `pebble-stones-landscape-2.jpg` | Landscaping |

### Final category count
- **Pavers**: 6 photos
- **Landscaping**: 5 photos
- **Outdoor Kitchens**: 2 photos
- **Artificial Turf**: 2 photos
- **Concrete**: 2 photos
- **Hardscape**: 1 photo
- **Retaining Walls**: 1 photo

**Total: 19 real project photos**

### Changes

**1. Copy 10 uploaded images** to `src/assets/projects/`

**2. Rewrite `src/pages/Gallery.tsx`**
- Remove all `IMAGES` constant references
- Import all 19 photos from `src/assets/projects/`
- Build `galleryImages` array with proper alt text and categories
- Update hero subtitle to remove "placeholder" language
- Keep all 7 category filters (all now have at least 1 photo)

### Adding more photos later
Use the same pattern: upload photos with descriptive filenames containing a category keyword, copy to `src/assets/projects/`, and add a new entry to the `galleryImages` array with `{ src, alt, category }`.

