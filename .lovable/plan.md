

## Fix Hero Banners + Overhaul About Page

Three workstreams: (A) fix broken hero sections on 3 pages, (B) replace About page stock photos with uploaded real photos, (C) rewrite About page for EEAT with awards.

---

### A. Fix Hero Banners on Reviews, Warranties, Our Process

**Problem**: These 3 pages use a plain `<section className="bg-brand-dark py-20">` for their hero instead of the `HeroSection` component. The fixed navbar overlaps the content because there's no `pt` accounting for the navbar height (~80px+). The H1 appears stacked under/behind the nav.

**Fix**: Add `pt-32 pb-20` (or `pt-40 pb-16`) to all three hero sections so the content clears the fixed navbar. This is the minimal, non-breaking fix. No component swap needed.

Files changed:
- `src/pages/Reviews.tsx` line 24: change `py-20` to `pt-40 pb-20`
- `src/pages/Warranties.tsx` line 14: same
- `src/pages/OurProcess.tsx` line 14: same

---

### B. Replace About Page Stock Photos with Real Photos

**Current**: The About page hero uses a generic Unsplash stock photo (`IMAGES.heroAbout`). The TeamBlock uses another Unsplash stock photo of random office workers.

**Plan**:
1. Copy the 4 uploaded images into `public/images/`:
   - `stones_landscaping_storage_yard.jpg` → TeamBlock image (shows fleet/yard, reinforces operational scale)
   - `California_Gold_Tile_Walkway.jpg` → About hero banner (premium residential project, perfect for the About page)
   - `stones_landscaping_inc_truck_and_trailer.jpg` → new "Our Fleet & Equipment" section image
   - `stones_landscaping_inc_company_vehicle.jpg` → new awards/credibility section image

2. Update `src/lib/constants.ts`: change `heroAbout` from the Unsplash URL to `"/images/california-gold-tile-walkway.jpg"`

3. Update `src/components/sections/TeamBlock.tsx`: replace the Unsplash URL with `"/images/stones-landscaping-storage-yard.jpg"`

---

### C. Rewrite About Page for EEAT + Awards

**Current problems**:
- No mention of 2025 or 2026 Best Landscaper awards (Business Rate, Willow Glen, San Jose)
- Review counts buried in a plain checklist that doesn't convey trust
- Page structure is generic "about us" copy, not EEAT-optimized
- Licensing section is a flat bullet list

**New About page structure** (top to bottom):

1. **Hero** (existing `HeroSection` component, new background image)

2. **Awards Banner** (NEW section, placed high on page)
   - Prominent display of 2025 and 2026 Best Landscaper awards from Business Rate
   - Location context: Willow Glen, San Jose
   - Two award cards side by side with year, title, and awarding body
   - Background: `bg-brand-cream` with accent styling

3. **TeamBlock** (existing component, updated photo + copy)
   - Replace stock photo with storage yard fleet photo
   - Add award mentions to the bullet list

4. **Social Proof / Reviews Block** (NEW section, replaces the buried checklist)
   - Two large stat cards: "56 Five-Star Google Reviews" and "123 Five-Star Yelp Reviews"
   - Star icons, links to profiles
   - Brief trust statement beneath

5. **How We Got Here** (existing section, keep as-is, content is solid)

6. **What Sets Us Apart** (existing section, keep as-is)

7. **Licensing & Credentials** (restructured)
   - Replace flat checklist with a more visual layout
   - License number, classifications, bond/insurance status in structured cards
   - Remove review counts from here (now in dedicated section above)

8. **Fleet & Equipment** (NEW brief section)
   - Use truck/trailer photo and company vehicle photo
   - Brief copy about professional equipment, CAT skid steer, branded vehicles
   - Reinforces "legitimate established contractor" EEAT signal

9. **WarrantyBlock** (existing)
10. **CTABanner** (existing)

**Files changed**:
- `src/lib/constants.ts` - update `heroAbout` image path
- `src/components/sections/TeamBlock.tsx` - new photo, add award mention to bullets
- `src/pages/About.tsx` - add Awards section, Social Proof section, Fleet section; restructure Licensing section; remove review counts from checklist

**No design/color/layout system changes.** Uses existing Tailwind classes, existing component patterns (cards, accent lines, grid layouts) already present on the site.

---

### Technical details

- 4 images copied to `public/images/` with kebab-case filenames
- All new sections use existing patterns: `py-20 lg:py-28`, `container mx-auto px-4 max-w-4xl/6xl`, `bg-background`/`bg-brand-cream` alternation, `w-12 h-0.5 bg-primary mb-6` accent lines
- No new dependencies or components needed

