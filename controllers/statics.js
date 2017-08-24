var request = require('request');
var db =require('../models');
// GET /
function home(req, res) {  
  res.render('index');
}

function userInfo(req,res) {
	console.log(req.user);
	db.User.find({'_id': req.user._id}, function(err, users) {
		if (err) {
			res.send("ERROR");
		} else {
			res.json(users[0]);
		}
	});
}


module.exports = {
  home: home,
  userInfo: userInfo
};