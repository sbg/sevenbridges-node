/**
 * Created by filip on 3/17/16.
 */
"use strict";

var chai = require('chai');
var expect = chai.expect
var SBGClient = require('../lib/sbg');

var config = require('../config/tests');
var util = require('../util/test-util');


var errFn = util.errFn;

describe('Projects Client Test', function () {

    var SBG, project,
        billing_group = '';

    this.timeout(config.testTimeout);

    before(function (done) {

        SBG = new SBGClient();

        SBG.Billing.list().done(function (dat) {
            var res = dat.getData();

            expect(res.items.length).to.be.at.least(1);
            expect(res.items[0].id).to.not.be.undefined;
            billing_group = res.items[0].id;

            SBG.Projects.create({
                'name': 'My extra test project ' + Date.now(),
                'description': 'A project for testing my apps in a very cool way',
                'billing_group': billing_group
            }).done(function (data) {
                
                var res = data.getData();

                expect(res).to.not.be.undefined;
                project = res;

                done();

            }, errFn);

        }, errFn);

    });

    after(function (done) {
        // After every test is finished delete temp project
        SBG.Projects.delete(project.id)
            .done(function (data) {
                expect(data.getData()).to.be.null;
                expect(data.getStatus()).to.equal(204);
                done();
            }, errFn);
    });

    it('Can get project details', function (done) {

        SBG.Projects.getDetails(project.id)
            .done(function (d) {
                var data = d.getData();
                expect(data).not.to.be.null;
                expect(data.id).to.be.equal(project.id);
                done();

            }, errFn);
    });

    it('Can list projects', function (done) {

        SBG.Projects.list()
            .done(function (d) {
                var data = d.getData();

                expect(data).not.to.be.null;
                expect(data.items.length).to.be.within(0, 50);
                done();

            }, errFn);

    });
});
