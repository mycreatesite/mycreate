<footer class="footer">
  <div class="snsIconS">
    <a href="https://twitter.com/hello_myscreate" target="_blank" rel="noopener"><i class="fab fa-twitter snsIcon"></i></a>
    <a href="https://www.facebook.com/myscreate/" target="_blank" rel="noopener"><i class="fab fa-facebook-square snsIcon"></i></a>
    <a href="https://github.com/mycreatesite/" target="_blank" rel="noopener"><i class="fab fa-github snsIcon"></i></a>
    <a href="https://codepen.io/mycreatesite/" target="_blank" rel="noopener"><i class="fab fa-codepen snsIcon"></i></a>
  </div>
  <a href="<?php echo home_url();?>"><img class="logo-footer" src="<?php echo get_template_directory_uri(); ?>/img/myc_logo_w.svg" alt="ma-ya's CREATE [まーやずくりえいと]"></a>
  <p class="copyright">© Copyright 2018 │ ma-ya’s CREATE All rights reserved.</p>
</footer>


<!--rollBack-->
<div id="rollBack">
  <i class="fas fa-chevron-up faa-float animated" aria-hidden="true"></i>
</div>
<!--rollBack-->


<!--mogiFooter-->
<?php if (is_home() || is_front_page()):?>
<div id="mogiFooter">
  <a href="/?s=もぎたん">
    <img class="mogiFooterImg" src="<?php echo get_template_directory_uri(); ?>/img/mogi_footer.svg" alt="HELLO! from mogitan.">
  </a>
</div>
<?php endif; ?>
<!--mogiFooter-->


<?php wp_footer();?>


<!--drawsvg-->
<script>jQuery(function(){var mycLogo=jQuery("#mycLogo").drawsvg({duration:1000,stagger:80,easing:"swing",callback:function(){jQuery("#mycLogo g").addClass("fillAnim")}});<?php if (is_home() || is_front_page()):?>setTimeout(function(){mycLogo.css("opacity",1).drawsvg("animate")},1800);<?php else:?>mycLogo.css("opacity",1).drawsvg("animate");<?php endif;?>});</script>
<!--front-plugin-setting.js_minified-->
<?php if (is_home() || is_front_page()):?>
<script>jQuery(function(){var a=jQuery("#loadingArea");setTimeout(function(){a.addClass("loadingFade").fadeOut(700)},1500)});jQuery(function(){var a=jQuery("#myslider");a.juicyslider({mode:"cover",width:"100%",height:"100%",mask:"none",bgcolor:"#000",autoplay:8000,shuffle:false,show:{effect:"fade",duration:1500},hide:{effect:"fade",duration:1500}})});jQuery(function(){var a=new Rellax(".rellax")});</script>
<?php endif;?>


</body>
</html>