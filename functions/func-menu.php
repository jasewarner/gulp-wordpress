<?php
/**
 * Menus
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
 */

/**
 * Register nav menus
 */
function wp_exit_register_menus() {
	register_nav_menus(
		array(
			'primary' => __( 'Primary' ),
		)
	);
}

add_action( 'init', 'wp_exit_register_menus' );
