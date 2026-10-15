
// 스크롤이 되면 헤더 모양이 바뀜
const gnb = document.querySelector('.gnb')

window.addEventListener('scroll',function(){
  gnb.classList.toggle('on', window.scrollY > 100)
})


// 스크롤 섹션
// const sections = document.querySelectorAll('main, section');
// let isScrolling = false;

// window.addEventListener('wheel', (e) => {
//   if (isScrolling) {
//     e.preventDefault();               // 이동 중 휠 입력 무시
//     return;
//   }

//   const vh = window.innerHeight;

//   const current = [...sections].findIndex(section => {
//     const rect = section.getBoundingClientRect();
//     return rect.top <= 10 && rect.bottom > 10;
//   });
//   if (current === -1) return;

//   const rect = sections[current].getBoundingClientRect();
//   const goingDown = e.deltaY > 0;

//   // 섹션이 화면보다 길 때: 안쪽에 아직 볼 내용이 남았으면 기본 스크롤 허용
//   if (goingDown && rect.bottom > vh + 10) return;   // 아래쪽 내용이 더 있음
//   if (!goingDown && rect.top < -10) return;         // 위쪽 내용이 더 있음

//   e.preventDefault();                 // 여기서부터는 섹션 스냅

//   let next = current + (goingDown ? 1 : -1);
//   next = Math.max(0, Math.min(next, sections.length - 1));
//   if (next === current) return;

//   isScrolling = true;
//   sections[next].scrollIntoView({ behavior: 'smooth', block: 'start' });

//   setTimeout(() => { isScrolling = false; }, 700);
// }, { passive: false });               // preventDefault를 쓰려면 필수



// 스와이퍼
var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '3',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});