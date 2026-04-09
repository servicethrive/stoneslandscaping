

## Update About Page Images

### Changes

**1. Copy 3 new uploaded images to `public/images/`**
- `stones_landscaping_dump_truck.jpg` → `public/images/stones-landscaping-dump-truck.jpg`
- `stones_landscaping_dump_trailer.jpg` → `public/images/stones-landscaping-dump-trailer.jpg`
- `stone_landscaping_trailer_and_skid-steer.jpg` → `public/images/stones-landscaping-trailer-skid-steer.jpg`

**2. Update TeamBlock image** (`src/components/sections/TeamBlock.tsx`)
- Replace `stones-landscaping-storage-yard.jpg` with `stones-landscaping-dump-truck.jpg` (the dump truck is a cleaner, more professional hero-level image for this prominent section)

**3. Expand Fleet & Equipment section** (`src/pages/About.tsx` lines 166-193)
- Move the existing storage yard image here (it fits better as fleet/equipment context)
- Add all 3 new uploaded images plus the existing company vehicle and truck/trailer images
- Result: 6 images in a 2x3 or 3x2 grid showing the full fleet: storage yard, dump truck (duplicate avoided since it's in TeamBlock), dump trailer, skid steer + trailer, truck & trailer, company vehicle
- Actually, since the dump truck is now in TeamBlock, the Fleet grid will have 5 images: storage yard, dump trailer, trailer + skid steer, truck & trailer, company vehicle

**4. Add an image between "How We Got Here" and "What Sets Us Apart"** (`src/pages/About.tsx`)
- Insert a full-width image break using the storage yard photo between these two text-heavy sections to break up the wall of text

### Files changed
- `src/components/sections/TeamBlock.tsx` — swap image src + alt
- `src/pages/About.tsx` — add image break section, expand Fleet grid to 5 images

### No design system changes. Uses existing patterns (aspect-ratio, rounded-sm, shadow-lg, grid layouts).

