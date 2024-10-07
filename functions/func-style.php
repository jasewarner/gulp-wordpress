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

	/**
	 * Set a script handle prefix based on theme name.
	 * Note that this should be the same as the `themePrefix` var set in your Gulpfile.js.
	 */
	$handle = 'theme-name';

	/**
	 * Set paths for CSS
	 */
	$css_dir_path = get_template_directory() . "/assets/css";
	$css_dir_uri = get_template_directory_uri() . "/assets/css";

	/**
	 * Enqueue main stylesheet
	 */
	$filename_core = "core";
	$ver_core = filemtime( "{$css_dir_path}/{$filename_core}.min.css" );
	wp_enqueue_style( "{$handle}-{$filename_core}", "{$css_dir_uri}/{$filename_core}.min.css", array(), $ver_core );
}
add_action( 'wp_enqueue_scripts', 'gulp_wp_theme_styles' );

/**
 * Admin stylesheet
 *
 * @param $hook
 * @return void
 */
function gulp_wp_add_editor_styles( $hook ) : void {
	$handle = 'theme-name';
	wp_enqueue_style( "{$handle}-admin", get_template_directory_uri() . '/admin.css', array(), null );
}
add_action( 'admin_enqueue_scripts', 'gulp_wp_add_editor_styles' );
