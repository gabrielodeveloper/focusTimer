const iconLightMode = document.querySelector('.iconLightMode');
const iconDarkMode = document.querySelector('.iconDarkMode');
const container = document.querySelectorAll('.container');


iconLightMode.addEventListener('click', function() {
  iconLightMode.classList.add('hide');
  iconDarkMode.classList.remove('hide');
  container.classList.add('darkMode')
});

iconDarkMode.addEventListener('click', function() {
  iconDarkMode.classList.add('hide');
  iconLightMode.classList.remove('hide');
  container.classList.add('lightMode');
});
