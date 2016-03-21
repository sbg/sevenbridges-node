/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var SBG = require("../lib/sbg");
var CONFIG = require('../lib/config');

var conf = new CONFIG();



describe("sbg", function () {
    it("should send request", function () {

        var greeter = new SBG({
            'X-SBG-Auth-Token': conf.getToken()
        });

        expect(greeter.send).not.to.be.undefined;

        greeter.send({
            method: 'GET',
            url: 'https://api.sbgenomics.com/v2/tasks'
        }, function (err, res) {
            console.log(err, res.body);
        });

    });
});
