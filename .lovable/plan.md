

## Create Blog Section & Move Comparison Articles

Move "Pavers vs Concrete" and "Artificial Turf vs Sod" into a new `/blog` section.

### 1. Create Blog Index Page (`src/pages/Blog.tsx`)
- Simple listing page with cards linking to each article
- Title: "Resources & Guides"
- Each card shows article title, short description, and "Read More →"

### 2. Update Routes (`src/App.tsx`)
- Add Blog index: `/blog`
- Move routes: `/pavers-vs-concrete` → `/blog/pavers-vs-concrete`
- Move routes: `/artificial-turf-vs-sod` → `/blog/artificial-turf-vs-sod`

### 3. Update Navigation (`src/components/layout/Navbar.tsx`)
- Remove the "Compare: Pavers vs Concrete →" link from the Services dropdown
- Add "Blog" as a top-level nav link

### 4. Update Footer (`src/components/layout/Footer.tsx`)
- Update the comparison article links to use `/blog/...` paths
- Optionally rename section to "Resources" or "Blog"

### 5. Update Internal Links
- Any cross-links in `PaversVsConcrete.tsx` and `ArtificialTurfVsSod.tsx` remain unchanged (they link to service pages, not each other)

### Files Changed
- `src/pages/Blog.tsx` (new)
- `src/App.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`

