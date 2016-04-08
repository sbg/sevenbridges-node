import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace UserInterfaces {

    export interface UserClientInterface extends Interfaces.ClientInterface {
        info(options: Interfaces.QueryStringInterface): Q.IPromise<ResponseInterface>;
        listResources(options: ListResoureceInterface): Q.IPromise<ResponseInterface>;
        getRateLimit(options: Interfaces.QueryStringInterface): Q.IPromise<ResponseInterface>;
    }

    export interface ListResoureceInterface extends Interfaces.QueryStringInterface {
        username: string;
    }

}
