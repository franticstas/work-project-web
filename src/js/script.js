$('#showLeft').click(function() {
  $('.menu-left').toggleClass('left-open');
  $('.mask').toggleClass('show');
});

$('.header__button-nav').click(function() {
  $('.menu-left').toggleClass('left-open');
  //$('.mask').toggleClass('show');
});

// $('.header__button-phone').on('click', function() {
//   var $btn = $(this);
//   if ($btn.hasClass('header__button-nav--closed') || !$btn.hasClass('header__button-nav--opened')) {
//     $btn.removeClass('header__button-nav--closed');
//     setTimeout(function() {
//       // Little hack in order to restart CSS animations ...
//       $btn.addClass('header__button-nav--opened');
//     }, 1);
//   } else if ($btn.hasClass('header__button-nav--opened')) {
//     $btn.removeClass('header__button-nav--opened');
//     setTimeout(function() {
//       // Little hack in order to restart CSS animations ...
//       $btn.addClass('header__button-nav--closed');
//     }, 1);
//   }
// });


// var swiperFirstPage = new Swiper('.first-page-slider', {
//   // Optional parameters
//   parallax: true,
//   pagination: {
//     el: '.first-page-pagination',
//     clickable: true,
//     renderBullet: function (index, className) {
//       let names = [];
//       $(".first-page-slider-wrapper .first-page-slide").each(function(i) {
//             names.push($(this).data("name"));
//           });
//       return '<span class="' + className + '">' + (names[index]) + '</span>';
//       },
//   },
// });

var swiperFirstPage = new Swiper('.first-page-slider', {
  // Optional parameters
  parallax: true,
  pagination: {
    el: '.first-page-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let names = [];
      $(".first-page-slider-wrapper .first-page-slide").each(function(i) {
        names.push($(this).data("name"));
      });
      return '<span class="' + className + '">' + '<span class="pagination-text">' + (names[index]) + '</span>' + '</span>';
    },
  },
});

var swiperSecondPage = new Swiper('.second-page-slider', {
  // Optional parameters
  parallax: true,
  pagination: {
    el: '.second-page-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let namesSecond = [];
      $(".second-page-slider-wrapper .second-page-slide").each(function(i) {
        namesSecond.push($(this).data("name"));
      });
      return '<span class="' + className + '">' + (namesSecond[index]) + '</span>';
    },
  },
});

// var swiperMain = new Swiper('.main-slider', {
//   direction: 'vertical',
//   mousewheel: true,
//   pagination: {
//     el: '.main-slider-pagination',
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + '<span class="pagination__num">' + '0'+ (index + 1) + '</span>' + '</span>';
//     },
//   },
//   breakpoints: {
//     320: {
//       pagination: false
//     },
//     768: {
//       pagination: true
//     }
//   }
// });
//
// //Добавление *крайней* точки пагинации в вертикальном слайдере
// $('.main-slider-pagination').append('<span class="swiper-pagination-bullet swiper-pagination-bullet--last"></span>');

$.Tween.propHooks.number = {
  get: function ( tween ){
    var num = tween.elem.innerHTML.replace(/^[^\d-]+/, '');
    return  parseFloat(num) || 0;
  },

  set: function( tween ) {
    var opts = tween.options;
    tween.elem.innerHTML = (opts.prefix || '')
      + tween.now.toFixed(opts.fixed || 0)
      + (opts.postfix || '');
  }
};

$('#num-2')
  .delay(500)
  .animate({ number: 57 }, {
    duration: 3000
  });

$('.header__button-phone').click(function() {
  $(this).toggleClass('header__button-phone--open');
  $('.header__nav').toggleClass('z0');
  //$('.header__right-fixed').toggleClass('header__right--open');
  //$('.text-second-fixed').toggleClass('text-second-fixed--open');
  $('.text-form-fixed').toggleClass('text-form-fixed--open');
  $('.text-second-fixed').toggleClass('text-second-fixed--open');
  $('.mask').toggleClass('show');
});

$('.header__button-nav').click(function() {
  $('.header__nav').toggleClass('header__nav--open');
  $(this).toggleClass('header__button-nav--opened');
  $('.mask__header-top').toggleClass('mask__header-top--show');
});

// $('.open-form').click(function() {
//   $('.text-form-fixed').addClass('text-form-fixed--open');
//   $('.text-second-fixed').addClass('text-second-fixed--open');
// });

var swiper = new Swiper('.about-company-slider', {
  slidesPerView: 3,
  initialSlide: 2,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// $(document).ready(function () {
//   updateContainer();
//   $(window).resize(function() {
//     updateContainer();
//   });
// });
//
// function updateContainer() {
//   var swiperMain = new Swiper('.main-slider', {
//     direction: 'vertical',
//     mousewheel: true,
//     pagination: {
//       el: '.main-slider-pagination',
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + '<span class="pagination__num">' + '0'+ (index + 1) + '</span>' + '</span>';
//       },
//     },
//     breakpoints: {
//       320: {
//         pagination: false
//       },
//       768: {
//         pagination: true
//       }
//     }
//   });
// }

var swiperStages = new Swiper('.stages-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function windowSize(){
  //console.log('ddddddddd');
  if ($(window).width() >= '1200'){
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
  }
  else {
    swiperMain.destroy();
    swiperMain = undefined;
    jQuery('.swiper-wrapper').removeAttr('style');
    jQuery('.swiper-slide').removeAttr('style');
  }
}

$(window).on('load resize',windowSize);

var swiperPortfolio = new Swiper('.portfolio-mobile-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpointsInverse: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    }
  }
});

var swiperTypesSites = new Swiper('.type-sites__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpointsInverse: true,
  breakpoints: {
    1170: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
    }
  }
});

var galleryThumbs = new Swiper('.portfolio-thumbs', {
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  loop: true,
  grabCursor: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var galleryTop = new Swiper('.portfolio-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});
