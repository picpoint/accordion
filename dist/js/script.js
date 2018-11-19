/*
var img = document.querySelector('.triangle');
var hide = document.querySelector('.hide');

img.addEventListener('click', function () {
	hide.classList.toggle('show');

		if (img.getAttribute('src') === 'pict/triangle_up.png') {
			img.setAttribute('src', 'pict/triangle_down.png');
		} else {
			img.setAttribute('src', 'pict/triangle_up.png');
		}
});
*/

var itemContainer = document.querySelector('.wrapper-block-items');
//var img = document.querySelector('.triangle');
//var hide = document.querySelector('.hide');

itemContainer.addEventListener('click', function (e) {
	if (e.target.tagName === 'IMG' && e.target.className === 'triangle') {
		console.log(e.target + ' this triangle');
	}
});