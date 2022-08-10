$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('white-bg');
        $('.header-middle').addClass('animated');
    } else {
        $('.header').removeClass('white-bg');
        $('.header-middle').removeClass('animated');
    }
});
/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});
// $('.has-sub-mb').each(function() {
//     var $this = $(this);
//     $('i', this).on('click', function() {
//             $('.submenu', $this).slideToggle();
//             $($this).toggleClass('show')
//         })
// })

$(document).ready(function() {

    // $('.lang').on('click', function() {
    //     $('ul', this).slideToggle();
    // })
    // $('.lang-mb').on('click', function() {
    //     // console.log('aaa')
    //     $('ul', this).slideToggle();
    // })
    // $(document).on('click', function(e) {
    //     if ($(e.target).closest('.lang-mb').length === 0) {
    //         // $("#CONTAINER").hide();
    //         $('.lang-mb ul').slideUp();
    //     }
    //     if ($(e.target).closest('.lang').length === 0) {
    //         // $("#CONTAINER").hide();
    //         $('.lang ul').slideUp();
    //     }
    // })

    $("#date1").datepicker();
    $("#date2").datepicker();

    $('.header-left__burger-icon').on('click', function() {
        $('body').toggleClass('menu-open');
        $('.header-left__burger').toggleClass('open');
        $('.header-menu').toggleClass('open');
        $('.header-menu').removeClass('submenu-opened');
        $('.menu__list.menu__list--level-0').removeClass('submenu-open');

        $('.menu__list.menu__list--level-1').removeClass('open');
        $('.menu__item.menu__item--has-children').removeClass('active');
    });

    $('.menu__item.menu__item--has-children').on('click', function() {
        $(this).toggleClass('active');
        $('.menu__list.menu__list--level-0').toggleClass('submenu-open');

        $('.menu__list.menu__list--level-1').toggleClass('open');
        $('.header-menu').toggleClass('submenu-opened');
    });

    $('.btn--read-more').on('click', function() {
        $(this).toggleClass('open');
        // $('.room-content__more-content').toggleClass('open');
        // $('.main-content__more-content').toggleClass('open');

        var r = $(this).parent().parent().find(".main-content__more-content__wrapper").outerHeight(),
            o = $(this).parent().parent().find(".main-content__more-content"),
            n = 600;
        if (o.hasClass('open')) {
            o.stop().animate({
                height: 0
            }, n);
            o.removeClass('open');
        } else {
            o.stop().animate({
                height: r + 20
            }, n);
            o.addClass('open');
        }
    });


    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });





    //hover room
    $('.home-rooms__list .home-rooms__list__item:nth-child(1)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(1)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(1)').addClass('active');
    })
    $('.home-rooms__list .home-rooms__list__item:nth-child(2)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(2)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(2)').addClass('active');
    })
    $('.home-rooms__list .home-rooms__list__item:nth-child(3)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(3)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(3)').addClass('active');
    })
    $('.home-rooms__list .home-rooms__list__item:nth-child(4)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(4)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(4)').addClass('active');
    })
    $('.home-rooms__list .home-rooms__list__item:nth-child(5)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(5)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(5)').addClass('active');
    })
    $('.home-rooms__list .home-rooms__list__item:nth-child(6)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(6)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(6)').addClass('active');
    })
    $('.home-rooms__list .home-rooms__list__item:nth-child(7)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(7)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(7)').addClass('active');
    })
    $('.home-rooms__list .home-rooms__list__item:nth-child(8)').on('mouseenter', function() {
        $('.home-rooms__list .home-rooms__list__item.active').removeClass('active');
        $('.home-rooms__photos__item.active').removeClass('active');
        $('.home-rooms__photos__item:nth-child(8)').addClass('active');
        $('.home-rooms__list .home-rooms__list__item:nth-child(8)').addClass('active');
    })




    //hover header-menu
    $('.menu__link').on('mouseenter', function() {
        var menuId = $(this).attr("data-menu-id"),
            $photosItem = $('.header-menu__photos__item');

        var $currItem2 = $('.header-menu__photos__item[data-menu-id=' + menuId + ']');

        $('.header-menu__photos__item[data-menu-id=' + menuId + ']').addClass('active');
    })
    $('.menu__link').on('mouseleave', function() {
        var menuId = $(this).attr("data-menu-id"),
            $photosItem = $('.header-menu__photos__item');

        var $currItem2 = $('.header-menu__photos__item[data-menu-id=' + menuId + ']');

        $('.header-menu__photos__item[data-menu-id=' + menuId + ']').removeClass('active');
    })

    $('.lang').on('mouseenter', function() {
        $('.lang-list').slideDown();
    })
    $('.lang').on('mouseleave', function() {
        $('.lang-list').slideUp();
    })


    $('.home-rooms__photos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".home-rooms__list",
        mobileFirst: !0,
        responsive: [{
            breakpoint: 576,
            settings: "unslick"
        }]
    });
    $('.home-rooms__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".home-rooms__photos",
        dots: !1,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 1500,
        mobileFirst: !0,
        responsive: [{
            breakpoint: 576,
            settings: "unslick"
        }]
    });

    $('.home-rooms__list').on('afterChange', function(t, i, n) {
        $('.home-rooms__pagination span').text("" + (n + 1));
    });


    $('.room-gallery__images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        items: 1,
        nav: true,
        // dots: true
    });
    var $status = $('.room-gallery__pagination');
    var $slickElement = $('.room-gallery__images');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

});