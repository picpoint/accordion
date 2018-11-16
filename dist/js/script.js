/*
function showBase() {
	var block = document.getElementById('bd');
	block.classList.toggle('show');
}

function showFunc() {
	var block = document.getElementById('fnc');
	block.classList.toggle('show');
}

function showErr() {
	var block = document.getElementById('err');
	block.classList.toggle('show');
}

function showObj() {
	var block = document.getElementById('obj');
	block.classList.toggle('show');
}

function showEvent() {
	var block = document.getElementById('event');
	block.classList.toggle('show');
}
*/


var img = document.getElementById('pict');
var trnglup = document.getElementById('pict');
var basedesc = document.getElementById('basedesc');


img.addEventListener('click', function () {
		basedesc.classList.toggle('show');

		if (img.getAttribute('src') === 'pict/triangle_up.png') {
			return img.setAttribute('src', 'pict/triangle_down.png');
		}

		if (img.getAttribute('src') === 'pict/triangle_down.png') {
			return img.setAttribute('src', 'pict/triangle_up.png');
		}

});


