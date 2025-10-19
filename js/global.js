$(document).ready(function() {

    // gamburger menu show and hide
    $(".open-menu-button").click(function() {
        $(".gamburger-mega-menu").show();
    });
    $(".close-menu-button").click(function() {
        $(".gamburger-mega-menu").hide();
    });

    // gamburger menu collapse when screen narrow    
    bsContainerWidth = $("body").width()
    if (bsContainerWidth > 767)
        $(".mega-menu-callapse").addClass("show");
    else
        $(".mega-menu-callapse").removeClass("show");

    $(".setting-icon").click(function() {
        $(".setting-collapse").toggle();
    });

});

// Card toggler
$('.card-custom button').click(function() {
    var elementId = $(this).data('target-id');
    $('#' + elementId).toggle();
});


// Text resizer
$("#resize-text").on("input", function() {
    $(":root").css('font-size', $(this).val() + "px");
});


// Remote styles from TinyMCE content
$(".rich-text").find("*").removeAttr('style class valign border cellspacing cellpadding');


// Screen reader
let synth = window.speechSynthesis;


$('#allow-speech').click(function() {

    speak();

});


function speak() {
    $('*').hover(function (event) {

        synth.cancel();

        let el = $(event.currentTarget).text();

        event.stopPropagation();

        let utterThis = new SpeechSynthesisUtterance(el);

        $("#allow-speech").is(":checked") ? synth.speak(utterThis) : null;

    });
}


// Search 

$('#search-open').click(function() {
    $('#search').css('display', 'block');
});

$('#search-close').click(function() {
    $('#search').css('display', 'none');
});

let url = baseUrl + '/' + lang + '/interactive-services/search';

$('#search-input').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();

        window.location = url + '?query=' + $(this).val();
    }
});

$('#search-input-sec').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();

        window.location = url + '?query=' + $(this).val();
    }
});


$('#search-button').on('click', function() {
    window.location = url + '?query=' + $('#search-input-sec').val();
});


