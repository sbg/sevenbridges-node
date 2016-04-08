import {Base} from './Base';
import {BillingInterfaces} from '../interfaces/BillingInterfaces';
import {ApiConfig} from '../api/config';
import {Interfaces} from '../interfaces/SBGInterfaces';
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
    list(options?: Interfaces.QueryStringInterface) {
        return this._get({
            url: this.url,
            qs: options
        });
    }

    /**
     * Get billing group details
     *
     * @param id
     * @returns {*}
     */
    @url('/{id}/{opts?}')
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

    getBillingGroupBreakdown(id: string, options?: Interfaces.QueryStringInterface) {
        return this._get({
            url: this.groupsUrl + '/' + id + '/breakdown',
            qs: options
        });
    }

    /**
     * List all invoices
     *
     * @returns {*}
     */
    listInvoices(options?: Interfaces.QueryStringInterface) {
        return this._get({
            url: this.invoicesUrl,
            qs: options
        });
    }

    /**
     * Get single invoice
     *
     * @param id
     * @returns {*}
     */
    getInvoice(id: string, options?: Interfaces.QueryStringInterface) {
        return this._get({
            url: this.invoicesUrl + '/' + id,
            qs: options
        });
    }

}
