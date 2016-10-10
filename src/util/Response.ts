/// <reference path="../../typings/modules/request/index.d.ts" />

import {Interfaces} from '../interfaces/SBGInterfaces';

export interface ResponseInterface {
    getData(): any;
    getStatus(): number;
    getError(): Error;
}

export class APIResponse implements ResponseInterface {

    public data: any = null;

    protected _response: Interfaces.HTTPResponseObject;
    protected _err: Error = null;

    constructor(err: Error, res: Interfaces.HTTPResponseObject, body: any) {
        this._response = res;

        if (err) {
            this._err = err;
        }

        if (body) {
            this.data = body;
        }

    }

    getData() {
        return this.data;
    }

    getStatus() {
        return this._response.statusCode;
    }

    getError() {
        return this._err;
    }

}
