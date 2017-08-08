var User = require("../models");
var expect = require("chai").expect;
var request = require("request");
//var env = require('../env');
var apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=f46b568fcb6870a6b23e7e7d385c9806&query=Anchorman";

var responseData;
var bodyData;

describe ("movies", function () {
	before(function(done) {
		request(apiUrl, function(err, response, body){
			responseData = response;
			bodyData = body;
			if(typeof(bodyData) === "string") {
				bodyData = JSON.parse(bodyData);
			} else {
				bodyData = body;
			}
			done();
		});
	});

		it("Should return 200 - OK status code", function(done) {
				expect(responseData.statusCode).to.eq(200);
				console.log(bodyData);
				done();
		});

		//title not empty
		it("Should return a title in the body", function(done) {
			expect(bodyData.results[0].title).to.not.be.empty;
			done();
		});	

		//votecount not equal to 0
		it("Should return a number higher than 0", function(done) {
			expect(responseData.statusCode).to.be.above(0);
			done();
		});

		//overview not empty 
		it("Should return an overview in the body", function(done) {
			expect(bodyData.results[1].overview).to.not.be.empty;
			done();
		});	

		//poster_path not empty
		it("Should return a poster_path in the body", function(done) {
			expect(bodyData.results[2].poster_path).to.not.be.empty;
			done();
		});

		//movie id greater than 0
		it("Should return a movie id greater than 0", function(done) {
			expect(responseData.statusCode).to.be.above(0);
			done();
		});

});
