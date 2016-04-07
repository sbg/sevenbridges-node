/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect

var config = require('../config/tests');
var util = require('../util/test-util');

var SBGClient = require('../lib/sbg');

var errFn = util.errFn;

describe('File Client Test', function () {

    var SBG, project,
        billing_group = '';

    this.timeout(config.testTimeout);

    before(function (done) {

        SBG = new SBGClient();

        SBG.Billing.list().done(function (res) {
            var data = res.getData();

            expect(data.items.length).to.be.at.least(1);

            billing_group = data.items[0].id;

            SBG.Projects.create({
                'name': 'My extra test project ' + Date.now(),
                'description': 'A project for testing my apps in a very cool way',
                'billing_group': billing_group
            }).done(function (res) {

                expect(res.getStatus()).to.equal(201);
                project = res.getData();
                done();

            }, errFn);

        }, errFn);

    });

    after(function (done) {
        // runs after all tests in this block
        SBG.Projects.delete(project.id).done(function (res) {
            expect(res.getStatus()).to.equal(204);
            done();
        }, errFn);
    });

    it('Can list files in project.', function (done) {
        //TODO
        done();
    });

    it('Can delete file.', function (done) {
        //TODO
        done();
    });

    it('Can get file details.', function (done) {
        //TODO
        done();
    });

    it('Can update file details.', function (done) {
        //TODO
        done();
    });

    it('Can copy file from project to project.', function (done) {
        //TODO
        done();
    });

    it('Can get file download url.', function (done) {
        //TODO
        done();
    });

    it('Can get file metadata.', function (done) {
        //TODO
        done();
    });

    it('Can update file metadata.', function (done) {
        //TODO
        done();
    });

    it('Can overwrite file metadata.', function (done) {
        //TODO
        done();
    });

});
