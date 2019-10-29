// //Открытие формы по клику на иконку телефона
// $('.header__button-phone').click(function() {
//   $(this).toggleClass('header__button-phone--open');
//   $('.header__nav').toggleClass('z0');
//   $('.text-form-fixed').toggleClass('text-form-fixed--open');
//   $('.text-second-fixed').toggleClass('text-second-fixed--open');
//   $('.mask').toggleClass('show');
// });
// //-----------------------------------------------------------------------------
// //Открытие мобильного меню
// $('.header__button-nav').click(function() {
//   $('.header__nav').toggleClass('header__nav--open');
//   $(this).toggleClass('header__button-nav--opened');
//   $('.mask__header-top').toggleClass('mask__header-top--show');
// });
// //-----------------------------------------------------------------------------
//Инициализация главного вертикального слайдера
var swiperMain = new Swiper('.main-slider', {
  direction: 'vertical',
  mousewheel: true,
  pagination: {
    el: '.main-slider-pagination',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '<span class="pagination__num">' + '0'+ (index + 1) + '</span>' + '</span>';
    },
  },
  breakpoints: {
    320: {
      pagination: false
    },
    768: {
      pagination: true
    }
  }
});
//Добавление *крайней* точки пагинации в вертикальном слайдере
$('.main-slider-pagination').append('<span class="swiper-pagination-bullet swiper-pagination-bullet--last"></span>');
//-----------------------------------------------------------------------------
$(document).ready(function() {

  setTimeout(() => {
    // $('.main-slider').trigger('mouseenter');
    // $('.main-slider').trigger('mouseleave');
    // $('.main-slider').trigger('pointerdown');
    // $('.main-slider').trigger('wheel');
    window.onresize();
  }, 1000);
});
