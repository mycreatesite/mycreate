    <?php get_header();?>
	<main class="main">
		<div class="contentsWrap clearfix">
		<h1 class="headingSearch">" <?php the_search_query();?> "</h1>

		<div class="mainContent">
			<?php get_template_part('loop','indexList');?>
		</div>

		<?php get_sidebar();?>

		</div>
	</main>
    <?php get_footer();?>
