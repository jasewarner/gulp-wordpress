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
function gulp_wp_permalinks( $link ) {
	return untrailingslashit( $link );
}
add_filter( 'page_link', 'gulp_wp_permalinks' );
add_filter( 'post_type_link', 'gulp_wp_permalinks' );
