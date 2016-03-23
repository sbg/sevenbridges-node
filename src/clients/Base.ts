/// <reference path="../../typings/lodash/lodash.d.ts" />

import {Api} from '../api/Api';
import {Config} from '../config';
import {Interfaces} from '../interfaces/SBGInterfaces';
import * as _ from 'lodash';

export class Base {

    protected authToken : string;

    private config : Interfaces.ClientConfigInterface;
    private Api : Interfaces.ApiInterface;

    constructor() {
        this.config = Config;
        this.authToken = this.config.getToken();
        this.Api = Api;
    }

    _request(options: Interfaces.RequestOptionsInterface) {

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

        return this.Api.request(options);

    }

    _get(options: Interfaces.RequestOptionsInterface) {
        options.method = 'GET';
        return this._request(options);
    }

    _post(options: Interfaces.RequestOptionsInterface) {
        options.method = 'POST';
        return this._request(options);
    }

}
