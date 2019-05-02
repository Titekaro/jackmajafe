$(document).ready(function () {
    var musicCover = $('.music-content__items .music__item');
    var musicControl = {
        next: $('.music-content__items .slide-control-next'),
        prev: $('.music-content__items .slide-control-prev')
    };
    /**
     * Initialize current slide to first.
     * @type {number}
     */
    var i = 0;
    var activeCover = musicCover.eq(i).addClass('active');
    /**
     *
     */
    var toggleActive = function () {
        if (musicCover.hasClass('active')) {
            musicCover.removeClass('active');
        }
        activeCover.addClass("active");
    };
    /**
     * Pass to the next slide when we click to the next btn.
     */
    musicControl.next.on('click', function () {
        if (i === musicCover.length - 1) {
            i = 0;
        } else {
            i = i + 1;
        }
        activeCover = musicCover.eq(i);
        toggleActive();
    });
    /**
     * Pass to the preview slide when we click to the prev btn.
     */
    musicControl.prev.on('click', function () {
        if (i === 0) {
            i = musicCover.length - 1;
        } else {
            i = i - 1;
        }
        activeCover = musicCover.eq(i);
        toggleActive();
    });

});