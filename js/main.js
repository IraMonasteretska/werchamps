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
            768: {
                slidesPerView: 1.2,
                spaceBetween: 50,
            },
            992: {
                slidesPerView: 1.6,
                spaceBetween: 70,
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

    // table content
    if ($('privacysect__table')) {
        $(".privacysect__table ul").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top - 100 }, 1000);
        });


        const links = document.querySelectorAll('.privacysect__table li a');
        window.addEventListener('scroll', () => {
            const anchors = document.querySelectorAll('.privacysect__content [id]');
            anchors.forEach(anchor => {
                if (anchor.closest('.privacysect__content')) {
                    const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                    if (window.pageYOffset >= anchorTop - 140) {
                        links.forEach(link => {
                            const correspondingLink = document.querySelector(`.privacysect__table a[href="#${anchor.id}"]`);
                            if (correspondingLink) {
                                link.classList.remove('active');
                                correspondingLink.classList.add('active');
                            }
                        });
                    }
                }
            });
        });

        $(".infosect__table-content").on("click", function () {
            $(this).toggleClass('show');
        });
    }

    // mob menu

    $('.menubtn').click(function () {
        $('.mobmenu').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.mobmenu').removeClass('show');
    });

    // ----
    var menuBtn = document.querySelector('.menubtn');
    var mobMenu = document.querySelector('.header');
    var overlay = null;

    menuBtn.addEventListener('click', function () {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'overlay';
            mobMenu.appendChild(overlay);
            setTimeout(function () {
                overlay.classList.add('active');
            }, 10);
        }
    });

    var closeMenuBtn = document.querySelector('.closemenu');

    closeMenuBtn.addEventListener('click', closeMenu);

    function closeMenu() {
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(function () {
                mobMenu.removeChild(overlay);
                overlay = null;
            }, 0);
        }
    }

    $('body').on('click', '.overlay', function() {
        $('.mobmenu').removeClass('show');
        closeMenu()
        
    });

})