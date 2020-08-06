let sidebar = document.querySelector('.sidebar');
let hiddenButton = document.querySelector('.sidebar__button--close');
let showButton = document.querySelector('.header__button--burger');
let whiteBackground = document.querySelector('.white-background');
let requestCall = document.querySelector('.sidebar__button--call');
let call = document.querySelector('.call');
let hiddenCall = document.querySelector('.call__button');
let feedback = document.querySelector('.feedback');
let hiddenFeedback = document.querySelector('.feedback__button');
let feedbackOrder = document.querySelector('.sidebar__button--write');

showButton.addEventListener('click', function() {
	sidebar.style.transform = 'translateX(400px)';
	whiteBackground.style.display = 'block';
});

hiddenButton.addEventListener('click', function() {
	sidebar.style.transform = 'translateX(0px)';
	whiteBackground.style.display = 'none';
});

requestCall.addEventListener('click', function() {
	call.style.display = 'block';
	call.style.transform = 'translateX(-500px)';
	whiteBackground.style.display = 'block';
	whiteBackground.style.zIndex = '6';
	if (window.innerWidth <= 1119) {
		sidebar.style.transform = 'translateX(0px)';
	}
});

hiddenCall.addEventListener('click', function() {
	call.style.transform = 'translateX(0px)';
	whiteBackground.style.display = 'none';
	call.style.display = 'none';
	whiteBackground.style.zIndex = '2'
});

feedbackOrder.addEventListener('click', function() {
	feedback.style.display = 'block';
	feedback.style.transform = 'translateX(-500px)';
	whiteBackground.style.display = 'block';
	whiteBackground.style.zIndex = '6';
	if (window.innerWidth <= 1119) {
		sidebar.style.transform = 'translateX(0px)';
	}
});

hiddenFeedback.addEventListener('click', function() {
	feedback.style.transform = 'translateX(0px)';
	whiteBackground.style.display = 'none';
	feedback.style.display = 'none';
	whiteBackground.style.zIndex = '2'
});