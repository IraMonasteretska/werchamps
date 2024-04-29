$(document).ready(function () {
    var swiper = new Swiper(".heroslider", {
        loop: true,
        speed: 1000,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                var bulletNumber = (index + 1) < 10 ? '0' + (index + 1) : (index + 1);
                return '<span class="' + className + '">' + bulletNumber + "</span>";
            },
        },
    });

    // language
    $('.current__lang').click(function () {
        $(this).next('ul').slideToggle();
    });

    // show text
    $('.showtext').click(function () {
        $(this).prev('.descr').find('.hidebox').slideToggle();
        $(this).toggleClass('rotatearr');
    });

    // testimonials
    var swiper = new Swiper(".testimslider", {
        centeredSlides: true,
        initialSlide: 2,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {

            },
            768: {

            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 140,
            },
        },
    });

    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('scrollheader');
        } else {
            $('.header').removeClass('scrollheader');
        }
    });

    if ($(this).scrollTop() > 20) {
        $('.header').addClass('scrollheader');
    } else {
        $('.header').removeClass('scrollheader');
    }

    // FAQ
    $('.faqheader').click(function () {
        $(this).toggleClass('rotate');
        $(this).next('.faqbody').slideToggle();
    })


    // select
    if ($('select')) {
        $(".custom-select").select2({
            placeholder: "Comment pouvons-nous vous aider",
            minimumResultsForSearch: -1
        });
    }


})