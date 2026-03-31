

## Add Patio & Walkways Service Card + Artificial Turf Placeholder Image

### 1. Add "Patio & Walkways" to SERVICES array (`src/lib/constants.ts`)
Add a new entry after the existing services:
```
{
  title: "Patio & Walkways",
  path: "/patio-walkways",
  description: "Custom patio and walkway designs that enhance your outdoor living space with premium materials and craftsmanship.",
  image: "https://images.unsplash.com/photo-..."  // patio/walkway image
}
```

### 2. Generate Artificial Turf placeholder image
Use the AI image generation API to create a beautiful yard with artificial turf. Save it to `public/images/artificial-turf-service.png` and update the Artificial Turf entry in the SERVICES array to reference `/images/artificial-turf-service.png`.

### Files Changed
- `src/lib/constants.ts` - Add Patio & Walkways service entry + update Artificial Turf image path

