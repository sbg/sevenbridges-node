import {Base} from './Base';
import {UserInterfaces} from '../interfaces/UserInterfaces';
import {ApiConfig} from '../api/config';
import {url} from '../decorators/Common';

export class User extends Base implements UserInterfaces.UserClientInterface {

    public user_url: string = ApiConfig.apiUrl + ApiConfig.urls.user_url;
    public users_url: string = ApiConfig.apiUrl + ApiConfig.urls.users_url;

    public rate_limit_url: string = ApiConfig.apiUrl + ApiConfig.urls.rate_limit_url;

    public url: string = this.user_url;

    constructor() {
        super();
    }

    /**
     * This call returns information about users account on the Seven Bridges Platform.
     *
     * @returns {*}
     */
    @url('')
    info(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.user_url,
            qs: qs
        });
    }

    /**
     * This call returns information about the specified user.
     * Note that currently you can view only your own user information,
     * and so this call is equivalent to the `info()` call .
     *
     * @param username
     * @returns {*}
     */
    @url('/{username}')
    listResources(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.users_url + uri,
            qs: qs
        });
    }

    /**
     * Get user current rate limit status
     *
     * @returns {Q.IPromise<any>}
     */
    @url('')
    getRateLimit(uri: any, body?: any, qs?: any) {
        return this._get({
            url: this.rate_limit_url,
            qs: qs
        });
    }

}



