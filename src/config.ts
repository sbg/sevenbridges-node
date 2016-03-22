/// <reference path="../typings/node/node.d.ts" />
import {Interfaces} from './interfaces/SBGInterfaces';
/*



create  file in ~/.sbg/configuration.json


--- with content

{
 "auth_token" : "xxxxxxx"
}




*/

export class Config implements Interfaces.ClientConfigInterface {

    config : any;

    constructor() {
        this.config = require(process.env.HOME + '/.sbg/configuration.json');
    }

    getToken() {

        /* @todo create object describing config */
        return this.config.auth_token;
    }

}
