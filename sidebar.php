<aside class="sideBar">
  <div class="sideLogo">
    <img src="<?php echo get_template_directory_uri(); ?>/common/img/sideLogo.svg">
  </div>
  <div class="searchArea">
    <form class="searchForm" action="<?php echo home_url('/');?>" method="get">
      <input class="searchInput" type="text" value="<?php the_search_query();?>" name="s" id="s">
      <button class="searchBtn" type="submit">
        <i class="fas fa-search faa-vertical faa-slow animated"></i>
      </button>
    </form>
  </div>
  <div class="linkToAllArea">
    <a class="btn btnToList" href="<?php echo home_url('/allblogs');?>">all blogs</a>
    <a class="btn btnToList" href="<?php echo home_url('/gallery');?>">to gallery</a>
  </div>
  <div class="categoryArea">
    <h2 class="headingSide">category</h2>
    <ul>
      <?php
        $args = array(
          'title_li'=>'',
          'show_count'=>'true',
        );
        wp_list_categories($args);
      ?>
    </ul>
  </div>
  <div class="archiveArea">
    <h2 class="headingSide">archive</h2>
    <ul>
      <?php
        $args = array(
          'type'=>'monthly',
          'show_post_count'=>'true',
        );
        wp_get_archives($args);
      ?>
    </ul>
  </div>
</aside>
