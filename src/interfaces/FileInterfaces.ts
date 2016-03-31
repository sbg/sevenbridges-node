import {Interfaces} from './SBGInterfaces';

export namespace FileInterfaces {

    export interface FileClientInterface extends Interfaces.ClientInterface {
        list: Function;
        delete: Function;
        getDetails: Function;
        updateDetails: Function;
        copy: Function;
        getDownloadUrl: Function;
        getMetadata: Function;
        modifyMetadata: Function;
        overwriteMetadata: Function;
    }

}
