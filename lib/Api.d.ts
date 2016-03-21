/// <reference path="../typings/request/request.d.ts" />
import * as Request from 'request';
import { Interfaces } from './interfaces/SBGInterfaces';
export declare module Api {
    function request(options: Interfaces.RequestOptionsInterface, callback: () => void): Request.Request;
}
