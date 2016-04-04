/// <reference path="../../typings/request/request.d.ts" />
import {Interfaces} from '../interfaces/SBGInterfaces';

interface ResponseInterface {
    getData(): any;
    getStatus(): number;
    getError(): Error;
    getHeaders(): any;
}

export class APIResponse implements ResponseInterface {

    protected _response: Interfaces.HTTPResponseObject;
    protected _err: Error = null;

    constructor(err: Error, res: Interfaces.HTTPResponseObject) {
        this._response = res;

        if (err) {
            this._err = err;
        }

    }

    getData() {
        return this._response.body;
    }

    getStatus() {
        return this._response.statusCode;
    }

    getError() {
        return this._err;
    }

    getHeaders() {
        return this._response.headersSent;
    }

}
