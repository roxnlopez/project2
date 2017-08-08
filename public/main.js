//front end code here
if(process.env.api){
	env = process.env.api; 
} else {
	var env = require('../env.js');
}
//globals here
var apiUrl;

$(document).ready(function() {
//ajax.get.post....
//add eventlisteners here too
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

	$("form").on("submit", function(event) {
		event.preventDefault();

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

router.post('/movie', function (req,res) {
	var newMovie = new db.Movie({
		title: req.body.title,
		releaseDate: req.body.releaseDate
	});
});

router.post('/profile', function(req,res) {
	var newMovie = new db.Movie({
		title: req.body.title
	});
});


