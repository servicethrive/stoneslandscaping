

## Fix Hero Banner Overlap on Gallery & Contact Pages

**Problem**: Gallery and Contact pages use `py-20` on their hero sections, so the content loads behind the fixed navbar. Reviews, Warranties, and OurProcess were already fixed to `pt-40 pb-20` but these two were missed.

### Changes

**1. `src/pages/Gallery.tsx`** (line 29)
- Change `className="bg-brand-dark py-20"` → `className="bg-brand-dark pt-40 pb-20"`

**2. `src/pages/Contact.tsx`** (line 30)
- Change `className="bg-brand-dark py-20"` → `className="bg-brand-dark pt-40 pb-20"`

These are the only two remaining pages with this issue. All other pages either use `pt-40 pb-20` or have a full-height `HeroSection` component that handles its own spacing.

