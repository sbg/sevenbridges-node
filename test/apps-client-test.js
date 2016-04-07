/**
 * Created by filip on 4/7/16.
 */
var chai = require('chai');
var expect = chai.expect

var config = require('../config/tests');
var util = require('../util/test-util');

var SBGClient = require('../lib/sbg');

describe('Apps Client Test', function () {

    var SBG;

    this.timeout(config.testTimeout);

    before(function (done) {
        SBG = new SBGClient();
        done();
    });

    it('Can list all user apps.', function (done) {

        SBG.Apps.list()
            .done(function (res) {

                var data = res.getData();

                expect(data).to.not.be.undefined;
                expect(data)
                    .to.have.property('items')
                    .that.is.an('array');

                done();
            }, util.errFn)

    });


});
