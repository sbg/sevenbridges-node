import {Base} from './Base';
import {ProjectInterfaces} from '../interfaces/ProjectInterfaces';

import {ApiConfig} from '../api/config';

import {url} from '../decorators/Common';


export class Project extends Base implements ProjectInterfaces.ProjectClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.projects_url;

    constructor() {
        super();
    }

    /**
     * List projects
     *
     * @returns {Q.IPromise<any>}
     */
    @url('/{username?}')
    list(uri: any, body?: any, qs?: any) {

        return this._get({
            url: this.url + uri,
            qs: qs
        });
    }

    /**
     * Create new project
     *
     * Example request body:
     *
     * {
     *   'name': 'My New Project',
     *   'description': 'A project for testing my apps',
     *   'billing_group': '1f0c2751-694c-4e98-b863-06b68f5a61ca'
     *   'type': 'v2'
     * }
     *
     * @param project
     * @returns {Q.IPromise<any>}
     */
    @url('')
    create(uri: any, body?: any, qs?: any) {

        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._post(options, body);
    }

    /**
     * Edit project
     *
     * Example request body:
     *
     * {
     *   'name': 'My New Project',
     *   'description': 'A project for testing my apps',
     *   'billing_group': '1f0c2751-694c-4e98-b863-06b68f5a61ca'
     * }
     *
     * @param id
     * @param project
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    edit(uri: any, body?: any, qs?: any) {

        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._patch(options, body);
    }

    /**
     * List the projects owned by and accessible to a particular user
     *
     * @param username
     * @returns {Q.IPromise<any>}
     */
    @url('/{username}')
    listByUserName(uri: any, body?: any, qs?: any) {

        let options = {
            url: this.url + uri,
            qs: qs
    };

        return this._get(options);
    }

    /**
     * Delete Project
     *
     * @param id
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    delete(uri: any, body?: any, qs?: any) {

        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._delete(options);
    }

    /**
     * Get details of a project
     *
     * @param id
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    getDetails(uri: any, body?: any, qs?: any) {

        let options = {
            url: this.url + uri
        };

        return this._get(options);
    }

    /**
     * List project members
     *
     * @param id
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/members')
    listMembers(uri: any, body?: any, qs?: any) {

        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._get(options);
    }

    /**
     * Add project member
     *
     * Example request body:
     * {
     *    "username" : "Jane_Doe",
     *    "permissions": {
     *        "read" : true,
     *        "write": true,
     *        "execute": false
     *    }
     * }
     *
     * @param id
     * @param member
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/members')
    addMember(uri: any, body?: any, qs?: any) {
        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._post(options, body);
    }

    /**
     * Remove member from project
     *
     * @param id
     * @param username
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/members/{username}')
    removeMember(uri: any, body?: any, qs?: any) {
        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._delete(options);
    }

    @url('/{id}/members/{username}')
    getMemberPermissions(uri: any, body?: any, qs?: any) {

        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._get(options);
    }

    /**
     * Modify a project member's permissions
     *
     * Example request body:
     *
     * {
     *    "read" : true,
     *    "write": true,
     *    "execute": false
     * }
     *
     * @param owner
     * @param id
     * @param username
     * @param permissions
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/members/{username}/permissions')
    editMemberPermissions(uri: any, body?: any, qs?: any) {
        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._patch(options, body);
    }

    /**
     * Overwrite a project member's permissions
     *
     * Example request body:
     *
     * {
     *    "read" : true,
     *    "write": true,
     *    "execute": false
     * }
     *
     * @param owner
     * @param id
     * @param username
     * @param permissions
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/members/{username}/permissions')
    overwriteMemberPermissions(uri: any, body?: any, qs?: any) {
        let options = {
            url: this.url + uri,
            qs: qs
        };

        return this._put(options, body);
    }


}

