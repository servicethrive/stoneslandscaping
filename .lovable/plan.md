

## SEO-Optimize Service Page Headlines + About Page Zig-Zag Fix

### Problem 1: SEO — H1s say "Bay Area" instead of "San Jose"
The `<title>` tags correctly target San Jose, but the visible H1 hero headlines use "Bay Area" — diluting the primary geo-target. For these 7 primary service pages, "San Jose" should appear in the H1 and subtitle. "Bay Area" can stay in body copy naturally.

### Problem 2: About page layout
The "How We Got Here" section has 4 long paragraphs paired with one image in a side-by-side grid, making the image look small. Convert this to a ZigZag layout that splits the content into 2 items, each pairing 2 paragraphs with an image.

---

### H1 and Subtitle Changes (7 service pages)

**Pavers.tsx**
- H1: "Custom Paver Installations for Bay Area Homes" → "Custom Paver Installations in San Jose"
- Subtitle: "...for Bay Area homes of every size..." → "...for San Jose homes of every size..."

**Landscaping.tsx**
- H1: "Design-Build Landscaping for Bay Area Homes" → "Design-Build Landscaping in San Jose"
- Subtitle: "...for the Bay Area climate..." → "...for the San Jose climate..."

**OutdoorKitchens.tsx**
- H1: "Outdoor Kitchens & Living Structures" → "Outdoor Kitchens & Living Structures in San Jose"
- Subtitle: remains as-is (no geo currently)

**ArtificialTurf.tsx**
- H1: "Artificial Turf Installation for Bay Area Homes" → "Artificial Turf Installation in San Jose"
- Body H2: "Why Bay Area Homeowners..." → "Why San Jose Homeowners..."

**ConcreteDriveways.tsx**
- H1: "Concrete Driveway Installation & Replacement" → "Concrete Driveway Contractor in San Jose"
- Subtitle: "...built for Bay Area homes..." → "...built for San Jose homes..."

**Hardscape.tsx**
- H1: "Hardscape Construction Built to Last" → "Hardscape Contractor in San Jose"
- Subtitle: "...designed for Bay Area living..." → "...designed for San Jose living..."

**RetainingWalls.tsx**
- H1: "Retaining Wall Construction for Bay Area Properties" → "Retaining Wall Contractor in San Jose"
- Subtitle: "...Silicon Valley's unique terrain" stays (good secondary keyword)

**Note**: Body copy references to "Bay Area" in paragraphs, FAQ answers, and zigzag text will remain — they're natural and help with broader geo-relevance without hurting the primary San Jose targeting.

---

### About Page — "How We Got Here" Zig-Zag

Convert the current 2-column grid (lines 92-122) into a `<ZigZagSection>` with 2 items:

**Item 1** (text left, image right):
- Title: "How We Got Here"
- Text: Paragraphs 1-2 (founding story + growth from San Jose neighborhoods)
- Image: `/images/stones-landscaping-storage-yard.jpg`

**Item 2** (text right, image left — automatic zig-zag):
- Title: "Who We Work With"
- Text: Paragraphs 3-4 (client profile + quality commitment)
- Image: A second real project photo (e.g., `landscapingSanJose` — showing actual work in San Jose)

This balances text and imagery across two rows instead of cramming everything into one.

---

### Files changed (8 total)
- `src/pages/Pavers.tsx` — H1 + subtitle
- `src/pages/Landscaping.tsx` — H1 + subtitle
- `src/pages/OutdoorKitchens.tsx` — H1
- `src/pages/ArtificialTurf.tsx` — H1 + body H2
- `src/pages/ConcreteDriveways.tsx` — H1 + subtitle
- `src/pages/Hardscape.tsx` — H1 + subtitle
- `src/pages/RetainingWalls.tsx` — H1
- `src/pages/About.tsx` — restructure "How We Got Here" into ZigZagSection

