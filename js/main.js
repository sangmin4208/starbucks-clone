const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("focusout", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const bedgeEl = document.querySelector("header .badges")


window.addEventListener('scroll',_.throttle(()=>{
  if (window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 옵션);
    gsap.to(bedgeEl,{
      opacity: 0,
      duration: .6,
      display:'none',
    })
  }else{
    // 배지 보이기
    gsap.to(bedgeEl,{
      opacity: 1,
      duration: .6,
      display:'block',
    })
  }
},300))


const fadeEls = document.querySelectorAll('.fade-in')
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl,{
    opacity: 1,
    duration: 1,
    display:'block',
    delay: (index + 1) * .7
  })
})

new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop:true,
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})


const promotionEl = document.querySelector('.promotion');
const promtionToggleBtn = document.querySelector('.toggle-promotion');

promtionToggleBtn.addEventListener('click', (()=>{
  let isHidePromotion = false;
  return () => {
    isHidePromotion = !isHidePromotion
    if(!isHidePromotion) {
      promotionEl.classList.add('hide');
    }else{
      promotionEl.classList.remove('hide');
    }
  }
})())