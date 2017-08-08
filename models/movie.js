var express = require('express');
router = express.Router();
var bodyParser = require('body-parser');
//var apiUrl = require('../env.js');
var request = require('request');

//what a movie is goes here
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

module.exports = router;