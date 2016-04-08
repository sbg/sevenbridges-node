import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace BillingInterfaces {

    export interface BillingClientInterface extends Interfaces.ClientInterface {
        list(options: Interfaces.QueryStringInterface): Q.IPromise<ResponseInterface>;
        getBillingGroup(options: GetBillingGroupInterface): Q.IPromise<ResponseInterface>;
        getBillingGroupBreakdown(options: GetBillingGroupInterface): Q.IPromise<ResponseInterface>;
        listInvoices(options: Interfaces.QueryStringInterface): Q.IPromise<ResponseInterface>;
        getInvoice(options: GetBillingGroupInterface): Q.IPromise<ResponseInterface>;
    }

    export interface GetBillingGroupInterface extends Interfaces.QueryStringInterface {
        id: string;
    }

}
