/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var config = require('../config/tests');
var util = require('../util/test-util');

var SBGClient = require('../lib/sbg');

describe('User Client Test', function () {

    var SBG;

    this.timeout(config.testTimeout);

    before(function (done) {
        SBG = new SBGClient();
        done();
    });

    it('Can get user information.', function (done) {

        SBG.User.info()
            .then(function (data) {
                expect(data).to.not.be.undefined;
                expect(data.username).to.be.string;
                done();
            })
            .catch(util.errFn)

    });

    it('Can get other user information.', function (done) {
        SBG.User.info()
            .then(function (data) {
                expect(data).to.not.be.undefined;
                expect(data.username).to.be.string;
                return SBG.User.listResources(data.username);
            })
            .then(function (data) {
                expect(data).to.not.be.undefined;
                done();
            })
            .catch(util.errFn);

    });

    it('Can\'t get other user information.', function (done) {
        // SBG.User.
        SBG.User.listResources('' + Date.now())
            .then(function (data) {
                expect(data.status).to.not.equal(200);
                done();
            })
            .catch(util.errFn)
    });

    it('Can get user rate limits.', function (done) {
        SBG.User.getRateLimit()
            .then(function (data) {
                expect(data).to.not.be.undefined;
                expect(data.rate).to.not.be.undefined;
                expect(data.rate.remaining).to.not.be.undefined;
                done();
            }).catch(util.errFn);

    });

});
