import {BillingInterfaces} from './BillingInterfaces';
import {ProjectInterfaces} from './ProjectInterfaces';

export namespace ClientInterfaces {

    export interface BillingClientInterface extends BillingInterfaces.BillingClientInterface {}
    export interface ProjectClientInterface extends ProjectInterfaces.ProjectClientInterface {}

}
