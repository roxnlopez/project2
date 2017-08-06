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

/*
 * JSON API Endpoints
 */

// app.get('/api', function api_index (req, res){
//   res.json({
//     message: "Welcome to tunely!",
//     documentation_url: "https://github.com/tgaff/tunely/api.md",
//     base_url: "http://tunely.herokuapp.com",
//     endpoints: [
//       {method: "GET", path: "/api", description: "Describes available endpoints"}
//     ]
//   });
// });

// app.get('/api/albums', function album_index(req, res){
//   db.Album.find({}, function(err, albums) {
//     res.json(albums);
//   });
// });

// app.post('/api/albums', function album_new (req,res) {
//   console.log(req.body.genres);
//   db.Album.create(req.body, function(err, album) {
//     if (err) {
//       res.send("error!");
//     }
//     var genres = req.body.genres.split(", ");
//     console.log(req.body.genres);
//     res.json(album);
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

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);

router.route("/secret")
	.get(authenticatedUser, usersController.secret);


//another route...could be user profile
// router.route("/secret/sadf")
//   .get(authenticatedUser, usersController.secret);

module.exports = router;