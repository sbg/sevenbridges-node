import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace FileInterfaces {

    export interface FileClientInterface extends Interfaces.ClientInterface {
        list(projectId: string, fields?: string): Q.IPromise<ResponseInterface>;
        delete(fileId: string, fields?: string): Q.IPromise<ResponseInterface>;
        getDetails(fileId: string, fields?: string): Q.IPromise<ResponseInterface>;
        updateDetails(fileId: string, fields?: string): Q.IPromise<ResponseInterface>;
        copy(fileId: string, projectId: string, newName: string, fields?: string): Q.IPromise<ResponseInterface>;
        getDownloadUrl(fileId: string, fields?: string): Q.IPromise<ResponseInterface>;
        getMetadata(fileId: string, fields?: string): Q.IPromise<ResponseInterface>;
        modifyMetadata(fileId: string, metadata: any, fields?: string): Q.IPromise<ResponseInterface>;
        overwriteMetadata(fileId: string, metadata: any, fields?: string): Q.IPromise<ResponseInterface>;
    }

}
