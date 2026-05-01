## Build a Robust Main Services Page (`/services`)

### The Problem
- No `/services` route exists at all.
- The "See All Services" card on the home page wrongly links to `/service-areas` (a geographic page, not a services page).
- The navbar "Services" dropdown has no parent landing page — users can only jump straight into a sub-service.

### The Fix
Create a new `src/pages/Services.tsx` that acts as the central hub for all 7 services — with content and structure that does NOT duplicate the Home page or any individual service page.

### Page Structure (unique sections — none copied from Home or service pages)

```text
1. Hero (dark, full-width)
   - H1: "Outdoor Living, Designed & Built in One Place"
   - Sub: positioning copy on what makes a true full-service design-build firm
   - Primary CTA: "Request a Free Consultation"
   - Secondary CTA: "View Our Gallery"

2. Intro / Philosophy band (cream)
   - Short narrative: "Why we offer every service under one roof"
   - 3 short value props (single-team accountability, integrated design, one warranty owner)
   - NOT the same copy as the homepage "Why Choose Us" section

3. The Full Service Catalog (background)
   - Category-grouped layout (NOT the same 3-card grid as the homepage)
   - Group A: Hardscape & Stonework — Pavers, Hardscape, Retaining Walls, Concrete Driveways
   - Group B: Outdoor Living — Outdoor Kitchens
   - Group C: Landscape & Greenery — Landscaping, Artificial Turf
   - Each item: icon + title + 1-line description + "Learn More →"
   - Visual treatment: list-style with subtle dividers (not square image cards), so it's clearly distinct from the Home grid

4. How Services Combine (cream) — UNIQUE to this page
   - "Most projects use 2–4 of our services together"
   - 3 example bundle cards:
     • "The Backyard Refresh" (Pavers + Landscaping + Artificial Turf)
     • "The Entertainer's Yard" (Hardscape + Outdoor Kitchen + Landscaping)
     • "The Curb Appeal Upgrade" (Concrete Driveway + Pavers + Landscaping)
   - Each shows what's included and starting price range concept (no fake numbers — "Project scopes typically start around X")

5. What's Included With Every Service (background) — UNIQUE
   - Comparison-style row list (not the trust bar)
   - 6 items: licensed crews, in-house design, permit handling, transparent quotes, project manager, warranty-backed
   - Distinct from the homepage trust bar (different copy + different layout)

6. Service Area + Pricing Transparency band (cream)
   - 2-column: left = "Where we work" (link to /service-areas), right = "How we price" (link to /our-process)
   - This deliberately routes users to the OTHER hubs so /services becomes the true crossroads

7. FAQ (background) — services-specific (not on any other page)
   - "Can I hire you for just one service?"
   - "Do you subcontract any work?"
   - "What's the typical timeline for a multi-service project?"
   - "Do you handle HOA / city permits?"
   - "Can I phase the project over multiple years?"

8. Final CTA banner (existing CTABanner component, fresh copy)
   - "Not sure which services you need? We'll help you scope it."
```

### Routing & Navigation Wiring
- **Add route** in `src/App.tsx`: `<Route path="/services" element={<Services />} />`
- **Fix Home page card** in `src/pages/Index.tsx` line 60: change `to="/service-areas"` → `to="/services"`
- **Add navbar parent link** in `src/components/layout/Navbar.tsx`: add an "All Services →" link at the top of the desktop dropdown panel and as the first item in the mobile services section, both pointing to `/services`

### SEO
- Title: `Services | Hardscape, Landscape & Outdoor Living | San Jose` (60 chars)
- Description: `Explore every service offered by Stones Landscaping: paver patios, hardscape, outdoor kitchens, retaining walls, landscape design & turf in San Jose.` (148 chars)
- Add Service-list / ItemList structured data via existing `StructuredData` component
- Add breadcrumb schema

### Files
- **New**: `src/pages/Services.tsx`
- **Edit**: `src/App.tsx` (route)
- **Edit**: `src/pages/Index.tsx` (fix the broken "See All Services" link)
- **Edit**: `src/components/layout/Navbar.tsx` (add parent "All Services" link in dropdown + mobile)

### Result
A genuine services hub with unique sections (philosophy, service-bundle examples, services-only FAQ, cross-hub pricing/area band) — not a rehash of the homepage grid or individual service pages. The "See All Services" CTA finally lands where it should, and the navbar dropdown gets a proper landing page.
