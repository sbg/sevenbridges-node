/// <reference path="../typings/request/request.d.ts" />

import * as Request from 'request';
import {Interfaces} from './interfaces/SBGInterfaces';

export module Api {

    export function request(options: Interfaces.RequestOptionsInterface, callback: () => void) {
        return Request(options, callback);
    }

}
