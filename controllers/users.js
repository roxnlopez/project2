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

// //function secret...for new path created on routes.js
function userProfile(request, response) {
  response.render('userProfile.ejs', {
   
  });
   console.log("welcome");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret,
  //new name to export
  userProfile: userProfile
};