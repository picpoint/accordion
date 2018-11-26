var itemContainer = document.querySelector('.wrapper-block-items');
var allItemContainer = document.querySelectorAll('.wrapper-block-items-item');


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


	for (var i = 0; i < allItemContainer.length; i++) {
		var middle = allItemContainer[i];
		if (middle.lastElementChild.lastElementChild === e.target) {
				middle.classList.add('orangebkg');
				middle.nextElementSibling.classList.add('show');
				middle.lastElementChild.lastElementChild.setAttribute('src', 'pict/triangle_up.png');
		} else if (middle.lastElementChild.lastElementChild !== e.target) {
				middle.classList.remove('orangebkg');
				middle.nextElementSibling.classList.remove('show');
				middle.lastElementChild.lastElementChild.setAttribute('src', 'pict/triangle_down.png');
		}
	}

});

