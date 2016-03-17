import * as Request from 'request';
import {Interfaces} from './interfaces/SBGConfigInterfaces';

export module Api {

    export function request(options: Interfaces.RequestOptionsInterface, callback: () => void) {
        return Request(options, callback);
    }

}

