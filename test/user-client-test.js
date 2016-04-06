/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect

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
            .done(function (res) {
                var data = res.getData();
                expect(data).to.not.be.undefined;
                expect(data.username).to.be.string;

                expect(res.getStatus()).to.equal(200);

                done();
            }, util.errFn)

    });

    it('Can get other user information.', function (done) {

        SBG.User.info()
            .done(function (res) {
                var data = res.getData();

                expect(res.getStatus()).to.equal(200);

                expect(data).to.not.be.undefined;
                expect(data.username).to.be.string;

                SBG.User.listResources(data.username)
                    .done(function (res) {
                        var data = res.getData();

                        expect(data).to.not.be.undefined;
                        expect(res.getStatus()).to.equal(200);
                        done();
                    });
            });

    });

    it('Can\'t get other user information.', function (done) {
        SBG.User.listResources('admin')
            .done(function (res) {
                expect(res.getStatus()).to.be.oneOf([401, 404]);
                done();
            }, util.errFn);
    });

    it('Can get user rate limits.', function (done) {
        SBG.User.getRateLimit()
            .done(function (res) {
                var data = res.getData();

                expect(data).to.not.be.undefined;
                expect(data.rate).to.not.be.undefined;
                expect(data.rate.remaining).to.not.be.undefined;
                expect(res.getStatus()).to.equal(200);

                done();
            }, util.errFn);

    });

});
