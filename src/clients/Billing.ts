import {Base} from './Base';
import {BillingInterfaces} from '../interfaces/BillingInterfaces';
import {ApiConfig} from '../api/config';
import {url} from '../decorators/Common';

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
    @url('')
    list(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.url + uri,
            qs: qs
        });
    }

    /**
     * Get billing group details
     *
     * @param id
     * @returns {*}
     */
    @url('/{id}')
    getBillingGroup(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.groupsUrl + uri,
            qs: qs
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
    getBillingGroupBreakdown(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.groupsUrl + uri,
            qs: qs
        });
    }

    /**
     * List all invoices
     *
     * @returns {*}
     */
    @url('')
    listInvoices(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.invoicesUrl + uri,
            qs: qs
        });
    }

    /**
     * Get single invoice
     *
     * @param id
     * @returns {*}
     */
    @url('/{id}')
    getInvoice(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.invoicesUrl + uri,
            qs: qs
        });
    }

}
