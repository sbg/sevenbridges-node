/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var SBG = require("../lib/sbg");
var Config = require('../lib/config').Config;

var conf = new Config();

describe("sbg", function () {
    it("should send request", function (done) {

        var Client = new SBG({
            'X-SBG-Auth-Token': conf.getToken()
        });

        expect(Client.send).not.to.be.undefined;

        Client.send({
            method: 'GET',
            url: 'https://api.sbgenomics.com/v2/tasks'
        }, function (err, res) {
            expect(err).to.be.null;
            expect(res.body).to.be.object;
            done();
        });

    });
});
