import {Base} from './Base';
import {AppsInterfaces} from '../interfaces/AppsInterfaces';
import {ApiConfig} from '../api/config';

export class Apps extends Base implements AppsInterfaces.AppsClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.apps_url;

    list(options: AppsInterfaces.ListAppsInterface) {

        let opts = {
            url: this.url,
            qs: options
        };

        return this._get(opts);
    }


}
