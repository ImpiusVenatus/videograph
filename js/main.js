(function($) {

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work-gallery').masonry({
        itemSelector: '.work-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
    Owl Carousel
    --------------------*/
    $('.main-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
    })

    /*------------------
        Blog Slider
    --------------------*/
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        smartSpeed: 1200,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);