<?php
/**
 * Debugging tools.
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
 */

/**
 * Pretty printing debugging tool.
 */
function pr( $var ) {
	print '<pre>';
	print_r( $var );
	print '</pre>';
}
