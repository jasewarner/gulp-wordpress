<?php
/**
 * Permalinks
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
 */

/**
 * Remove trailing slashes from permalinks
 */
function wp_exit_permalinks( $link ) {
	return untrailingslashit( $link );
}

add_filter( 'page_link', 'wp_exit_permalinks' );
add_filter( 'post_type_link', 'wp_exit_permalinks' );
