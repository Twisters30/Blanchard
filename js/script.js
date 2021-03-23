// Функция ymaps.ready() будет вызвана, когда

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

        spaceBetween: 500,

        simulateTouch: false,
        // Optional parameters
        loop: true,

      });

      let gallerySwiper = new Swiper('.gallery__swiper-container', {

        spaceBetween: 50,
        simulateTouch: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        loop: false,
        // Optional parameters
        direction: 'horizontal',
       
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

      let editionsSwiper = new Swiper('.editions-goods__container', {

        spaceBetween: 50,
        simulateTouch: false,
        slidesPerView: 3,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
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

      let projectSwiper = new Swiper('.project__container', {

        spaceBetween: 50,
        simulateTouch: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
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
          el: '.swiper-pagination--edition',
          type: 'fraction',
        },
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
    });

    // Показать ещё
    let showMoreBtn = document.getElementById('btn-all-events')
    let showMore = document.querySelector('.read-more')
   showMoreBtn.onclick = function showContent() {
      if (showMore.classList.contains('read-more')) {        
        showMore.classList.remove('read-more')
        showMore.classList.add('show-more')
        showMoreBtn.innerHTML = 'Скрыть'
      } else {
        showMoreBtn.innerHTML = 'Все события'
        showMore.classList.remove('show-more')
        showMore.classList.add('read-more')
      }  
    }
    
      let checkBox = document.querySelectorAll('.checkbox__text');
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener('click', function (event) {
          if (event.target.classList == 'checkbox__text') {
            checkBox[i].classList.add('purple-iput')
         } else {
          checkBox[i].classList.remove('purple-iput')
         }
        })
      }
      
      let check = document.querySelectorAll('.checkbox__label')
      for (let k = 0; k < check.length; k++) {
        check[k].addEventListener('keypress', function (event) {
          if (event.target.classList == 'checkbox__text') {
            check[k].classList.add('purple-iput')
          } else {
            check[k].classList.remove('purple-iput')
          }
        })
        
      }


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
      for (var k = 0; k < dropdowns.length; k++) {
        var openDropdown = dropdowns[k];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


let catalogAccardeon = document.querySelectorAll('.catalog__item').forEach(function(item) {
  item.addEventListener('click', function(event) {
    let icon = document.querySelectorAll('.catalog__icon');
    let hasClass = event.target.parentNode.querySelectorAll('.catalog__icon')[0].classList
    if (!hasClass.contains('active')) {
      icon.forEach(function (ellem) {
        ellem.classList.remove('active')
      })
    }
    hasClass.toggle('active')
  })
  
})


   $(function() {

    let filter = $("[data-key]");
    filter.on('click', function(event) {
      let cat = $(this).data('key');
      
      $("[data-cat]").each(function() {
        let workCat = $(this).data('cat');
        if (workCat != cat) {
          $(this).addClass('hide')
        } else {
          $(this).removeClass('hide')
        }
      });
    });

   });

  //  tabs flip

  document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll("[data-tab]").forEach(function(tabsBtn) {
       tabsBtn.addEventListener('click', function() {
         let tab = this.dataset.tab

        let icon =  document.querySelectorAll("[data-arrow]");
            let currentIcon = icon.dataset.arrow
            for(var i = 0; i < currentIcon.length; i++)
            {
              if(tab === currentIcon[i]) {
                currentIcon[i].classList.add('active')
              } else {
                currentIcon.classList.remove('active')
              }
            }
            
          

        })
      })
    })

     
        // TABS CATALOG
        document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('.catalog__tab-btn').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(event) {
              const path = event.currentTarget.dataset.path
              document.querySelectorAll('.catalog__tab-text').forEach(function(tabContent) {
                tabContent.classList.remove('tab-active')
              })
              document.querySelector(`[data-target="${path}"]`).classList.add('tab-active')
            })
          })
        })


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