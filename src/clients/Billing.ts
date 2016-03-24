import {Base} from './Base';
import {Interfaces} from '../interfaces/SBGInterfaces';
import {ApiConfig} from '../api/config';

export class Billing extends Base implements Interfaces.BillingClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.billing_url;

    constructor() {
        super();
    }

    list() {

        let options = {
            url: this.url + '/groups'
        };

        return this._get(options);
    }

}
