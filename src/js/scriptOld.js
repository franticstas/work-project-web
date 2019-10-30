//
// $(document).ready(function()
// {
  //console.log('2222222222');
  $('#showLeft').click(function() {
    $('.menu-left').toggleClass('left-open');
    $('.mask').toggleClass('show');
  });

  $('.header__button-nav').click(function() {
    $('.menu-left').toggleClass('left-open');
    //$('.mask').toggleClass('show');
  });

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

  function windowSize(){
    if ($(window).width() >= '1200'){
    }
    else {
      swiperMain.destroy();
      swiperMain = undefined;
      jQuery('.swiper-wrapper').removeAttr('style');
      jQuery('.swiper-slide').removeAttr('style');
    }
  }

  $(window).on('load resize',windowSize);


//Перенес
var swiperEmployees = new Swiper('.employees-slider', {
  slidesPerView: 3,
  spaceBetween: 0,
  effect: 'coverflow',
  loop: true,
  initialSlide: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
});

  var employeeThumbs = new Swiper('.employee-thumbs-slide', {
    spaceBetween: 30,
    slidesPerView: 3,
    //freeMode: true,
    //watchSlidesVisibility: true,
    //watchSlidesProgress: true,
  });
  var employeeTop = new Swiper('.employee-top-slide', {
    spaceBetween: 10,
    //slidesPerView: 4,
    thumbs: {
      swiper: employeeThumbs
    }
  });

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

//Добавление *крайней* точки пагинации в вертикальном слайдере

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

  //Перенес
  var swiperAboutCompany = new Swiper('.about-company-slider', {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // var swiperEmployees = new Swiper('.employees-slider', {
  //   slidesPerView: 3,
  //   spaceBetween: 0,
  //   effect: 'coverflow',
  //   loop: true,
  //   initialSlide: 1,
  //   centeredSlides: true,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   coverflowEffect: {
  //     rotate: 10,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows : true,
  //   },
  // });

  var swiperStages = new Swiper('.stages-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//перенес
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

//перенес
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

  var galleryTop = new Swiper('.portfolio-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });
// });

//Кастомная метка
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

