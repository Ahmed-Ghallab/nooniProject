// make main carousel moveing
// const myCarouselElement = document.querySelector('#carouselExample')
// const carousel = new bootstrap.Carousel(myCarouselElement, {
//    interval: 2000,
//    touch: false
// })

// make main swiper moveing
// const swiper = new Swiper('.swiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 0,
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//       delay: 3000,
//     },
// });`

// lama l user y go down
window.onscroll = function () {
  scrollFunction();
};
//3lshan control display none or block if user move for BTN
function scrollFunction() {
  const btn = document.getElementById("goTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}
// lama a click 3la l button
document.getElementById("goTop").onclick = function () {
  document.documentElement.scrollTop = 0;
};
// Enable tooltips everywhere from bootstrap
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

//3lshan control display none or block if user move for top NAV
function scrollFunction() {
  const div = document.getElementById("header-top");
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

var Swiper = new Swiper(".swiper",{
  spaceBetween:80,
  loop: true,
  speed: 6000,
  slidesPerView:"auto",
  centeredSlides: true,
  freeMode: true,
  autoplay:{
    delay:0,
  },
})