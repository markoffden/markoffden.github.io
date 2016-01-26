jQuery(function () {
    'use strict';
    var $ = jQuery.noConflict();
    
    $(document).ready(function () {

        $('#portfolio-filter a').on( 'click', function( event ) {
            event.preventDefault();
            var target = $(this).data('target');
            
            $.ajax({
                url: ajaxportfolio.ajaxurl,
                type: 'post',
                data: {
                    action: 'ajax_portfolio',
                    target: target,
                    portfolioNonce : ajaxportfolio.portfolioNonce
                },
                success: function( result ) {
                    $('#results').css('display', 'none').empty().append(result);
                    var items = $('#results').find('.item');
                    var rowCount = 0;
                    while (items.length) {
                        rowCount++;
                        var row = items.splice(0, 3);
                        $('#results').append('<div class="portfolio-items"><div class="container"><div class="row row-' + rowCount + '">');
                        $('#results .portfolio-items .container .row-' + rowCount).append(row);
                    }
                    setTimeout(function () {
                        $('#results').css('display', 'block');
                    }, 25);                   
                }
            });
        });
    });
});