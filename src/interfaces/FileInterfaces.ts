import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/Response';

export namespace FileInterfaces {

    export interface FileClientInterface extends Interfaces.ClientInterface {
        list(options: Interfaces.RequestHandlerInterface): Q.IPromise<ResponseInterface>;
        delete(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        getDetails(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        updateDetails(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        copy(options: CopyFileInterface): Q.IPromise<ResponseInterface>;
        getDownloadUrl(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        getMetadata(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        modifyMetadata(options: FileMetadataInterface): Q.IPromise<ResponseInterface>;
        overwriteMetadata(options: FileMetadataInterface): Q.IPromise<ResponseInterface>;
    }

    export interface IdBasedInterface extends Interfaces.RequestHandlerInterface {
        id: string;
    }

    export interface CopyFileInterface extends IdBasedInterface {
        body: CopyFileBodyInterface;
    }

    export interface CopyFileBodyInterface {
        projectId: string;
        name: string;
    }

    export interface FileMetadataInterface extends IdBasedInterface {}

}
