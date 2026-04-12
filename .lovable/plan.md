

## Maximize Structured Data (JSON-LD) for SEO & AI Search

### Current State
Zero structured data exists on the site — no JSON-LD, no schema.org markup at all.

### Plan
Create a reusable `StructuredData` React component and inject rich JSON-LD schemas across key pages. All data pulls from the existing `BUSINESS` and `SERVICES` constants.

### Schemas to Add

| Schema Type | Page | Purpose |
|---|---|---|
| **LocalBusiness** (HomeAndConstructionBusiness) | Homepage (`/`) | Core business entity — name, address, phone, hours, geo coords, logo, license, priceRange, payment methods, founding date, service areas |
| **WebSite** + SearchAction | Homepage | Tells Google this is the canonical site; enables sitelinks searchbox |
| **Organization** | Homepage | Brand identity — logo, social profiles, contact points |
| **Service** (×7) | Each service page | One per service — name, description, provider reference, area served, image |
| **BreadcrumbList** | All inner pages | Navigation breadcrumbs for rich snippets |
| **FAQPage** | Any page with FAQ accordion | FAQ rich results in search |
| **Review** / **AggregateRating** | Reviews page | Star ratings in search results (5.0, 56 Google + 123 Yelp reviews) |
| **GeoCircle** / **ServiceArea** | Service area pages | Geographic coverage for local pack |
| **ContactPage** | Contact page | Marks the contact page for AI crawlers |
| **AboutPage** | About page | Marks the about page |
| **ImageGallery** | Gallery page | Image collection markup |

### Files Changed

1. **`src/components/StructuredData.tsx`** (new) — Generic component that accepts a JSON-LD object and renders a `<script type="application/ld+json">` tag via `dangerouslySetInnerHTML`
2. **`src/lib/structured-data.ts`** (new) — Helper functions that generate each schema object from constants:
   - `getLocalBusinessSchema()`
   - `getWebSiteSchema()`
   - `getOrganizationSchema()`
   - `getServiceSchema(title, description, image, url)`
   - `getBreadcrumbSchema(items)`
   - `getFAQSchema(questions)`
   - `getAggregateRatingSchema()`
   - `getContactPageSchema()`
   - `getAboutPageSchema()`
3. **`src/pages/Index.tsx`** — Add LocalBusiness + WebSite + Organization schemas
4. **`src/pages/About.tsx`** — Add AboutPage + BreadcrumbList
5. **`src/pages/Contact.tsx`** — Add ContactPage + BreadcrumbList
6. **`src/pages/Reviews.tsx`** — Add AggregateRating + Review + BreadcrumbList
7. **`src/pages/Gallery.tsx`** — Add ImageGallery + BreadcrumbList
8. **Each service page** (Pavers, Hardscape, Landscaping, etc.) — Add Service + BreadcrumbList
9. **Each service area page** (Atherton, LosGatos, Saratoga) — Add LocalBusiness variant with specific areaServed + BreadcrumbList
10. **FAQ sections** — Add FAQPage schema wherever `FAQAccordion` is used

### What You'll See
After implementation I'll output the full JSON-LD for the homepage so you can review exactly what search engines and AI will consume — the complete LocalBusiness entity with all 15+ fields, plus every other schema type.

