import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/Response';

export namespace AppsInterfaces {

    export interface AppsClientInterface extends Interfaces.ClientInterface {
        list(options: ListAppsInterface): Q.IPromise<ResponseInterface>;
        getDetails(options: GetDetailsInterface): Q.IPromise<ResponseInterface>;
        getRaw(options: GetDetailsInterface): Q.IPromise<ResponseInterface>;
        copyApp(options: CopyAppInterface): Q.IPromise<ResponseInterface>;
    }

    export interface ListAppsInterface extends Interfaces.RequestHandlerInterface {
        project?: string;
        project_owner?: string;
        visibility?: string;
    }

    export interface CopyAppBodyInterface {
        project: string;
        name: string;
    }

    export interface GetDetailsInterface extends Interfaces.RequestHandlerInterface {
        id: string;
        revision?: string|number;
    }

    export interface CopyAppInterface extends Interfaces.RequestHandlerInterface {
        id: string;
        revision?: number|string;
        body: CopyAppBodyInterface;
    }

    export interface CreateRawInterface extends Interfaces.RequestHandlerInterface {
        body: any;
    }

}
