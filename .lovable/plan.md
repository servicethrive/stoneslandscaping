

## Two Items

### 1. Service Card Images → Service Page Hero Banners

Each service page currently uses a generic Unsplash placeholder for its hero. The service cards on the homepage use local images (`/images/{service}-service.jpg`). We'll update each service page to use the same image as its homepage card.

**Changes in 7 service page files** (one line each):

| Page file | Current `backgroundImage` | New value |
|-----------|--------------------------|-----------|
| `Pavers.tsx` | `IMAGES.pavers` | `"/images/pavers-service.jpg"` |
| `Hardscape.tsx` | `IMAGES.hardscape` | `"/images/hardscape-service.jpg"` |
| `Landscaping.tsx` | `IMAGES.landscaping` | `"/images/landscaping-service.jpg"` |
| `ConcreteDriveways.tsx` | `IMAGES.concrete` | `"/images/concrete-driveways-service.jpg"` |
| `OutdoorKitchens.tsx` | `IMAGES.outdoorKitchen` | `"/images/outdoor-kitchens-service.jpg"` |
| `RetainingWalls.tsx` | `IMAGES.retainingWall` | `"/images/retaining-walls-service.jpg"` |
| `ArtificialTurf.tsx` | `IMAGES.turf` | `"/images/artificial-turf-service.jpg"` |

No design or layout changes. Just swapping the image path in each `backgroundImage` prop.

---

### 2. Commercial Landscaping Page: Not Recommended

Based on the approved project scope, a commercial landscaping page should **not** be added for launch. Here's why:

- **Target audience** is explicitly Silicon Valley homeowners ($1.5M-$20M residential properties), not commercial clients
- **The keyword clusters** provided are entirely residential-focused. There are no commercial landscaping keywords in the Google Maps visibility data
- **License classifications** (C27 Landscaping, C-61/D06 Concrete) support commercial work, but the brand positioning, content, and proof points are all residential
- **No commercial proof** exists yet (reviews, project photos, case studies are residential)
- Adding it now would dilute the residential authority the site is building and violate the "one page = one intent" and "every page must earn its existence" rules

**Recommendation**: If Stones wants to pursue commercial work later, it belongs in a Phase 2 expansion once the residential launch pages are performing. It would need its own keyword research, proof points, and distinct content to justify a standalone page.

