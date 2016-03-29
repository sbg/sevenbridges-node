import {Interfaces} from './SBGInterfaces';

export namespace UserInterfaces {

    export interface UserClientInterface extends Interfaces.ClientInterface {
        info: Function;
        listResources: Function;
    }

}
