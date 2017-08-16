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

 // the user object was retrieved successfully, so we have the inventory
  function handleSuccess(json) {
    //console.log('handleSuccess');
    //console.log(json);
}

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
				$('#movie').empty();
				result.results.forEach(function(movie) {
					$('#movie').append("<li>" + movie.title + "- </li>");
				});
			} 
	});	

	$(this).trigger("reset");

console.log("posting");
//look for id on click
	$.ajax({
		method: 'POST',
		url: '/profile',
		data: newMovie,
		success: handlePostSuccess,
		error: handlePostError
	});

	$(this).trigger("reset");
	// new movie was added successfully, now we need the updated user object
  function handlePostSuccess(json) {
    //console.log(json);
    $.ajax({
      method: 'GET',
      url: '/profile',
      success: handleUpdatedUserSuccess,
      error: handleUpdatedUserError
    });

  }

  function handlePostError(json) {
    console.log('failed to add stash. sorry.');
  }

  // successfully retrieved the updated user object with the updated inventory
  function handleUpdatedUserSuccess(json) {
    //console.log(json);
    renderMovie(json.movie[json.movie.length - 1]);
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  function handleUpdatedUserError(json) {
    console.log('failed to get updated inventory. sorry.');
  }
});	
	//create some new cool cats
//$('.results').append("Once upon a time there was a Developer named " + $("#name").val().split(" ").join("") + ". "

	
	//add cat or note and refresh list
	//$('#new-name').serialize();
	//$.ajax({
	//	type: 'POST',
	//	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
	//	data: $('#new-name').serialize(),
	//	success: function(el){
	//		console.log('hi');
	//	}
});