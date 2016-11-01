(function () {
  'use strict';

  $('.photos')
    .find('li')
    .on('click', function zoomIn(event) {
        $(this).toggleClass('zoomed');
        $('main').toggleClass('zooming');
        $(this).append($ ('nav') );
})

  $('nav')
    .find('button')
      .on('click', function previousPic(event){
        event.stopPropagation();

        var currentImage = $(this).closest('li')
        var previousImage = $(this).closest('li').prev();
        var nextImage = $(this).closest('li').next();
        var lastImage = $(this).last();

        if ($(this).is('.previous')) {
          previousImage.append($ ('nav') );
          previousImage.toggleClass('zoomed');
          currentImage.removeClass('zoomed');
        }

        else {
          nextImage.append($ ('nav') );
          nextImage.toggleClass('zoomed');
          currentImage.removeClass('zoomed');
        }
});

})();
