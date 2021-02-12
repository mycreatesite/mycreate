<footer class="footer">
  <div class="snsIconS">
    <a href="https://twitter.com/hello_myscreate" target="_blank" rel="noopener" aria-label="dribbble"><i class="fab fa-dribbble snsIcon"></i></a>
    <a href="https://twitter.com/hello_myscreate" target="_blank" rel="noopener" aria-label="twitter"><i class="fab fa-twitter snsIcon"></i></a>
    <a href="https://www.facebook.com/myscreate/" target="_blank" rel="noopener" aria-label="facebook"><i class="fab fa-facebook-square snsIcon"></i></a>
    <a href="https://github.com/mycreatesite/" target="_blank" rel="noopener" aria-label="github"><i class="fab fa-github snsIcon"></i></a>
    <a href="https://codepen.io/mycreatesite/" target="_blank" rel="noopener" aria-label="codepen"><i class="fab fa-codepen snsIcon"></i></a>
  </div>
  <a href="<?php echo home_url();?>"><img width="70" height="35" class="logo-footer" src="<?php echo get_template_directory_uri(); ?>/common/img/myc_logo_w.svg" alt="ma-ya's CREATE [まーやずくりえいと]"></a>
  <p class="copyright">© Copyright <?php echo date('Y');?> │ ma-ya’s CREATE All rights reserved.</p>
  <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
    <img width="135" height="165" class="mogiFooterImg" src="<?php echo get_template_directory_uri(); ?>/common/img/tamtam_footer.svg" alt="たむたむのひとこと日記">
  </a>
</div>
<?php endif; ?>
<!--mogiFooter-->


<?php get_template_part('modals');?>
<?php wp_footer();?>


</body>
</html>