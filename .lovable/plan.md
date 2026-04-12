

## Add Business Name & Fix Font Consistency in Contact Info Section

### Problem
1. The Contact Information sidebar doesn't show the business name ("Stones Landscaping Inc.")
2. Font sizes are inconsistent — phone number has no `text-sm` class while email and address do

### Changes to `src/pages/Contact.tsx`

**Add business name** as the first item in the contact info list (before phone), using a Building2 icon from lucide-react.

**Normalize font sizes** — all primary text lines use `text-sm font-semibold`, all subtitle lines use `text-xs text-muted-foreground`:

| Item | Current primary class | Fixed |
|---|---|---|
| Phone | `font-semibold` (no size) | `text-sm font-semibold` |
| Email | `text-sm font-semibold break-all` | `text-sm font-semibold break-all` ✅ |
| Address | `text-sm font-semibold` | ✅ already correct |
| License | `text-sm font-semibold` | ✅ already correct |
| **Business name (new)** | — | `text-sm font-semibold` |

### Files changed
- `src/pages/Contact.tsx` — add Building2 import, add business name block, fix phone font size

