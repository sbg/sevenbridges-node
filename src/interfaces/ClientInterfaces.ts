import {BillingInterfaces} from './BillingInterfaces';
import {ProjectInterfaces} from './ProjectInterfaces';
import {UserInterfaces} from './UserInterfaces';

export namespace ClientInterfaces {

    export interface BillingClientInterface extends BillingInterfaces.BillingClientInterface {}
    export interface ProjectClientInterface extends ProjectInterfaces.ProjectClientInterface {}
    export interface UserClientInterface extends UserInterfaces.UserClientInterface {}

}
