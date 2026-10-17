<?php
/**
 * "Start a Project" form handler.
 *
 * Replaces the static site's process/contact.php. Submissions are stored as
 * private "Messages" in wp-admin and emailed to the site admin address.
 *
 * @package serhandemirel
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Admin-only post type holding form submissions.
 */
function sd_register_message_post_type() {
	register_post_type(
		'sd_message',
		array(
			'labels'          => array(
				'name'          => __( 'Messages', 'serhandemirel' ),
				'singular_name' => __( 'Message', 'serhandemirel' ),
			),
			'public'          => false,
			'show_ui'         => true,
			'menu_icon'       => 'dashicons-email',
			'supports'        => array( 'title', 'editor' ),
			'capability_type' => 'post',
			'capabilities'    => array( 'create_posts' => 'do_not_allow' ),
			'map_meta_cap'    => true,
		)
	);
}
add_action( 'init', 'sd_register_message_post_type' );

/**
 * AJAX endpoint. Responds with the same JSON shape the static site used:
 * { "status": "success"|"error", "message": "..." }.
 */
function sd_handle_contact() {
	if ( ! check_ajax_referer( 'sd_contact', 'nonce', false ) ) {
		wp_send_json( array( 'status' => 'error', 'message' => 'Your session expired. Please reload the page and try again.' ), 403 );
	}

	$name    = sanitize_text_field( wp_unslash( $_POST['Name'] ?? '' ) );
	$email   = sanitize_email( wp_unslash( $_POST['Email'] ?? '' ) );
	$message = sanitize_textarea_field( wp_unslash( $_POST['Message'] ?? '' ) );

	if ( '' === $name || '' === $message || '' === trim( wp_unslash( $_POST['Email'] ?? '' ) ) ) {
		wp_send_json( array( 'status' => 'error', 'message' => 'Please fill in all fields.' ), 400 );
	}

	if ( ! is_email( $email ) ) {
		wp_send_json( array( 'status' => 'error', 'message' => 'Invalid email format.' ), 400 );
	}

	$post_id = wp_insert_post(
		array(
			'post_type'    => 'sd_message',
			'post_status'  => 'private',
			'post_title'   => sprintf( '%s (%s)', $name, $email ),
			'post_content' => $message,
		),
		true
	);

	if ( is_wp_error( $post_id ) ) {
		wp_send_json( array( 'status' => 'error', 'message' => 'Failed to save your message. Please try again later.' ), 500 );
	}

	wp_mail(
		get_option( 'admin_email' ),
		sprintf( 'New project inquiry from %s', $name ),
		"Name: $name\nEmail: $email\n\n$message",
		array( 'Reply-To: ' . $name . ' <' . $email . '>' )
	);

	wp_send_json( array( 'status' => 'success', 'message' => 'Your message has been sent successfully. I will get back to you soon!' ), 200 );
}
add_action( 'wp_ajax_sd_contact', 'sd_handle_contact' );
add_action( 'wp_ajax_nopriv_sd_contact', 'sd_handle_contact' );
