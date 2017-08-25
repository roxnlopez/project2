//back end

const request = require('request');
const bodyParser = require('body-parser');
if(process.env.api){
	env = process.env.api; 
} else {
	var env = require('../env.js');
}
var db = require('../models');
const passport = require("passport");

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
//POST CREATE new movie here /movieSearch/movie
function addNewMovie(req,res) {
	console.log("look at this" + req.body.title);
	console.log(req.user);
	db.Movie.create({title: req.body.title}, function(err, newMovie) {
		if (err) {
            // console.log('err: ' + err);
            res.status(503).send('ERROR::' + err);
        } else {
        	db.User.update({_id: req.user._id}, { $push: {favorites: newMovie} }, function(err, updatedUser) {
	          if (err) {
	            // console.log('err: ' + err);
	            res.status(503).send('ERROR::' + err);
	          } else {
	            res.json(updatedUser);
	          }
	        });
			}	
    });

}

// DELETE
function movieRemove(req,res) {
	console.log("movieRemove is working");
	db.User.findOneAndRemove({title: req.body.title}, function(err, foundMovie){
		console.log("roxann");
		var response = {
			message: "Movie successfully deleted"
		};	
		res.send(req.body.title);
	});
}

module.exports = {
	movieSearch : movieSearch,
	addNewMovie: addNewMovie,
	// movieUpdate: movieUpdate,
	movieRemove: movieRemove
	
};