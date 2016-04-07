import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace BillingInterfaces {

    export interface BillingClientInterface extends Interfaces.ClientInterface {
        list(): Q.IPromise<ResponseInterface>;
        getBillingGroup(options: GetBillingGroupInterface): Q.IPromise<ResponseInterface>;
        getBillingGroupBreakdown(id: string): Q.IPromise<ResponseInterface>;
        listInvoices(): Q.IPromise<ResponseInterface>;
        getInvoice(id: string): Q.IPromise<ResponseInterface>;
    }

    export interface GetBillingGroupInterface extends Interfaces.QueryStringInterface {
        id: string;
    }

}
