

## Add Lightbox Popup with Slideshow Navigation

### What we're building
A reusable lightbox/modal component that opens when clicking any image, showing it full-screen with previous/next navigation and keyboard support. Used in two places: the Gallery page grid and the About page Fleet section.

### New component: `src/components/ui/ImageLightbox.tsx`
A modal overlay that:
- Displays the clicked image full-screen with dark backdrop
- Shows prev/next arrows (ChevronLeft, ChevronRight from lucide-react)
- Supports keyboard navigation (left/right arrows, Escape to close)
- Shows image caption (alt text) and position indicator (e.g., "3 / 21")
- Click outside image or X button to close
- Prevents body scroll when open

Props: `images: {src: string, alt: string}[]`, `currentIndex: number`, `isOpen: boolean`, `onClose: () => void`, `onNavigate: (index: number) => void`

### Changes to `src/components/sections/GalleryGrid.tsx`
- Add state for `lightboxIndex` and `lightboxOpen`
- Make each image card clickable (`cursor-pointer`, `onClick` handler)
- Render `<ImageLightbox>` with the filtered images array
- Clicking a thumbnail opens the lightbox at that index; slideshow navigates through the currently filtered set

### Changes to `src/pages/About.tsx` (Fleet section, lines 173-191)
- Add state for lightbox
- Make each fleet image clickable
- Render `<ImageLightbox>` with the 6 fleet images

### Files changed (3)
- `src/components/ui/ImageLightbox.tsx` — new reusable lightbox component
- `src/components/sections/GalleryGrid.tsx` — add click-to-open + lightbox
- `src/pages/About.tsx` — add click-to-open + lightbox on fleet grid

