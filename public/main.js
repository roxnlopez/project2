// //front end client side code here

//globals here
var apiUrl;
var newMovie = $("#movie").val();

var newMovieObject = {
	title: newMovie
};

//load page here
$(document).ready(function() {
	console.log("ready");

	$.ajax({
		method: 'GET',
		url: '/api/user',
		success: function(result) {
			console.log(result);
			updateFavorites(result);
		}

	});
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
					console.log(movie.title);
					$('#movie').append("<li data-movie-title='"+ movie.title +"'>" + movie.title + "- <button class='save'>Save</button></li>");
				});
			} 
	});	

	$(this).trigger("reset");
	// new movie was added successfully, now we need the updated user object
  // function handlePostSuccess(json) {
  //   //console.log(json);
  //   $.ajax({
  //     method: 'GET',
  //     url: '/profile',
  //     success: handleUpdatedUserSuccess,
  //     error: handleUpdatedUserError
  //   });

  // }

});	

$('#movie').on('click', '.save', function (e) {
	console.log(this);
	movieName = $(this).parents('li').data('movie-title');
	console.log(movieName);
	$.ajax({
		method: 'POST',
		url: '/movieSearch/profile',
		data: {'title': movieName},
		success: function(result) {
			$('#statusMessage').text("Saved");
			var movies = $('#favorites').text() + " " + movieName;
			$('#favorites').text(movies);
		console.log("hey! you!" + result);
		}
	});
});

function updateFavorites(result) {
	var favList = "";
	$('#favorites').text("");
	for(var i=0; i < result.favorites.length; i++) {
		favList =  favList + " " + result.favorites[i].title;
	}
	$('#favorites').text(favList);
	console.log("helpless" + favList);
	console.log(result.favorites.length);
}

});
