var m = new modal('.modal');
m.show();

var btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
	document.querySelector('.overlay').setAttribute('class', 'overlay to-top active');
});