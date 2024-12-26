

let button = document.querySelector('.show-all__text')
let contenier = document.querySelector(".swiper")


button.addEventListener('change', function(){
  contenier.classList.toggle('swiperHidden')
  let text = document.querySelector('.show-all__text-check')
  let pict = document.querySelector('.show-all__expand-image')
  

  if (button.checked){
    text.textContent = "Показать все"
    pict.src = "img/expand.png"

  }else{
    text.textContent = "Скрыть"
    pict.src = "img/out.png"
  }


})

new Swiper('.swiper', {
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      spaceBetween: 16,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto',
    }
  }
});
