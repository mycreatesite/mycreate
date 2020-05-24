<aside class="sideBar type-gallery">
  <div class="sideLogo">
    <img src="<?php echo get_template_directory_uri(); ?>/img/sideLogo.svg">
  </div>
  <div class="linkToAllArea">
    <a class="btn btnToList" href="<?php echo home_url('/gallery');?>">all works</a>
    <a class="btn btnToList" href="<?php echo home_url('/allblogs');?>">to blogs</a>
  </div>
  <div class="categoryArea">
    <h4 class="headingSide">category</h4>
    <ul>
      <?php
        $args = array(
          'title_li'=>'',
          'show_count'=>'true',
          'taxonomy'=>'gallery_category',
        );
        wp_list_categories($args);
      ?>
    </ul>
  </div>
</aside>
