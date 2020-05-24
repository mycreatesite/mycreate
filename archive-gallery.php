    <?php get_header();?>

    <div class="contentsWrap type-gallery clearfix">
      <h1 class="heading">gallery</h1>

      <div class="mainContent">
        <?php get_template_part('loop','gallery');?>
      </div>

      <?php get_sidebar('gallery_category');?>

    </div>
    
    <?php get_footer();?>
