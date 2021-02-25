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

    let heroSwiper = new Swiper('.swiper-container--hero', {

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

      let editionsSwiper = new Swiper('.editions__swiper-container', {

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

      let projectSwiper = new Swiper('.project__swiper-container', {

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

    // const element = document.querySelector('.wrapper-bottom__list');
    
    // const choices = new Choices(element, {
    //   searchEnabled: false,
    //   itemSelectText: '',
      
    // });

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
          searchEnabled: true,
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
    let showMore = document.getElementById('show-more')
   showMoreBtn.onclick = function showM0re() {
      if (showMore.style.display == 'none') {
        showMore.style.display = 'flex'
        showMoreBtn.innerHTML = 'Скрыть'
      } else {
        showMoreBtn.innerHTML = 'Все события'
        showMore.style.display = 'none'
      }  
    }
    // showM0re();
    
    
   


      // let checkedText = document.querySelector('.')
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

        // function myFunction() {
         
        //  let dropContent = document.querySelectorAll('.dropdown');
        // //  let buttonArr = document.querySelectorAll('.dropdown-btn');
        //  dropContent.forEach(function(ell){
        //    ell.addEventListener('click', function(event) {
        //     let AAAA = event.target.dataset;
        //     console.log(AAAA)
        //    })
        //     //  dropCurrentContent.classList.toggle("show");
            
        //    })
          
        // }
        // myFunction();


      
document.querySelectorAll('.dropdown-btn').forEach(function(ell) {
  ell.addEventListener('click', function(event) {
    let content = document.querySelectorAll('.dropdown-content-wrapper');
    let checkClass = event.target.parentNode.querySelectorAll(".dropdown-content-wrapper")[0].classList
    if (!checkClass.contains('show')) {
      content.forEach(function (item) {
        item.classList.remove('show')
      })
    } 
    checkClass.toggle("show");
  })
})
   
        window.onclick = function(event) {
          if (!event.target.matches('.dropdown-btn')) {
            let dropdowns = document.querySelectorAll(".dropdown-content-wrapper");
            for (var k = 0; k < dropdowns.length; k++) {
              var openDropdown = dropdowns[k];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }


        // Смена художника

        // function swapPainer() {
        //   let btnLng = document.querySelectorAll('.catalog__painter-link').forEach(function(painterBtn) {
        //     painterBtn.addEventListener('click', function(event) {
        //       const path = event.target.currentTarget.dataset.path
        //       console.log(path)
        //     })
        //   })
          // let boxImgPainer = document.querySelector('.catalog__painter-img')
          // // .src='/img/catalog/Benedetto-di-Bindo.jpg'
          // let dataAtr = this.getAttibute('data-img');
        // }


        // Catalog image

        

  //  function FilterImage() {
  //   let imgShowBox = document.querySelector('.catalog__painter-img');
  //       let btnPainter = document.querySelectorAll('.catalog__painter-list-item');
        
  //      function filter(image, items) {
  //        items.forEach((item) => {
  //          const isItemFiltered = !item.classList.contains(image)
  //          if (isItemFiltered) {
  //            item.classList.add('hide')
  //          } else item.classList.remove('hide')
  //        })
  //      }
  //   for (let key in imgCotalog) {
  //     let img = document.createElement('img');
  //     img.setAttribute('data-key', key);
  //     img.src = 'img/catalog'+key+'.jpg';
  //     imgShowBox.append(img);
  // }
      
  //       btnPainter.forEach((button) => {
 
  //         button.addEventListener('click', (event) => {
  //           // console.log(event.target.dataset.key)
  //           let painterAttr = event.target.dataset.key
  //           filter(painterAttr, imgShowBox)
  //         })
  //         })
  //  }
        
  //  FilterImage();
    
   
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

    // $(function() {

    //   let tabAc = $("data-tab]")
    //   tabAc.on('click', function(event) {
    //       let acard = $(this).data('tab');
      
        
    //     $("[data-arrow]").each(function() {
    //       let icon = $(this).data('arrow');
    //       if (icon == acard) {
    //         $(this).addClass('active')
    //       } else {
    //         $(this).removeClass('active')
    //       }
    //     });
    //   });
  
    //  });
            
            
  
         
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


        // ACARDEON FLIP ICON

        document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('.catalog__item').forEach(function(accardeonBtn) {
            accardeonBtn.addEventListener('click', function(event) {
              const path = event.target.dataset.path
              document.querySelectorAll('.catalog__icon').forEach(function(accardeonContent) {
                path.event.target.classList.remove('active')
                accardeonContent.classList.remove('active')
             
              })
              document.querySelector(`[data-target="${path}"]`).classList.add('active')
            })
          })
        })
      
      // const choicesGallery = document.querySelector('.wrapper__container .choices');
      // console.log(choicesGallery.innerHTML);
      

      
     
      // if (checkBoxCol.checked) {
      //   checkedTextCol.style.color = '#9D5CD0'
      // }
    
  
    

//     const miltiIcons = () => {
//     window.addEventListener('DOMContentLoaded', function(event) {
//     const elIcons = document.querySelectorAll('.catalog__item');
//       if (event.target == 'catalog__icon') {
//     elIcons.forEach(el =>  {
//       addEventListener('click', function() {        
//         el.querySelector('.catalog__icon').classList.toggle('active')
      
//     })
//     })
//   } 
//   })
//   }

// miltiIcons();

// let arrAcc = document.querySelectorAll('.catalog__accardeon').forEach(el => {
//   el.addEventListener('click', function(event) {
//     let currentTarget = event.target.getElementsByTagName("*");

//   for (let item of currentTarget) {
//     if (item.classList == "catalog__icon") {
//       item.classList.toggle('active')
//     }
    
//       console.log(item);
//   }
//   })
 
// })
  
 
  // console.log(currentTarget)
  // let icon = document.querySelector('.catalog__icon').addEventListener('click', function (event) {
  //   let currentIcon = event.target.getAttribute('data-target')
  //   console.log(currentIcon , currentTarget)
  //   for (let k = 0; k < currentIcon.length; k++) {
      
  //     for (let i = 0; i < currentTarget.length; i++) {
    
  //       if (currentTarget[i].getAttribute('data-target') == currentIcon[k].getAttribute('data-target')) {
  //         // currentIcon[k].classList.toggle('active')
  //       }
  //     }
  //   }
  // }) 


  

    
  

// arrAcc.forEach (el => {
//   addEventListener('click', function(event) {
//     let iconName = event.target.classList.contains('catalog__icon')
//     console.log(iconName)
//     if (iconName) {
//       iconSetArray.classList.toggle('active')
//     }
//   });
// })
//   if (event.target.classList.contains('catalog__icon')) {
//     event.target.toggle('is-active')
//   // } else if (event.target.toggleClass.contains('is-active')) {
//   //   event.target.classList.remove('is-active')
//   // }
//   }
// });

  // icons.addEventListener('click', function (event) {
  //   if (event.target == 'catalog__icon') {
  //     event.target.classList.add('is-active');
  //   }
  // })

// $(function() {
//   $("#selectBackground ul li a").click(function() {
//       $("catalog__icon").removeClass("active");         
//       $(this).toggleClass("active");
//   })
// });

// $(document).ready(function(){    
//   $('.catalog__icon').toggle("is-active")
//   });

//   $('.catalog__icon').on('hidden', function () {
//      $(".is-close").removeClass("is-close").addClass("is-active");
//   });
// });