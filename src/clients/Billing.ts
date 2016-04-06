import {Base} from './Base';
import {BillingInterfaces} from '../interfaces/BillingInterfaces';
import {ApiConfig} from '../api/config';

export class Billing extends Base implements BillingInterfaces.BillingClientInterface {

    // default url exported
    public url: string = this.groupsUrl;

    public groupsUrl: string = ApiConfig.apiUrl + ApiConfig.urls.billing_url + '/groups';
    public invoicesUrl: string = ApiConfig.apiUrl + ApiConfig.urls.billing_url + '/invoices';

    constructor() {
        super();
    }

    /**
     * List billing groups
     *
     * @returns {*}
     */
    list() {
        return this._get({
            url: this.groupsUrl
        });
    }

    /**
     * Get billing group details
     *
     * @param id
     * @returns {*}
     */
    getBillingGroup(id: string) {
        return this._get({
            url: this.groupsUrl + '/' + id
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
    getBillingGroupBreakdown(id: string) {
        return this._get({
            url: this.groupsUrl + '/' + id + '/breakdown'
        });
    }

    /**
     * List all invoices
     *
     * @returns {*}
     */
    listInvoices() {
        return this._get({
            url: this.invoicesUrl
        });
    }

    /**
     * Get single invoice
     *
     * @param id
     * @returns {*}
     */
    getInvoice(id: string) {
        return this._get({
            url: this.invoicesUrl + '/' + id
        });
    }

}
