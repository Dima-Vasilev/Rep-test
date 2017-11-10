// (function () {
//     var btn = $('.scroll-to-top-btn');
//     $(document).ready(function () {
//         btn.on('click',function (e) {
//             e.preventDefault();
//
//             $('html, body').animate({
//                 scrollTop: 0
//             }, 1000)
//
//         })
//     });
//
//     $(window).scroll(function () {
//         var scrollTop = $(window).scrollTop();
//
//         if (scrollTop > 400) {
//             btn.css('display', 'block');
//         } else {
//             btn.css('display', 'none');
//         }
//     })
// })();
//
// (function () {
//     $('.header__link').on('click', function (e) {
//         e.preventDefault();
//
//         var hrefLink = $(this).attr('href');
//         var section = $('.section');
//         var reqOffset = section.filter('#' + hrefLink).offset().top;
//
//        $('html, body').animate({
//            scrollTop: reqOffset
//        }, 1000);
//
//         $(this).addClass('active').closest('.header__item').find('.header__link').removeClass('active');
//
//     })
// })();

$(document).ready(function () {
   $('.name').on('click', function (e) {
       e.preventDefault();

        var item = $(this).closest('.user-card-item');
        var userCard = item.find('.user-card');
        var anotherCards = item.siblings().find('.user-card');


        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            userCard.slideUp();
        } else {
            userCard.slideDown();
            $(this).addClass('active');
            anotherCards.slideUp();
        }

   })
});