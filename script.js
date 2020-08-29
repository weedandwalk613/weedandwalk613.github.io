$(document).ready(function(){
  var $window = $(window);

  $('div[data-type="background"]').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({ 
        backgroundPosition: coords 
      });
    });
  });
});

  /* Open Menu */
	$( ".open-close-btn" ).on('click touchstart', function(e) {
		// prevent default anchor click 
		e.preventDefault();
		$(".overlay").toggleClass("overlay-open");
		$("#hamburger-icon").toggleClass("hamburger-open");
	});