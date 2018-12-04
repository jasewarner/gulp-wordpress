<?php
/**
 * Header template
 *
 * @author   <Author>
 * @version  1.0.0
 * @package  <Package>
 */
?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><?php wp_title( '&ndash;', true, 'right' ); ?></title>
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="header"></header>
<nav class="navigation"></nav>
<main class="main">
