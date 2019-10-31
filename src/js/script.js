
$(document).ready(function() {
  //Открытие формы по клику на иконку телефона
  $('.header__button-phone').click(function() {
    $(this).toggleClass('header__button-phone--open');
    $('.header__nav').toggleClass('z0');
    $('.text-form-fixed').toggleClass('text-form-fixed--open');
    $('.text-second-fixed').toggleClass('text-second-fixed--open');
    $('.mask').toggleClass('show');
  });
//-----------------------------------------------------------------------------
//Открытие мобильного меню
  $('.header__button-nav').click(function() {
    $('.header__nav').toggleClass('header__nav--open');
    $(this).toggleClass('header__button-nav--opened');
    $('.mask__header-top').toggleClass('mask__header-top--show');
  });
//-----------------------------------------------------------------------------
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
//Отключение слайдера на ширине меньше 1170px
  function windowSize(){
    if ($(window).width() >= '1170'){
    }
    else {
      if (swiperMain) {
        swiperMain.destroy();
        swiperMain = undefined;
        jQuery('.main-slider .swiper-wrapper').removeAttr('style');
        jQuery('.main-slider .swiper-slide').removeAttr('style');
      }
    }
  }

  $(window).on('resize load',windowSize);
//-----------------------------------------------------------------------------
  const slider = document.querySelector('.main-slider');
  slider.dispatchEvent(new Event('mouseenter'));
//-----------------------------------------------------------------------------
  //Инициализация первого горизонтального слайдера на главной странице
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
//-----------------------------------------------------------------------------
  //Инициализация слайдера портфолио на главной странице
  var galleryThumbs = new Swiper('.portfolio-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    loop: true,
    grabCursor: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });

  // var galleryTop = new Swiper('.portfolio-top', {
  //   spaceBetween: 10,
  //   thumbs: {
  //     swiper: galleryThumbs
  //   }
  // });
//-----------------------------------------------------------------------------
  //Инициализация мобильного слайдера
  var swiperPortfolio = new Swiper('.portfolio-mobile-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpointsInverse: true,
    breakpoints: {
      // 768: {
      //   slidesPerView: 2,
      // },
    }
  });
//-----------------------------------------------------------------------------
  //Инициализация слайдера типов сайтов
  var swiperTypesSites = new Swiper('.type-sites__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpointsInverse: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    //spaceBetween: 10,
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
//-----------------------------------------------------------------------------
//Инициализация слайдера о компании
var swiperAboutCompany = new Swiper('.about-company-slider', {
  slidesPerView: 3,
  loop: true,
  observer: true,
  observeParents: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpointsInverse: true,
  breakpoints: {
    1170: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
    }
  }
});
//-----------------------------------------------------------------------------
//Инициализация слайдера сотрудников
var swiperEmployees = new Swiper('.employees-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'coverflow',
  loop: true,
  initialSlide: 1,
  touchRatio: 0,
  observer: true,
  observeParents: true,
  centeredSlides: true,
  breakpointsInverse: true,
  breakpoints: {
    1170: {
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.employee-slide-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let names = [];
      $(".employees-slider__wrapper .employee-slide").each(function(i) {
        names.push($(this).data("name"));
      });
      let positions = [];
      $(".employees-slider__wrapper .employee-slide").each(function(i) {
        positions.push($(this).data("position"));
      });
      return '<span class="' + className + '">' + '<span class="pagination-position">' + (positions[index]) + '</span>'  + '<span class="pagination-text">' + (names[index]) + '</span>' + '</span>';
    },
  },
});
//-----------------------------------------------------------------------------
//Инициализация слайдера Портфолио
var galleryTop = new Swiper('.portfolio-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});
//-----------------------------------------------------------------------------
//Инициализация слайда 2го сотрудника
// var employeeThumbs = new Swiper('.employee-thumbs-slide', {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   // observer: true,
//   // observeParents: true,
//   //freeMode: true,
//   //watchSlidesVisibility: true,
//   //watchSlidesProgress: true,
// });
// var employeeTop = new Swiper('.employee-top-slide', {
//   spaceBetween: 10,
//   slidesPerView: 1,
//   observer: true,
//   observeParents: true,
//   //slidesPerView: 4,
//   thumbs: {
//     swiper: employeeThumbs
//   }
// });
//-----------------------------------------------------------------------------
//   var employeeThumbsTablet = new Swiper('.employee-thumbs-slide-tablet', {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     //breakpointsInverse: true,
//     // breakpoints: {
//     //   768: {
//     //     slidesPerView: 2,
//     //   },
//     // },
//   });

  //
  // var employeeThumbsTablet1 = new Swiper('.employee-thumbs-slide-tablet1', {
  //   slidesPerView: 2,
  //   spaceBetween: 30,
  //   //breakpointsInverse: true,
  //   // breakpoints: {
  //   //   768: {
  //   //     slidesPerView: 2,
  //   //   },
  //   // },
  // });
  //
  // var employeeThumbsTablet2 = new Swiper('.employee-thumbs-slide-tablet2', {
  //   slidesPerView: 2,
  //   spaceBetween: 30,
  //   //breakpointsInverse: true,
  //   // breakpoints: {
  //   //   768: {
  //   //     slidesPerView: 2,
  //   //   },
  //   // },
  // });
  //
  // var employeeThumbsTablet3 = new Swiper('.employee-thumbs-slide-tablet3', {
  //   slidesPerView: 2,
  //   spaceBetween: 30,
  //   //breakpointsInverse: true,
  //   // breakpoints: {
  //   //   768: {
  //   //     slidesPerView: 2,
  //   //   },
  //   // },
  // });
  //
  // var employeeThumbsTablet4 = new Swiper('.employee-thumbs-slide-tablet4', {
  //   slidesPerView: 2,
  //   spaceBetween: 30,
  //   //breakpointsInverse: true,
  //   // breakpoints: {
  //   //   768: {
  //   //     slidesPerView: 2,
  //   //   },
  //   // },
  // });
  //
  // var employeeThumbsTablet5 = new Swiper('.employee-thumbs-slide-tablet5', {
  //   slidesPerView: 2,
  //   spaceBetween: 30,
  //   //breakpointsInverse: true,
  //   // breakpoints: {
  //   //   768: {
  //   //     slidesPerView: 2,
  //   //   },
  //   // },
  // });
//-----------------------------------------------------------------------------
//Кастомная метка на картах
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [47.244295, 39.594800],
        zoom: 17
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Компания «ZWEB»',
        balloonContent: 'Компания «ZWEB»'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'src/img/GeoMark.png',
        // Размеры метки.
        iconImageSize: [168, 84],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-90, -90]
      });

    myMap.geoObjects
      .add(myPlacemark);
  });
});
