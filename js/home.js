
$(document).ready(function() {
    // owl-carousel with item 3
    $('.owl-item-3').owlCarousel({
        loop: true,
        margin: 15,
        autoplay: true,
        autoPlaySpeed: 2000,
        autoPlayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            678: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.owl-item-4').owlCarousel({
        margin: 15,
        autoplay: true,
        autoPlaySpeed: 2000,
        autoPlayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            678: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // owl-carousel with item 1
    $('.owl-item-1').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoPlaySpeed: 2000,
        autoPlayTimeout: 2000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        items: 1,
        smartSpeed: 1050
    })

    var owlButton = $('.owl-carousel');
    owlButton.owlCarousel();
    var a = 0;
    $(window).scroll(function() {
        var oTop = $('.counters').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            });
            a = 1;
        }
    });

});
$(document).ready(function() {
    var $slides = document.querySelectorAll('.slide-index');
    var $controls = document.querySelectorAll('.slider__control');
    var numOfSlides = $slides.length;
    var slidingAT = 1300; // sync this with scss variable
    var slidingBlocked = false;

    [].slice.call($slides).forEach(function($el, index) {
        var i = index + 1;
        $el.classList.add('slide-' + i);
        $el.dataset.slide = i;
    });

    [].slice.call($controls).forEach(function($el, index) {
        $el.addEventListener('click', controlClickHandler);

        if (index === 1) {
            setInterval(function()  {
                controlClickHandler.bind($el)();
            }, 7000);
        }
    });



    function controlClickHandler() {
        if (slidingBlocked) return;
        slidingBlocked = true;
        var $control = this;
        var isRight = $control.classList.contains('m--right');
        var $curActive = document.querySelector('.slide-index.s--active');
        var index = +$curActive.dataset.slide;
        (isRight) ? index++ : index--;
        if (index < 1) index = numOfSlides;
        if (index > numOfSlides) index = 1;
        var $newActive = document.querySelector('.slide-' + index);

        $control.classList.add('a--rotation');
        $curActive.classList.remove('s--active', 's--active-prev');
        document.querySelector('.slide-index.s--prev').classList.remove('s--prev');

        $newActive.classList.add('s--active');
        if (!isRight) $newActive.classList.add('s--active-prev');


        var prevIndex = index - 1;
        if (prevIndex < 1) prevIndex = numOfSlides;

        document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

        setTimeout(function() {
            [].slice.call($controls).forEach(function($el) {
                $el.addEventListener('click', controlClickHandler);
            });
            $control.classList.remove('a--rotation');
            slidingBlocked = false;
        }, slidingAT*0.75);

    };
}());
