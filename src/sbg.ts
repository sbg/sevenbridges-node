import {Interfaces} from './interfaces/SBGInterfaces';
import {Api} from './Api';

class SBG {

    Config: Interfaces.SBGConfigInterface;
    Api: Interfaces.ApiInterface;

    constructor(config: any) {
        this.Config = config;
        this.Api = Api;
    }

    send(options: Interfaces.RequestOptionsInterface, callback: Interfaces.HTTPResponseObject) {
        let sessionid = this.Config['X-SBG-Auth-Token'];

        options.headers = {
            'X-SBG-Auth-Token': sessionid
        };

        this.Api.request(options, callback);
    }

}

export = SBG;
