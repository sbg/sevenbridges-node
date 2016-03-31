/// <reference path="../../typings/q/Q.d.ts" />

import * as Q from 'q';

export namespace Interfaces {

    export interface HTTPResponseObject {
        err: any;
        response: any;
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
        _get(options: RequestOptionsInterface, body: any): Q.IPromise<any>;
        _post(options: RequestOptionsInterface, body: any): Q.IPromise<any>;
        _put(options: RequestOptionsInterface, body: any): Q.IPromise<any>;
        _patch(options: RequestOptionsInterface, body: any): Q.IPromise<any>;
        _delete(options: RequestOptionsInterface, body: any): Q.IPromise<any>;
        _request(options: RequestOptionsInterface, body: any): Q.IPromise<any>;
    }

}
