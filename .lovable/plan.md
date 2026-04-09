

## Fix Remaining Body Font Size Inconsistencies

The previous pass missed several files. Here are all the body paragraphs still missing `text-lg`:

### Files to fix

**1. `src/components/sections/DesignProcessBlock.tsx`** (line 16)
- Second paragraph missing `text-lg` — add it to match the first paragraph on line 11

**2. `src/components/sections/ZigZagSection.tsx`** (line 30)
- Body text `<p>` missing `text-lg` — used across multiple service pages

**3. `src/components/sections/WarrantyBlock.tsx`** (lines 17, 27)
- Both warranty description paragraphs missing `text-lg`

**4. `src/pages/OurProcess.tsx`** (lines 40, 58, 73)
- Three `<div>` wrappers with `text-muted-foreground leading-relaxed font-light` missing `text-lg` — these wrap multiple `<p>` tags, so adding `text-lg` to the wrapper fixes all children

**5. `src/pages/ArtificialTurf.tsx`** (line 83)
- Same pattern as OurProcess — wrapper `<div>` missing `text-lg`

### Not changed (intentionally smaller)
- `text-sm` items in cards, process steps, list descriptions, testimonials — these are distinct content types that should stay small

