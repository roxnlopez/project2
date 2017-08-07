var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||
				 process.env.MONGOLAB_URI ||
				 process.env.MONGOHQ ||
				 "mongodb://localhost/project2");

module.exports.User = require('./user');
module.exports.Movie = require('./movie');