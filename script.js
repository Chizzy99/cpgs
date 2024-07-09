const show = document.querySelector('#champion');
const button = document.querySelector('.tour-btn');
const news = document.querySelector('.news-btn');
const clear = document.querySelector('.remove');

button.addEventListener('click', function (e) {
	e.preventDefault();
	show.style.display = 'block';
	button.style.display = 'none';
	news.style.display = 'block';
	news.addEventListener('click', function () {
		scrollTo(0, 1100);
		news.style.display = 'none';
		button.style.display = 'block';
	});
});

clear.addEventListener('click', function () {
	show.style.display = 'none';
	button.style.display = 'block';
	news.style.display = 'none';
});
