/** @type {import('tailwindcss').Config} */
// Same defaults as the Tailwind Play CDN the site used before; classes are
// picked up from the page and from the class strings built in JS.
module.exports = {
  content: ['./index.html', './assets/js/i18n.js'],
  theme: { extend: {} },
  plugins: [],
};
