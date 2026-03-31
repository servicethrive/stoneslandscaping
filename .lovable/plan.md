

## Update Site Accent Color to Logo Brown (#9a5e37)

Replace the current gold-yellow primary/accent with the logo's warm brown `#9a5e37` (`hsl(24, 47%, 41%)`) across the entire site. Since all components use CSS custom properties, this is a single-file change.

### Changes

**`src/index.css`** — Update these CSS custom properties:

| Variable | Current (gold-yellow) | New (logo brown) |
|---|---|---|
| `--primary` | `43 75% 31%` | `24 47% 41%` |
| `--accent` | `43 60% 40%` | `24 40% 48%` |
| `--ring` | `43 75% 31%` | `24 47% 41%` |
| `--brand-brown` | `43 75% 31%` | `24 47% 41%` |
| `--brand-brown-light` | `43 55% 45%` | `24 40% 55%` |

This single update propagates to every CTA button, icon, link, trust bar icon, and accent element site-wide since they all reference these variables.

