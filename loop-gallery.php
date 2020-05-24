
        <?php
          if(have_posts()):
          while(have_posts()):the_post();
        ?>
        <?php $archiveClasses = array('archiveItem','forShow1');?>
        <article id="post-<?php the_ID();?>" <?php post_class($archiveClasses);?>>
          <div class="archiveItemImg">
            <?php if (has_post_thumbnail()) : ?>
              <?php the_post_thumbnail('thumbnail');?>
            <?php else : ?>
              <img src="<?php echo get_template_directory_uri();?>/img/noimage.svg">
            <?php endif; ?>
          </div>
          <div class="archiveItemText">
            <p class="postDate"><time datetime="<?php the_time('Y-m-d');?>"><?php the_time('Y.m.d');?></time></p>
            <p class="category keycolorBg">
              <?php
              if ($terms = get_the_terms($post->ID,'gallery_category')) {
                foreach ( $terms as $term ) {
                  echo esc_html($term->name);
                }
              }
              ?>
            </p>
            <h2 class="archiveItemBlogTitle"><?php the_title();?></h2>
            <div class="archiveItemSum">
              <p>
                client：<?php the_field('client');?><br>
                category：<?php the_field('category');?>
              </p>
            </div>
            <p class="archiveItemMore">read more <i class="fas fa-chevron-right"></i></p>
          </div>
          <a class="linkToSingle" href="<?php the_permalink();?>"></a>
        </article>
        <?php
          endwhile;
          else:
        ?>
          <?php if(is_search()):?>
            <p class="noResults"><i class="far fa-eye-slash fa-fw"></i> No results,sorry...</p>
          <?php else:?>
            <p class="noResults"><i class="far fa-eye-slash fa-fw"></i> No items,sorry...</p>
          <?php endif;?>
        <?php endif;?>

        <div class="forShow1">
          <?php if(function_exists('wp_pagenavi')){wp_pagenavi();}?>
        </div>
