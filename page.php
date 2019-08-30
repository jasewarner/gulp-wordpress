<?php
/**
 * Default page template
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
		</header>
		<?php the_content(); ?>
	</article>
<?php
get_footer();
