

# Stones Landscaping Inc. — Full Website Build Plan

## Design System
- **Color palette**: Dark charcoal (#1a1a1a) hero/feature sections alternating with white (#ffffff) content sections. Brown accent (#8B6914 / warm gold-brown) for CTAs, highlights, and brand touches. Text: near-black on light, white on dark.
- **Typography**: Clean sans-serif (Inter for body, bold weights for headings). Strong hierarchy with large hero text.
- **Nav**: Simple horizontal top nav with logo left, links center, "Get Free Estimate" CTA button right. Sticky on scroll. Hamburger on mobile. Links: Services (dropdown), About, Gallery, Reviews, Service Areas, Contact.
- **Footer**: Full footer with NAP, license info, service links, service area links, social placeholders, phone/email.
- **CTAs**: Primary brown buttons ("Request a Free Estimate", "Call (408) 204-8418"). Secondary outlined buttons for explore actions.
- **Placeholder images**: High-quality Unsplash landscape/hardscape photos throughout.

## Reusable Components (built first, used across all pages)
1. **HeroSection** — full-width dark background with headline, subtext, dual CTAs, background image
2. **ServiceCard** — image + title + short description + link
3. **TrustBar** — license, reviews (56 Google / 123 Yelp), warranty, years in business
4. **TestimonialBlock** — review quotes with star ratings
5. **ProcessSteps** — numbered vertical/horizontal steps
6. **CTABanner** — full-width conversion block with headline + CTA buttons
7. **FAQAccordion** — expandable Q&A sections
8. **ServiceAreaMap** — list/grid of served cities with links
9. **GalleryGrid** — responsive image grid with category filters
10. **ComparisonTable** — side-by-side feature comparison
11. **TeamBlock** — owner/company credibility section
12. **WarrantyBlock** — warranty details display
13. **BeforeAfterPlaceholder** — before/after image section (placeholder-ready)
14. **DesignProcessBlock** — 2D/3D design workflow visualization
15. **Navbar** — responsive nav with mobile hamburger
16. **Footer** — full site footer

## Pages (27 total)

### Tier 1 — High Priority

1. **Homepage** (`/`) — Hero with "Transform Your Outdoor Space" + trust bar + 7 service cards + why choose us + process overview + testimonials + service areas + CTA banner

2. **Hardscape** (`/hardscape`) — Hub page. What is hardscape, types of projects, links to Pavers/Retaining Walls/Patios, gallery teaser, trust block, CTA

3. **Pavers** (`/pavers`) — Money page. Paver installation focus, materials (Techo-Bloc, travertine, porcelain), applications, 21-year warranty, process, CTA

4. **Landscaping** (`/landscaping`) — Money page. Design-build landscaping, front/backyard, low-maintenance, 90-day warranty, design process teaser, CTA

5. **Concrete Driveways** (`/concrete-driveways`) — Money page. Driveway replacement/install, stamped/colored options, process, CTA

6. **Outdoor Kitchens** (`/outdoor-kitchens`) — Money page. Custom outdoor kitchen design + build, features, planning process, CTA

7. **Retaining Walls** (`/retaining-walls`) — Money page. Structural + decorative walls, materials, when needed, CTA

8. **Artificial Turf** (`/artificial-turf`) — Money page. Low-maintenance turf installation, benefits vs natural grass, applications, CTA

9. **About** (`/about`) — Founded 2017, owner story, team capacity, license info, values, mission

10. **Gallery** (`/gallery`) — Filterable image grid by service type, placeholder images organized by category

11. **Reviews** (`/reviews`) — Testimonial showcase, Google/Yelp stats, review highlights

12. **Warranties** (`/warranties`) — 21-year paver warranty details, 90-day landscape warranty, what's covered

13. **Design Process** (`/design-process`) — 2D/3D design workflow, what clients receive, how it helps

14. **Our Process** (`/our-process`) — Step-by-step from initial call to project completion

15. **Contact / Request Estimate** (`/contact`) — Form (name, email, phone, service interest, project description), phone, email, address, map placeholder

16. **Service Areas** (`/service-areas`) — Overview of all served cities with links, map area description

17. **San Jose** (`/service-areas/san-jose`) — Core local page with San Jose-specific context, relevant services, CTA

### Tier 2 — Medium Priority

18. **Atherton** (`/service-areas/atherton`) — Premium market positioning, estate-focused
19. **Los Gatos** (`/service-areas/los-gatos`)
20. **Saratoga** (`/service-areas/saratoga`)
21. **Campbell** (`/service-areas/campbell`)
22. **Santa Clara** (`/service-areas/santa-clara`)
23. **Financing** (`/financing`) — Financing mentioned as available/coming soon
24. **Landscaping FAQs** (`/faqs`) — Common questions across services
25. **Patio & Walkway Installations** (`/patio-walkway-installations`) — Spoke page
26. **Pergolas & Shade Structures** (`/pergolas-shade-structures`) — Spoke page
27. **Pavers vs Concrete** (`/pavers-vs-concrete`) — Comparison page
28. **Artificial Turf vs Sod** (`/artificial-turf-vs-sod`) — Comparison page

## Internal Linking Strategy (built into components)
- Navbar dropdown links to all service pages
- Homepage routes to all core pages
- Each service page links to: Gallery, Reviews, Warranties, Process, Contact
- City pages link to relevant services + Contact
- Comparison pages link back to owning service pages
- Hub pages link to all spoke pages
- Footer contains full sitemap-style links

## Content Approach
- ~1000 words per service/city page
- Direct, practical tone — no fluff or generic contractor language
- Each page has one clear intent with no topic drift
- City pages have unique local context, not template-swapped content
- All business facts use only approved information from the brief

