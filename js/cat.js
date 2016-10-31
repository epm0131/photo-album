(function () {
  'use strict';

  $('.photos')
    .find('li')
    .on('click', function zoomIn(event) {
        $(this).toggleClass('zoomed');
        $('main').toggleClass('zooming');
        $(this).append($ ('nav') );



})

})();
