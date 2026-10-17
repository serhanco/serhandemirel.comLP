# Serhan Demirel WordPress theme

WordPress version of the one-page site in the repository root (`index.html`).

## Install

1. Zip this folder: `cd wordpress-theme && zip -r serhandemirel.zip serhandemirel`
2. In wp-admin go to **Appearance → Themes → Add New → Upload Theme** and upload the zip, then activate it.
3. Under **Settings → General** set Site Title to `Serhan Demirel` and Tagline to `Digital Solutions Provider` (the browser tab title is built from these).

The front page renders whenever "Your homepage displays" is left on "Your latest posts" or set to any static page.

## Layout

| File | What it holds |
| --- | --- |
| `header.php` | `<head>`, `wp_head()`, opening `<body>`, navigation |
| `front-page.php` | The one-page layout, assembled from the template parts |
| `footer.php` | Floating contact bar, project modal, `wp_footer()` |
| `index.php` | Fallback for posts and other pages |
| `template-parts/` | `nav`, `hero`, `word-slot`, `expertise`, `brands`, `contact`, `sticky-contact`, `project-modal` |
| `functions.php` | Asset loading (Tailwind CDN, Inter, GSAP, ScrollTrigger, Lenis), meta/OG tags, Google Tag Manager |
| `inc/brands.php` | Brand logo list and order for the marquee |
| `inc/contact.php` | "Start a Project" form handler (replaces `process/contact.php`) |
| `assets/js/` | The page scripts that used to be inline in `index.html` |

## Contact form

Submissions are posted to `admin-ajax.php`, saved as private entries under **Messages** in wp-admin, and emailed to the site's admin email address (needs working mail on the host, e.g. an SMTP plugin).
