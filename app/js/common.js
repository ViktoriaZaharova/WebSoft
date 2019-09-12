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
    // var $body = $(window.document.body);
    // function bodyFreezeScroll() {
    //     $body.css({'overflow': 'hidden', 'position': 'relative'});
    // }
    //
    // function bodyUnfreezeScroll() {
    //     $body.css({'overflow': 'auto', 'position': 'relative'});
    // }

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu-list').toggleClass('active');
        $('.menu-overlay').toggleClass('active');
        // if($(window).width() < 993) {
        //     if($(this).hasClass('active')){
        //         bodyUnfreezeScroll();
        //     }
        //     else {
        //         bodyFreezeScroll();
        //     }
        // }

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

// animate print text
// $(document).ready(function(){
//     $.fn.animate_Text = function() {
//         var string = this.text();
//         return this.each(function(){
//             var $this = $(this);
//             $this.html(string.replace(/./g, '<span class="new_zakaz">$&</span>'));
//             $this.find('span.new_zakaz').each(function(i, el){
//                 setTimeout(function(){ $(el).addClass('div_opacity_zakaz'); }, 100 * i);
//             });
//         });
//     };
//     $('.price-box__wrapper > .landing-bubble').show();
//     $('.price-box__wrapper > .landing-bubble').animate_Text();
// });

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
    }, 1800);
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
