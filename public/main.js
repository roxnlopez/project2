// //front end code here

//globals here
var apiUrl;
var newMovie = $("#movie").val();

var newMovieObject = {
	title: newMovie
};

//load page here
$(document).ready(function() {
	console.log("ready");

	//ajax posts here
	$("form").on("submit", function(event) {
		event.preventDefault();
		var searchTitle = $('#searchTitle').val().split(" ").join("%20");
		var searchUrl = '/movieSearch/' + searchTitle;
		console.log(searchUrl);
		$.ajax({
			method: 'GET',
			url: searchUrl,
			success: function(result) {
				console.log("running");
				console.log(result);
				//display API contents in a form
				result.results.forEach(function(movie) {
					$('#movie').append("<li>" + movie.title + "- </li>");
				});
			} 
	});	

	$(this).trigger("reset");

	// $("id").on("click", function(event) {
	// 	event.preventDefault();
	// 	console.log("posting");
//look for id on click
	// 	$.ajax({
	// 		url: '/movie',
	// 		method: 'POST',
	// 		success: function(results){
	// 			console.log("posted");
	// 			//whatever i want to do with search results &/or save it & work with backend...use jquery
	// 		}
	// 	});
	// 	$(this).trigger("reset");
	// });

	 });
 
});

// $.post('/postMovie', JSON.stringify(newMovieObject))
// 	.done(function(results) {
// 	var newMovieResults = JSON.parse(results);
// 	$('#movie').append('<li>' + newMovieObject.title + ' - <em></li>');
// 	});

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
