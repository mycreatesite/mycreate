    <?php get_header();?>

    <div class="contentsWrap type-gallery clearfix">
      <p class="heading">gallery</p>

      <div class="mainContent">
        <?php
          if(have_posts()):
            while(have_posts()):the_post();
        ?>
          <article id="post-<?php the_ID();?>" <?php post_class('articleArea');?>>
            <h1 class="articleAreaBlogTitle"><?php the_title();?></h1>
			<p class="category keycolorBg">
              <?php echo get_the_term_list($post->ID, 'gallery_category'); ?>
            </p>
			<div class='dateArea'>
				<p class="postDate"><time datetime="<?php the_time('c');?>"><?php the_time('Y.m.d');?></time></p>
			</div>
            <section class="articleAreaBody galleryAreaBody">
              <div class="galleryContentArea">
                <?php the_content();?>
              </div>
              <div class="galleryImg">
                <?php
                $image = get_field('img');
                $size = "large";
                $url = $image['sizes'][$size];
                $width = $image['sizes'][$size.'-width'];
                $height = $image['sizes'][$size.'-height'];
                ?>
                <img src="<?php echo $url;?>" width="<?php echo $width;?>" height="<?php echo $height;?>">
              </div>
              <div class="galleryProduct">
                <p><span class="italic galleryfieldBg">product</span><br><?php the_field('product');?></p>
              </div>
              <div class="galleryClient">
                <p><span class="italic galleryfieldBg">client</span><br><?php the_field('client');?></p>
              </div>
              <div class="galleryCategory">
                <p><span class="italic galleryfieldBg">category</span><br><?php the_field('category');?></p>
              </div>
              <div class="galleryIdea">
                <p><span class="italic galleryfieldBg">idea</span><br><?php the_field('idea');?></p>
              </div>
            </section>
          </article>
        <?php
            endwhile;
          endif;
        ?>
        <div class="prevNext">
          <?php if (get_previous_post()):?>
            <p><?php previous_post_link('%link','< prev'); ?></p>
          <?php else:?>
            <p class="noPage">< prev</p>
          <?php endif; ?>

          <?php if (get_next_post()):?>
            <p><?php next_post_link('%link','next >'); ?></p>
          <?php else:?>
            <p class="noPage">next ></p>
          <?php endif; ?>
        </div>
      </div>

      <?php get_sidebar('gallery_category');?>

    </div>

    <?php get_template_part('modals');?>
    <?php get_footer();?>
