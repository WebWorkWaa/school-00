document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const menu = document.querySelector('.menu');

  mobileMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.getElementById('school-dropdown');
  var menu = document.getElementById('school-menu');

  dropdown.addEventListener('click', function() {
    if (menu.style.display === 'block' || menu.style.display === '') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('#school-dropdown')) {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      }
    }
  });
});
// Smooth scroll functionality for the scroll-down arrow
document.querySelector('.scroll-down').addEventListener('click', function(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth'
  });
});
