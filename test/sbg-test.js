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
    it("should send request", function (done) {

<<<<<<< HEAD
        var Client = new SBG({
            'session-id': ''
=======
        var greeter = new SBG({
            'X-SBG-Auth-Token': conf.getToken()
>>>>>>> 1bb815c42a226a1faf0c12c7c9b5bb5cf6936a18
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
