/// <reference path="../../typings/q/Q.d.ts" />
/// <reference path="../../typings/node/node.d.ts" />

import * as Q from 'q';
import {IncomingMessage} from 'http';
import {ResponseInterface} from '../util/APIResponse';

export namespace Interfaces {

    export interface HTTPResponseObject extends IncomingMessage {

    }

    export interface QuertStringInterface {
        fields?: string;
        projectId?: string;
    }

    export interface RequestOptionsInterface {
        method?: string;
        url: string;
        headers?: SBGRequestHeadersInterface;
        json?: boolean;
        body?: any;
        qs?: QuertStringInterface;
    }

    export interface SBGRequestHeadersInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface ApiInterface {
        request: Function;
    }

    export interface ClientConfigInterface {
        getConfig: () => any;
        getToken : () => string;
    }

    export interface SBGConfigInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface ClientInterface {
        url: string;
    }

    export interface BaseClientInterface {
        _get(options: RequestOptionsInterface, body: any): Q.IPromise<ResponseInterface>;
        _post(options: RequestOptionsInterface, body: any): Q.IPromise<ResponseInterface>;
        _put(options: RequestOptionsInterface, body: any): Q.IPromise<ResponseInterface>;
        _patch(options: RequestOptionsInterface, body: any): Q.IPromise<ResponseInterface>;
        _delete(options: RequestOptionsInterface, body: any): Q.IPromise<ResponseInterface>;
        _request(options: RequestOptionsInterface, body: any): Q.IPromise<ResponseInterface>;
    }

}
