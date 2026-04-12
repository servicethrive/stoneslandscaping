

## Enhance "What Sets Us Apart" Section with Numbered Items

### Current state
Four cards in a 2×2 grid with `bg-brand-cream` background and border. Clean but all four look identical — nothing draws the eye to prioritize or scan quickly.

### Changes to `src/pages/About.tsx` (lines 115-127)

**Add prominent numbers** — Large styled numbers (01–04) in each card as a visual anchor, using the primary brown color at a large display size. This creates a scannable hierarchy.

**Additional visual enhancements:**
- Add a thick left border accent (`border-l-4 border-l-primary`) to each card for a "highlight bar" effect
- Display the number as a large, semi-transparent element (e.g., `text-4xl font-bold text-primary/20`) in the top-left, with the title and description below it
- Add the corresponding Lucide icon next to each title for quick recognition:
  1. `FileText` — Transparent, Detailed Proposals
  2. `MessageSquare` — Responsive Communication
  3. `Palette` — Design Capability
  4. `Users` — Experienced, Full-Time Crews

**Result per card:**
```
┌─────────────────────────────┐
│▌ 01                        │
│▌ 📄 Transparent, Detailed  │
│▌    Proposals               │
│▌ You'll receive a clear... │
└─────────────────────────────┘
```

The large number provides scanability, the left accent bar adds visual weight, and the icon gives instant context — all while keeping the existing cream background and border styling.

### Files changed
- `src/pages/About.tsx` — update the "What Sets Us Apart" card rendering (lines 116-126)

