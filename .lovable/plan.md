

## Pre-Launch Page Cleanup for Stones Landscaping

### Current state: 27 content pages + Blog index
### Target: ~20 clean launch pages, no overlap, no thin content

---

### PAGE AUDIT RESULTS

**KEEP AS-IS (15 pages)** — clear intent, strategically valid, no cannibalization

| Page | Route | Rationale |
|------|-------|-----------|
| Homepage | `/` | Broad local landscaper intent owner |
| Landscaping | `/landscaping` | Core service page, distinct from homepage |
| Pavers | `/pavers` | Core money page, paver installation intent |
| Hardscape | `/hardscape` | Service hub, links to sub-services |
| Artificial Turf | `/artificial-turf` | Distinct service, low-maintenance lawn intent |
| Retaining Walls | `/retaining-walls` | Distinct structural service |
| Outdoor Kitchens | `/outdoor-kitchens` | Distinct design-build intent |
| Concrete Driveways | `/concrete-driveways` | Distinct service, licensed C-61/D06 |
| About | `/about` | Authority/EEAT page |
| Gallery | `/gallery` | Visual proof page |
| Reviews | `/reviews` | Trust/reputation page |
| Warranties | `/warranties` | Trust differentiator (21-year warranty) |
| Our Process | `/our-process` | Already merged with Design Process |
| Contact | `/contact` | Conversion page |
| Service Areas | `/service-areas` | Hub for all geo pages |

**KEEP AS-IS (3 city pages)** — high-value geo targets

| Page | Route |
|------|-------|
| Atherton | `/service-areas/atherton` |
| Los Gatos | `/service-areas/los-gatos` |
| Saratoga | `/service-areas/saratoga` |

**Total KEEP: 18 pages**

---

**MERGE (2 pages → absorbed into parent pages)**

| Page | Action | Destination |
|------|--------|-------------|
| Patio & Walkways (`/patio-walkway-installations`) | Merge into Hardscape | Content overlaps heavily with Pavers + Hardscape. Paver patios = Pavers page. Walkways = Hardscape hub. No distinct intent. |
| Pergolas & Shade (`/pergolas-shade-structures`) | Merge into Outdoor Kitchens | Both serve "outdoor living structures" intent. Add a pergolas/shade section to the Outdoor Kitchens page and retitle it "Outdoor Kitchens & Living Structures" or similar. |

**DELAY (7 pages → remove from nav, routes, and footer)**

| Page | Reason |
|------|--------|
| FAQs (`/faqs`) | Thin standalone page. The FAQ content already appears as `FAQAccordion` sections on individual service pages. No unique intent. |
| Financing (`/financing`) | Very thin content. "Ask during consultation" isn't a page. Mention financing on Contact page instead. |
| Blog index (`/blog`) | Only 2 articles, both comparison posts with cannibalization risk. Not launch-ready. |
| Pavers vs Concrete (`/blog/pavers-vs-concrete`) | Cannibalization risk with Pavers + Concrete pages. Delay to phase 2. |
| Artificial Turf vs Sod (`/blog/artificial-turf-vs-sod`) | Cannibalization risk with Artificial Turf page. Delay to phase 2. |
| Campbell (`/service-areas/campbell`) | Secondary city, no distinct local proof. Generic copy with city-swap feel. |
| Santa Clara (`/service-areas/santa-clara`) | Same as Campbell — generic, no local differentiation. |

---

### IMPLEMENTATION — FILES CHANGED

**1. Remove 7 delayed pages from routing**
- `src/App.tsx` — Remove imports and `<Route>` entries for: FAQs, Financing, Blog, PaversVsConcrete, ArtificialTurfVsSod, Campbell, SantaClara

**2. Update navigation and footer**
- `src/components/layout/Footer.tsx` — Remove links to Financing, FAQs, Patio & Walkways, Pergolas & Shade, Campbell, Santa Clara, and the blog article links in the footer bottom bar
- `src/components/layout/Navbar.tsx` — Remove Blog from `navLinks` array

**3. Update constants**
- `src/lib/constants.ts` — Remove "Patio & Walkways" from the `SERVICES` array (it's the last entry). Update Campbell and Santa Clara entries in `SERVICE_AREA_COUNTIES` to `hasDedicatedPage: false`

**4. Merge Patio & Walkways content into Hardscape**
- `src/pages/Hardscape.tsx` — Add a "Patios & Walkways" section with the key content from PatioWalkways (paver patios, concrete patios, natural stone, mixed-material). Remove the link to `/patio-walkway-installations` from the hardscape services list and replace with inline content. Keep existing hardscape hub structure.

**5. Merge Pergolas & Shade content into Outdoor Kitchens**
- `src/pages/OutdoorKitchens.tsx` — Add a "Pergolas & Shade Structures" section covering the 4 pergola types. Update page title to reflect broader outdoor living scope (e.g., "Outdoor Kitchens & Living Structures").

**6. Update Hardscape hub links**
- `src/pages/Hardscape.tsx` — Remove "Patio & Walkway Installations" and "Pergolas & Shade Structures" from the linked services list since they no longer have standalone pages. Keep Pavers, Retaining Walls, Outdoor Kitchens as linked sub-services.

**7. Add financing mention to Contact page**
- `src/pages/Contact.tsx` — Add a brief line about financing availability near the CTA or form area

**8. Delete removed page files**
- Delete: `src/pages/PatioWalkways.tsx`, `src/pages/PergolasShade.tsx`, `src/pages/FAQs.tsx`, `src/pages/Financing.tsx`, `src/pages/Blog.tsx`, `src/pages/PaversVsConcrete.tsx`, `src/pages/ArtificialTurfVsSod.tsx`, `src/pages/Campbell.tsx`, `src/pages/SantaClara.tsx`

---

### FINAL LAUNCH SITEMAP (20 pages)

```text
/                          Homepage
/landscaping               Landscaping
/pavers                    Pavers
/hardscape                 Hardscape (now includes patio/walkway content)
/concrete-driveways        Concrete Driveways
/outdoor-kitchens          Outdoor Kitchens (now includes pergolas/shade)
/retaining-walls           Retaining Walls
/artificial-turf           Artificial Turf
/about                     About
/gallery                   Gallery
/reviews                   Reviews
/warranties                Warranties
/our-process               Our Process (already merged with Design Process)
/contact                   Contact
/service-areas             Service Areas Hub
/service-areas/atherton    Atherton
/service-areas/los-gatos   Los Gatos
/service-areas/saratoga    Saratoga
```

**No design, color, or layout changes.** Content-only cleanup — removing routes, merging text sections, updating links.

