

## Merge Our Process + Design Process into One Page

### Summary
Combine both pages into a single `/our-process` page. Remove `/design-process` as a standalone route and redirect any internal links to the merged page.

### Merged page structure (top to bottom)
1. **Hero** — "How We Work" title with subtitle covering full lifecycle + design
2. **ProcessSteps** — 5 steps: Initial Contact → On-Site Consultation → Design & Proposal (mentions 2D/3D) → Project Build → Final Walkthrough
3. **DesignProcessBlock** — the existing "See Your Project Before It's Built" section with 3D rendering image
4. **"What You Receive" section** — from current Design Process page (2D site plans, 3D renderings, material guidance)
5. **"What to Expect During Construction"** — from current Our Process page
6. **"After Your Project"** — from current Our Process page (warranty, future phases)
7. **CTABanner** — "Start the Conversation"

### Files changed

1. **`src/pages/OurProcess.tsx`** — Rewrite to include merged content from both pages. Import `DesignProcessBlock`. Combine the 5 process steps. Include "What You Receive", construction expectations, and post-project sections. Update page title.

2. **`src/App.tsx`** — Remove `DesignProcess` import and route. Keep `/our-process` route.

3. **`src/components/sections/DesignProcessBlock.tsx`** — Update the button link from `/design-process` to `/our-process`.

4. **`src/components/layout/Footer.tsx`** — Remove the "Design Process" link, keep "Our Process".

5. **`src/pages/DesignProcess.tsx`** — Delete file.

