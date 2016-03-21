
import {Api} from '../Api';
import {Config} from '../config';
import {Interfaces} from '../interfaces/SBGInterfaces';

export class Base {

    conf : Interfaces.ClientConfigInterface;
    authToken : string;
    Api: Interfaces.ApiInterface;

    constructor() {
        this.conf = new Config();
        this.authToken = this.conf.getToken();
        this.Api = Api;
    }

    _get(options: Interfaces.RequestOptionsInterface, callback: Interfaces.HTTPResponseObject) {

        options.headers = {
            'X-SBG-Auth-Token': this.authToken
        };


        options.method = 'GET';
        options.json = true;

        this.Api.request(options, callback);

    }

}
