import {Base} from './Base';
import {BillingInterfaces} from '../interfaces/BillingInterfaces';
import {ApiConfig} from '../api/config';
import {url} from '../decorators/Common';
import {Interfaces} from '../interfaces/SBGInterfaces';

export class Billing extends Base implements BillingInterfaces.BillingClientInterface {

    // default url exported

    public groupsUrl: string = ApiConfig.apiUrl + ApiConfig.urls.billing_url + '/groups';
    public invoicesUrl: string = ApiConfig.apiUrl + ApiConfig.urls.billing_url + '/invoices';

    public url: string = this.groupsUrl;

    constructor() {
        super();
    }

    /**
     * List billing groups
     *
     * @returns {*}
     */
    @url('/')
    list(options: Interfaces.RequestHandlerInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Get billing group details
     *
     * @param id
     * @returns {*}
     */
    @url('/{id}')
    getBillingGroup(options: Interfaces.RequestHandlerInterface) {
        return this._get({
            url: this.groupsUrl + options.url,
            qs: options.qs
        });
    }

    /**
     * This call returns a breakdown of spending per-project for the billing group
     * specified by billing_group. For each project that the billing group is
     * associated with, information is shown on each task run,
     * including its initiating user (the runner_username),
     * start and end times, and cost.
     *
     * @param id
     * @returns {*}
     */
    @url('/{id}/breakdown')
    getBillingGroupBreakdown(options: BillingInterfaces.GetBillingGroupInterface) {
        return this._get({
            url: this.groupsUrl + options.url,
            qs: options.qs
        });
    }

    /**
     * List all invoices
     *
     * @returns {*}
     */
    @url('/')
    listInvoices(options: Interfaces.RequestHandlerInterface) {
        return this._get({
            url: this.invoicesUrl + options.url,
            qs: options.qs
        });
    }

    /**
     * Get single invoice
     *
     * @param id
     * @returns {*}
     */
    @url('/{id}')
    getInvoice(options: BillingInterfaces.GetBillingGroupInterface) {
        return this._get({
            url: this.invoicesUrl + options.url,
            qs: options.qs
        });
    }

}
