

## Subtle Navbar Scroll Transition

**Problem:** The `shadow-md` combined with `transition-all duration-300` creates an odd fade at the bottom of the navbar when scrolling.

### Change

**`src/components/layout/Navbar.tsx`** — Replace `shadow-md` with `shadow-sm` for a more subtle bottom edge, and narrow the transition to only target background/blur changes rather than `transition-all`:

- Change `shadow-md` → `shadow-sm` (barely perceptible, clean line)
- Change `transition-all` → `transition-colors` so the shadow appears instantly without a visible fade animation

