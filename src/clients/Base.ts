/// <reference path="../../typings/globals/lodash/index.d.ts" />
/// <reference path="../../typings/globals/Q/index.d.ts" />

import {Api} from '../api/Api';
import {Config} from '../config';
import {Interfaces} from '../interfaces/SBGInterfaces';
import * as _ from 'lodash';

export class Base implements Interfaces.BaseClientInterface {

    protected authToken: string;

    private config: Interfaces.ClientConfigInterface;
    private Api: Interfaces.ApiInterface;

    constructor() {
        this.config = Config;
        this.authToken = this.config.getToken();
        this.Api = Api;
    }

    _request(options: Interfaces.RequestOptionsInterface, body?: any): Q.IPromise<any> {

        let headers: Interfaces.SBGRequestHeadersInterface = {
            'X-SBG-Auth-Token': this.authToken
        };

        if (typeof options.headers !== 'object') {
            options.headers = headers;
        } else {
            _.extend(options.headers, headers);
        }

        options.method = options.method || 'GET';
        options.json = true;

        if (typeof body !== 'undefined' && typeof body === 'object') {
            options.body = body;
        }

        if (typeof options.qs !== 'object') {
            options.qs = {};
        }

        if (options.qs.fields) {
            //TODO: Validate query string fields to match SBG fields restrictions.
        }

        return this.Api.request(options);

    }

    _get(options: Interfaces.RequestOptionsInterface): Q.IPromise<any> {
        options.method = 'GET';
        return this._request(options);
    }

    _post(options: Interfaces.RequestOptionsInterface, body?: any): Q.IPromise<any> {
        options.method = 'POST';
        return this._request(options, body);
    }

    _patch(options: Interfaces.RequestOptionsInterface, body?: any): Q.IPromise<any> {
        options.method = 'PATCH';
        return this._request(options, body);
    }

    _put(options: Interfaces.RequestOptionsInterface, body?: any): Q.IPromise<any> {
        options.method = 'PUT';
        return this._request(options, body);
    }

    _delete(options: Interfaces.RequestOptionsInterface, body?: any): Q.IPromise<any> {
        options.method = 'DELETE';
        return this._request(options, body);
    }

}
