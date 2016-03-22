import {Api} from '../Api';
import {Config} from '../config';
import {Interfaces} from '../interfaces/SBGInterfaces';

export class Base {

    protected authToken : string;

    private Api : Interfaces.ApiInterface;

    constructor() {

        this.authToken = Config.getToken();
        this.Api = Api;
    }

    _request(options: Interfaces.RequestOptionsInterface) {

        options.headers = {
            'X-SBG-Auth-Token': this.authToken
        };

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
