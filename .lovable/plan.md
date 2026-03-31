

## Align Nav Links with Services Link

The Services link wrapper `<div>` has `pb-2` (added for dropdown hover bridging), which makes it taller than the other nav links, causing vertical misalignment.

### Fix in `src/components/layout/Navbar.tsx`

- **Line 32**: Add `items-center` is already there — good. The issue is the Services `<div>` wrapper has extra `pb-2`. Move the hover-bridge padding inside the dropdown positioning instead.
- **Line 35**: Change `className="relative pb-2"` → `className="relative"` on the Services wrapper div.
- **Line 45**: The dropdown panel already has `pt-2`. Add a pseudo-element or invisible bridge: wrap the dropdown in a container that starts flush with the trigger. Change the dropdown div to include `mt-0` and add `-mt-1` offset with an invisible padding bridge using `before:absolute before:content-[''] before:-top-2 before:left-0 before:right-0 before:h-4` on the dropdown panel so the hover zone extends upward without affecting the trigger's layout.

This way the Services trigger takes the same vertical space as the other links, and the dropdown hover bridge is handled by an invisible pseudo-element.

### Files Changed
- `src/components/layout/Navbar.tsx`

