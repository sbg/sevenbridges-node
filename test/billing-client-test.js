/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var SBGClient = require('../lib/sbg');
var config = require('../config/tests');
var util = require('../util/test-util');


describe('Billing Client Test', function () {

    var SBG;

    this.timeout(config.testTimeout);

    before(function(done) {
        SBG = new SBGClient();
        done();
    });

    it('Can list billing groups.', function (done) {

        SBG.Billing.list().done(function (data) {

            expect(data).not.to.be.null;
            expect(data.items.length).to.be.within(0, 100);
            done();

        }, util.errFn);

    });

    it('Can get billing group breakdown.', function (done) {
        //TODO
        done();
    });

    it('Can get billing group details.', function (done) {
        //TODO
        done();
    });

    it('Can list invoices.', function (done) {
        //TODO
        done();
    });

    it('Can get invoice details.', function (done) {
        //TODO
        done();
    });


});
