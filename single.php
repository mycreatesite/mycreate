    <?php get_header();?>

    <div class="contentsWrap clearfix">
      <p class="heading">blog</p>

      <div class="mainContent">
        <?php
          if(have_posts()):
            while(have_posts()):the_post();
        ?>
          <article id="post-<?php the_ID();?>" <?php post_class('articleArea');?>>
            <h1 class="articleAreaBlogTitle"><?php the_title();?></h1>
            <p class="postDate"><time datetime="<?php the_time('Y-m-d');?>"><?php the_time('Y.m.d');?></time></p>
            <p class="category keycolorBg">
              <a href="<?php $cats = get_the_category(); ?><?php $cat = $cats[0]; ?><?php echo get_category_link($cat->cat_ID); ?>">
                <?php echo get_cat_name($cat->term_id); ?>
              </a>
            </p>
            <section class="articleAreaBody">
              <?php the_content();?>
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

      <?php get_sidebar();?>
      
    </div>

    <?php get_template_part('modals');?>
    <?php get_footer();?>
