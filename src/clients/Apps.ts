import {Base} from './Base';
import {AppsInterfaces} from '../interfaces/AppsInterfaces';
import {ApiConfig} from '../api/config';
import {url} from '../decorators/Common';

export class Apps extends Base implements AppsInterfaces.AppsClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.apps_url;

    @url('', [])
    list(uri: any, body?: any, qs?: any) {

        let opts = {
            url: this.url + uri,
            body: body,
            qs: qs
        };

        return this._get(opts);
    }
    
}
