$(document).ready(function() {


    $("#owl-example").owlCarousel({
        // Most important owl features
        items: 4,
        pagination: true,
        paginationSpeed: 1000,
        navigation: true,
        navigationText: ["", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 800,
    });

    $("#navigation").sticky({
        topSpacing: 75,
    });

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 15000,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'easeInOutExpo'
    });

    $('#top-nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 1200
    });
    //Initiat WOW JS
    new WOW().init();

});

function upDate(previewPic) {
    var imgURL = previewPic.src;

    document.getElementById("preview").style.backgroundColor = "#CCEECC"
    document.getElementById("preview").style.backgroundImage = "url(" + imgURL + ")";
    document.getElementById("preview").style.backgroundSize = "cover";
}

function unDo() {
    document.getElementById("preview").style.backgroundColor = "#8e68ff"
    document.getElementById("preview").innerHTML = "&nbsp;";
    document.getElementById("preview").style.backgroundImage = "images/photo/1.png";
}

$(function() {

    var $btn = $('#btnTop');
    var $home = $('#topSection');
    var startpoint = $home.scrollTop() + $home.height();

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > startpoint) {
            $btn.show();
        } else {
            $btn.hide();
        }
    });
});