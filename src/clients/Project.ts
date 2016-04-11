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
    list(options: ProjectInterfaces.ListOptionsInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
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
    @url('/')
    create(options: ProjectInterfaces.CreateProjectInterface) {

        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._post(opts, options.body);
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
    edit(options: ProjectInterfaces.EditProjectInterface) {

        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._patch(opts, options.body);
    }

    /**
     * List the projects owned by and accessible to a particular user
     *
     * @param username
     * @returns {Q.IPromise<any>}
     */
    @url('/{username}')
    listByUserName(options: ProjectInterfaces.ListOptionsInterface) {

        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Delete Project
     *
     * @param id
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    delete(options: ProjectInterfaces.IdBasedInterface) {

        return this._delete({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * Get details of a project
     *
     * @param id
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}')
    getDetails(options: ProjectInterfaces.IdBasedInterface) {

        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    /**
     * List project members
     *
     * @param id
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/members')
    listMembers(options: ProjectInterfaces.IdBasedInterface) {

        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
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
    addMember(options: ProjectInterfaces.AddMemberInterface) {
        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._post(opts, options.body);
    }

    /**
     * Remove member from project
     *
     * @param id
     * @param username
     * @returns {Q.IPromise<any>}
     */
    @url('/{id}/members/{username}')
    removeMember(options: ProjectInterfaces.RemoveMemberInterface) {

        return this._delete({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/{id}/members/{username}')
    getMemberPermissions(options: ProjectInterfaces.RemoveMemberInterface) {

        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
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
    editMemberPermissions(options: ProjectInterfaces.EditPermissionsInterface) {

        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._patch(opts, options.body);
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
    overwriteMemberPermissions(options: ProjectInterfaces.EditPermissionsInterface) {

        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._put(opts, options.body);
    }

}

