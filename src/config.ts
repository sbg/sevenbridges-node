/// <reference path="../typings/node/node.d.ts" />
/*


create  file in ~/.sbg/configuration.json


--- with content

{
 "auth_token" : "xxxxxxx"
}




*/

class Config {

    config : any;

    constructor() {
        this.config = require(process.env.HOME + '/.sbg/configuration.json');

        console.log('read', this.config);

    }

    getToken() {
        return this.config.auth_token;
    }

}

export = Config;
