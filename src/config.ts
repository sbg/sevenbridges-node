/// <reference path="../typings/node/node.d.ts" />


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
