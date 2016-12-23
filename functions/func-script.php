<?php
/**
 * Scripts
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
 */

/**
 * Enqueue scripts
 */
function gulp_wp_theme_scripts() {
	wp_register_script(
		'scripts',
		get_template_directory_uri() . '/assets/js/scripts.min.js',
		array( 'jquery' ),
		'1.0.0',
		true
	);
	wp_enqueue_script( 'scripts' );

}
add_action( 'wp_enqueue_scripts', 'gulp_wp_theme_scripts' );
