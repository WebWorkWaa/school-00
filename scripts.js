document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const menu = document.querySelector('.menu');

  mobileMenu.addEventListener('click', function () {
      menu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var dropdownSchool = document.getElementById('school-dropdown');
  var menuSchool = document.getElementById('school-menu');

  dropdownSchool.addEventListener('click', function() {
      if (menuSchool.style.display === 'block' || menuSchool.style.display === '') {
          menuSchool.style.display = 'none';
      } else {
          menuSchool.style.display = 'block';
      }
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener('click', function(event) {
      if (!event.target.matches('#school-dropdown')) {
          if (menuSchool.style.display === 'block') {
              menuSchool.style.display = 'none';
          }
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var dropdownStudent = document.getElementById('student-dropdown');
  var menuStudent = document.getElementById('student-menu');

  dropdownStudent.addEventListener('click', function() {
      if (menuStudent.style.display === 'block' || menuStudent.style.display === '') {
          menuStudent.style.display = 'none';
      } else {
          menuStudent.style.display = 'block';
      }
  });

  // Close the dropdown menu if the user clicks outside of it
  window.addEventListener('click', function(event) {
      if (!event.target.matches('#student-dropdown')) {
          if (menuStudent.style.display === 'block') {
              menuStudent.style.display = 'none';
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

document.addEventListener('DOMContentLoaded', () => {
  const bannerTrack = document.querySelector('.banner-track');
  const images = bannerTrack.querySelectorAll('img');
  let cloneCount = 0;

  const cloneImages = () => {
      images.forEach(image => {
          const clone = image.cloneNode(true);
          bannerTrack.appendChild(clone);
          cloneCount++;
      });
  };

  const startScrolling = () => {
      bannerTrack.style.animation = 'none';
      void bannerTrack.offsetWidth; // Trigger a reflow
      bannerTrack.style.animation = `scroll ${cloneCount * 10}s linear infinite`;
  };

  cloneImages();
  startScrolling();

  window.addEventListener('resize', () => {
      bannerTrack.style.animation = 'none';
      bannerTrack.innerHTML = '';
      cloneCount = 0;
      cloneImages();
      startScrolling();
  });
});
