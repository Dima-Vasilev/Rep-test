$(document).ready(function () {
    $('.btns__link').on('click', function (e) {
        e.preventDefault();

        var item = $(this).closest('.btns__item');
        var reqIndex = item.index();
        var contentItems = $('.text__item');

        item.addClass('active').siblings().removeClass('active');
        contentItems.eq(reqIndex).addClass('active').siblings().removeClass('active');

    })
});