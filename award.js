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
  document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('student-dropdown');
    var menu = document.getElementById('student-menu');
  
    dropdown.addEventListener('click', function() {
      if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    });
  
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
      if (!event.target.matches('#student-dropdown')) {
        if (menu.style.display === 'block') {
          menu.style.display = 'none';
        }
      }
    });
  });