const express = require('express');
const router = express.Router(); 
// Parses information from POST
const bodyParser = require('body-parser');
// Used to manipulate POST methods
const methodOverride = require('method-override');
const passport = require("passport");
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');
const moviesController = require('../controllers/movies');
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


router.route('/api/user')
  .get(staticsController.userInfo);

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


//POST Crud here
router.route('/movieSearch/profile')
  .post(moviesController.addNewMovie);

//this GETs the movie searched..no touchy cRud
router.route('/movieSearch/:title')
  .get(moviesController.movieSearch)
  .post(moviesController.movieSearch);

//DELETE cruD route here
router.route('/api/user/:title')
  .delete(moviesController.movieRemove);

module.exports = router;