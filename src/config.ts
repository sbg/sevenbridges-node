/// <reference path="../typings/main/ambient/node/index.d.ts" />

/*

 create  file in ~/.sbg/configuration.json

 --- with content

 {
 "auth_token" : "xxxxxxx"
 }

 */

export interface ConfigInterface {
    auth_token: string;
}

try {
    var config: ConfigInterface = require(process.env.HOME + '/.sbg/configuration.json');
} catch (e) {
    throw Error('Cannot read config from ~/.sbg/configuration.json');
}

export module Config {

    export function setConfig(conf: ConfigInterface): void {
        config = conf;
    }

    export function getConfig(): ConfigInterface {
        return config;
    }

    export function getToken(): string {
        /* @TODO create object describing config */
        return config.auth_token;
    }

}
