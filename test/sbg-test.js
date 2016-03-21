/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect

var SBG = require("../lib/sbg");


describe("sbg", function () {
    it("should send request", function () {

        var greeter = new SBG({
            'session-id': ''
        });

        expect(greeter.send).not.to.be.undefined;

        greeter.send({
            method: 'GET',
            url: 'https://peon.sbgenomics.com/v0/tasks/?order=desc&order-by=timeStarted&offset=0&limit=10&status=ACTIVE&status=COMPLETED&status=FAILED&status=ABORTED&status=QUEUED'
        }, function (err, res) {
            console.log(err, res.body);
        });

    });
});
