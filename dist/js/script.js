var itemContainer = document.querySelector('.wrapper-block-items');

itemContainer.addEventListener('click', function (e) {

	if (e.target.tagName === 'IMG' && e.target.className === 'triangle') {
		var block = e.target.parentElement.parentElement.nextElementSibling;
		var item = e.target.parentElement.parentElement;

		if (e.target.getAttribute('src') === 'pict/triangle_down.png') {
			e.target.setAttribute('src', 'pict/triangle_up.png');
			block.classList.add('show');
		 item.classList.add('orangebkg');
		} else {
			e.target.setAttribute('src', 'pict/triangle_down.png');
			block.classList.remove('show');
			item.classList.remove('orangebkg');
		}
	}



});
