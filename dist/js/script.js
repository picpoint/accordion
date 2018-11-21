var itemContainer = document.querySelector('.wrapper-block-items');
var blockShow = document.querySelectorAll('.hide');

itemContainer.addEventListener('click', function (e) {

	if (e.target.tagName === 'IMG' && e.target.className === 'triangle') {
		var block = e.target.parentElement.parentElement.nextElementSibling;

		if (e.target.getAttribute('src') === 'pict/triangle_down.png') {
			e.target.setAttribute('src', 'pict/triangle_up.png');
			block.classList.add('show');
		} else {
			e.target.setAttribute('src', 'pict/triangle_down.png');
			block.classList.remove('show');
		}
	}

});
