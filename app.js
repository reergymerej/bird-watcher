

$(function(){
	$('form').submit(function(){
		var bird = $.trim($('#bird').val());

		$('#birds').empty();

		$.ajax({
			url: 'proxy.php',
			type: 'POST',
			data: {
				'q': bird
			},
			success: function(resp){
				showResults(resp);
			},
			error: function(){
				console.error('whoops', arguments);
			}
		});

		return false;
	});
});

function showResults(resp){
	$.each(resp.results, function(i, tweet){
		$('#birds').prepend($('<div>').text(tweet.text));
	});
};