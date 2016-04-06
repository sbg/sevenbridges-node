/**
 * Created by filip on 3/17/16.
 */
var chai = require('chai');
var expect = chai.expect

var SBGClient = require('../lib/sbg');
var config = require('../config/tests');
var util = require('../util/test-util');


describe('Billing Client Test', function () {

    var SBG, billing_group;

    this.timeout(config.testTimeout);

    before(function(done) {
        SBG = new SBGClient();

        SBG.Billing.list().done(function (dat) {

            var res = dat.getData();

            expect(res.items.length).to.be.at.least(1);
            expect(res.items[0].id).to.not.be.undefined;
            billing_group = res.items[0].id;

            done()

        }, util.errFn);

    });

    it('Can list billing groups.', function (done) {

        SBG.Billing.list().done(function (res) {
            var data = res.getData();

            expect(data).not.to.be.null;
            expect(data.items.length).to.be.within(0, 100);
            done();

        }, util.errFn);

    });

    it('Can get billing group breakdown.', function (done) {
        SBG.Billing.getBillingGroupBreakdown(billing_group)
            .done(function (res) {
                var data = res.getData();

                expect(data)
                    .to.have.property('project_breakdown')
                    .that.is.an('array');

                expect(data)
                    .to.have.property('total_spending')
                    .that.is.an('object');

                expect(data.total_spending)
                    .to.have.property('currency')
                    .that.is.a('string');

                done()

            }, util.errFn);
    });

    it('Can get billing group details.', function (done) {
        SBG.Billing.getBillingGroup(billing_group)
            .done(function (res) {
                var data = res.getData();

                expect(data)
                    .to.have.property('type')
                    .that.is.a('string');

                expect(data)
                    .to.have.property('id')
                    .that.is.a('string');

                expect(data)
                    .to.have.property('disabled')
                    .that.is.a('boolean');

                expect(data)
                    .to.have.property('owner')
                    .that.is.a('string');


                expect(data)
                    .to.have.property('pending')
                    .that.is.a('boolean');

                expect(data.balance)
                    .to.have.property('currency')
                    .that.is.a('string');

                done()

            }, util.errFn);
    });

    it('Can list invoices.', function (done) {

        SBG.Billing.listInvoices()
            .done( function (res) {
                var data = res.getData();

                expect(data)
                    .to.have.property('items')
                    .that.is.an('array');

                done();
            }, util.errFn);

    });

    it('Can get invoice details.', function (done) {
        //TODO: There are no invoices to get details from.

        SBG.Billing.listInvoices()
            .done( function (res) {
                var data = res.getData();

                expect(data)
                    .to.have.property('items')
                    .that.is.an('array');

                if (data.items.length > 0) {

                    expect(data.items[0])
                        .to.have.property('invoice_id')
                        .that.is.a('string');

                    SBG.Billing.getInvoice(data.items[0].invoice_id)
                        .done(function (response) {
                            var data = response.getData();

                            expect(data)
                                .to.have.property('invoice_id ')
                                .that.is.a('string');

                            expect(data)
                                .to.have.property('approval_date')
                                .that.is.a('string');

                            expect(data)
                                .to.have.property('pending')
                                .that.is.a('boolean');

                            expect(data)
                                .to.have.property('analysis_costs')
                                .that.is.an('object');


                            expect(data)
                                .to.have.property('storage_costs')
                                .that.is.an('object');


                            expect(data)
                                .to.have.property('total')
                                .that.is.an('object');

                            done();

                        }, util.errFn);
                } else {
                    done();
                }

            }, util.errFn);
    });

});
