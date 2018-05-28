<?php
/**
 * Style functions
 *
 * @author   <Author>
 * @version  1.0.0
 * @package  <Package>
 */

/**
 * Enqueue theme styles.
 */
function gulp_wp_theme_styles() {
	wp_register_style( 'styles', get_template_directory_uri() . '/assets/css/style.min.css', array(), '1.0.0', 'all' );
	wp_enqueue_style( 'styles' );
}
add_action( 'wp_enqueue_scripts', 'gulp_wp_theme_styles' );
