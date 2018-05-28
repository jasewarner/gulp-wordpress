<?php
/**
 * Admin functions
 *
 * @author   <Author>
 * @version  1.0.0
 * @package  <Package>
 */

/**
 * Credit in admin footer
 */
function gulp_wp_admin_footer() {
	echo 'Developed by <a href="http://author.com">Author Name</a>';
}
add_filter( 'admin_footer_text', 'gulp_wp_admin_footer' );

/**
 * Change default greeting
 */
function gulp_wp_greeting( $wp_admin_bar ) {
	$user_id = get_current_user_id();
	$current_user = wp_get_current_user();
	$profile_url = get_edit_profile_url( $user_id );

	if ( 0 !== $user_id ) {
		$avatar = get_avatar( $user_id, 28 );
		$howdy = sprintf( __( 'Hi, %1$s' ), $current_user->display_name );
		$class = empty( $avatar ) ? '' : 'with-avatar';

		$wp_admin_bar->add_menu(array(
			'id' => 'my-account',
			'parent' => 'top-secondary',
			'title' => $howdy . $avatar,
			'href' => $profile_url,
			'meta' => array(
				'class' => $class,
			),
		));
	}
}
add_action( 'admin_bar_menu', 'gulp_wp_greeting', 11 );

/**
 * Change admin menu order
 */
function gulp_wp_admin_menu_order( $menu_ord ) {
	if ( ! $menu_ord ) {
		return true;
	};

	return array(
		'index.php', // Dashboard.
		'separator1', // First separator.
		'edit.php', // Posts.
		'edit.php?post_type=page', // Pages.
		'upload.php', // Media.
		'separator2', // Second separator.
		'themes.php', // Appearance.
		'plugins.php', // Plugins.
		'users.php', // Users.
		'tools.php', // Tools.
		'options-general.php', // Settings.
		'separator-last', // Last separator.
	);
}
add_filter( 'custom_menu_order', 'gulp_wp_admin_menu_order' );
add_filter( 'menu_order', 'gulp_wp_admin_menu_order' );
