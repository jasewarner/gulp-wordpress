<?php
/**
 * Index
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
 */

?>

<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

	<?php while ( have_posts() ) : the_post(); ?>

		<header>
			<h1><?php the_title(); ?></h1>
		</header>

		<?php the_content(); ?>

	<?php endwhile; ?>

<?php endif; ?>

<?php get_footer();
