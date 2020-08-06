const sliders = document.querySelectorAll('.swiper-container');

let mySwiper1;
let mySwiper2;
let mySwiper3;

sliders.forEach((el) => {
  function mobileSlider() {
  if (window.innerWidth <= 767 && el.dataset.mobile == 'false') {
    if (el === sliders[0]) {
      mySwiper1 = new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        slideClass: 'card',
         pagination: {
          el: el.querySelector('.swiper-pagination'),
          clickable: true,
         },
      });

    } else if (el === sliders[1]) {
        mySwiper2 = new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: true,
          slideClass: 'card',
           pagination: {
            el: el.querySelector('.swiper-pagination'),
            clickable: true,
           },
        });

    } else {
        mySwiper3 = new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: true,
          slideClass: 'card',
           pagination: {
            el: el.querySelector('.swiper-pagination'),
            clickable: true,
           },
        });
    }

    el.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    el.dataset.mobile = 'false';
    if (el.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
      mySwiper2.destroy();
      mySwiper3.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});

})


