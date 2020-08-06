import '../scss/style.scss';
import "./sliders/sliders.js";
import "./sidebar/sidebar.js";

let read = document.querySelector('.brands__read-more');
let show = document.querySelector('.brands__list--hidden');
let readContent = document.querySelector('.content__button');
let content = document.querySelector('.content__paragraph');

readContent.addEventListener('click', function() {
	content.classList.toggle('content__paragraph--hidden');
	readContent.classList.toggle('content__button--icon-up');
	readContent.classList.toggle('content__button--icon-down');
	if (readContent.classList.contains('content__button--icon-down')) {
	  readContent.textContent = 'Скрыть';
	}  else {
	  readContent.textContent = 'Читать далее';
	}
});

read.addEventListener('click', function(){
	show.classList.toggle('brands__list--hidden');
	read.classList.toggle('icon-up');
	read.classList.toggle('icon-down');
	if (read.classList.contains('icon-down')) {
	  read.textContent = 'Скрыть';
	}  else {
	  read.textContent = 'Показать все';
	}  	
});

let tehread = document.querySelector('.technics__read-more');
let tehshow = document.querySelector('.technics__list--hidden');
tehread.addEventListener('click', function(){
	tehshow.classList.toggle('technics__list--hidden');
	tehread.classList.toggle('icon-up');
	tehread.classList.toggle('icon-down');
	if (tehread.classList.contains('icon-down')) {
	  tehread.textContent = 'Скрыть';
	}  else {
	  tehread.textContent = 'Показать все';
	}  	
});

