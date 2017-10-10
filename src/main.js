// ---------SIDE NAV--------------

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// ---------SLIDER----------------

$('.slide').on('dragstart', function(event) { event.preventDefault(); });
$(function () {
  var sliding = startClientX = startPixelOffset = pixelOffset = currentSlide = slideNr =0,
      slideCount = $('.slide').length;
  
  $('#slides').on('mousedown touchstart', slideStart);
  $('#slides').on('mouseup touchend', slideEnd);
  $('#slides').on('mousemove touchmove', slide);

  function slideStart(event) {
    if (event.originalEvent.touches)
      event = event.originalEvent.touches[0];
    if (sliding == 0) {
      sliding = 1;
      startClientX = event.clientX;
    }
  }

  function slide(event) {
    event.preventDefault();
    if (event.originalEvent.touches)
      event = event.originalEvent.touches[0];
    var deltaSlide = event.clientX - startClientX;

    if (sliding == 1 && deltaSlide != 0) {
      sliding = 2;
      startPixelOffset = pixelOffset;
    }
    
    if (sliding == 2) {
      var touchPixelRatio = 1;
      if ((currentSlide == 0 && event.clientX > startClientX) || (currentSlide == slideCount - 1 && event.clientX < startClientX))
        touchPixelRatio = 3;
      pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;
      $('#slides').css('-webkit-transform', 'translate3d(' + pixelOffset + 'px,0,0)').removeClass();
    }
  }
  
  function slideEnd(event) {
    if (sliding == 2) {
      var oldPixelOffset = pixelOffset;
      sliding = 0;
      currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide - 1;
      currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
      pixelOffset = currentSlide * -$('#viewport').width();
      if(pixelOffset < oldPixelOffset) {
        slideNr++;} else if (pixelOffset > oldPixelOffset){
        slideNr--;}

      $('#temp').remove();
      $('<style id="temp">#slides.animate{-webkit-transform:translate3d(' + pixelOffset + 'px,0,0)}</style>').appendTo('head');
      $('#slides').addClass('animate').css('-webkit-transform', '');

    }
  }
    
});

var viewport = $('#viewport');
  var slides = $('#slides');
$(window).on('resize', function(e) {
  var width = viewport.width();
  var xValue = -(width*currentSlide);
   slides.css('-webkit-transform', 'translate3d(' + xValue + 'px,0,0)').removeClass();
});


