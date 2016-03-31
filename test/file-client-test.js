/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var config = require('../config/tests');

var SBGClient = require('../lib/sbg');


describe('User Client Test', function () {

    var SBG;

    this.timeout(config.testTimeout);

    before(function (done) {
        SBG = new SBGClient();
        done();
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
