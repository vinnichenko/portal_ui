//quick contacts selection
quickContactsSelection('.subheader .quick-contacts');
quickContactsSelection('.map-section .quick-contacts');

function quickContactsSelection(element) {
    $(element).find('li').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var dataTip = $(this).data('tip');
        $(element).find('.tip').text(dataTip).addClass('visible');
    }).on('mouseout', function () {
        $(this).removeClass('active');
        $(element).find('.tip').removeClass('visible');
    });
}
//end quick contacts selection

//focusing in a search field
focusInOut('.search input', 'form');
focusInOut('.signup input', '.pseudo');

function focusInOut(element, parentElement) {
    $(element).on('focus', function () {
        $(this).parent(parentElement).addClass('focused');
    }).on('blur', function () {
        $(this).parent(parentElement).removeClass('focused');
    });
}
//end focusing in a search field

//main slider
$('.bxslider').bxSlider({
    pagerCustom: '#bx-pager',
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev'
});
//end main slider

//page onload effect
$(window).load(function () {
    setTimeout(function () {
        var $overlay = $('.page-overlay'),
            $loader = $('.loader');
            timeout = 800;
        $overlay.fadeOut(timeout);
        $loader.remove();
        setTimeout(function () {
            $overlay.remove();
        }, timeout);
    }, 1000);
});
//end page onload effect

//scroll to top button
$(window).scroll(function(){
    if ($(this).scrollTop() > 700) {
        $('.scroller').fadeIn();
    } else {
        $('.scroller').fadeOut();
    }
});
$('.scroller').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
});
//end scroll to top button

//tabs
$('.tabs .tabs-nav a').on('click', function (e) {
    e.preventDefault();
    var tabId = $(this).data('tab');
    $(this).parent('li').addClass('active')
        .siblings().removeClass('active');
    $('.portfolio-items li').each(function () {
        $(this).hide();
        if ($(this).data('tab') == tabId) {
            $(this).fadeIn(400);
        } else if (tabId == "all") {
            $(this).fadeIn(400);
        }
    });
});
//end tabs

//wow js animations by scrolling
new WOW().init();
//end wow js animations by scrolling

//search icon functionality
$('.search .icon-search').on('click', function() {
    $(this).parents('.search').addClass('opened');
    $('.search input').focus();
});
$('.search input').on('blur', function () {
    $(this).parents('.search').removeClass('opened');
});
//end search icon functionality

//main menu functionality
$('.drop-btn').on('click', function () {
    $(this).toggleClass('menu-opened').next('ul').slideToggle(400);
});
//end main menu functionality