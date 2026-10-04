# Serhan Demirel WordPress theme

WordPress version of the one-page site in the repository root (`index.html`).

## Install

1. Zip this folder: `cd wordpress-theme && zip -r serhandemirel.zip serhandemirel`
2. In wp-admin go to **Appearance → Themes → Add New → Upload Theme** and upload the zip, then activate it.
3. Install and activate the **Serhan Demirel Core** plugin from `wordpress-plugin/serhandemirel-core` (see its README). It holds the content types and the contact form.
4. Under **Settings → General** set Site Title to `Serhan Demirel` and Tagline to `Digital Solutions Provider` (the browser tab title is built from these).

The front page renders whenever "Your homepage displays" is left on "Your latest posts" or set to any static page.

## Layout

| File | What it holds |
| --- | --- |
| `header.php` | `<head>`, `wp_head()`, opening `<body>`, navigation |
| `front-page.php` | The one-page layout, assembled from the template parts |
| `footer.php` | Floating contact bar, project modal, `wp_footer()` |
| `index.php` | Fallback for posts and other pages |
| `template-parts/` | `nav`, `hero`, `word-slot`, `expertise`, `brands`, `contact`, `sticky-contact`, `project-modal` |
| `functions.php` | Asset loading (Tailwind CDN, Inter, GSAP, ScrollTrigger, Lenis), meta/OG tags |
| `inc/options.php` | Settings fields, defaults and `sd_opt()`; per-language values with fallback to the default language |
| `inc/options-page.php` | The **Serhan Demirel** settings screen in wp-admin |
| `inc/tracking.php` | GTM, GA4, Meta Pixel, LinkedIn, Clarity, extra code, Consent Mode defaults, per-page switch |
| `inc/brands.php` | Brand logo list and order for the marquee |
| `assets/js/` | The page scripts that used to be inline in `index.html`; `tracking.js` pushes `sd_form_submit`, `sd_whatsapp_click` and `sd_email_click` to `dataLayer` and stores the UTM campaign in an `sd_utm` cookie |

## Contact form

The form posts to `admin-ajax.php`; the **Serhan Demirel Core** plugin saves each submission under **Messages** in wp-admin and emails the site's admin address (needs working mail on the host, e.g. an SMTP plugin). Without the plugin the form does not work and wp-admin shows a warning.

## Settings

wp-admin → **Serhan Demirel** has tabs for General (SEO and sharing image), Hero, Word slot, Sections (show/hide and headings), Contact, Form and Tracking. With Polylang, texts marked with a globe are saved per language; an empty field shows the default-language text. Tracking codes are skipped for logged-in editors (unless enabled), in previews and on pages with **Turn off tracking codes on this page** ticked. When Yoast, Rank Math, AIOSEO or SEOPress is active, the theme leaves the description and social tags to it.
