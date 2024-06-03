document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const menu = document.querySelector('.menu');

  mobileMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});