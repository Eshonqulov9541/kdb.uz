$(document).ready(function() {
    $('.owl-photo').owlCarousel({
        margin: 15,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1.3
            },
            600: {
                items: 2.5
            },
            1000: {
                items: 3.5
            }
        }
    })
});