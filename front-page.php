
    <?php get_header();?>

    <section class="mainVisual">
      <div id="myslider" class="juicyslider">
      	<ul>
      		<li><img src="<?php echo get_template_directory_uri(); ?>/img/slide1.jpg" alt="slide1"></li>
      		<li><img src="<?php echo get_template_directory_uri(); ?>/img/slide2.jpg" alt="slide2"></li>
      		<li><img src="<?php echo get_template_directory_uri(); ?>/img/slide3.jpg" alt="slide3"></li>
      	</ul>
      	<div class="nav next"><i class="fas fa-chevron-right"></i></div>
      	<div class="nav prev"><i class="fas fa-chevron-left"></i></div>
      </div>
      <div class="container">
        <div class="proverbArea rellax" data-rellax-speed="-1">
          <p class="proverb">move,forward.</p>
          <h1 class="siteName"><span class="keycolorTx italic">web design</span> ma-ya’s CREATE</h1>
        </div>
      </div>
      <div class="ornamentArea">
        <div class="ornament1 rellax" data-rellax-speed="-10"></div>
        <div class="ornament2 rellax" data-rellax-speed="2"></div>
        <div class="ornament3 rellax" data-rellax-speed="9"></div>
      </div>
    </section>

    <section id="introduction" class="introduction contentsFrame">
      <div class="container">
        <h2 class="heading">introduction</h2>
        <p id="commentAnim">初めまして。東京・神奈川を拠点とするWEBデザイナー、ma-ya’s CREATE［まーやずくりえいと］といいます。都内の制作会社でWEBデザイナーとして勤務しつつ、休日はWEBで遊ぶかお酒（ホッピー）を呷って過ごします。WEB制作は半分趣味。WEBから印刷系デザインまで、やれそうなことなら何でもやりたい派。シンプルでスマートな中にほんのりとポップさを感じるデザインを基本に置きつつ、ダイナミックな表現や異なるテイストを出せるように奮闘する、気づけば30代のいいオッサンです。</p>
        <a class="btn" href="<?php echo home_url('/gallery');?>">gallery</a>
      </div>
    </section>

    <section id="skills" class="skills contentsFrame">
      <div class="container">
        <h2 class="heading">skills</h2>
        <div class="skillsLayout">
          <div class="skill forShow1 clearfix">
            <div class="skillName">
              <img src="<?php echo get_template_directory_uri(); ?>/img/coding.svg" alt="コーディング">
              <h3>コーディング</h3>
              <p class="keycolorTx italic">coding</p>
            </div>
            <div class="skillDesc">
              <p>HTML / CSSによるコーディングをはじめとして、JavaScript等で動きを持たせたWEBサイトの構築が可能です。またサイト全体のデザイン・コーディングはもちろん、ランディングページ等の単体ページ制作もお気軽にご相談ください。</p>
            </div>
          </div>
          <div class="skill forShow1 clearfix">
            <div class="skillName">
              <img src="<?php echo get_template_directory_uri(); ?>/img/wp.svg" alt="CMSサイト構築">
              <h3>CMSサイト</h3>
              <p class="keycolorTx italic">cms website</p>
            </div>
            <div class="skillDesc">
              <p>Wordpressを用いたWEBサイト構築が可能です。既存テーマのカスタマイズはもちろん、独自テーマ作成にも対応致します。当サイトも独自テーマにより構築しております。なおWixなど他CMSサービスによるサイト制作等もご相談下さい。</p>
            </div>
          </div>
          <div class="skill forShow1 clearfix">
            <div class="skillName">
              <img src="<?php echo get_template_directory_uri(); ?>/img/print.svg" alt="印刷物">
              <h3>印刷物</h3>
              <p class="keycolorTx italic">printed matter</p>
            </div>
            <div class="skillDesc">
              <p>チラシ・フライヤー・パッケージからCDジャケット・オリジナルグッズデザイン等の印刷物デザインが可能です。制作物によりますが、ご希望により印刷業者への入稿まで対応することでクライアント様側の負担を最小限とすることも可能です。</p>
            </div>
          </div>
          <div class="skill forShow1 clearfix">
            <div class="skillName">
              <img src="<?php echo get_template_directory_uri(); ?>/img/graph.svg" alt="コーディング">
              <h3>WEB画像</h3>
              <p class="keycolorTx italic">web banner</p>
            </div>
            <div class="skillDesc">
              <p>バナーやECサイトの商品画像など、WEB上で使用する画像制作に幅広く対応可能です。ECサイト商品画像に関してはランキング入りした商品も多く、大変好評を頂いております。またロゴ制作なども対応しておりますのでお気軽にご相談下さい。</p>
            </div>
          </div>
        </div>
        <a class="btn" href="/wp-content/themes/mycreate/pages/wicd/" target="_blank">features</a>
      </div>
    </section>

    <section id="gallery" class="gallery contentsFrame">
      <div class="container">
        <h2 class="heading">gallery</h2>
        <!-- ↓トップページgalleryエリアサブクエリ設定（クエリ設定方法②）↓ -->
        <?php
        $args = array(
          'post_type' => 'gallery',
          'posts_per_page' => 2,
        );
        ?>
        <?php $front_gallery_query = new WP_Query( $args ); ?>
        <?php while ( $front_gallery_query->have_posts() ) : $front_gallery_query->the_post(); ?>
          <?php $galleryClasses = array('galleryItem','forShow2');?>
          <div id="post-<?php the_ID();?>" <?php post_class($galleryClasses);?>>
            <a href="<?php the_permalink();?>">
              <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('thumbnail');?>
              <?php else : ?>
                <img src="<?php echo get_template_directory_uri();?>/img/noimage.svg">
              <?php endif; ?>
            </a>
          </div>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
        <!-- ↑トップページgalleryエリアサブクエリ設定（クエリ設定方法②）↑ -->
        <a class="btn" href="<?php echo home_url('/gallery');?>">more</a>
      </div>
    </section>

    <section id="blog" class="blog contentsFrame bottomFlip">
      <div class="container">
        <h2 class="heading">blog</h2>
        <div class="blogs clearfix">

          <?php
            if(have_posts()):
            while(have_posts()):the_post();
          ?>
          <?php $blogClasses = array('blogItem','forShow3');?>
            <div id="post-<?php the_ID();?>" <?php post_class($blogClasses);?>>
              <a href="<?php the_permalink();?>">
                <div class="blogImg">
                  <?php if (has_post_thumbnail()) : ?>
                    <?php the_post_thumbnail('thumbnail');?>
                  <?php else : ?>
                    <img src="<?php echo get_template_directory_uri();?>/img/noimage.svg">
                  <?php endif; ?>
                </div>
                <div class="blogText">
                  <p class="postDate"><time datetime="<?php the_time('Y-m-d');?>"><?php the_time('Y.m.d');?></time></p>
                  <p class="category keycolorBg"><?php $cat = get_the_category(); ?><?php $cat = $cat[0]; ?><?php echo get_cat_name($cat->term_id); ?></p>
                  <h3 class="blogTitle"><?php the_title();?></h3>
                </div>
              </a>
            </div>
          <?php
            endwhile;
            endif;
          ?>

        </div>
        <a class="btn" href="<?php echo home_url('/allblogs');?>">more</a>
      </div>
    </section>

    <section id="contact" class="contact">
      <video class="contactVideo" autoplay loop muted poster="<?php echo get_template_directory_uri();?>/img/contact_bg.jpg">
        <source src="<?php echo get_template_directory_uri();?>/img/contact_bg.webm" type="video/webm">
        <source src="<?php echo get_template_directory_uri();?>/img/contact_bg.mp4" type="video/mp4">
        <img src="<?php echo get_template_directory_uri();?>/img/contact_bg.jpg" alt="contact">
      </video>
      <div class="container">
        <h2 class="heading">contact</h2>
        <div class="contactForm forShow4">
          <?php echo do_shortcode('[contact-form-7 id="25" title="myCREATE_contact"]'); ?>
        </div>
      </div>
    </section>


    <?php get_template_part('modals');?>
    <?php get_footer();?>
