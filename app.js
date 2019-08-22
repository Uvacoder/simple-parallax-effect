const header = document.querySelector('header');
const container = document.querySelector('.container');
const coolTitle = document.querySelector('section h3');

window.addEventListener('scroll', function() {
  const distance = window.scrollY;
  header.style.transform = `translateY(${distance * 1}px)`;
  container.style.transform = `translateY(${distance * 0.2}px)`;
  setTimeout(() => {
    coolTitle.classList.add('animate-me');
  }, 500);
});
