// //front end code here
// if(process.env.api){ 
// 	env = process.env.api; 
// } else {
// 	var env = require('../env.js');
// }

//globals here
var apiUrl;
var newMovie = $("#movie").val();

var newMovieObject = {
	title: newMovie
};
console.log(newMovieObject);

//load page here
$(document).ready(function() {
	console.log("ready");

	//ajax posts here
	$("form").on("submit", function(event) {
		event.preventDefault();
		$.ajax({
			method: 'GET',
			url: '/movieSearch',
			success: function(result) {
				console.log("running");
				//display API contents in a form
				result.forEach(function(el) {
					$(movies).append("<li>" + el.title + "- </li>");
				});
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

});

$.post('/movieSearch', JSON.stringify(newMovieObject))
	.done(function(results) {
	var newMovieResults = JSON.parse(results);
	$('#movie').append('<li>' + newMovieObject.title + ' - <em></li>');
	});

	//create some new cool cats
//$('.results').append("Once upon a time there was a Developer named " + $("#name").val().split(" ").join("") + ". "
	
//create object with new info 

	
	//add cat or note and refresh list
	//$('#new-name').serialize();
	//$.ajax({
	//	type: 'POST',
	//	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
	//	data: $('#new-name').serialize(),
	//	success: function(el){
	//		console.log('hi');
	//	}
