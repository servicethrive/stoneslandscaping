

## Add Per-Page Meta Descriptions + Fix Missing San Jose Targeting

### Problem
1. **No per-page meta descriptions** — every page serves the same global description from `index.html`. Google will either use that one description for all pages or auto-generate its own.
2. **4 pages missing "San Jose"** in titles: About, Our Process, Contact, Warranties
3. Reviews page has San Jose — OK.

### Solution

**Create a `usePageMeta` hook** (`src/hooks/use-page-meta.ts`) that sets both `document.title` and a `<meta name="description">` tag dynamically. Each page calls it with title + description.

**Update all 18 pages** to use the hook with SEO-optimized descriptions targeting San Jose and relevant Tier 1/2 keywords.

### Meta descriptions (draft copy)

| Page | Title (fix if needed) | Description (~155 chars) |
|---|---|---|
| **Index** | ✅ keep | Premium hardscape contractor in San Jose. Custom paver patios, outdoor kitchens, retaining walls & backyard remodels. Free estimates. |
| **Pavers** | ✅ keep | San Jose paver patio contractor. Custom patios, walkways & driveways with 21-year warranty. Belgard & Tremron certified. Free estimates. |
| **Landscaping** | ✅ keep | Luxury landscaping contractor in San Jose. Full design-build services for Bay Area homeowners. Drought-tolerant, custom plantings & more. |
| **Outdoor Kitchens** | ✅ keep | Custom outdoor kitchens & BBQ islands in San Jose. Pergolas, shade structures & outdoor living spaces. Licensed contractor, free consultation. |
| **Hardscape** | ✅ keep | Full-service hardscape contractor in San Jose. Patios, retaining walls, fire features & outdoor living. Premium materials, expert craftsmanship. |
| **Concrete Driveways** | ✅ keep | Stamped & decorative concrete driveway contractor in San Jose. Custom finishes, expert installation. Licensed & insured. Free estimates. |
| **Retaining Walls** | ✅ keep | Retaining wall contractor in San Jose. Structural & decorative walls, hillside solutions. Expert engineering, premium materials. |
| **Artificial Turf** | ✅ keep | Artificial turf installation in San Jose. Premium synthetic lawns for residential & commercial. Low maintenance, year-round green. Free quotes. |
| **About** | FIX → "...Licensed San Jose Hardscape..." | Meet Stones Landscaping — licensed San Jose hardscape & outdoor living contractor. Experienced crews, premium materials, proven results. |
| **Our Process** | FIX → add "San Jose" | Our proven process from consultation to completion. San Jose's trusted hardscape contractor. Transparent pricing, detailed proposals. |
| **Contact** | FIX → add "San Jose, CA" | Contact Stones Landscaping for a free estimate in San Jose. Call, email, or fill out our form. Licensed hardscape & landscaping contractor. |
| **Warranties** | FIX → add "San Jose" | Industry-leading warranties from San Jose's premier hardscape contractor. 21-year paver warranty, 90-day landscape guarantee. |
| **Reviews** | ✅ keep | 5-star rated hardscape & landscaping contractor in San Jose. Read reviews from Silicon Valley homeowners. |
| **Gallery** | ✅ keep | Browse completed hardscape & landscaping projects in San Jose. Paver patios, outdoor kitchens, retaining walls & more. |
| **Service Areas** | ✅ keep | Serving San Jose, Atherton, Los Gatos, Saratoga & Silicon Valley. Premium hardscape & landscaping contractor. |
| **Atherton** | ✅ keep | Luxury estate landscaping & hardscape in Atherton. Custom outdoor living for prestigious properties. |
| **Los Gatos** | ✅ keep | Premium landscaping & hardscape in Los Gatos. Hillside solutions, luxury outdoor renovations. |
| **Saratoga** | ✅ keep | Premium landscaping & hardscape in Saratoga. Luxury outdoor living design & construction. |

### Files changed
- `src/hooks/use-page-meta.ts` — new hook (sets title + meta description)
- All 18 page files — replace `useEffect`/`document.title` with `usePageMeta(title, description)`

