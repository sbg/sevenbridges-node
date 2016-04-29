/// <reference path="../../typings/main/ambient/request/index.d.ts" />

'use strict';

import {Interfaces} from '../interfaces/SBGInterfaces';

export interface RequestInterface {
    getBody(): any;
    getQS(): Interfaces.QueryStringInterface;
    getUrl(): string;
}

export class Request implements RequestInterface {

    private url: string;
    private body: any;
    private qs: Interfaces.QueryStringInterface;

    constructor(url: string, body?: any, qs?: Interfaces.QueryStringInterface) {
        this.url = url;
        this.body = body;
        this.qs = qs;
    }

    getBody() {
        return this.body;
    }

    getQS() {
        return this.qs;
    }

    getUrl(base: string = '') {
        return base + this.url;
    }

}
