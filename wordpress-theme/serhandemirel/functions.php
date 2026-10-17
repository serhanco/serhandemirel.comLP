<?php
/**
 * Serhan Demirel theme functions.
 *
 * @package serhandemirel
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SD_THEME_VERSION', '1.0.0' );

require get_template_directory() . '/inc/brands.php';
require get_template_directory() . '/inc/contact.php';

/**
 * Theme setup.
 */
function sd_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5', array( 'script', 'style', 'search-form', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'sd_setup' );

/**
 * Use "|" between site title and tagline, as the static site did.
 */
function sd_title_separator() {
	return '|';
}
add_filter( 'document_title_separator', 'sd_title_separator' );

/**
 * Styles and scripts.
 */
function sd_enqueue_assets() {
	$uri = get_template_directory_uri();

	// Tailwind Play CDN must run in <head> so classes are styled before paint.
	wp_enqueue_script( 'tailwind', 'https://cdn.tailwindcss.com', array(), null, false );

	wp_enqueue_style( 'sd-inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap', array(), null );
	wp_enqueue_style( 'sd-style', get_stylesheet_uri(), array( 'sd-inter' ), SD_THEME_VERSION );

	wp_enqueue_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), '3.12.2', true );
	wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', array( 'gsap' ), '3.12.2', true );
	wp_enqueue_script( 'lenis', 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js', array(), '1.1.13', true );

	wp_enqueue_script( 'sd-main', $uri . '/assets/js/main.js', array( 'gsap', 'gsap-scrolltrigger', 'lenis' ), SD_THEME_VERSION, true );

	wp_enqueue_script( 'sd-brands', $uri . '/assets/js/brands.js', array(), SD_THEME_VERSION, true );
	wp_localize_script(
		'sd-brands',
		'sdBrands',
		array(
			'baseUrl' => $uri . '/assets/img/brands/',
			'logos'   => sd_brand_logos(),
		)
	);

	wp_enqueue_script( 'sd-project-modal', $uri . '/assets/js/project-modal.js', array(), SD_THEME_VERSION, true );
	wp_localize_script(
		'sd-project-modal',
		'sdContact',
		array(
			'ajaxUrl' => admin_url( 'admin-ajax.php' ),
			'action'  => 'sd_contact',
			'nonce'   => wp_create_nonce( 'sd_contact' ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'sd_enqueue_assets' );

/**
 * Drop block-editor front-end styles so the page renders like the static site.
 */
function sd_dequeue_block_styles() {
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'wp-block-library-theme' );
	wp_dequeue_style( 'classic-theme-styles' );
	wp_dequeue_style( 'global-styles' );
}
add_action( 'wp_enqueue_scripts', 'sd_dequeue_block_styles', 100 );
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );

remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

/**
 * Meta, social and favicon tags.
 */
function sd_head_meta() {
	$icons = get_template_directory_uri() . '/assets/icons/';
	$image = get_template_directory_uri() . '/assets/img/SD-logo-300px.webp';
	$url   = home_url( '/' );
	$title = 'Serhan Demirel | Digital Solutions Provider';
	$desc  = 'Engineering the digital future. Scalable digital foundations, AI & automation, and digital products.';
	?>
	<meta name="description" content="Serhan Demirel - Digital Solutions Provider specializing in business transformation, scalable digital foundations, and AI &amp; automation.">
	<meta name="author" content="Serhan Demirel">
	<meta name="theme-color" content="#050505">

	<!-- Favicons -->
	<?php if ( ! has_site_icon() ) : ?>
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( $icons . 'apple-touch-icon.png' ); ?>">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo esc_url( $icons . 'favicon-32x32.png' ); ?>">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo esc_url( $icons . 'favicon-16x16.png' ); ?>">
	<link rel="shortcut icon" href="<?php echo esc_url( $icons . 'favicon.ico' ); ?>">
	<?php endif; ?>
	<link rel="manifest" href="<?php echo esc_url( get_template_directory_uri() . '/site.webmanifest' ); ?>">

	<!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="<?php echo esc_url( $url ); ?>">
	<meta property="og:title" content="<?php echo esc_attr( $title ); ?>">
	<meta property="og:description" content="<?php echo esc_attr( $desc ); ?>">
	<meta property="og:image" content="<?php echo esc_url( $image ); ?>">

	<!-- Twitter / X -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="<?php echo esc_url( $url ); ?>">
	<meta property="twitter:title" content="<?php echo esc_attr( $title ); ?>">
	<meta property="twitter:description" content="<?php echo esc_attr( $desc ); ?>">
	<meta property="twitter:image" content="<?php echo esc_url( $image ); ?>">
	<?php
}
add_action( 'wp_head', 'sd_head_meta', 1 );

/**
 * Google tag + Google Tag Manager, as on the static site.
 */
function sd_head_analytics() {
	?>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-P8MNLDTX09"></script>
	<!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-5JJSC7D5');</script>
	<!-- End Google Tag Manager -->
	<?php
}
add_action( 'wp_head', 'sd_head_analytics', 2 );

/**
 * Prefix for in-page anchors: "#contact" on the front page, "/#contact" elsewhere.
 *
 * @param string $anchor Anchor including the leading "#".
 * @return string
 */
function sd_anchor( $anchor ) {
	return is_front_page() ? $anchor : home_url( '/' ) . $anchor;
}
