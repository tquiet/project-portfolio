const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active')
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active')
})


const counters = document.querySelectorAll('.skills__ratings-counter'),
  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
})