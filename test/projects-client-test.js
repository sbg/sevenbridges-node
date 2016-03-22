/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect
var util = require('util');

var SBG = require("../lib/sbg");


describe("Projects Client Test", function () {

    this.timeout(5000);

    it("Can list projects", function (done) {

        var SBGClient = new SBG();

        SBGClient.Projects.list().then(function (data) {

            expect(data.body).not.to.be.null;
            expect(data.body.items.length).to.be.within(0, 50);
            done();

        }, function err(err) {
            expect(err).to.be.null;
        });

    });
});
