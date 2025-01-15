document.addEventListener(`DOMContentLoaded`, function () {
  AOS.init();
  
  
  var swiper = new Swiper(".portfolioSwiper", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    });
  
  window.addEventListener(`scroll`, function () {
    const headerBar = document.querySelector(`.header_area`);
    const windowData = window.scrollY;

    if (windowData <= 0 ) {
      headerBar.classList.remove(`scroll`);
    } else {
      headerBar.classList.add(`scroll`);
    }
  });
  
}); // end