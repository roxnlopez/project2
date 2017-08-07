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
			success: function(results){
				console.log("posted");
				//whatever i want to do with search results &/or save it & work with backend
				//use jquery
			}
		});
		$(this).trigger("reset");
	});
});
