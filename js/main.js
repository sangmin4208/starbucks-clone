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