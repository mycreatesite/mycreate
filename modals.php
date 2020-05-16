<section id="modalArea" class="modalArea">
  <div id="modalOuter" class="modalOuter"></div>
    <div class="modalInner">
      <div class="modalWrapper">
        <div id="modalClose" class="modalClose">
          <i class="fas fa-times"></i>
        </div>
        <div class="modalContents">
          <h2 class="modalHeading">What's new?</h2>
          <p class="italic keycolorTx subTxt">- the latest post -</p>
          <?php
          $args = array(
            'post_type' => array('post','gallery'),
            'posts_per_page' => 1,
          );
          ?>
          <?php $WN_modal_query = new WP_Query( $args ); ?>
          <?php while ( $WN_modal_query->have_posts() ) : $WN_modal_query->the_post(); ?>
              <div class="modalThumb animated flipInY">
                <?php if (has_post_thumbnail()) : ?>
                  <?php the_post_thumbnail('thumbnail');?>
                <?php else : ?>
                  <img src="<?php echo get_template_directory_uri();?>/img/noimage.svg">
                <?php endif; ?>
              </div>
            <a href="<?php the_permalink();?>">
              <div class="modalPostArea">
                <p class="modalPostType">
                  <?php if (get_post_type() === 'post'): ?>
                    <span class="modalTypePost">blog</span>
                  <?php elseif (get_post_type() === 'gallery'): ?>
                    <span class="modalTypeGallery">gallery</span>
                  <?php endif; ?>
                </p>
                <p class="modalPostDate"><span class="modalDateDesc">posted on</span><time datetime="<?php the_time('c');?>"><?php the_time('Y.m.d');?></time></p>
                <?php if (get_post_type() === 'post'): ?>
                  <h3 class="modalPostTitle modalPostIcon"><?php the_title();?></h3>
                <?php elseif (get_post_type() === 'gallery'): ?>
                  <h3 class="modalPostTitle modalGalleryIcon"><?php the_title();?></h3>
                <?php endif; ?>
              </div>
            </a>
            <a class="btn modalBtn" href="<?php the_permalink();?>">check</a>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
        </div>
      </div>
    </div>
</section>
