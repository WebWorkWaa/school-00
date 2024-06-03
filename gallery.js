document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');
  
    mobileMenu.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  });
function scrollGalleryLeft(group) {
    const container = document.querySelector('.' + group);
    container.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollGalleryRight(group) {
    const container = document.querySelector('.' + group);
    container.scrollBy({ left: 200, behavior: 'smooth' });
}
