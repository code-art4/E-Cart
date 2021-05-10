$(document).ready(function() {

    var nav = $('.nav-menu, .nav-menu-profile');
    /* For the sticky navigation */
    $('.js--about-section').waypoint(function(direction) {
        if (direction == "down") {
            $('.top-navigation').addClass('sticky');
        } else {
            $('.top-navigation').removeClass('sticky');
        }
    }, {
        offset: '50px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-about-section').click(function() {
        $('html, body').animate({ scrollTop: $('.js--about-section').offset().top }, 1000);
    })

    /* Navigation scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    nav.slideToggle(200);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    $('.js--wp-animation-1').waypoint(function(direction) {
        $('.js--wp-animation-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-animation-2').waypoint(function(direction) {
        $('.js--wp-animation-2').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });

    $('.js--wp-animation-3').waypoint(function(direction) {
        $('.js--wp-animation-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        nav.slideToggle(400);

    })
});