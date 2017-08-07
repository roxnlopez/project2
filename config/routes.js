var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');


function authenticatedUser(req,res,next){
	//If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();
	//Otherwise the request is always redirected to the home page
	res.redirect('/');
}

function get(movieTitle) {
  var apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=' + keys.apiKey;
 } 

/*
 * JSON API Endpoints
 */

// router.get('/', function api_index (req, res){
// });

// router.get('/api/login', function movie_index(req, res){
//   movie.find({}, function(err, movies) {
//     res.json(movies);
//   });
// });

// router.post('/login', function movie_new (req,res) {
//   console.log("hello");
//   db.movie.create(req.body, function(err, album) {
//     if (err) {
//       res.send("error!");
//     }
//     var title = req.body.title.split(", ");
//     console.log(req.body);
//     res.json(movie);
//   });
// });

// app.post('/api/albums/:album_id/songs', function album_index(req, res){
//   db.Album.findOne({_id: req.params.album_id}, function(err, album) {
//     console.log(req.body);
//     album.songs.push({name: req.body.name, trackNumber: req.body.trackNumber});
//     console.log(album);
//     album.save();
//     res.json(album);
//   });
// });

// app.get('/api/albums/:album_id', function (req,res) {
//   db.Album.findOne({_id: req.params.album_id}, function(err, album) {
//     console.log(req.body);
//     res.json(album);
//   });
// });
router.route('/')
  .get(staticsController.home);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login', function(req,res) {
  res.json();
  console.log("hello");
})
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

router.route("/secret")
	.get(authenticatedUser, usersController.secret);

//another route...could be user profile
// router.route("/secret/sadf")
//   .get(authenticatedUser, usersController.secret);
// router.route("/userProfile")
//   .get(authenticatedUser, usersController.secret);


module.exports = router;