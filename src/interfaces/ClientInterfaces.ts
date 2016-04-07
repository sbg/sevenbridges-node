import {BillingInterfaces} from './BillingInterfaces';
import {ProjectInterfaces} from './ProjectInterfaces';
import {UserInterfaces} from './UserInterfaces';
import {FileInterfaces} from './FileInterfaces';
import {AppsInterfaces} from './AppsInterfaces';

export namespace ClientInterfaces {

    export interface BillingClientInterface extends BillingInterfaces.BillingClientInterface {
    }
    export interface ProjectClientInterface extends ProjectInterfaces.ProjectClientInterface {
    }
    export interface UserClientInterface extends UserInterfaces.UserClientInterface {
    }
    export interface FileClientInterface extends FileInterfaces.FileClientInterface {
    }
    export interface AppsClientInterface extends AppsInterfaces.AppsClientInterface {
    }

}
