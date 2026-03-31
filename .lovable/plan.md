

## Replace "Why Silicon Valley Homeowners Choose Us" Image

Replace the current Unsplash image in the "Why Choose Us" section on the homepage with the uploaded 3D landscape design render.

### Steps
1. Copy `user-uploads://3d_landscape_design.jpg` to `public/images/3d-landscape-design.jpg`
2. Update `src/pages/Index.tsx` - change the `img src` in the "Why Choose Us" section from `{IMAGES.pavers}` to `/images/3d-landscape-design.jpg` and update the alt text to reference the 3D design rendering

### Files Changed
- `public/images/3d-landscape-design.jpg` (new)
- `src/pages/Index.tsx`

