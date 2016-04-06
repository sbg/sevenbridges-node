import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace BillingInterfaces {

    export interface BillingClientInterface extends Interfaces.ClientInterface {
        list(): Q.IPromise<ResponseInterface>;
        getBillingGroup(id: string): Q.IPromise<ResponseInterface>;
        getBillingGroupBreakdown(id: string): Q.IPromise<ResponseInterface>;
        listInvoices(): Q.IPromise<ResponseInterface>;
        getInvoice(id: string): Q.IPromise<ResponseInterface>;
    }

}
