jQuery(function () {
    'use strict';
    var $ = jQuery.noConflict();
    
    $(document).ready(function () {
        
        /* REPLACE INNER IMAGE WITH BACKGROUND FOR .inner-img-to-bg CLASS
        -------------------------------------------------------------------- */
        $('.inner-img-to-bg img').each(function () {
            var imgSrc = $(this).attr('src');
            $(this).parent().css('background-image', 'url(' + imgSrc + ')').end().remove();
        });
        
        /* DYNAMIC DOTS NAVIGATION AND .active CLASSES FOR BOOTSTRAP CAROUSEL
        -------------------------------------------------------------------- */
        $('.carousel-dynamic-dots').each(function () {
            var thisCarousel = $(this);
            var carouselID = thisCarousel.attr('id');
            thisCarousel.prepend('<ol class="carousel-indicators">');
            $(this).find('.item').first().addClass('active');
            $(this).find('.item').each(function (index, elem) {
                thisCarousel.find('.carousel-indicators').append('<li data-target="#' + carouselID + '" data-slide-to="' + index + '"></li>')
            });
            thisCarousel.find('.carousel-indicators').children().first().addClass('active');
        });

        
        /* SEARCH TOGGLE
        -------------------------------------------------------------------- */
        $('#toggle-search').click(function (e) {
            if ($('#navbar-search').hasClass('show')) {
                $('#navbar-search').animate({
                    'height': 0,
                    'margin-top': 0}, 250).removeClass('show');
            } else {
                $('#navbar-search').animate({
                    'height': '52px',
                    'margin-top': '10px'}, 250).addClass('show');
            }
            e.preventDefault();
        });
    });
});