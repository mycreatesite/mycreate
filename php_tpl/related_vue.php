<?php
  $arg = array(
    'orderby' => 'date', 
    'order' => 'DESC', 
    's' => 'こまけぇこたぁいいんだよ ─ のんびりVue.js超入門',
  );
  $vuePosts = get_posts( $arg );
  if( $vuePosts ):
?>

<ul>
  <?php
    $pageId = get_the_ID();
    global $post;
    foreach ( $vuePosts as $post ) :
    setup_postdata( $post );
  ?>
    <li>
      <?php if ($pageId == $post->ID):?>
        <?php the_title(); ?>
      <?php else:?>
        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
      <?php endif;?>
    </li>
  <?php endforeach; ?>
</ul>

<?php
  endif;
  wp_reset_postdata();
?>