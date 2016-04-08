/**
 * Created by filip on 4/7/16.
 */
var chai = require('chai');
var expect = chai.expect

var config = require('../config/tests');
var util = require('../util/test-util');

var SBGClient = require('../lib/sbg');

describe('Apps Client Test', function () {

    var SBG, project;

    this.timeout(config.testTimeout);

    before(function (done) {
        SBG = new SBGClient();

        SBG.User.info()
            .done(function (r) {

                var d = r.getData();

                SBG.Projects.list({
                        username: d.username
                    })
                    .done(function (res) {

                        var data = res.getData();
                        project = data.items[0];

                        done();

                    }, util.errFn);

            }, util.errFn);

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

    it('Can list apps in project.', function (done) {
        SBG.Apps.list({
            project: project.id
        }).done(function (res) {

            var data = res.getData();

            expect(data).to.not.be.undefined;
            expect(data)
                .to.have.property('items')
                .that.is.an('array');

            done();
        }, util.errFn)
    });

    it('Can list apps in project.', function (done) {

        SBG.Apps.list({
            project: project.id
        }).done(function (res) {

            var data = res.getData();

            expect(data).to.not.be.undefined;
            expect(data)
                .to.have.property('items')
                .that.is.an('array');

            done();
        }, util.errFn);

    });

    it('Can list public apps.', function (done) {

        SBG.Apps.list({
            visibility: 'public'
        }).done(function (res) {

            var data = res.getData();

            expect(data).to.not.be.undefined;
            expect(data)
                .to.have.property('items')
                .that.is.an('array');

            expect(data.items.length).to.be.greaterThan(0);

            done();
        }, util.errFn);

    });

});
