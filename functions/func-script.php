<?php
/**
 * Script functions
 *
 * @author   <Author>
 * @version  1.0.0
 * @package  <Package>
 */

/**
 * Enqueue theme scripts
 */
function gulp_wp_theme_scripts() {

	/**
	 * Set a script handle prefix based on theme name.
	 * Note that this should be the same as the `themePrefix` var set in your Gulpfile.js.
	 */
	$handle = 'theme-name';

	/**
	 * Set paths for JS
	 */
	$js_dir_path = get_template_directory() . "/assets/js/dist";
	$js_dir_uri = get_template_directory_uri() . "/assets/js/dist";

	/**
	 * Enqueue common scripts.
	 */
	$filename_core = "core";
	$ver_core = filemtime( "{$js_dir_path}/{$filename_core}.min.js" );
	wp_enqueue_script( "{$handle}-{$filename_core}", "{$js_dir_uri}/{$filename_core}.min.js", array(), $ver_core );
}
add_action( 'wp_enqueue_scripts', 'gulp_wp_theme_scripts' );
