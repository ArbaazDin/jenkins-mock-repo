var expect  = require("chai").expect;
var request = require("request");

describe("node js app", function() { // for domain or per module

    describe("hello request", function() { // per url

        const localhostUrl = "http://localhost:3000/hello";

        it("hello request should return status code 200", function(done){ // multiple test for individual request
            request(localhostUrl, function(error, response, body ) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});