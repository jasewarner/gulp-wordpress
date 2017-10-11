<?php
/**
 * Default post template.
 *
 * @category Category
 * @package  Package
 * @author   Author
 * @license  License
 * @link     Link
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
