var passport = require("passport");

// GET /signup
function getSignup(request, response, next) {
  response.render('signup.ejs', {
    message: request.flash('signupMessage')
  });
}

// POST /signup
function postSignup(request, response, next) {
  //save a new user
  let signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  });
  // console.log("YO");
  return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response, next) {
  response.render('login.ejs', {
    message: request.flash('loginMessage')
  });
}

// POST /login 
function postLogin(request, response, next) {
  //user login
  let loginStrategy = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  });
  return loginStrategy(request, response, next);
}

// GET /logout
function getLogout(request, response, next) {
  request.logout();
  response.redirect('/');
}

// Restricted page
function secret(request, response) {
  response.render('secret.ejs', {
    message: request.flash('secretMessage')
  });
}

// router.get('/', function(req,res) {
//   // What would go here? 
//   res.json(candies);
//   // Hint: we want all candies in JSON format
// });

// router.get('/:id', function(req,res) {
//   res.send(candies[req.params.id - 1]);
// });

// router.post('/', function(req,res) {
//   candies.push(req.body);
//   res.send(req.body);
// });

// router.get('/:id', function(req,res) {
//   candies[req.params.id]=req.body;
//   res.send();
// });

// router.put('/:id', function(req,res) {
//   candies[req.params.id -1]=req.body;
//   res.send(req.body);
// });

// router.get('/', function(req,res) {
//   res.send(candies);
// });

// router.delete('/:id', function(req,res) {
//   candies.splice(req.params.id -1, 1);
//   res.send({"message":"deleted"});
// });

// router.get('/', function(req,res) {
//   res.send(candies);
// });

//GET list of movies
// function getAll(request, response) {
//   Movie.find(function(error, movies) {
//     if(error) response.json({message: "Could not find movie"});
//     console.log("Rendering movies");
//     response.render('layout', {movies: movies});
//   });
// }

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret,
  //new name to export
  // getAll: getAll
};