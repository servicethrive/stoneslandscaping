

## Replace Text Logo with Image

Copy the uploaded logo to `src/assets/stones-landscaping-logo.png`, then update the Navbar and Footer to use an `<img>` tag instead of the current text-based logo.

### Changes

1. **Copy logo** — `user-uploads://stones-landscaping-sj-logo.png` → `src/assets/stones-landscaping-logo.png`

2. **Navbar.tsx** — Replace the `<span>STONES <span>LANDSCAPING</span></span>` with an imported `<img>` element, sized ~h-10 on desktop, ~h-8 on mobile.

3. **Footer.tsx** — If the footer also has a text logo, replace it similarly with the image.

