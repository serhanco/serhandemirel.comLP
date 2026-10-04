<?php
/**
 * One-page front page.
 *
 * @package serhandemirel
 */

get_header();

get_template_part( 'template-parts/hero' );
get_template_part( 'template-parts/word-slot' );
get_template_part( 'template-parts/expertise' );
get_template_part( 'template-parts/brands' );
get_template_part( 'template-parts/contact' );

get_footer();
