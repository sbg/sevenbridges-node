/// <reference path="../typings/node/node.d.ts" />
import {Interfaces} from './interfaces/SBGInterfaces';
/*

create  file in ~/.sbg/configuration.json

--- with content

{
 "auth_token" : "xxxxxxx"
}


*/

interface ConfigInterface {
    auth_token: string;
}

export class Config implements Interfaces.ClientConfigInterface {

    private config : ConfigInterface;

    constructor() {
        this.config = require(process.env.HOME + '/.sbg/configuration.json');
    }

    getToken() {
        /* @TODO create object describing config */
        return this.config.auth_token;
    }

}
