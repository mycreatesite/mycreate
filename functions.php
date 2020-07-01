<?php

//wp_head不要ファイル削除
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
//wp_head不要ファイル削除

//script読み分け
function loadMyJsScripts() {
  if ( !is_admin() ){
    wp_enqueue_script('jquery','//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
    wp_enqueue_script('jquery-ui-core','//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', array('jquery'));
  }
  if ( is_home() || is_front_page() ){
	wp_enqueue_script('myplugins_front.js', get_template_directory_uri() . '/common/js/myplugins_front.js');
	wp_enqueue_script('myplugins_gallery.js', get_template_directory_uri() . '/common/js/frontPage.js');
  }
  if ( is_singular('gallery') ){
    wp_enqueue_script('myplugins_gallery.js', get_template_directory_uri() . '/common/js/myplugins_gallery.js');
  }
  wp_enqueue_script('common.js', get_template_directory_uri() . '/common/js/common.js');
}
add_action('wp_footer', 'loadMyJsScripts');
//script読み分け

//reCaptchaパフォーマンス対応
add_action('wp_print_scripts', function () {
    wp_dequeue_script('google-recaptcha');
});
function cf7_defer_recaptcha() {
    wp_enqueue_script('cf7recap', get_template_directory_uri() . '/common/js/recaptcha.js', array('jquery'), '1.0');
}
add_action('get_footer', 'cf7_defer_recaptcha');
//reCaptchaパフォーマンス対応

//ver～削除
function remove_wp_ver_info( $src ) {
  if (strpos( $src, 'ver=' )){
    $src = remove_query_arg( 'ver', $src );
  }
  return $src;
}
add_filter( 'style_loader_src', 'remove_wp_ver_info', 9999 );
add_filter( 'script_loader_src', 'remove_wp_ver_info', 9999 );
//ver～削除

//管理画面・ログイン画面CSS適用
add_action('admin_print_styles','print_admin_stylesheet');
add_action('login_head','print_admin_stylesheet');
function print_admin_stylesheet(){
	echo '<link href="'.get_template_directory_uri().'/common/css/my-admin.css" type="text/css" rel="stylesheet" media="all"/>'.PHP_EOL;
}
//管理画面・ログイン画面CSS適用

//ログイン・管理画面favicon
function adminLogin_add_favicon() {
  $url = get_template_directory_uri() . '/common/img/favicon.ico';
  echo '<link rel="shortcut icon" href="' . $url . '" />';
}
add_action('login_head', 'adminLogin_add_favicon');
add_action('admin_head', 'adminLogin_add_favicon');
//ログイン・管理画面favicon

//ログイン画面ロゴリンク先・title
function custom_login_logo_url() {
  return get_bloginfo('url');
}
add_filter( 'login_headerurl', 'custom_login_logo_url' );
function custom_login_logo_title() {
  return get_bloginfo( 'name' );
}
add_filter( 'login_headertitle', 'custom_login_logo_title' );
//ログイン画面ロゴリンク先・title

//ログイン画面背景
function custom_login_bg() { ?>
  <style>
    .login {
      background: url(<?php echo get_template_directory_uri(); ?>/common/img/loginbg.jpg) no-repeat center center;
      background-size: cover;
    }
  </style>
<?php }
add_action( 'login_enqueue_scripts', 'custom_login_bg' );
//ログイン画面背景

//トップページblogエリアメインクエリ変更（クエリ設定方法①）
add_action( 'pre_get_posts', 'my_pre_get_posts' );
function my_pre_get_posts( $query ) {
	if ( is_admin() || !$query->is_main_query() ) {
		return;
	}
  if ( $query->is_home() ) {
		$query->set('posts_per_page',3);
    return;
	}
}
//トップページblogエリアメインクエリ変更（クエリ設定方法①）

//アイキャッチ機能
add_theme_support('post-thumbnails');
//アイキャッチ機能

//SVGアップロード許可
function SVG_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'SVG_mime_types');
//アイキャッチ欄サムネイル表示
function fix_svg_thumb_display() {
  echo '<style>
  td.media-icon img[src$=".svg"], img[src$=".svg"].attachment-post-thumbnail, #set-post-thumbnail img[src$=".svg"]{
  width: 100% !important;
  height: auto !important;
  }</style>';
}
add_action('admin_head', 'fix_svg_thumb_display');
//SVGアップロード許可

//imgタグ中のサイズ等削除
add_filter( 'post_thumbnail_html', 'custom_attribute' );
function custom_attribute( $html ){
    $html = preg_replace('/(width|height)="\d*"\s/', '', $html);
    return $html;
}
//imgタグ中のサイズ等削除

//抜粋関係
function mycreate_excerpt($length) {
	global $post;
	$content = mb_substr(strip_tags($post->post_excerpt),0,$length);
	if(!$content){
		$content =  $post->post_content;
		$content =  do_shortcode($content);
		$content =  strip_tags($content);
		$content =  str_replace("&nbsp;","",$content);
		$content =  html_entity_decode($content,ENT_QUOTES,"UTF-8");
		$content =  mb_substr($content,0,$length);
	}
	return $content;
}
//抜粋関係

//wp_get_archives年表記置き換え
add_filter('gettext', 'my_gettext', 20, 3);
function my_gettext($translated_text, $original_text, $domain) {
  if ($original_text == '%1$s %2$d') {
  $translated_text = '%2$s.%1$02d';
  }
return $translated_text;
}
//wp_get_archives年表記置き換え

//投稿アーカイブ(一覧)有効化
function post_has_archive( $args, $post_type ) {
	if ( 'post' == $post_type ) {
		$args['rewrite'] = true;
    $args['label'] = 'ブログ';
		$args['has_archive'] = 'allblogs';
	}
	return $args;
}
add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );
//投稿アーカイブ(一覧)有効化

//投稿画面style読み込み
add_editor_style();
//投稿画面style読み込み

//投稿画面「見出し１」等を削除
function custom_editor_settings( $initArray ){
$initArray['block_formats'] = "文章=p; 大見出し=h2; 中見出し=h3; 小見出し=h4; 追記補足=h5; 整形txt=pre;";
return $initArray;
}
add_filter( 'tiny_mce_before_init', 'custom_editor_settings' );
//投稿画面「見出し１」等削除

//投稿最終更新日表示
function get_modifiedTime($format) {
    $modifiedTime = get_the_modified_time('Ymd');
    $postedTime = get_the_time('Ymd');
    if ($postedTime > $modifiedTime) {
        return get_the_time($format);
    } elseif ($postedTime === $modifiedTime) {
        return null;
    } else {
        return get_the_modified_time($format);
    }
}
//投稿最終更新日表示

//////////////////////////ショートコード//////////////////////////
//ma-ya’s CREATE
function shortcode_myc(){
	return "ma-ya’s CREATE［まーやずくりえいと］";
}
add_shortcode('myc','shortcode_myc');

//PHP file include
function include_php($params = array()) {
  extract(shortcode_atts(array(
    'file' => 'default'
  ), $params));
  ob_start();
  include(get_stylesheet_directory() . "/php_module_templates/$file.php");
  return ob_get_clean();
} 
add_shortcode('phpinc','include_php');

//////////////////////////ショートコード//////////////////////////
