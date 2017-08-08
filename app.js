//server side javascript
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true})); 

//set up app to accept ejs
app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'EXPRESS', resave: true, saveUninitialized: true })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 


require('./config/passport')(passport);

  app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
  });


var routes = require('./config/routes');
app.use(routes);

app.listen(process.env.PORT || 3000);