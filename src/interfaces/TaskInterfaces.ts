import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/Response';

export namespace TaskInterfaces {

    export interface TaskClientInterface extends Interfaces.ClientInterface {
        list(options: ListTasksInterface): Q.IPromise<ResponseInterface>;
        listInProject(options: Interfaces.RequestHandlerInterface): Q.IPromise<ResponseInterface>;
        create(options: CreateTaskInterface): Q.IPromise<ResponseInterface>;
        delete(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        getTaskInputs(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        abort(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        getDetails(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        modify(options: TaskInterfaces.IdBasedInterface): Q.IPromise<ResponseInterface>;
        getExecutionDetails(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        run(options: TaskInterfaces.RunTaskInterface): Q.IPromise<ResponseInterface>;
        modifyInputs(options: TaskInterfaces.IdBasedInterface): Q.IPromise<ResponseInterface>;
    }

    export interface IdBasedInterface extends Interfaces.RequestHandlerInterface {
        id: string;
    }

    export interface CreateTaskInterface extends Interfaces.RequestHandlerInterface {
        description: string;
        name: string;
        app: string;
        project: string;
        inputs: any;
    }

    export interface ListTasksInterface extends Interfaces.RequestHandlerInterface {
        parent: string;
        status: string;
    }

    export interface RunTaskInterface extends Interfaces.RequestHandlerInterface {
        batch: boolean;
    }

}
