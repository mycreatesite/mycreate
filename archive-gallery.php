    <?php get_header();?>
	<main class="main">
		<div class="contentsWrap type-gallery clearfix">
		<h1 class="heading">gallery</h1>

		<div class="mainContent">
			<?php get_template_part('loop','gallery');?>
		</div>

		<?php get_sidebar('gallery_category');?>

		</div>
    </main>
    <?php get_footer();?>
