var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var movie 		 = require('./movie.js');

mongoose.connect('mongodb://localhost/movieTest'); 

//**********************
//****movie require*****
//**********************
var movie = require('./movie');
var threeFavoriteMovies = ["Gone in 60 Seconds", "MadMax Fury", "Shooter"];
threeFavoriteMovies.forEach(function(film) {
	//code
	
});
console.log(threeFavoriteMovies);

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true})); 

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'EXPRESS', resave: true, saveUninitialized: true })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

//***************
//**movie path***
//***************
//how to redirect the movie path
app.use(bodyParser.json());
app.use('/movie', movie);

require('./config/passport')(passport);
require('./config/passport')(passport);

  app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
  });

var routes = require('./config/routes');
app.use(routes);

app.listen(3000);