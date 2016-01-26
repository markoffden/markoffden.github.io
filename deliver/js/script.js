jQuery(function () {
    'use strict';
    var $ = jQuery.noConflict();
    
    $(document).ready(function () {
        
        /* REPLACE INNER IMAGE WITH BACKGROUND FOR inner-img-to-bg class
        -------------------------------------------------------------------- */
        $('.inner-img-to-bg img').each(function () {
            var imgSrc = $(this).attr('src');
            $(this).parent().css('background-image', 'url(' + imgSrc + ')').end().remove();
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
        
        /*** ARRAY GAME ***/
        var oldArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var newArray = [];
        
        while (oldArray.length) {
            newArray.push(oldArray.splice(0, 3));
        }
                
        console.log(oldArray);
        console.log(newArray);
    });
});