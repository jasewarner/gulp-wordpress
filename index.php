<?php
/**
 * Index template.
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
 */

get_header();

if ( have_posts() ) {

	while ( have_posts() ) {

		the_post();
		?>

		<article>
			<header>
				<h1><?php the_title(); ?></h1>
			</header>
			<?php the_content(); ?>
		</article>

		<?php
	}

}

get_footer();
