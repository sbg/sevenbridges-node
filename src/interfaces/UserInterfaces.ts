import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/Response';

export namespace UserInterfaces {

    export interface UserClientInterface extends Interfaces.ClientInterface {
        info(options: Interfaces.QueryStringInterface): Q.IPromise<ResponseInterface>;
        listResources(options: ListResoureceInterface): Q.IPromise<ResponseInterface>;
        getRateLimit(options: Interfaces.RequestHandlerInterface): Q.IPromise<ResponseInterface>;
    }

    export interface ListResoureceInterface extends Interfaces.RequestHandlerInterface {
        username: string;
    }

}
