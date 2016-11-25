//= require openseadragon/jquery

(function($) {
  function initOpenSeadragon() {
    $('picture[data-openseadragon]').openseadragon();
  }

  var handler = 'ready';
  if (typeof Turbolinks !== 'undefined' && Turbolinks.supported) {
    // Turbolinks 5
    if (Turbolinks.BrowserAdapter) {
      handler = 'turbolinks:load';
    } else {
      // Turbolinks < 5
      handler = 'page:load ready';
    }
  }

  $(document).on(handler, function(event){
      initOpenSeadragon();
      //clear cache to avoid to have the turbolinks:load event fired twice (and then the initOpenSeadragon initialized twice resulting of two views
      Turbolinks.clearCache();
  });

})(jQuery);
