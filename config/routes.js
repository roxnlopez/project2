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

router.get('/', function api_index (req, res){
  res.render("index.ejs");
});

router.route('/movieSearch')
  .post(moviesController.movieSearch);

router.route('/')
  .get(staticsController.home);

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

router.route("/profile")
  .post(moviesController.movieSearch);


//another route...could be user profile
// router.route("/secret/sadf")
//   .get(authenticatedUser, usersController.secret);
// router.route("/userProfile")
//   .get(authenticatedUser, usersController.secret);


module.exports = router;