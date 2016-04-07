import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace AppsInterfaces {

    export interface AppsClientInterface extends Interfaces.ClientInterface {
        list(options: ListAppsInterface): Q.IPromise<ResponseInterface>;
    }

    export interface ListAppsInterface extends Interfaces.QueryStringInterface {
        project?: string;
        project_owner?: string;
        visibility?: string;
    }

}
