$(document).ready(function() {
    $('.slider1').slick({
        slidesToShow: 1,
        vertical: true,
        speed: 1000,
        verticalSwiping: true,
        arrows: true,
        asNavFor: ".main-slider",
        appendArrows: $('.third-arrows'),
        prevArrow: '<div class="main-arrow-prev third-arrow"><img src="../img/arrow-back.svg" alt=""></div>',
        nextArrow: '<div class="main-arrow-next third-arrow"><img src="../img/arrow-next.svg" alt=""></div>'
    });

    $('.slider2').slick({
        slidesToShow: 1,
        vertical: true,
        speed: 1000,
        arrows: false,
        verticalSwiping: true,
        cssEase: 'ease-in-out',
        asNavFor: ".main-slider"
    });

    $('.slider3').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".main-slider"
    });

    $('.slider4').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".main-slider"
    });
    $('.slider5').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".main-slider"
    });

   $('.price-slider').slick({
       slidesToShow: 1,
       speed: 1000,
       dots: false,
       arrows: false,
       fade: true,
       cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
       touchThreshold: 100
   });

    // slider arrows my-style
    $('.price-slider__arrow .main-arrow-next').on('click', function () {
        $('.price-slider').slick('slickNext');
    });


    $('.price-slider__arrow .main-arrow-prev').on('click', function () {
        $('.price-slider').slick('slickPrev');
    });
    // slider arrows my-style

    var time = 5, // время перелистывания слайдов главного слайдера
        bar,
        tick,
        isPause,
        percentTime,
        //Слайдер на десктопе
        $slick = $('.portfolio__slider1');
    $slick.slick({
        slidesToShow: 1,
            // vertical: true,
            speed: 1000,
            // verticalSwiping: true,
            arrows: true,
            asNavFor: ".portfolio-slider",
            appendArrows: $('.portfolio-arrows'),
            prevArrow: '<div class="slick-prev third-arrow"></div>',
            nextArrow: '<div class="slick-next third-arrow"></div>'
    });
    bar = $('.progress');
    $('.portfolio__slider1 .slick-prev, .portfolio__slider1 .slick-next').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    });
    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }
    function interval() {
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }
    function resetProgressbar() {
        bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    $('.portfolio__slider1 .main-arrow-prev, .portfolio__slider1 .main-arrow-next').click(function() {
        startProgressbar();
    });
    startProgressbar();

    $('.portfolio__slider2').slick({
            slidesToShow: 1,
            speed: 1000,
            arrows: false,
            cssEase: 'ease-in-out',
            asNavFor: ".portfolio-slider"
        });

        $('.portfolio__slider3').slick({
            slidesToShow: 1,
            vertical: true,
            arrows: false,
            speed: 1000,
            verticalSwiping: true,
            asNavFor: ".portfolio-slider"
        });


    //Меню на мобильном
    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu-list').toggleClass('active');
        $('.menu-overlay').toggleClass('active');
    });

    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    //Скрытие меню после 2сек
    if($(window).width() > 992) {
        setTimeout(function(){
            $('.menu-list').removeClass('active');
            $('.menu-btn').removeClass('active');
        }, 2000);
    }


    //плавный скролл
    $(document).ready(function () {
        $('.menu-item-link').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 500);
            }
            return false;
        });
    });
    //плавный скролл end

    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .overlay');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('display', 'flex')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });
        });

        close.click(function () {
            modal
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('display', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });
    });
    //end




    //Инициализация wow.js
    // var wow = new WOW(
    //     {
    //         boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
    //         animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
    //         offset:       200,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
    //         mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
    //         live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
    //         scrollContainer: null, // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    //         resetAnimation: true
    //     }
    // );
    // wow.init();

});


function myForm() {
    const
        placeholders = document.querySelectorAll('.styled-input__placeholder-text'),
        inputs = document.querySelectorAll('.styled-input__input');

    placeholders.forEach(function (el, i) {
        let value = el.innerText,
            html = '';
        for (let w of value) {
            if (!value) value = '&nbsp;';
            html += `<span class="letter">${w}</span>`;
        }
        el.innerHTML = html;
    });

    inputs.forEach(function (el) {
        let parent = el.parentNode;
        el.addEventListener('focus', function () {
            parent.classList.add('filled');
            placeholderAnimationIn(parent, true);
        }, false);
        el.addEventListener('blur', function () {
            if (el.value.length) return;
            parent.classList.remove('filled');
            placeholderAnimationIn(parent, false);
        }, false);
    });

    function placeholderAnimationIn(parent, action) {
        let act = action ? 'add' : 'remove';
        let letters = parent.querySelectorAll('.letter');
        letters = [].slice.call(letters, 0);
        if (!action) letters = letters.reverse();
        letters.forEach(function (el, i) {
            setTimeout(function () {
                let contains = parent.classList.contains('filled');
                if (action && !contains || !action && contains) return;
                el.classList[act]('active');
            }, 50 * i);
        });
    }

    setTimeout(function () {
        document.body.classList.add('on-start');
    }, 100);

    setTimeout(function () {
        document.body.classList.add('document-loaded');
    }, 1000);
}

$(document).ready(function() {
    var animationStared = false;

    $(window).scroll(function () {
        if (animationStared) return;
        if ($(window).scrollTop() + $(window).height() > $('#callback-section').height() + $('#callback-section').offset().top) {
            myForm();
            animationStared = true
        }
    });

});

//Анимации
$(document).ready(function () {

    function gsapTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapTop').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).height();
            var tween = TweenMax.fromTo(this, animationDuration,
                {y: +position},
                {y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapTop2() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapTop2').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).height();
            var tween = TweenMax.fromTo(this, animationDuration,
                {y: -position},
                {y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapWidth() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapWidth').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1;
            var tween = TweenMax.fromTo(this, animationDuration,
                {width: 0},
                {width: "100%", ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapHeight() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapHeight').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 3;
            var tween = TweenMax.fromTo(this, animationDuration,
                {height: 0},
                {height: "100%", ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }

    function gsapFade() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapFade').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 4;
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0},
                {opacity: 1, ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFadeTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter", offset: "-66"}});

        $('.gsapFadeTop').each(function() {
            var animationDelay = $(this).data("delay") || 0.5;
            var animationDuration = $(this).data("duration") || 1.5;
            var position = $(this).data("height") || $(this).height();
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0, y: position},
                {opacity: 1, y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }

    function gsapFadeTop2() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapFadeTop2').each(function() {
            var animationDelay = $(this).data("delay") || 0.5;
            var animationDuration = $(this).data("duration") || 1;
            var position = $(this).data("height") || $(this).height();
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0, y: position},
                {opacity: 1, y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }

    function gsapFadeLeft() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter", offset: "-66"}});

        $('.gsapFadeLeft').each(function() {
            var animationDelay = $(this).data("delay") || 0.5;
            var animationDuration = $(this).data("duration") || 2;
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0, x: -100},
                {opacity: 1, x: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }

    function gsapCard() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapCard').each(function() {
            var animationDelay = $(this).data("delay") || 0.5;
            var animationDuration = $(this).data("duration") || 1;
            var position = $(this).data("height") || $(this).height();
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0, y: position,  width: '80%'},
                {opacity: 1, y: 0, width: "100%", ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }


    function gsapFadeInRight() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapFadeInRight').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: +position},
                {x: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFadeInLeft() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapFadeInLeft').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: -position, opacity: 0},
                {x: 0, opacity: 1, ease: Power4.easeOut, delay: animationDelay}, '=-1'
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapUp() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter", offset: "-66"}});

        $('.gsapUp').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.1;
            var position = $(this).height() * 2;
            var tween = TweenMax.fromTo(this, animationDuration,
                {y: position},
                {y: 0, ease: Power4.ease, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }

    function gsapSlideGo() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapSlideGo').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var tween = TweenMax.fromTo(this, animationDuration,
                {scale: 0.8, opacity: 0},
                {scale: 1, opacity: 1, ease: Power4.ease, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapSlideGallery() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapSlideGallery').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: 0},
                {x: "-100%", ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapSlideGraf() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", offset: "-66"}});

        $('.gsapSlideGraf').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: 0},
                {x: "100%", ease: Power0.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }

    if ($(window).width() > 480) {
        gsapTop();
        gsapFade();
        gsapFadeTop();
        gsapFadeTop2();
        gsapCard();
        gsapFadeInRight();
        gsapFadeLeft();
        gsapTop2();
        gsapWidth();
        gsapHeight();
        gsapFadeInLeft();
        gsapUp();
        gsapSlideGo();
        gsapSlideGallery();
        gsapSlideGraf();
    }

});

$(window).on('load', function(){
    $('.preloader').delay(3300).fadeOut(700);
});




