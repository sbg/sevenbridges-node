import * as Request from 'request';
import { Interfaces } from './interfaces/SBGConfigInterfaces';
export declare module Api {
    function request(options: Interfaces.RequestOptionsInterface, callback: () => void): Request.Request;
}
