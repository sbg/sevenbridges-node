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
        let sessionid = this.Config['session-id'];

        options.headers = {
            'session-id': sessionid
        };

        this.Api.request(options, callback);
    }

}

export = SBG;
