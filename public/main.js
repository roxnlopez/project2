//front end client side code here

//globals here
var apiUrl;
const newMovie = $("#movie").val();

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
				$('#favorites').html("<ul></ul>");
				for(var i=0; i < result.favorites.length; i++) {
					$('#favorites').append("<li>" + result.favorites[i].title + "- <button class='delete'>Delete</button></li>");
				}
	    }
			//console.log(result.favorites.length);
});

	$('#favorites').on('click', '.delete', function (e) {
		console.log('Thursday');
		$.ajax({
	    url: '/api/user/:title',
	    type: 'DELETE',
	    data: {'title': 'delete'}, //<-----this should have to be an object.
	    success: (result) => { 
	    	console.log(result);
	    	//update movie list
	    	updateFavorites(result);
	    }
		});
	});
