<?php
/**
 * Script functions.
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
 */

/**
 * Enqueue theme scripts.
 */
function gulp_wp_theme_scripts() {

	/**
	 * Set a script handle prefix based on theme name.
	 * Note that this should be the same as the `themePrefix` var set in your Gulpfile.js.
	 */
	$themeHandlePrefix = 'theme-name';

	/**
	 * Enqueue common scripts.
	 */
	wp_enqueue_script( $themeHandlePrefix . '-common', get_template_directory_uri() . '/assets/js/scripts/' . $themeHandlePrefix . '-common.min.js', array( 'jquery' ), '1.0.0', true );

	/**
	 * Here is an example of how we can call a js file for a specific template.
	 * In this case, we will enqueue home.min.js for the home page.
	 */
	if ( is_front_page() ) {

		/**
		 * And now we enqueue the home page scripts.
		 */
		wp_enqueue_script( $themeHandlePrefix . '-home', get_template_directory_uri() . '/assets/js/scripts/' . $themeHandlePrefix . '-home.min.js', array( 'jquery' ), '1.0.0', true );

	}
}
add_action( 'wp_enqueue_scripts', 'gulp_wp_theme_scripts' );
