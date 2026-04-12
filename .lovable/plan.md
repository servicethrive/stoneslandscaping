

## Add Team Bio Section to About Page

### What
A "Meet the Team" section on the About page, placed after the existing TeamBlock, featuring 6 team member cards in a responsive grid.

### Team members
1. **Manuel Corona Escobar** — Founder & Owner (use existing truck photo or placeholder)
2. **Gladys Torres** — Office Administrator
3. **[Name TBD]** — Project Manager (placeholder)
4. **[Name TBD]** — Crew Lead (placeholder)
5. **[Name TBD]** — Crew Lead (placeholder)
6. **[Name TBD]** — Crew Lead (placeholder)

### Design
- Section with `bg-background`, standard `py-20 lg:py-28` padding
- Heading "Meet the Team" with the brand accent bar
- 3-column grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)
- Each card: square photo (placeholder silhouette for TBD members), name in Playfair Display, role in muted text, optional 1-2 line bio
- Cards styled with `bg-brand-cream border border-border/60 rounded-sm` to match existing sections

### Files changed
- `src/pages/About.tsx` — add the new team grid section after `<TeamBlock />`

