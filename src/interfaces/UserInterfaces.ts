import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace UserInterfaces {

    export interface UserClientInterface extends Interfaces.ClientInterface {
        info(): Q.IPromise<ResponseInterface>;
        listResources(username: string): Q.IPromise<ResponseInterface>;
        getRateLimit(): Q.IPromise<ResponseInterface>;
    }

}
