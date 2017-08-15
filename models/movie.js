var mongoose = require('mongoose');

Schema = mongoose.Schema;

//what a movie is goes here
var MovieSchema = new Schema({
    id: Number,
    title: String,
});

var Movie = mongoose.model('Movie', MovieSchema);
// //what would need to go in the movies array
// //in order to pass a first test?
// ejs.renderFile('./index.ejs', data, function(err,str) {
// 	html = str;
// });

module.exports = Movie;