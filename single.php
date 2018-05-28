<?php
/**
 * Default post template
 *
 * @author   <Author>
 * @version  1.0.0
 * @package  <Package>
 */

get_header();
?>

<article>
	<header>
		<h1><?php the_title(); ?></h1>
		<?php the_content(); ?>
	</header>
</article>

<?php
get_footer();
