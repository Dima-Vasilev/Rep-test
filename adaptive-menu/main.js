$(document).ready(function () {
    $('.nav-menu').on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active');
        }

        $('nav ul').slideToggle(500);

    });

    $(window).resize(function () {
        if ($(window).width() > 663) {
            $('nav ul').removeAttr('style');
        }
    })
});