function header() {
  var header = document.querySelector('.header');
  var wrapper = document.querySelector(".header__wrapper");
  var burguer = document.querySelector('.header__burguer');

  header.addEventListener("click", function animation() {

    header.classList.toggle("true")
    wrapper.classList.toggle("true")
    burguer.classList.toggle("true")
  })
}


function swiperCarroselDiscover() {
  let swiper = new Swiper('.swiper-container.discover', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    pagination: {
      el: '.discover .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  setTimeout(function () { swiper.update(); }, 500);
}

function swiperCarroselRing() {
  let swiper = new Swiper('.swiper-container.ring', {
    slidesPerView: 1.1,
    spaceBetween: 8,
    centeredSlides: false,

    navigation: {
      nextEl: '.ring .swiper-button-next',
      prevEl: '.ring .swiper-button-prev',
    },
  });

  setTimeout(function () { swiper.update(); }, 500);

}
function swiperCarroselCollection() {
  var teste = document.querySelector('.collection__list-items');
  console.log(teste)
  let swiper = new Swiper('.swiper-container.collection__container', {
    slidesPerView: 1,
    spaceBetween: 5,
    centeredSlides: false,

    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
    },

    pagination: {
      el: '.collection .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + document.querySelectorAll('.collection__list-items')[index].textContent + '</span>';
      },
    },

    navigation: {
      nextEl: '.collection .swiper-button-next',
      prevEl: '.collection .swiper-button-prev',
    },
  });

  setTimeout(function () { swiper.update(); }, 500);

}

function swiperCarroselTradition() {
  let swiper = new Swiper('.swiper-container.tradition', {
    slidesPerView: 3,
    spaceBetween: 5,
    centeredSlides: false,

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5
      },
    }


  });

  setTimeout(function () { swiper.update(); }, 500);
}

function swiperCarroselDefault(name) {
  let nameClass = name;
  let slidesPerViewMobile = 1.2;
  let slideMobilePerViewSelected = nameClass === "selected" ? slidesPerViewMobile = 1.6 : slidesPerViewMobile;
  let swiper = new Swiper('.swiper-container.' + nameClass, {
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 4.2,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,

    coverflowEffect: {
      rotate: 0,
      stretch: -35,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },

    breakpoints: {
      320: {
        slidesPerView: slidesPerViewMobile = slideMobilePerViewSelected,
        spaceBetween: 1,
        coverflowEffect: {
          rotate: 0,
          stretch: -30,
          depth: 180,
          modifier: 1,
          slideShadows: true,
        },
      },
      768: {
        slidesPerView: 1.8,
        spaceBetween: 10,
        coverflowEffect: {
          rotate: 0,
          stretch: -30,
          depth: 180,
          modifier: 1,
          slideShadows: true,
        },
      },
      1024: {
        centeredSlides: true,
        slidesPerView: 3.2,
        spaceBetween: 0,
        coverflowEffect: {
          stretch: -50,
          depth: 100,
        },

      },
      1366: {
        centeredSlides: true,
        slidesPerView: 4.2,
        spaceBetween: 0,
        coverflowEffect: {
          stretch: -35,
          depth: 0,
        },

      },
    },

    navigation: {
      nextEl: '.' + nameClass + ' .swiper-button-next',
      prevEl: '.' + nameClass + ' .swiper-button-prev',
    },
  });

  setTimeout(function () { swiper.update(); }, 500);

}

window.onload = function () {
  swiperCarroselDiscover();
  swiperCarroselRing();
  swiperCarroselCollection();
  swiperCarroselTradition();
  swiperCarroselDefault("instagram");
  swiperCarroselDefault("selected");
  header();
};




