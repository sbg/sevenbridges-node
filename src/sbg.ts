import {Interfaces} from './interfaces/SBGInterfaces';
import {Api} from './Api';

import {Project} from './clients/Project';

class SBG {

    Config: Interfaces.SBGConfigInterface;
    Api: Interfaces.ApiInterface;
    Projects : Interfaces.ProjectClientInterface;

    constructor(config: any) {
        this.Config = config;
        this.Api = Api;
        this.Projects = new Project();
    }


    /**
     * @deprecated should we remove this
     *
     * @param options
     * @param callback
     */
    send(options: Interfaces.RequestOptionsInterface, callback: Interfaces.HTTPResponseObject) {

        let sessionId = this.Config['X-SBG-Auth-Token'];

        options.headers = {
            'X-SBG-Auth-Token': sessionId
        };

        this.Api.request(options, callback);
    }

}

export = SBG;
