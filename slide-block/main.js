$(document).ready(function () {
    var allowAnimate = true;

    $('.start-animate').on('click', function (e) {
        e.preventDefault();


        var block = $('.animate__block');

        if (allowAnimate) {
            allowAnimate = false;
            if (block.hasClass('active')){
                block.animate({
                    left: 0
                }, 1500, function () {
                    block.removeClass('active');
                    allowAnimate = true;
                });

            } else {
                block.animate({
                    left: 200
                }, 1500, function () {
                    block.addClass('active');
                    allowAnimate = true;
                });
            }
        }

    });
});