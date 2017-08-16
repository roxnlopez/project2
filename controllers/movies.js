//back end
var request = require('request');
var bodyParser = require('body-parser');
if(process.env.api){
	env = process.env.api; 
} else {
	var env = require('../env.js');
}
var db = require('../models');
var passport = require("passport");

console.log("running here");

//GET api here
function movieSearch(req, res, next) {
	//build req to 3rd party api
	var url = env + "&query=" + req.params.title;
	console.log(url);
	request(url, function(err, response, body) { //body is what I get back and what I want to do with it
		if (typeof(body) === 'string'){body = JSON.parse(body)};
			console.log(body);
		//if i want to work with it here(backend), do something here
		res.json(body);
	});
}
//POST new movie here /movieSearch/movie
function addNewMovie(req,res,next) {
	console.log("roxann");
	// if(req.addNewMovie) {
	// 	console.log("there is a movie fan");
 //      if (err) {
 //        // console.log('err: ' + err);
 //        res.status(503).send('ERROR::' + err);
 //      } else {
 //        db.User.update({_id: req.user._id}, { $push: {movie: newmovie} }, function(err, updatedUser) {
 //          if (err) {
 //            // console.log('err: ' + err);
 //            res.status(503).send('ERROR::' + err);
 //          } else {
 //            res.json(updatedUser);
 //          }
 //        });
 //      }
	// }
}

module.exports = {
	movieSearch : movieSearch,
	
};