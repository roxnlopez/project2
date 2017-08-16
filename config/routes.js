var express = require('express');
var router = express.Router(); 
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
var moviesController = require('../controllers/movies');
if(process.env.api){
  env = process.env.api; 
} else {
  var env = require('../env.js');
}


var apiUrl;

function authenticatedUser(req,res,next){
	//If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();
	//Otherwise the request is always redirected to the home page
	res.redirect('/');
}

/*
 * JSON API Endpoints
 */

//GET restful route
router.route('/')
  .get(staticsController.home);

//user routes  
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login', function(req,res) {
  console.log("hello");
})
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

router.route("/secret")
	.get(authenticatedUser, usersController.secret);

//this GETs the movie searched..no touchy
router.route('/movieSearch/:title')
  .get(moviesController.movieSearch)
  .post(moviesController.movieSearch);

//POST here
router.route('/movieSearch/profile')
  .post(moviesController.movieSearchNew);

//PUT route here
// router.put('/movieSearch', function(req,res) {
//   movies[req.params]=req.body;
//   res.send(req.body);
// });

// router.delete('/:id', function(req,res) {
//   candies.splice(req.params.id -1, 1);
//   res.send({"message":"deleted"});
// });

module.exports = router;