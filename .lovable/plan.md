

## Navbar CTA Text + Fix Services Dropdown

### 1. Update Navbar CTA Text
Change "Free Estimate" → "Get A Free Estimate" in both desktop (line 96) and mobile (line 148) buttons.

### 2. Fix Services Dropdown Collapsing
The dropdown has `mt-1` (a gap between the trigger button and the panel). When the mouse crosses that gap, `onMouseLeave` fires and the menu closes. Fix:

- Remove `mt-1` from the dropdown panel
- Add a generous padding-bottom to the trigger button area so the hover zone connects seamlessly to the dropdown
- Add `pt-2` padding-top to the dropdown panel to preserve visual spacing without creating a dead zone

**`src/components/layout/Navbar.tsx`** changes:
- Line 34-37: Wrap the trigger `<div>` with extra bottom padding so hover zone extends into dropdown area
- Line 45: Change `mt-1` → `pt-2` (padding inside the dropdown instead of margin outside)
- Line 96: "Free Estimate" → "Get A Free Estimate"
- Line 148: "Get Free Estimate" → "Get A Free Estimate"

### Files Changed
- `src/components/layout/Navbar.tsx`

