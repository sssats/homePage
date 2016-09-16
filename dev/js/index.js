"use strict";

var WebFontConfig = {
    google: {
        families: ['Roboto Mono', 'Material Icons']
    },
    active: function () {
        showPage()
    }
};
(function () {
    var wf = document.createElement("script");
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.async = 'true';
    document.head.appendChild(wf);
})();


var $navItems = $('.card-wrapper__navigation a');
var $cardItems = $('.card');

function showPage() {
    $('.preloader').addClass('loaded').on('transitionend', function () {
        $('.preload').removeClass('preload');
    });
}


$('.card-wrapper__navigation').on('click', 'a', function (ev) {
    if ($(this).hasClass('active')) return false;

    var hash = $(this).attr('href');
    var currentIndex = hash.substr(1);
    var $beforeClickActiveTab = $cardItems.filter('.active');

    $beforeClickActiveTab.addClass('visible')

    $navItems.removeClass('active');
    $(this).addClass('active');

    $cardItems.removeClass('active');
    $cardItems.on('animationend', function () {
        $cardItems.removeClass('interactive');
        $beforeClickActiveTab.removeClass('visible');
    });
    $cardItems.filter('[name=' + currentIndex + ']').addClass('active interactive')
    ev.preventDefault();
});