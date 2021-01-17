<footer class="footer">
  <div class="snsIconS">
    <a href="https://twitter.com/hello_myscreate" target="_blank" rel="noopener"><i class="fab fa-twitter snsIcon"></i></a>
    <a href="https://www.facebook.com/myscreate/" target="_blank" rel="noopener"><i class="fab fa-facebook-square snsIcon"></i></a>
    <a href="https://github.com/mycreatesite/" target="_blank" rel="noopener"><i class="fab fa-github snsIcon"></i></a>
    <a href="https://codepen.io/mycreatesite/" target="_blank" rel="noopener"><i class="fab fa-codepen snsIcon"></i></a>
  </div>
  <a href="<?php echo home_url();?>"><img class="logo-footer" src="<?php echo get_template_directory_uri(); ?>/common/img/myc_logo_w.svg" alt="ma-ya's CREATE [まーやずくりえいと]"></a>
  <p class="copyright">© Copyright <?php echo date('Y');?> │ ma-ya’s CREATE All rights reserved.</p>
</footer>


<!--rollBack-->
<div id="rollBack">
  <i class="fas fa-chevron-up faa-float animated" aria-hidden="true"></i>
</div>
<!--rollBack-->


<!--mogiFooter-->
<?php if (is_home() || is_front_page()):?>
<div id="mogiFooter">
  <a href="https://tamtam-1p-diary.netlify.app/" target="_blank" rel=”noopener noreferrer”>
    <img class="mogiFooterImg" src="<?php echo get_template_directory_uri(); ?>/common/img/tamtam_footer.svg" alt="たむたむのひとこと日記">
  </a>
</div>
<?php endif; ?>
<!--mogiFooter-->


<?php get_template_part('modals');?>
<?php wp_footer();?>


</body>
</html>