
var itemContainer = document.querySelector('.wrapper-block-items');
var blockShow = document.querySelector('.hide');

itemContainer.addEventListener('click', function (e) {
	if (e.target.tagName === 'IMG' && e.target.className === 'triangle') {
		if (e.target.getAttribute('src') === 'pict/triangle_down.png') {
			e.target.setAttribute('src', 'pict/triangle_up.png');
		} else {
			e.target.setAttribute('src', 'pict/triangle_down.png');
		}
	}


	if (e.target.tagName === 'DIV' && e.target.className === 'hide') {
		//blockShow.classList.toggle('show');
		e.target.classList.toggle('show');
	}

});