var express = require('express');
router = express.Router();
var bodyParser = require('body-parser');
var apiUrl = require('../env.js');
var request = require('request');

//movie array
var movies = [
	{
		"id": 1,
		"title": "Gone in 60 Seconds",
	},

// 	{
// 		"id": 2,
// 		"title": "MadMax Fury"
// 	},

// 	{
// 		"id": 3,
// 		"title": "Shooter"
// 	}
];

// //what would need to go in the movies array
// //in order to pass a first test?
// router.get('/', function(req,res) {
// 	res.json(movies);
// });

// function get(movieTitle) {
// var apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=' + keys.apiKey;
// //var apiUrl = url + apiKey + '/conditions/q/' + state + '/' + city + '.json';
// //https://api.themoviedb.org/3/movie/550?api_key=f46b568fcb6870a6b23e7e7d385c9806
// //console.log(keysInfo.apiKey);
// //console.log(keysInfo.engineId);
// request(apiUrl, function (error, response, body) {
//   //Inside that callback
//   //parse data
//   //Print out the movie result
//   //console.log(body.items.length);
//   console.log(JSON.parse(body).title);
// 	});
// }
module.exports = router;