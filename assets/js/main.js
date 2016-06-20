(function($, window, document) {

  // Menu link toggle
  $(".menu-link").on("click", function (e) {
    $(".nav--primary-mobile").toggleClass("is-pulled-down");
    e.preventDefault();
  });

  // Navigation for mobile
  $( "nav.nav--primary" ).clone().removeClass('nav--primary').addClass('nav--primary-mobile').appendTo( ".l-header .l-constrained" );

  // Set page title background image to fit the container
  var backgroundImage = $(".l-page-title").data("src");
  if( backgroundImage && backgroundImage.length ) {
    $(".l-page-title").backstretch(backgroundImage);
  }

  // Use Modernizr for SVG fallback
  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }

}(window.jQuery, window, document));