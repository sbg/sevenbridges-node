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

    this.timeout(5000);

    it("should send request", function (done) {

        var Client = new SBG({
            'X-SBG-Auth-Token': conf.getToken()
        });

        expect(Client.send).not.to.be.undefined;

        Client.send({
            method: 'GET',
            url: 'https://api.sbgenomics.com/v2/tasks'
        }, function (err, res) {
            console.log(err, res.body);
            done();
        });

    });
});
