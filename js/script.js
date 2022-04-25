// Функция ymaps.ready() будет вызвана, когда

tippy('[data-tippy-content]');
tippy('.project__tooltip', {
  theme: 'blanchard',
});
// const { event } = require("jquery");

    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.757561, 37.631209],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });

        var myPlacemark = new ymaps.Placemark([55.757896, 37.600792], {}, {

            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/contacts/map-icon.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42]
          });

          // Размещение геообъекта на карте.
          myMap.geoObjects.add(myPlacemark);
    };

    let heroSwiper = new Swiper('.hero__wrapper', {

        spaceBetween: 50,
        speed: 500,
        simulateTouch: false,
        // Optional parameters
        loop: true,
        breakpoints: {
          550: {
            spaceBetween:500
          }
        }
      });

(() => {
  /* Swiper
**************************************************************/
  var eventsSwiper = Swiper;
  var init = false;



  /* Which media query
	**************************************************************/
  function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 550px)');
    let tablet = window.matchMedia('(min-width: 551px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
      if (!init) {
        init = true;
        eventsSwiper = new Swiper('.events__swiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-events-next',
            prevEl: '.swiper-button-events-prev',
          },
          pagination: {
            el: '.events__pagination',
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            551: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 34,
            }
          }
        });
      }

    }

    // Disable (for tablet)
    else if(tablet.matches && typeof eventsSwiper.destroy === "function") {
      eventsSwiper.destroy(false, true);
      init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches && typeof eventsSwiper.destroy === "function") {
      eventsSwiper.destroy();
      init = false;
    }
  }

  /* On Load
	**************************************************************/
  window.addEventListener('load', function() {
    swiperMode();
  });

  /* On Resize
	**************************************************************/
  window.addEventListener('resize', function() {
    swiperMode();
  });
})()
      let gallerySwiper = new Swiper('.gallery__slider-container', {
        spaceBetween: 34,
        slidesPerView: 1,
        slidesPerGroup: 1,
        breakpoints: {
          376: {
            spaceBetween: 34,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            spaceBetween:34,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1204: {
            spaceBetween:34,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1920: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        },
        simulateTouch: false,
        loop: false,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next--gallery',
          prevEl: '.swiper-button-prev--gallery',
        },

        // pagination
        pagination: {
          el: '.swiper-pagination--gallery',
          type: 'fraction',
        },
      });

(() => {
  /* Swiper
**************************************************************/
  var editionsSwiper = Swiper;
  var initEditions = false;



  /* Which media query
	**************************************************************/
  function swiperModeEditions() {
    let mobile = window.matchMedia('(min-width: 320px) and (max-width: 660px)');
    let tablet = window.matchMedia('(min-width: 661px) and (max-width: 1024px)');
    // let desktop = window.matchMedia('(min-width: 581x)');

    // Enable (for mobile)
    if(tablet.matches || window.screen.availWidth > 661) {
      if (!initEditions) {
        initEditions = true;
        editionsSwiper = new Swiper('.editions-goods__container', {
          breakpoints: {
            580: {
              spaceBetween:34,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              spaceBetween:36,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1000: {
              spaceBetween:49,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1025: {
              spaceBetween:25,
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1025: {
              spaceBetween:50,
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1920: {
              spaceBetween: 50,
            },
          },
          simulateTouch: false,
          loop: false,
          // Optional parameters
          direction: 'horizontal',

          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next--edition',
            prevEl: '.swiper-button-prev--edition',
          },

          // pagination
          pagination: {
            el: '.swiper-pagination--edition',
            type: 'fraction',
          },

        });
      }

    }

    // Disable (for tablet)
    else if(mobile.matches && typeof editionsSwiper.destroy === "function") {
      editionsSwiper.destroy();
      initEditions = false;
    }
  }

  /* On Load
	**************************************************************/
  window.addEventListener('load', function() {
    swiperModeEditions();
  });

  /* On Resize
	**************************************************************/
  window.addEventListener('resize', function() {
    swiperModeEditions();
  });
  swiperModeEditions();

})()

      let projectSwiper = new Swiper('.project__container', {
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 21
          },
          376: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34
          },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0
          },
          931: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50
          },
          1025: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0
          },
          1551: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50
          },
          1920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50
          }
        },

        simulateTouch: false,
        slidesPerColumn: 1,
        loop: false,
        // Optional parameters
        direction: 'horizontal',

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next--project',
          prevEl: '.swiper-button-prev--project',
        },

        // pagination
        pagination: {
          el: '',
          type: 'fraction',
        }
      });

    const multiDefault = () => {
      const elements = document.querySelectorAll('.wrapper-bottom__item');
      elements.forEach(el => {
        const choices = new Choices(el, {
          searchEnabled: false,
          itemSelectText: '',
      })
      });
    }
    multiDefault();

    const multiDefaultGallery = () => {
      const elements = document.querySelectorAll('.gallery__selector');
      elements.forEach(el => {
        const choicesGallery = new Choices(el, {
          searchEnabled: false,
          itemSelectText: '',
          placeholderValue: '',
          classNames: {
            flippedState: '',
        },
        })
      });
    }
    multiDefaultGallery();

    // accarderon catalog

    $( "#catalog__accardeon" ).accordion({
      collapsible: true,
      heightStyle: "content",
    });

    // Показать ещё
    function mobileAddClass(classElements, classCheck, howManyShowItems) {
      const elements = document.querySelectorAll(classElements);
      let checkArr = [];
      if (!elements) return;

      elements.forEach((el,index) => {
        if (!el.classList.contains(classCheck)) checkArr.push(el);
        if (checkArr.length === elements.length) {
          console.log('yea')
        }
        if (index < howManyShowItems) {
          el.classList.remove(classCheck)
        } else {
          el.classList.add(classCheck)
        }
      })
    }
      function clickShowMore() {
        const showMoreBtn = document.getElementById('btn-all-events')
        const elementsWrap = document.querySelector('.events__container-cards');
        showMoreBtn.addEventListener('click', () => {
          elementsWrap.classList.toggle('show-more');
        })

      }
    clickShowMore();
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Плавный скрол!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      jQuery(document).ready(function() {
        jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
        });
        });

// Dropdown предотвращение анимации
document.addEventListener('DOMContentLoaded', function(){
  if((e = document.querySelector("body")) !== null)
    e.classList.remove('preload');
});




      // !!!!Header dropdown!!!!!!!! <------|_|
let idDropdownOne = document.querySelector('#dropdown-one');
let dropDownBtn = document.querySelectorAll('.dropdown-btn')
document.querySelectorAll('.dropdown-btn').forEach(function(ell) {
  ell.addEventListener('click', function(event) {
    if(!ell.classList.contains('btn-flip')) {
        dropDownBtn.forEach(function(btnItem) {
        btnItem.classList.remove('btn-flip')
      })
    }
    let content = document.querySelectorAll('.dropdown-content-wrapper');
    let checkClass = event.target.parentNode.querySelectorAll(".dropdown-content-wrapper")[0].classList
    if (!checkClass.contains('show')) {
      content.forEach(function (item) {
        item.classList.remove('show')
      })
    }
    ell.classList.toggle('btn-flip')
    if(checkClass.contains('show')) {
      checkClass.remove('show');
    } else {
      checkClass.add('show');
    }
  })
})

  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      let dropdowns = document.querySelectorAll(".dropdown-content-wrapper");
      document.querySelectorAll('.dropdown-btn').forEach( function (item) {
        if ( item.classList.contains('btn-flip')) {
          item.classList.remove('btn-flip')
        }
      })
      for (let k = 0; k < dropdowns.length; k++) {
        let openDropdown = dropdowns[k];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // catalog acardeon icon flip

document.querySelectorAll('.ui-icon').forEach(function (el) {
  el.remove()
})

let icons = document.querySelectorAll('.catalog__icon');
let catalogAccardeon = document.querySelectorAll('.catalog__item');

catalogAccardeon.forEach((acardeon) => {
  acardeon.addEventListener('click', function (event) {
    catalogAccardeon.forEach( (ell) => {
      ell.firstElementChild.firstElementChild.classList.remove('is-icon-flip');
    })
    if(event.target.classList.contains('ui-state-active')) {
      event.target.firstElementChild.firstElementChild.classList.add('is-icon-flip')
    } else {
      event.target.firstElementChild.firstElementChild.classList.remove('is-icon-flip')
    }
  })
})
catalogAccardeon.forEach((el, i) => {
  if(i === catalogAccardeon.length -1) {
    el.classList.add('end')
  }
})

  //  acardeon flip

// функция сортировки списков художников и ставим первыми активные

// selector

        jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

document.querySelectorAll('.dropdown-content-wrapper').forEach(el => {
  new SimpleBar(el)
});

// Popup(modal)
let arrImg = [
  './img/galery/swiper-img/slide1.jpg',
  './img/galery/swiper-img/slide4.jpg',
  './img/galery/swiper-img/slide2.jpg',
  './img/galery/swiper-img/slide5.jpg',
  './img/galery/swiper-img/slide3.jpg',
  './img/galery/swiper-img/slide6.jpg',
  './img/galery/swiper-img/slide7.jpg',
  './img/galery/swiper-img/slide8.jpg',
  './img/galery/swiper-img/slide9.jpg',
  './img/galery/swiper-img/slide10.jpg',
  './img/galery/swiper-img/slide11.jpg',
  './img/galery/swiper-img/slide12.jpg',
  './img/galery/swiper-img/slide13.jpg',
  './img/galery/swiper-img/slide14.jpg',
  './img/galery/swiper-img/slide15.jpg',
  './img/galery/swiper-img/slide16.jpg',
  './img/galery/swiper-img/slide17.jpg',
  './img/galery/swiper-img/slide18.jpg',
  './img/galery/swiper-img/slide19.jpg',
  './img/galery/swiper-img/slide20.jpg',
  './img/galery/swiper-img/slide21.jpg',
  './img/galery/swiper-img/slide22.jpg',
  './img/galery/swiper-img/slide23.jpg',
  './img/galery/swiper-img/slide24.jpg',
  './img/galery/swiper-img/slide25.jpg',
  './img/galery/swiper-img/slide26.jpg',
  './img/galery/swiper-img/slide27.jpg',
  './img/galery/swiper-img/slide28.jpg',
  './img/galery/swiper-img/slide29.jpg',
  './img/galery/swiper-img/slide30.jpg',
];

const catalogImages = [
  {
    'id':'Beltraffio',
    'country':'italy',
    'name': 'Больтраффио, Джованни',
    'image': './img/catalog/Beltraffio.jpg',
    'yearsOfLive': '1453 — 1523.',
    'description': 'Вазари сообщает, что художник происходил из аристократической семьи. Воспитанный в традициях Фоппы,Бернардо Дзенале и Амброджо Бергоньоне, он прошёл обучение в мастерской Леонардо.Его первое произведение «Воскресение Христа, святой Леонард и святая Лючия» выполнено в 1491 годуОджоно для миланской церкви Сан-Джованни-сул-Муро.',
  },
  {
    'id':'Francesco-italy',
    'country':'italy',
    'name': 'Биссоло, Франческо',
    'image':'./img/catalog/Francesco-italy.jpg',
    'yearsOfLive':'1470 г — 20 апреля 1554 г.',
    'description':'Сын художника. Ученик Джованни Беллини. С 1490 переехал в мастерскую Беллини. С 1492 по 1530 год работал в Венеции.Помогал учителю в работе над украшением Большого зала СоветаДворца дожей (Венеция). Принимал участие в создании украшений Церкви Иль Реденторе в Венеции.'
  },
  {
    'id':'image-picture',
    'country':'italy',
    'name':'Доменико Гирландайо',
    'yearsOfLive':'2 июня 1448 — 11 января 1494.',
    'image':'./img/catalog/image-picture.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Bergognone-italy',
    'country':'italy',
    'name':'Бергоньоне, Амброджо',
    'yearsOfLive':'1453 — 1523.',
    'image':'./img/catalog/Bergognone-italy.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Benedetto-italy',
    'country':'italy',
    'name':'Бенедетто ди Биндо',
    'yearsOfLive':'1380-е — 1417.',
    'image':'./img/catalog/Benedetto-italy.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Bonsignori',
    'country':'italy',
    'name':'Бонсиньори, Франческо',
    'yearsOfLive':'1460 г. - 2 июля 1519 г.',
    'image':'./img/catalog/Bonsignori.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Botticini',
    'country':'italy',
    'name':'Боттичини, Рафаэлло',
    'yearsOfLive':'1474 г. - 1525 г.',
    'image':'./img/catalog/Botticini.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Bramantino',
    'country':'italy',
    'name':'Брамантино',
    'yearsOfLive':'1465г. - 1530г.',
    'image':'./img/catalog/Bramantino.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Brea',
    'country':'fr',
    'name':'Бреа, Людовико',
    'yearsOfLive':'1450г. - 1523.',
    'image':'./img/catalog/Brea.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Biagiodantonio',
    'country':'italy',
    'name':'Бьяджо д’Антонио Туччи',
    'yearsOfLive':'1445г. - 1510г.',
    'image':'./img/catalog/Biagiodantonio.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Vecchietta',
    'country':'italy',
    'name':'Веккьетта',
    'yearsOfLive':'1412г. - 6 июня 1480г.',
    'image':'./img/catalog/Vecchietta.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Verrocchio',
    'country':'italy',
    'name':'Андреа Верроккьо',
    'yearsOfLive':'1435г. - 1488г.',
    'image':'./img/catalog/Verrocchio.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Gozzoli',
    'country':'italy',
    'name':'Беноццо Гоццоли',
    'yearsOfLive':'1420г. - 4 октября 1497г.',
    'image':'./img/catalog/Gozzoli.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Granacci',
    'country':'italy',
    'name':'Граначчи, Франческо',
    'yearsOfLive':'23 июля 1469г. - 30 ноября 1543г.',
    'image':'./img/catalog/Granacci.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Cecco',
    'country':'italy',
    'name':'Грегорио ди Чекко',
    'yearsOfLive':'1390-е - 1 июля 1424г.',
    'image':'./img/catalog/Cecco.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'GiovannidaUdine',
    'country':'italy',
    'name':'Джованни да Удине',
    'yearsOfLive':'15 октября 1487г. - 1564г.',
    'image':'./img/catalog/GiovannidaUdine-new.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Giorgione',
    'country':'italy',
    'name':'Джорджоне',
    'yearsOfLive':'1477/1478г. - 1510г.',
    'image':'./img/catalog/Giorgione.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  }
  ,
  {
    'id':'BernardoParentino',
    'country':'italy',
    'name':'Парентино, Бернардо',
    'yearsOfLive':'около 1437г. - 28 октября 1531г.',
    'image':'./img/catalog/BernardoParentino.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'diPaolo',
    'country':'italy',
    'name':'Джованни ди Паоло',
    'yearsOfLive':'1403г. - 1482г.',
    'image':'./img/catalog/diPaolo.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'pesello',
    'country':'italy',
    'name':'Пезеллино',
    'yearsOfLive':'1422г. - июль 1457г.',
    'image':'./img/catalog/pesello.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Perugino',
    'country':'italy',
    'name':'Пьетро Перуджино',
    'yearsOfLive':'1448г. - 1523г.',
    'image':'./img/catalog/Perugino.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'peruzzi',
    'country':'italy',
    'name':'Перуцци, Бальдассаре',
    'yearsOfLive':'7 марта 1481г. - 6 января 1537г.',
    'image':'./img/catalog/peruzzi.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'pisanello',
    'country':'italy',
    'name':'Пизанелло',
    'yearsOfLive':'1395г - 1455г',
    'image':'./img/catalog/pisanello.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Pintoricchio',
    'country':'italy',
    'name':'Пинтуриккьо',
    'yearsOfLive':'1454г. - 11 декабря 1513г.',
    'image':'./img/catalog/Pintoricchio.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Vodka',
    'country':'rus',
    'name':'Кузьма Петров-Водкин',
    'yearsOfLive':'5 ноября 1878 г. - 15 февраля 1939.',
    'image':'./img/catalog/Red_Horse.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Kranah',
    'country':'ger',
    'name':'Лукас Кранах',
    'yearsOfLive':'1472 г. - 16 октября 1553 г.',
    'image':'./img/catalog/Lucas_Cranach.jpg',
    'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, alias atque distinctio nesciunt omnis qui soluta vel. Adipisci alias consectetur eius error est, iure laudantium maiores quia quis quos.',
  },
  {
    'id':'Magrit',
    'country':'belg',
    'name':'Рене Магритт',
    'yearsOfLive':'21 ноября 1898 г. - 15 августа 1967 г.',
    'image':'./img/catalog/Rene-Margritt.jpg',
    'description':'Рене́ Франсуа́ Гисле́н Магри́тт — бельгийский художник-сюрреалист. Известен как автор остроумных и вместе с тем поэтически загадочных картин.',
  }
]

class CatalogPainter {
  constructor(painters) {
    this.painters = painters;
  }
  focusCurrentCountry() {
    let CatallTabIcon = document.querySelectorAll('.catalog__tab-icon');
    CatallTabIcon.forEach(function (ell) {
      ell.addEventListener('click', function (event) {
        $.each(CatallTabIcon, function () {
          $(this).removeClass('main-country')
        })
        if(event.target.classList.contains('catalog__tab-icon')) {
          ell.classList.add('main-country');
        }
      })
    })
  }
  clickTab() {
    const tabList = document.querySelector('.catalog__tab-list');
    const catalogTabText = document.querySelectorAll('.catalog__tab-text');
    tabList.addEventListener('click', (e) => {
      const target = e.target;
      let btn;
      if(target.closest('.catalog__tab-btn')) {
        if (target.tagName === 'SPAN') {
          btn = target.parentElement;
        } else if(target.tagName === 'BUTTON') {
          btn = target;
        }
        catalogTabText.forEach((el) => {
          if (btn.dataset.path === el.dataset.target) {
            this.showCountryPainterList(btn.dataset.path);
            el.classList.add('tab-active');
          } else {
            el.classList.remove('tab-active');
          }
        })
      }
    })
  }
  showCountryPainterList(countryName) {
    const listItem = document.querySelectorAll('.catalog__painter-item');
    listItem.forEach((el) => {
      const btn = el.firstElementChild;
      if (btn.dataset.country !== countryName) {
        el.style.display = 'none';
      } else {
        el.style.display = 'block';
      }
    })
  }
  clickBtnPainter() {
    const listsAccordion = document.querySelectorAll('.catalog__painter-list');
    listsAccordion.forEach((el) => {
      el.addEventListener('click',  (e) => {
        const target = e.target;
        if (target.closest('.catalog__painter-link')) {
          this.showPainter(target.dataset.key)
          event.currentTarget.querySelectorAll('button').forEach((el) => el.classList.remove('main-painter'));
          target.classList.add('main-painter');
        }
      })
    })
  }
  showPainter(id) {
    const imageContainer = document.querySelector('.catalog__painter-img');
    const nameContainer = document.querySelector('.catalog__painter-header');
    const yearsOfLiveContainer = document.querySelector('.catalog__painter-years-lived');
    const descriptionContainer = document.querySelector('.catalog__discription-painter');
    this.painters.forEach((el) => {
      if (el.id === id) {
        imageContainer.src = el.image;
        nameContainer.textContent = el.name;
        yearsOfLiveContainer.textContent = el.yearsOfLive;
        descriptionContainer.textContent = el.description;
      }
    })
  }
  initLogic() {
    this.focusCurrentCountry();
    this.clickTab();
    this.showCountryPainterList('italy');
    this.clickBtnPainter();
  }
}

const catalogPainter = new CatalogPainter(catalogImages);
catalogPainter.initLogic();

let popupTextObj = {
  slide : ['Этот текст принадлежит первому слайду',
          'Этот текст под слайдом номер два',
          "Этот хочет быть под номером три",
          'Можешь быть четвёртым',
          'Ты пятый',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
          ]
}

// console.log(popupTextObj)
let gallImg = document.querySelectorAll('.gallery__figure');
let iconClose = document.querySelector('.popup__close');
let popupImg = document.querySelector('.popup__image');
let popupText = document.querySelector('.popup__text');
let popup = document.querySelector('.popup');
let popupOne = document.querySelector('.popup-one');
let popupNext = document.querySelector('.popup__next-slide');
let popupPrevSlide = document.querySelector('.popup__prev-slide');
let currentSlide = 0;

gallImg.forEach(function (image,index) {
  image.addEventListener('click',function (event) {
    const descriptionModalImage = document.querySelector('.popup__text');
    setTimeout(() => descriptionModalImage.focus(),100);
    console.log(descriptionModalImage)
    popupImg.src = arrImg[index]
    popup.classList.add('popup-active')
  })
})

document.addEventListener('keydown', function (e) {
  if(e.which === 27) {
    popup.classList.remove('popup-active');
  }
})

popup.addEventListener('click', function(event){
  if(event.target.classList.contains('popup__close')) {
      popup.classList.remove('popup-active');
  }
  if(event.target.classList.contains('popup__next-slide')) {
      currentSlide++
      if(currentSlide === arrImg.length) {
          currentSlide = 0;
      }
      popupImg.src = arrImg[currentSlide];
      popupText.innerHTML = popupTextObj.slide[currentSlide];
  }
  if(event.target.classList.contains('popup__prev-slide')) {
      if(currentSlide == 0) {
          currentSlide = arrImg.length;
      }
      --currentSlide;
      popupImg.src = arrImg[currentSlide];
      popupText.innerHTML = popupTextObj.slide[currentSlide];
  }
})

//  burger
class Burger {
  constructor(burger,menu) {
    this.burger = burger;
    this.menu = menu;
  }
  clickBurgerMenu() {
    const myMenu = this.menu;
    this.burger.addEventListener('click', function () {
    this.classList.toggle('burger-open');
    this.parentNode.classList.toggle('burger-open');
    myMenu.classList.toggle('menu-active');
    })
  }
}

// console.log(burgerMenu)
const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.getElementById('main-menu');
const burger = new Burger(burgerIcon,burgerMenu);
burger.clickBurgerMenu();


// checkbox filter

function removeCheckAttribute(searchText) {
  const listForRemoveChecked = document.querySelector('#filter-list-js').querySelectorAll('.checkbox__text');
  if(!searchText) return;
  listForRemoveChecked.forEach((el) => {
    if (searchText === el.textContent) {
      el.previousElementSibling.checked = false;
    }
  })
}

function clickBtnDelete() {
  const containerBtn = document.querySelector('.checkbox__checked-container');
  containerBtn.addEventListener('click', function (e) {
    const target = e.target;
    if (target.closest('.btn-delete')) {
      const textLabelInput = target.parentElement.textContent;
      removeCheckAttribute(textLabelInput);
      target.parentElement.parentElement.remove();
    }
  })
}

function createBtnDeleteCheckbox() {
  const btn = document.createElement('button');
  btn.classList.add('btn-delete');
  return btn;
}

function createListCheckedInputs(inputs) {
  const containerList = document.createElement('div');
  containerList.classList.add('checkbox__checked-container');
  const ellForInsert = document.querySelector('#filter-btn-js');
  inputs.forEach((el) => {
    containerList.append(el);
  })
  const oldContainer = document.querySelector('.checkbox__checked-container');
  if (oldContainer) oldContainer.remove();
  ellForInsert.after(containerList);
  containerList.querySelectorAll('label').forEach((el) => {
    el.classList.add('checked--item');
    const spanEll = el.querySelector('span');
    spanEll.append(createBtnDeleteCheckbox());
  })
  clickBtnDelete();
}

function addCheckBoxInContainer() {
  let checkedInput = [];
  const inputsCheckbox = document.querySelector('#filter-list-js').querySelectorAll('input');
  inputsCheckbox.forEach((el) => {
    if (el.checked) {
      const cloneNode = el.parentNode.cloneNode(true);
      checkedInput.push(cloneNode);
    }
  })
  createListCheckedInputs(checkedInput);
}

function clickFilterEditions() {
  const btnClick = document.querySelector('#filter-btn-js');
  const checkBoxList = document.querySelector('#filter-list-js');
  btnClick.addEventListener('click', function () {
    this.classList.toggle('active');
    checkBoxList.classList.toggle('active');
  })
  checkBoxList.addEventListener('click', function (e) {
    const target = e.target;
    if (target.closest('.checkbox__input-item')) {
      addCheckBoxInContainer();
    }
  })
}
clickFilterEditions();

function clickOutFilter() {
  window.addEventListener('click', function (e) {
    if (!e.target.closest('.checkbox__header') && !e.target.closest('#filter-list-js')) {
      document.querySelector('#filter-btn-js').classList.remove('active');
      document.querySelector('#filter-list-js').classList.remove('active');
    }
  })
}
clickOutFilter();

class FormValidation {

  successHighlight(input) {
    input.classList.add('validation-success');
    setTimeout(() => {
      input.classList.remove('validation-success');
    },300)
  }

  validateName(inputName) {
    if (!inputName.value) {
      inputName.classList.add('validation-error');
      this.errorRemove(inputName);
      return undefined
    } else {
      inputName.classList.remove('validation-error');
      this.successHighlight(inputName);
      return true;
    }
  }
  validationPhone(inputPhone) {
    if (inputPhone.value.length === 18) {
      inputPhone.classList.remove('validation-error');
      this.successHighlight(inputPhone);
      return true
    } else {
      inputPhone.classList.add('validation-error');
      return false;
    }
  }
  errorRemove(input) {
    input.addEventListener('input', () => {
      if (input.value) {
        input.classList.remove('validation-error');
      }
      if (!input.value) input.classList.add('validation-error');
    })
  }
  submitForm() {
    const contactsForm = document.querySelector('.contacts__form');
    const inputName = document.querySelector('#input-name');
    const inputPhone = document.querySelector('#input-phone');
    const btnSubmit = document.querySelector('.contacts__btn');
    contactsForm.addEventListener('submit', (e) => e.preventDefault());
    btnSubmit.addEventListener('click', () => {
        if (this.validateName(inputName) && this.validationPhone(inputPhone)) {
          console.log('validation success')
        }
    }
    )
  }
  phoneMaskActive() {
    const inputPhone = document.querySelector('#input-phone');
    inputPhone.addEventListener('input', this.maskInput);
  }
  maskInput() {
    let literalPattern = /[0\*]/;
    let numberPattern = /[0-9]/;
    let newValue = '';
    let valueIndex = 0;
    let maskIndex = 0;
    this.placeholder = '+7 (___) ___‒__‒__';
    while (maskIndex < this.dataset.mask.length) {
      if (maskIndex >= this.value.length) {
        break;
      }
      if (this.dataset.mask[maskIndex] === '0' && this.value[valueIndex].match(numberPattern) === null) {
        break;
      }
      while (this.dataset.mask[maskIndex].match(literalPattern) === null) {
        if (this.value[valueIndex] === this.dataset.mask[maskIndex]) {
          break;
        }
        newValue += this.dataset.mask[maskIndex++];
      }
      newValue += this.value[valueIndex++];
      maskIndex++;
    }

    this.value = newValue;
  }
}

const formValidation = new FormValidation;
formValidation.submitForm();
formValidation.phoneMaskActive();

//mobile search

class SearchMobile {

  activeInput() {
    const mobileSearchInput = document.querySelector('#mobile-search-input');
    const mobileSearchBtn = document.querySelector('.mobile__search-icon');
    mobileSearchBtn.addEventListener('click', () => {
      mobileSearchInput.classList.add('active');
      this.hideInput(mobileSearchInput);
    })
  }
  hideInput(input) {
    input.addEventListener('blur', () => {
      console.log(input)
      input.classList.remove('active');
    })
  }
}


const searchMobile = new SearchMobile()
searchMobile.activeInput();

function checkBlockOutParent(parent,child) {
  let innerBlock = $(child).offset().top + $(child).outerHeight();

  let block = $(parent).offset().top + $(parent).outerHeight();
  console.log(innerBlock, block)
  if(innerBlock > block) {
    console.log('Блок вышел за пределы')
  }
}
checkBlockOutParent('.project__wrapper-content','.tooltip');
