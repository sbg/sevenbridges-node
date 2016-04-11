import {Base} from './Base';
import {AppsInterfaces} from '../interfaces/AppsInterfaces';
import {ApiConfig} from '../api/config';
import {url} from '../decorators/Common';

export class Apps extends Base implements AppsInterfaces.AppsClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.apps_url;

    @url('/')
    list(options: AppsInterfaces.ListAppsInterface) {

        let opts = {
            url: this.url + options.url,
            body: options.body,
            qs: options.qs
        };

        return this._get(opts);
    }

    /**
     * Get app details
     *
     * id = {project_owner}/{project}/{app_short_name}/{revision_number}
     *
     * @param uri
     * @param body
     * @param qs
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/{revision?}')
    getDetails(options: AppsInterfaces.GetDetailsInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Get app details
     *
     * id = {project_owner}/{project}/{app_short_name}/{revision_number}
     *
     * @param uri
     * @param body
     * @param qs
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/{revision?}/raw')
    getRaw(options: AppsInterfaces.GetDetailsInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Copy app
     *
     * id = {project_owner}/{project}/{app_short_name}/{revision_number}
     *
     * @param uri
     * @param body
     * @param qs
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/{revision?}/actions/copy')
    copyApp(options: AppsInterfaces.CopyAppInterface) {
        return this._post({
            url: this.url + options.url,
            qs: options.qs,
            body: options.body
        });
    }

    @url('/{id}')
    createRaw(options: AppsInterfaces.CreateRawInterface) {
        return this._post({
            url: this.url + options.url,
            qs: options.qs,
            body: options.body
        });
    }

}
