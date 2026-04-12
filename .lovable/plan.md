

## Add noindex Meta Tags to All Pages

### Change
Add two meta tags to `index.html` `<head>`:
- `<meta name="robots" content="noindex">` — blocks all search engines
- `<meta name="googlebot" content="noindex">` — explicitly blocks Google

### File changed
- `index.html` — add both meta tags after the existing charset/viewport meta tags

