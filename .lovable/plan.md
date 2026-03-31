

## Fix Logo — Premium Visibility on Dark Backgrounds

**Problem:** The logo has dark/colored artwork on a transparent background. It's invisible against the dark navbar and dark footer.

**Approach — clean, luxury-grade:**

Rather than hacky filters or background pills, we'll use a **CSS `filter: brightness(0) invert(1)` only on dark backgrounds**, combined with a smooth transition when the navbar scrolls to its light state. This is the standard technique used by premium brands (Apple, Tesla, Porsche) to show a single logo asset on both dark and light backgrounds. It renders the logo as clean white — no containers, no glow, no cheap effects.

### Changes

**1. Navbar.tsx**
- Increase navbar height: `h-20 lg:h-24`
- Increase logo size: `h-12 lg:h-16`
- When `!scrolled` (dark bg): apply `filter brightness-0 invert` to make logo white
- When `scrolled` (light bg): remove filter, show logo in original colors
- Add `transition-all duration-300` to the img for smooth crossfade

**2. Footer.tsx**
- Increase logo size: `h-12`
- Apply `brightness-0 invert` permanently (footer is always dark)

This gives a crisp white logo on dark sections and the full-color brand logo on light sections — exactly how high-end sites handle single-asset logos.

