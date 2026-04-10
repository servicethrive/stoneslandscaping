

## Add 2 More Photos to Gallery Page

### Changes to `src/pages/Gallery.tsx`

**1. Copy uploaded image** to `src/assets/projects/sealed_wet_look_pavers.jpg`

**2. Add About hero image** — it's at `public/images/california-gold-tile-walkway.jpg` (referenced via URL, not import). Since it's in `public/`, we'll reference it directly as a string path rather than an ES module import.

**3. Add 2 new entries to `galleryImages` array:**
- `sealed_wet_look_pavers.jpg` → category **Pavers**, alt "Sealed wet look paver walkway"
- `/images/california-gold-tile-walkway.jpg` → category **Pavers**, alt "California gold tile walkway"

### Files changed
- `src/assets/projects/sealed_wet_look_pavers.jpg` — new file (copied from upload)
- `src/pages/Gallery.tsx` — add 1 new import + 2 new gallery entries

