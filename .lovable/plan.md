

## Multi-Part Update: Service Areas, Navbar, Header, Typography, Content Layout, Warranty & Copy Fixes

This is a large set of changes touching ~20+ files. Here's the breakdown:

---

### 1. Solid White Header with Original Logo

**`src/components/layout/Navbar.tsx`** — Remove the transparent-to-dark gradient behavior. Make the navbar always a solid white background with the original color logo (no invert filter). Remove scroll-dependent color toggling for text — always use dark text on white bg.

- Remove `scrolled` state logic for background changes
- Always: `bg-white border-b border-border/40 shadow-sm`
- Logo: remove `brightness-0 invert` conditional — always show original color
- Nav links: always dark text (`text-foreground`), no white text variant
- Mobile hamburger icon: always dark

---

### 2. Typography — Match Logo Font (Korinna-like)

ITC Korinna is a commercial font not available on Google Fonts. The closest free alternative is **Rokkitt** (slab serif with similar warm, rounded strokes) or we keep **Playfair Display** which is already loaded and elegant.

Since Korinna has a warm, slightly rounded slab-serif character, **Rokkitt** from Google Fonts is the best free match. Update:

- **`index.html`** — Replace Playfair Display with `Rokkitt` in Google Fonts link
- **`tailwind.config.ts`** — Update `fontFamily.display` to `Rokkitt`
- All headings site-wide automatically pick this up via the `font-display` class

---

### 3. Services Mega Menu (Desktop) + Clean Mobile

**`src/components/layout/Navbar.tsx`** — Replace the narrow dropdown with a wider mega-menu panel on desktop:

- Desktop: On hover, show a 2-column grid (4 left, 3 right) with service name + short one-liner description. Clean white bg, subtle border, wider panel (~500px). Not overwhelming — just organized.
- Mobile: Keep the existing collapsible list but group under a "Services" accordion/section header. Tight and scannable.

---

### 4. Service Area Hub — Multi-County Organization

**`src/lib/constants.ts`** — Restructure `SERVICE_AREAS` into a county-based format:

```text
Santa Clara County: San Jose (→ /), Atherton, Los Gatos, Saratoga, Campbell, Santa Clara, Palo Alto, Cupertino, Mountain View, Sunnyvale, Milpitas
San Mateo County: Hillsborough, Menlo Park, Redwood City, San Mateo, Burlingame, Woodside
Alameda County: Fremont, Newark, Union City, Pleasanton, Livermore
Santa Cruz County: Santa Cruz, Scotts Valley, Capitola
```

Cities without dedicated pages link to `/service-areas`.

**`src/components/sections/ServiceAreaGrid.tsx`** — Render cities grouped by county with county headers.

**`src/pages/ServiceAreas.tsx`** — Update content to reference multi-county coverage (Santa Clara, San Mateo, Alameda, Santa Cruz). Remove "$1.5M to $20M" language.

**Navbar** — "Service Areas" link stays as a single nav link pointing to `/service-areas` hub (no dropdown listing cities).

---

### 5. Fix "$1.5M / $20M" Copy — Make Subtle & Approachable

Replace all instances of explicit dollar amounts with approachable language across 3 files:

- **Pavers.tsx** hero subtitle: → "...for Bay Area homes of every size and style — built with precision."
- **ServiceAreas.tsx** hero subtitle: → "...from first-time renovations to grand estate transformations."
- **ServiceAreas.tsx** body copy about "$10M–$20M": → "...to executives creating resort-style outdoor spaces on expansive Bay Area estates."
- **Campbell.tsx** "$20M Atherton estate": → "...that we deliver on the largest estate projects in the Bay Area."

---

### 6. Change 21-Year Warranty to 20-Year

- **`src/lib/constants.ts`** — `paverWarrantyYears: 21` → `paverWarrantyYears: 20`
- **`src/lib/constants.ts`** — Pavers service description: "21-year" → "20-year"
- **`src/pages/Warranties.tsx`** — title tag: "21-Year" → "20-Year"

All other references use `{BUSINESS.paverWarrantyYears}` so they auto-update.

---

### 7. Zig-Zag Content Layout + Placeholder Images

Create a reusable `ZigZagSection` component that alternates text-left/image-right and text-right/image-left.

**New component: `src/components/sections/ZigZagSection.tsx`**
- Props: `items: Array<{ title, text, image }>` — automatically alternates layout
- Desktop: 2-column grid (text | image), flips on even rows
- Mobile: stacks vertically (image on top, text below)

**Update all service and area pages** to use `ZigZagSection` for their main content blocks instead of text-only `<section>` walls. Break the existing long paragraphs into 2-3 zig-zag blocks with placeholder images from Unsplash (hardscape, outdoor kitchen, patio, retaining wall themed).

Pages to update (14 pages):
- `Pavers.tsx`, `RetainingWalls.tsx`, `OutdoorKitchens.tsx`, `PergolasShade.tsx`, `ConcreteDriveways.tsx`, `PatioWalkways.tsx`, `Hardscape.tsx`, `Landscaping.tsx`, `ArtificialTurf.tsx`, `PaversVsConcrete.tsx`, `ArtificialTurfVsSod.tsx`
- `Atherton.tsx`, `LosGatos.tsx`, `Saratoga.tsx`, `Campbell.tsx`, `SantaClara.tsx`
- `About.tsx`, `ServiceAreas.tsx`

Each page gets 2-3 placeholder images placed naturally throughout the content.

---

### 8. Save Memory Updates

- Update `mem://index.md` with: solid white header, Rokkitt font, 20-year warranty, multi-county service areas, zig-zag layout pattern
- Update `mem://constraint/brand` to note: never show explicit property dollar values in customer-facing copy
- Update `mem://design/direction` with Rokkitt font and solid white navbar

---

### What Comes After This
1. **Create new service pages** — Paver Driveways, Concrete Patios, Backyard Remodels
2. **Gallery enhancement** — Category filtering, lightbox, before/after
3. **Contact page optimization** — Multi-step form with service selection
4. **Real images** — Replace Unsplash placeholders with actual project photos
5. **Schema markup / structured data** for local SEO

