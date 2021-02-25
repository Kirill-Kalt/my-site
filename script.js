
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  console.log('Кнопка нажата!');
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};
