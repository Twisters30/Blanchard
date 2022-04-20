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
          650: {
            spaceBetween: 34,
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerColumn: 2,
          },
          1504: {
            spaceBetween:34,
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerColumn: 2,
          },
          1920: {
            spaceBetween: 50,
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
    let mobile = window.matchMedia('(min-width: 320px) and (max-width: 580px)');
    let tablet = window.matchMedia('(min-width: 581px) and (max-width: 1024px)');
    // let desktop = window.matchMedia('(min-width: 581x)');

    // Enable (for mobile)
    if(tablet.matches || window.screen.availWidth > 581) {
      if (!initEditions) {
        initEditions = true;
        editionsSwiper = new Swiper('.editions-goods__container', {
          breakpoints: {
            // 320: {
            //   spaceBetween:34,
            //   slidesPerView: 1,
            //   slidesPerGroup: 1,
            // },
            580: {
              spaceBetween:34,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              spaceBetween:49,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1500: {
              spaceBetween:49,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1920: {
              spaceBetween: 50,
              slidesPerView: 3,
              slidesPerGroup: 3,
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
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34
          },
          1024: {
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
function sortListOfPainter() {
  const listPainter = document.querySelector('.ui-accordion-content-active').querySelectorAll('.catalog__painter-link');
  listPainter.forEach((el) => {
    if (el.style.display !== 'initial') {
      el.parentElement.style.display = 'none';
    } else {
      el.parentElement.style.display = 'block';
    }
  })
}

  // catalog acardeon icon flip

document.querySelectorAll('.ui-icon').forEach(function (el) {
  el.remove()
})

let icons = document.querySelectorAll('.catalog__icon');
let catalogAccardeon = document.querySelectorAll('.catalog__item');

catalogAccardeon.forEach((acardeon) => {
  acardeon.addEventListener('click', function (event) {
    sortListOfPainter()
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




   $(function() {

    let filter = $("[data-key]");
    filter.on('click', function(event) {
      let cat = $(this).data('key');

      $("[data-cat]").each(function() {
        let workCat = $(this).data('cat');
        if (workCat == cat) {
          $(this).addClass('active-content')
        } else {
          $(this).removeClass('active-content')
        }
      });
    });

   });

  //  acardeon flip

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
// функция сортировки списков художников и ставим первыми активные


        // TABS CATALOG
        document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll(`[data-country="italy"]`).forEach((el) => {
            el.style.display = 'initial';
          })
          sortListOfPainter()
          document.querySelectorAll('.catalog__tab-btn').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(event) {
              $("#catalog__accardeon").accordion("option", "active", 0);
              setDisplay(`.catalog__painter-link`, 'none')
              if(event.currentTarget.dataset.path === 'fr') {
                setDisplay(`[data-country="fr"]`, 'initial');
              } else if (event.currentTarget.dataset.path === 'ger') {
                setDisplay(`[data-country="ger"]`, 'initial');
              } else if (event.currentTarget.dataset.path === 'italy') {
                setDisplay(`[data-country="italy"]`, 'initial');
              } else if (event.currentTarget.dataset.path === 'rus') {
                setDisplay(`[data-country="rus"]`, 'initial');
              } else if (event.currentTarget.dataset.path === 'belg') {
                setDisplay(`[data-country="belg"]`, 'initial');
              }
              const path = event.currentTarget.dataset.path
              document.querySelectorAll('.catalog__tab-text').forEach(function(tabContent) {
                tabContent.classList.remove('tab-active')
              })
              document.querySelector(`[data-target="${path}"]`).classList.add('tab-active')
            })
          })
        })

        function setDisplay(selector, style) {
          document.querySelectorAll(selector).forEach((el,i) => {
            el.style.display = style;
            if (i === 0) {
              sortListOfPainter()
              addClass('main-painter',el)
            } else {
              sortListOfPainter()
              el.classList.remove('main-painter')
            }
          })
        }

        function addClass(classAdd,element) {
          element.classList.add(classAdd);
              index = element.dataset.key
              document.querySelectorAll('.catalog__content').forEach((ell) =>{
                if (ell.dataset.cat === index) {
                  ell.classList.add('active-content')
                  ell.children.forEach((child) => {
                    child.classList.add('active-content')
                  })
                } else {
                  ell.classList.remove('active-content')
                  ell.children.forEach((child) => {
                    child.classList.remove('active-content')
                  })
                }
              })
        }

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

// Код отвечающий за выбор художника по умолчанию + итаративный выбор
let  catatalogBtnContainer = $('.catalog__painter-link');
$.each(catatalogBtnContainer, function (item,value) {
  $(this).bind('click', function (event) {
    if(event.target.classList.contains('catalog__painter-link')) {
      $('.catalog__painter-link').removeClass('main-painter');
      event.target.classList.add('main-painter');
    }
  })
})
// Код отвечающий за выбор художника по умолчанию + ремув фокус
let CatallTabIcon = document.querySelectorAll('.catalog__tab-icon');
CatallTabIcon.forEach(function (ell) {
  ell.addEventListener('click', function (event) {
    event.target.dataset
    $.each(CatallTabIcon, function () {
      $(this).removeClass('main-country')
    })
    if(event.target.classList.contains('catalog__tab-icon')) {
      ell.classList.add('main-country');
    }
  })
})

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
    console.log(index)
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
  const listForRemoveChecked = document.querySelector('.checkbox__list').querySelectorAll('.checkbox__text');
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
      console.log(textLabelInput)
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
  const ellForInsert = document.querySelector('.checkbox__header');
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
  const inputsCheckbox = document.querySelector('.checkbox__list').querySelectorAll('input');
  inputsCheckbox.forEach((el) => {
    if (el.checked) {
      const cloneNode = el.parentNode.cloneNode(true);
      checkedInput.push(cloneNode);
    }
  })
  createListCheckedInputs(checkedInput);
}

function clickFilterEditions() {
  const btnClick = document.querySelector('.checkbox__header');
  const checkBoxList = document.querySelector('.checkbox__list');
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
    if (!e.target.closest('.checkbox__header') && !e.target.closest('.checkbox__list')) {
      document.querySelector('.checkbox__header').classList.remove('active');
      document.querySelector('.checkbox__list').classList.remove('active');
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
