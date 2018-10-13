/////////////////////Luminous.js
jQuery(function () {
  jQuery('.galleryAreaBody img').each(function(){
    if( !jQuery(this).parent("a")[0] ){
      var zoomImgHref = jQuery(this).attr('src');
      jQuery(this).wrap('<a class="zoomImg noContents" href="' + zoomImgHref + '" />');
      }
  });
  //Luminous.js側設定
  var luminousTrigger = document.querySelectorAll('.zoomImg');
  new LuminousGallery(luminousTrigger);
});
/////////////////////Luminous.js
