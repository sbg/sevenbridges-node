import {Interfaces} from './SBGInterfaces';

export namespace BillingInterfaces {

    export interface BillingClientInterface extends Interfaces.ClientInterface {
        list: Function;
        getBillingGrup: Function;
        getBillingGroupBreakdown: Function;
        listInvoices: Function;
        getInvoice: Function;
    }

}
