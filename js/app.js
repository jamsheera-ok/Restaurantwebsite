
var swiper = new Swiper (".food-slider",{
    grabCursor:true,
    loop :true,
    CenteredSlides :true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('active');
});