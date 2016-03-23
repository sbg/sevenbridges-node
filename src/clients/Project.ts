import {Base} from './Base';
import {Interfaces} from '../interfaces/SBGInterfaces';
import {ProjectInterfaces} from '../interfaces/ProjectInterfaces';

import {ApiConfig} from '../api/config';


export class Project extends Base implements Interfaces.ProjectClientInterface {

    public url:string = ApiConfig.apiUrl + ApiConfig.urls.projects_url;

    constructor() {
        super();
    }

    /**
     * List projects
     *
     * @returns {*}
     */
    list() {

        let options = {
            method: 'GET',
            url: this.url
        };

        return this._get(options);
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
     */
    create(project:ProjectInterfaces.NewProjectInterface) {
        console.log('TBD');

        let options = {
            url: this.url
        };

        return this._post(options, project);
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
     * @param owner
     * @param id
     * @param project
     * @returns {*}
     */
    edit(owner: string, id: string, project:ProjectInterfaces.UpdateProjectInterface) {

        let options = {
            url: this.url + '/' + owner + '/' + id
        };

        return this._patch(options, project);
    }

    /**
     * List the projects owned by and accessible to a particular user
     *
     * @param username
     * @returns {*}
     */
    listByUserName(username: string) {

        let options = {
            url: this.url + '/' + username
        };

        return this._get(options);
    }


    delete(owner: string, id: string) {
        let options = {
            url: this.url + '/' + owner + '/' + id
        };

        return this._delete(options);
    }

    /**
     * Get details of a project
     *
     * @param owner
     * @param id
     */
    getDetails(owner: string, id: string) {

        let options = {
            url: this.url + '/' + owner + '/' + id
        };

        return this._get(options);
    }

    /**
     * List project members
     *
     * @param owner
     * @param id
     */
    listMembers(owner: string, id: string) {

        let options = {
            url: this.url + '/' + owner + '/' + id + '/members'
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
     * @param owner
     * @param id
     * @returns {*}
     */
    addMember(owner: string, id: string, member: ProjectInterfaces.ProjectMemberInterface) {
        let options = {
            url: this.url + '/' + owner + '/' + id + '/members'
        };

        return this._post(options, member);
    }

    /**
     * Remove member from project
     *
     * @param owner
     * @param id
     * @param username
     * @returns {*}
     */
    removeMember(owner: string, id: string, username: string) {
        let options = {
            url: this.url + '/' + owner + '/' + id + '/members/' + username
        };

        return this._delete(options);
    }

    getMemberPermissions(owner: string, id: string, username: string) {
        let options = {
            url: this.url + '/' + owner + '/' + id + '/members/' + username
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
     * @returns {*}
     */
    editMemberPermissions(owner: string, id: string, username: string, permissions: ProjectInterfaces.ProjectPermissionsInterface) {
        let options = {
            url: this.url + '/' + owner + '/' + id + '/members/' + username + '/permissions'
        };

        return this._patch(options, permissions);
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
     * @returns {*}
     */
    overwriteMemberPermissions(owner: string, id: string, username: string, permissions: ProjectInterfaces.ProjectPermissionsInterface) {
        let options = {
            url: this.url + '/' + owner + '/' + id + '/members/' + username + '/permissions'
        };

        return this._put(options, permissions);
    }


}

