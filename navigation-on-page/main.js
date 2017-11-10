(function () { // scroll top button
    var btn = $('.scroll-to-top-btn');
    $(document).ready(function () {
        btn.on('click', function (e) {
            e.preventDefault();

            $('body, html').animate({
                scrollTop: 0
            }, 1000)

        })
    });

    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();

        if (scrollTop > 400) {
            btn.css('opacity', 1);
        } else {
            btn.css('opacity', 0);
        }
    });
})();


(function () { // landing navigation buttons
    $('.header__link').on('click', function (e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var section = $('.section');
        var reqOffset = section.filter('#' + target).offset().top;
        var item = $(this).closest('.header__item');
        var anotherLinks = item.closest().find('.header__link');

        $('html, body').animate({
            scrollTop: reqOffset
        }, 1000);

       $(this).addClass('active').closest('.header__item').siblings().find('.header__link').removeClass('active');
    });
    $(window).scroll(function () {
        var scrolltop = $(window).scrollTop();

        console.log('section offset:' + $('.section').eq(1).offset().top);
        console.log('window scroll:' + scrolltop);

        $('.section').each(function () {
           var sectionPosition = $(this).offset.top;
        });
    })
})();