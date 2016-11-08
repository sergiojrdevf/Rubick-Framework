$(document).ready(function() {
	$('.btn').click(function() {
		$('.overlay').addClass('active');
	});

	$('.overlay').click(function(e) {
		if(e.target.nodeName == 'DIV') {
			$('.overlay').removeClass('active');
		} else {
			return
		}
	});	
});