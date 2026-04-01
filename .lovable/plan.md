

## Generate a Custom Hero Banner Image

Create a new AI-generated wide hero image specifically designed for the homepage banner, then update `src/lib/constants.ts` to use it.

### Steps

1. **Generate image** using AI image generation with a prompt like: "Photorealistic wide panoramic photo of a luxury Silicon Valley backyard with a custom paver patio, outdoor kitchen, lush landscaping, and pergola, golden hour lighting, high-end residential home in background, no text or watermarks"
   - Use `google/gemini-3-pro-image-preview` for higher quality
   - Save to `public/images/hero-banner.jpg`

2. **Update constants** in `src/lib/constants.ts`: change `IMAGES.hero` from the Unsplash URL to `/images/hero-banner.jpg`

### Files Changed
- `public/images/hero-banner.jpg` (new)
- `src/lib/constants.ts` - update hero image path

