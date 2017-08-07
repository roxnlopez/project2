//front end code here

//globals here
var apiUrl;

$(document).ready(function() {
//ajax.get.post....
//add eventlisteners here too
	$.ajax({
		method: 'GET',
		url: '/user',
		success: function(result) {
			console.log("running");
		}
	});	

	$("form").on("submit", function(event) {
		event.preventDefault();

		$.ajax({
			url: '/movie',
			method: 'POST',
			data: data,
			success: function(results){
				console.log("posted");
			}
		});
		$(this).trigger("reset");
	});
});
