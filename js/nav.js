const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
	navList.classList.toggle('open');
	navToggle.firstElementChild.classList.toggle('open');
});
