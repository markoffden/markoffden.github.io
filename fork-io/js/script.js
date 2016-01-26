jQuery(function () {
    'use strict';
    var $ = jQuery.noConflict();
    
    $(document).ready(function () {
        
        /*** SUPERSLIDER ***/
        $('.superslider').css({'position': 'relative', 'overflow': 'hidden'}).each(function () {
            var thisSlider = $(this);
            thisSlider.append('<div class="slider-control prev">', '<div class="slider-control next">');
            thisSlider.find('.slider-control').css({
                'border-top': '3px solid black',
                'border-right': '3px solid black',
                'width': '25px',
                'height': '25px',
                'position': 'absolute',
                'top': 0,
                'bottom': 0,
                'margin': 'auto',
                'cursor': 'pointer'
            });
            thisSlider.find('.slider-control.prev').css({
                '-webkit-transform': 'rotate(-135deg)',
                '-moz-transform': 'rotate(-135deg)',
                '-o-transform': 'rotate(-135deg)',
                '-ms-transform': 'rotate(-135deg)',
                'transform': 'rotate(-135deg)',
                'left': '3%'
            });
            thisSlider.find('.slider-control.next').css({
                '-webkit-transform': 'rotate(45deg)',
                '-moz-transform': 'rotate(45deg)',
                '-o-transform': 'rotate(45deg)',
                '-ms-transform': 'rotate(45deg)',
                'transform': 'rotate(45deg)',                
                'right': '3%'
            });
            var items = thisSlider.find('.item');
            items.wrapAll('<div class="items-container">');
            var container = thisSlider.find('.items-container');
            container.css({
                'position': 'relative',
                'left': 0,
                'overflow': 'hidden',
                'width': items.length * 100 + '%'
            }).data('slide', 0);
            items.each(function (index, value) {
                $(this).css({
                    'width': thisSlider.width(),
                    'float': 'left'
                });
            });
            container.height(items.eq(container.data('slide')).height());
            $(window).resize(function () {
                items.css('width', thisSlider.width());
                container.height(items.eq(container.data('slide')).height());
            });
            
            function slideNext() {
                if (container.data('slide') == items.length - 1) {
                    container.data('slide', 0);
                } else {
                    container.data('slide', container.data('slide') + 1);
                }
                container.animate({'left': container.data('slide') * -100 + '%'});
                container.height(items.eq(container.data('slide')).height());
            }
            function slidePrev() {
                if (container.data('slide') == 0) {
                    container.data('slide', items.length - 1);
                } else {
                    container.data('slide', container.data('slide') - 1);
                }
                container.animate({'left': container.data('slide') * -100 + '%'});
                container.height(items.eq(container.data('slide')).height());
            }
            var autoSlide = setInterval(slideNext, 3000);
            thisSlider.find('.slider-control.prev').click(function () {
                slidePrev();
                clearInterval(autoSlide);
                autoSlide = setInterval(slideNext, 3000);
            });
            thisSlider.find('.slider-control.next').click(function () {
                slideNext();
                clearInterval(autoSlide);
                autoSlide = setInterval(slideNext, 3000);
            });
        });
    });
});