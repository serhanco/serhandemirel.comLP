# serhandemirel.com

My personal website featuring smooth scroll animations and a modern, minimalist design.

## Features
- Smooth scroll animations with CSS scroll-driven animations
- Responsive design
- Dark mode support
- Modern UI with subtle interactions
- Performance optimized
- Multi-language support (EN, TR, FR, NL, IT, ES) with a flag-based language switcher

## Technologies
- HTML5
- CSS3 (with modern features like scroll-driven animations)
- JavaScript
- Bootstrap for layout

## Development
Styles are Tailwind CSS compiled ahead of time (no CDN at runtime):

```
npm install
npm run build:css   # src/main.css -> assets/css/main.css (commit the output)
```

Re-run `build:css` after adding new Tailwind classes to `index.html` or `assets/js/i18n.js`, and bump the `?v=` on the stylesheet link.
