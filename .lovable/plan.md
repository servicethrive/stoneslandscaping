

## Generate Custom Service Card Images

There are 7 services that still use generic Unsplash stock photos (Artificial Turf already has a custom image). The best approach is to generate them all in one batch using the AI image generation script.

### Services needing images
1. **Pavers** - beautiful paver patio/walkway in a luxury backyard
2. **Hardscape** - stone hardscape installation, retaining walls and outdoor structure
3. **Landscaping** - lush designed landscape in a Silicon Valley home yard
4. **Concrete Driveways** - stamped/colored concrete driveway at an upscale home
5. **Outdoor Kitchens** - custom outdoor kitchen with grill and counter in a backyard
6. **Retaining Walls** - decorative stone retaining wall in a hillside yard
7. **Patio & Walkways** - elegant paver patio and walkway in a manicured yard

### Steps
1. Copy the AI image generation script to `/tmp/`
2. Run 7 image generation calls, saving each to `public/images/{service}-service.jpg`
3. Update `src/lib/constants.ts` to point all SERVICES entries to their new local images

### Prompt style
Each prompt will specify: a photorealistic, high-end residential landscape photo of the specific service, sunny California setting, luxury home, no text or watermarks.

### Files Changed
- `public/images/` - 7 new generated images
- `src/lib/constants.ts` - update image paths

This will take a few minutes since each image generation call runs sequentially, but it's the cleanest approach to get consistent, service-specific imagery across all cards.

