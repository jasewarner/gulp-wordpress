<?php
/**
 * Menu functions
 *
 * @author   <Author>
 * @version  1.0.0
 * @package  <Package>
 */

/**
 * Register nav menus
 */
function gulp_wp_register_menus() {
	register_nav_menus(
		array(
			'header' => __( 'Header' ),
		)
	);
}
add_action( 'init', 'gulp_wp_register_menus' );
