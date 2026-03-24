document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll('.page');

  const observerOptions = {
    root: null,
    threshold: 0.5 // 페이지가 절반 이상 보일 때 '활성'으로 간주
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 화면 중앙에 오면 등장
        entry.target.classList.add('active');
      } else {
        // 화면에서 멀어지면 다시 사라짐 (비서밋 스타일)
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  pages.forEach((page) => observer.observe(page));
  
  // 첫 페이지는 바로 보이게 강제 적용 (새로고침 시 버그 방지)
  setTimeout(() => {
    if(window.scrollY < 100) pages[0].classList.add('active');
  }, 100);
});