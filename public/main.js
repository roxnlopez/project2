// //front end code here
// if(process.env.api){ 
// 	env = process.env.api; 
// } else {
// 	var env = require('../env.js');
// }

//globals here
var apiUrl;

//load page here
$(document).ready(function() {
	console.log("ready");

	//ajax posts here
	$("form").on("submit", function(event) {
		event.preventDefault();
		$.ajax({
			method: 'GET',
			url: '/user',
			success: function(result) {
				console.log("running");
			} 
	});	
	render();
	$(this).trigger("reset");

	$("form").on("click", function(event) {
		event.preventDefault();
		console.log("posting");

		$.ajax({
			url: '/movie',
			method: 'POST',
			success: function(results){
				console.log("posted");
				//whatever i want to do with search results &/or save it & work with backend...use jquery
			}
		});
		$(this).trigger("reset");
	});

	});

	$.ajax({
		method: 'POST',
		url: '/profile',
		success: function(results){
			console.log("ran");
		}
	});
	movieSearch.push(json);
	render();
});

