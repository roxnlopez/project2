var request = require('request');
var bodyParser = require('body-parser');
var env = require('../env.js');
var db = require('../models');
var passport = require("passport");

function movieSearch(req, res, next) {
	//build req to 3rd party api
	request(url, function(err, res, body) { //body is what I get back and what I want to do with it
		if (typeof(body) === 'string'){body = JSON.parse(body)}
	});
}



module.exports = {
	movieSearch : movieSearch
};